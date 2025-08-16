import { v4 as uuidv4 } from "uuid"
import { BaseApiResponse } from "@/types/api"

export const conversationApi = {
  startConversation: async () => {
    const id = uuidv4()

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/conversations/start`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sessionId: id }),
    })
    return response.json() as Promise<StartConversationResponse>
  },
  postConversationAnswer: async (conversationId: number, answers: Answer[]) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/conversations/${conversationId}/answers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answers }),
      },
    )
    return response.json() as Promise<PostConversationAnswerResponse>
  },
}

type StartConversationResponse = BaseApiResponse & {
  conversationId: number
}

type Answer = {
  questionId: number
  answer: string
}

type PostConversationAnswerResponse = {
  success: boolean
  message?: string
  error?: string
}
