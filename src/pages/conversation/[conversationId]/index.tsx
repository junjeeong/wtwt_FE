import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import { conversationApi } from "@/api/conversation"
import ChatInput from "@/components/common/input/ChatInput"
import Logo from "@/components/common/Logo"
import TagList from "@/components/common/TagList"
import PageContainer from "@/components/ui/PageContainer"
import PageContent from "@/components/ui/PageContent"
import PageHeader from "@/components/ui/PageHeader"
import { QUESTIONS } from "@/constants/questions"

function Conversations() {
  const router = useRouter()
  const { page, conversationId } = router.query
  const questionInfo = QUESTIONS[Number(page ?? 1) - 1]
  const [answers, setAnswers] = useState([
    { questionId: 1, answer: "" },
    { questionId: 2, answer: "" },
    { questionId: 3, answer: "" },
    { questionId: 4, answer: "" },
    { questionId: 5, answer: "" },
  ])

  const updateAnswers = async (answer: string) => {
    const questionId = Number(router.query.page)

    setAnswers((prev) => {
      const next = prev.map((i) => (i.questionId === questionId ? { ...i, answer } : i))

      if (questionId !== 5) {
        router.push(`/conversation/${conversationId}?page=${questionId + 1}`)
      } else {
        finalSubmit(next)
      }
      return next
    })
  }

  const finalSubmit = async (finalAnswers: typeof answers) => {
    if (!finalAnswers[4].answer) {
      alert("마지막 질문에 답변을 입력해주세요.") // @TODO toast로 대체해야함
      return
    }

    const res = await conversationApi.postConversationAnswer(
      Number(router.query.conversationId),
      finalAnswers,
    )
    if (res.success) router.push(`/recommendation/${conversationId}`)
    else alert(res.error || "알 수 없는 오류가 발생했습니다.")
  }

  return (
    <PageContainer>
      <PageHeader>
        <Logo />
      </PageHeader>
      <PageContent className="relative">
        <div className="itesm-center mt-10 flex flex-col justify-between">
          <span className="text-center text-lg font-bold">{page ?? 1} / 5</span>
          <h2 className="mt-2 text-center text-2xl font-bold">{questionInfo.question}</h2>
          <div className="mt-5">
            <TagList list={questionInfo.exmaple} />
          </div>
        </div>
        <div className="absolute -right-15 bottom-10">
          <Image src="/images/dog.png" alt="강아지 캐릭터" width={400} height={400} />
        </div>
        <ChatInput className="absolute bottom-0" updateAnswers={updateAnswers} />
      </PageContent>
    </PageContainer>
  )
}

export default Conversations
