import { startUdpServer, createResponse, createTxtAnswer } from "denamed";
import { GoogleGenerativeAI } from "@google/generative-ai"
import dotenv from "dotenv";
import { env } from "process";
dotenv.config();

const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-8b" });

startUdpServer(
    async (query) => {
        console.log(query)
        const question = query.questions[0]
        console.log(`Question ${JSON.stringify(question)}`)

        const prompt = `
        Answer the questions in one word or sentence
        Question: ${question.name.split('.').join(' ')}`
        
        console.log(`Prompt ${prompt}`)

        const result = await model.generateContent(prompt);
        console.log(result.response.text())

        return createResponse(
            query,
            [createTxtAnswer(question, result.response.text())]
        )
    },
    { port: 53 }
) 