import Image from "next/image"
import { useRouter } from "next/router"
import ChatInput from "@/components/common/input/ChatInput"
import Logo from "@/components/common/Logo"
import TagList from "@/components/common/TagList"
import PageContainer from "@/components/ui/PageContainer"
import PageContent from "@/components/ui/PageContent"
import PageHeader from "@/components/ui/PageHeader"
import { QUESTIONS } from "@/constants/questions"

function Conversations() {
  const router = useRouter()
  const { page } = router.query
  const questionInfo = QUESTIONS[Number(page ?? 1) - 1]

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
        <ChatInput className="absolute bottom-0" />
      </PageContent>
    </PageContainer>
  )
}

export default Conversations
