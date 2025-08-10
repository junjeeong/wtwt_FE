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
}

type StartConversationResponse = BaseApiResponse & {
  conversationId: number
}
