// // // const { GoogleGenerativeAI } = require("@google/generative-ai");

// // // // It's best practice to use an environment variable for your API key
// // // // You can access it using process.env.GOOGLE_API_KEY
// // // // In your terminal: export GOOGLE_API_KEY="YOUR_API_KEY"

// // // export const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

// // // if (!apiKey) {
// // //   console.error("Error: GOOGLE_API_KEY environment variable not set.");
// // //   process.exit(1);
// // // }

// // // // Initialize the SDK with your API key
// // // const genAI = new GoogleGenerativeAI(apiKey);

// // // async function run() {
// // //   // Get the generative model
// // //   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Or "gemini-pro"

// // //   const storyTopic = "a tiny mouse who wants to be an astronaut";
// // //   const prompt = `Write a short, simple story for a 5-year-old about ${storyTopic}.`;

// // //   // Generate content from the prompt
// // //   const result = await model.generateContent(prompt);
// // //   const response = await result.response;
// // //   const text = response.text();

// // //   console.log("--- Your Story ---");
// // //   console.log(text);
// // // }

// // // run();



// copied code from chatgpt

import { GoogleGenerativeAI } from "@google/generative-ai";

// Use NEXT_PUBLIC_GEMINI_API_KEY from environment
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("Error: GOOGLE_API_KEY environment variable not set.");
}

// Initialize the SDK
const genAI = new GoogleGenerativeAI(apiKey);

// Export the model so you can use it elsewhere
const generateScript = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export { generateScript };

// // // // code generateImage script....

 
// import { getGenerativeModel, getAI } from "firebase/ai";
// import { firebaseApp } from "@/configs/firebaseConfig"; // make sure this path is correct

// export async function GenerateImageScript(script, style) {
//   const generationConfig = {
//     responseMimeType: "text/plain",
//   };

//   const ai = getAI(firebaseApp);
//   const model = getGenerativeModel(ai, {
//     model: "gemini-2.5-pro-preview-06-05",
//     generationConfig,
//   });

//   const history = [
//     {
//       role: "user",
//       parts: [
//         `Generate Image prompt of ${style} style with all details for each scene for 30 seconds.
// script: ${script}

// - Just give specifying image prompt depending on the storyline
// - Do not give camera angle image prompts
// - Follow the following schema and return JSON data (Max 5-6 Images)

// [
//   {
//     imagePrompt: '',
//     sceneContext: '<Script Content>'
//   }
// ]`
//       ],
//     },
//   ];

//   try {
//     const result = await model.generateContent({ contents: history });
//     const text = result.response.text();

//     const match = text.match(/```json\n([\s\S]*?)\n```/);
//     if (!match) throw new Error("Failed to extract JSON from response");

//     const jsonData = JSON.parse(match[1]);
//     return jsonData;
//   } catch (err) {
//     console.error("Gemini error:", err);
//     return [];
//   }
// }


// import { getGenerativeModel, getAI } from "firebase/ai";
// // import { firebaseApp } from "@/configs/firebaseConfig"; // make sure this path is correct
// export async function GenerateImageScript(script, style) {
//   const generationConfig = {
//     responseMimeType: "text/plain",
//   };

//   const ai = getAI(firebaseApp);
//   const model = getGenerativeModel(ai, {
//     model: "gemini-2.5-pro-preview-06-05",
//     generationConfig,
//   });

//   const history = [
//     {
//       role: "user",
//       parts: [
//         `Generate Image prompt of ${style} style with all details for each scene for 30 seconds.
// script: ${script}

// - Just give specifying image prompt depending on the storyline
// - Do not give camera angle image prompts
// - Follow the following schema and return JSON data (Max 5-6 Images)

// [
//   {
//     imagePrompt: '',
//     sceneContext: '<Script Content>'
//   }
// ]`
//       ],
//     },
//   ];

//   try {
//     const result = await model.generateContent({ contents: history });

//     if (!result.response) {
//       throw new Error("No response from Gemini model");
//     }

//     const text = result.response.text();
//     console.log("Gemini Response Text:", text);

//     const match = text.match(/```json\n([\s\S]*?)\n```/);
//     if (!match) throw new Error("Failed to extract JSON from response");

