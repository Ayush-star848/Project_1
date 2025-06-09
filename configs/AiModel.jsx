// const { GoogleGenerativeAI } = require("@google/generative-ai");

// // It's best practice to use an environment variable for your API key
// // You can access it using process.env.GOOGLE_API_KEY
// // In your terminal: export GOOGLE_API_KEY="YOUR_API_KEY"

// export const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

// if (!apiKey) {
//   console.error("Error: GOOGLE_API_KEY environment variable not set.");
//   process.exit(1);
// }

// // Initialize the SDK with your API key
// const genAI = new GoogleGenerativeAI(apiKey);

// async function run() {
//   // Get the generative model
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Or "gemini-pro"

//   const storyTopic = "a tiny mouse who wants to be an astronaut";
//   const prompt = `Write a short, simple story for a 5-year-old about ${storyTopic}.`;

//   // Generate content from the prompt
//   const result = await model.generateContent(prompt);
//   const response = await result.response;
//   const text = response.text();

//   console.log("--- Your Story ---");
//   console.log(text);
// }

// run();



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
