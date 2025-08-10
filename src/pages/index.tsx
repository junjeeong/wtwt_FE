import Image from "next/image"
import { useRouter } from "next/router"
import { conversationApi } from "@/api/conversation"
import PageContainer from "@/components/layout/PageContainer"
import PageContent from "@/components/layout/PageContent"
import { Button } from "@/components/ui/button"

export default function Home() {
  const router = useRouter()

  const handleClick = async () => {
    const res = await conversationApi.startConversation()
    if (res.success) router.push("/conversation/${conversationId}")
  }

  return (
    <PageContainer className="justify-around">
      <PageContent className="flex h-screen flex-col items-center justify-around">
        <h1 className="mt-5 mr-10">
          <Image src="/icons/logo.svg" alt="로고" width={180} height={100} />
        </h1>
        <Image
          src={"/images/dogncat.png"}
          width={400}
          height={400}
          alt="강아지와 고양이 캐릭터 이미지"
        />
        <div className="mb-5 flex flex-col items-center gap-10">
          <h2 className="text-center text-4xl font-bold whitespace-pre-line">{`오늘 뭐 볼지 아직도 고민 중이라고?\n내가 딱 맞는 영화를 찾아줄게!`}</h2>
          <Button
            className="hover:bg-brand-primary/90 bg-brand-primary flex h-[64px] w-[260px] cursor-pointer items-center justify-center rounded-full text-xl font-bold"
            onClick={handleClick}
          >
            대화 시작하기
          </Button>
        </div>
      </PageContent>
    </PageContainer>
  )
}