//     const jsonData = JSON.parse(match[1]);
//     return jsonData;
//   } catch (err) {
//     console.error("Gemini error:", err);
//     return [];
//   }
// }

// import { getGenerativeModel, getAI } from "firebase/ai";
// import { firebaseApp } from "@/configs/firebaseConfig"; // ensure path is correct

// export async function generateImageScript(script, style) {
//   const generationConfig = {
//     responseMimeType: "text/plain",
//   };

//   const ai = getAI(firebaseApp);
//   const model = getGenerativeModel(ai, {
//     model: "gemini-pro",
//     generationConfig,
//   });

//   const history = [
//     {
//       role: "user",
//       parts: [
//         `Generate image prompts for a 30-second video using the following script in "${style}" style.

// Script:
// ${script}

// Only return a JSON array of 5-6 objects using this format (no explanation, no extra text):

// [
//   {
//     "imagePrompt": "describe the image",
//     "sceneContext": "line of the script or description for the scene"
//   }
// ]`
//       ],
//     },
//   ];

//   try {
//     const result = await model.generateContent({ contents: history });
//     const text = await result.response.text();

//     console.log("Raw Gemini response:", text); // 🐞 Debug log

//     // Try parsing raw text directly
//     try {
//       return JSON.parse(text);
//     } catch (e1) {
//       // Try extracting JSON from code block fallback
//       const match = text.match(/```json\s*([\s\S]*?)\s*```/);
//       if (match) {
//         try {
//           return JSON.parse(match[1]);
//         } catch (e2) {
//           console.error("Error parsing JSON from code block:", e2);
//         }
//       }

//       console.error("Gemini returned unparseable JSON:", text);
//       return [];
//     }
//   } catch (err) {
//     console.error("Gemini error:", err);
//     return [];
//   }
// }






// import { getGenerativeModel, getAI } from "firebase/ai";
// import { firebaseApp } from "@/configs/firebaseConfig";

// export async function generateImageScript(script, style) {
//   const generationConfig = {
//     responseMimeType: "text/plain",
//   };

//   const ai = getAI(firebaseApp);
//   const model = getGenerativeModel(ai, {
//     model: "gemini-1.5-flash", // You can switch to "gemini-pro" if this fails
//     generationConfig,
//   });

//   const userPrompt = `Generate image prompts for a 30-second video based on this script in "${style}" style.

// Script:
// """${script}"""

// Strictly return only the following JSON format (no markdown, no explanation, no headings):

// [
//   {
//     "imagePrompt": "detailed image prompt",
//     "sceneContext": "related line from script"
//   }
// ]`;

//   try {
//     const result = await model.generateContent({
//       contents: [{ role: "user", parts: [userPrompt] }],
//     });

//     const text = await result.response.text();
//     console.log("📦 Gemini raw response:\n", text); // Debug log

//     // 1. Try direct parse
//     try {
//       const parsed = JSON.parse(text);
//       return Array.isArray(parsed) ? parsed : [];
//     } catch {
//       // 2. Try extracting from code block
//       const match = text.match(/```json\s*([\s\S]*?)\s*```/);
//       if (match && match[1]) {
//         try {
//           return JSON.parse(match[1]);
//         } catch (err) {
//           console.error("❌ JSON parse from code block failed:", err);
//         }
//       }
//     }

//     return [];
//   } catch (err) {
//     console.error("🔥 Gemini API error:", err);
//     return [];
//   }
// }

import { getGenerativeModel, getAI } from "firebase/ai";
import { firebaseApp } from "@/configs/FirebaseConfig";
export async function GenerateImageScript(script, style) {
  const prompt = `
Generate Image prompt of ${style} style with all details for each scene for 30 seconds.
script: ${script}

- Just give specifying image prompt depending on the storyline
- Do not give camera angle image prompts
- Follow this exact JSON format (Max 5-6 Images):

[
  {
    "imagePrompt": "...",
    "sceneContext": "..."
  }
]
`;

  try {
    const result = await generateScript.generateContent(prompt);
    const text = await result.response.text();

    const match = text.match(/```json\n([\s\S]*?)\n```/);
    if (!match) throw new Error("JSON not found in Gemini response");

    const json = JSON.parse(match[1]);
    return json;
  } catch (err) {
    console.error("Gemini error in generateImageScript:", err);
    return [];
  }
}