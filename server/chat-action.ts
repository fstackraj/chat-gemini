"use server";

import { revalidatePath } from "next/cache";
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const chatHistory: {}[] = [];
const modelChatHistory: {
  role: "user" | "model";
  parts: string;
}[] = [];

export async function chatAction(input?: string | null) {
  // For text-only input, use the gemini-pro model

  if (input) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const chat = model.startChat({
      history: modelChatHistory,
    });

    const msg = input;

    const result = await chat.sendMessage(msg);
    const response = await result.response;
    const text = response.text();
    chatHistory.push({ id: chatHistory.length + 1, user: input, gemini: text });
    modelChatHistory.push({ role: "user", parts: input });
    modelChatHistory.push({ role: "model", parts: text });
  }

  revalidatePath("/");
  return chatHistory;
}
