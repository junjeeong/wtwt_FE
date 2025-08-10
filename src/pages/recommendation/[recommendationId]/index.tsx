import Image from "next/image"
import Logo from "@/components/common/Logo"
import PageContainer from "@/components/layout/PageContainer"
import PageContent from "@/components/layout/PageContent"
import PageHeader from "@/components/layout/PageHeader"

function index() {
  return (
    <PageContainer>
      <PageHeader>
        <Logo />
      </PageHeader>
      <PageContent className="relative">
        <h2 className="mt-8 text-center text-2xl font-bold">
          자! 네가 좋아할만한 영화를 가져와봤어
        </h2>
        <Image
          src={"/images/mock_carousel.png"}
          alt="임시 캐러셀 이미지"
          width={600}
          height={400}
          className="mx-auto"
        />
        {/* <MovieCarousel list={recommendationMovieList} /> */}
        <Image
          src={"/images/cat.png"}
          alt="고양이"
          width={360}
          height={360}
          className="absolute -bottom-4 -left-15"
        />
        <div className="absolute right-8 bottom-10 flex flex-col gap-2 text-right">
          <span className="text-2xl font-semibold">다시 고르러 가기 ➡️</span>
          <span className="text-2xl font-semibold">별점 주러 가기 ⭐️</span>
        </div>
      </PageContent>
    </PageContainer>
  )
}

export default index
