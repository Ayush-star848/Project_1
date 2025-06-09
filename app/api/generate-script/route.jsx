// import { NextResponse } from "next/server";
// import { generateScript } from "@/configs/AiModel";

// const SCRIPT_PROMPT = `write a two different script for 30seconds video on Topic : {topic},
// with the following guidelines:
// 1. Do not add scene description
// 2. Do not add anything in braces.Just return the plain story in text format
// Give me response in JSON format with the following
// {
// "scripts": [
// {
// "content":''
// },
// ],
// }`;

// export async function POST(req) {
//     const {topic} = await req.json();
//     const PROMPT = SCRIPT_PROMPT.replace("{topic}", topic);


// //     const result = await generateScript.sendMessage(PROMPT);
// //     const resp = result?.response?.text();

// //     return NextResponse.json(JSON.parse(resp));
// // }



// // update try catch block to handle errors from the gpt
//  try {
//     const result = await generateScript.generateContent(PROMPT);
//     const response = result.response;
//     const text = response.text();

//     return NextResponse.json(JSON.parse(text));
//   } catch (e) {
//     console.error("Error generating script:", e);
//     return NextResponse.json({ error: "Failed to generate script." }, { status: 500 });
//   }
// }




import { NextResponse } from "next/server";
import { generateScript } from "@/configs/AiModel";

const SCRIPT_PROMPT = `write a two different script for 30seconds video on Topic : {topic},
with the following guidelines:
1. Do not add scene description
2. Do not add anything in braces. Just return the plain story in text format
Give me response in JSON format with the following
{
  "scripts": [
    {
      "content": ""
    }
  ]
}`;

export async function POST(req) {
  const { topic } = await req.json();
  const PROMPT = SCRIPT_PROMPT.replace("{topic}", topic);

  try {
    const result = await generateScript.generateContent(PROMPT);
    const response = await result.response;
    let text = response.text();

    // Strip Markdown code block formatting if present
    text = text.replace(/```json|```/g, "").trim();

    return NextResponse.json(JSON.parse(text));
  } catch (e) {
    console.error("Error generating script:", e);
    return NextResponse.json({ error: "Failed to generate script." }, { status: 500 });
  }
}
