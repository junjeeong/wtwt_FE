import { Button } from "@/components/ui/button"
import PageContainer from "@/components/layout/PageContainer"
import Image from "next/image"

export default function Home() {
  const handleClick = () => {
    // conversationApi.startConversation()
  }

  return (
    <PageContainer className="justify-around">
      <h1 className="mt-5 mr-5">
        <Image src="/icons/logo.svg" alt="로고" width={180} height={100} />
      </h1>
      <Image
        src={"/images/dogncat.png"}
        width={400}
        height={400}
        alt="강아지와 고양이 캐릭터 이미지"
      />
      <div className="flex flex-col items-center mb-10 gap-6">
        <h2 className="text-center whitespace-pre-line text-4xl font-bold">{`오늘 뭐 볼지 아직도 고민 중이라고?\n내가 딱 맞는 영화를 찾아줄게!`}</h2>
        <Button
          className="cursor-pointer bg-[#845EF7] text-xl rounded-full font-bold w-[260px] h-[64px] flex justify-center items-center"
          onClick={handleClick}
        >
          대화 시작하기
        </Button>
      </div>
    </PageContainer>
  )
}
