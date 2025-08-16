import Header from "@/components/layout/Header"
import MovieDirectorAndCast from "@/components/movie/MovieDirectorAndCast "
import MovieMeta from "@/components/movie/MovieMeta"
import MovieThumbnail from "@/components/movie/MovieThumbnail"
import MoviSynopsis from "@/components/movie/MoviSynopsis"
import RatingAndLiked from "@/components/movie/RatingAndLiked"
import PageContainer from "@/components/ui/PageContainer"
import PageContent from "@/components/ui/PageContent"
import { MOCK_MOVIE } from "@/mocks/movie"

function index() {
  return (
    <PageContainer>
      <Header />
      <PageContent className="flex flex-col gap-4 overflow-y-auto">
        <MovieThumbnail imageUrl="https://picsum.photos/800/400" />
        <MovieMeta info={MOCK_MOVIE} />
        <MoviSynopsis content={MOCK_MOVIE.synopsis}></MoviSynopsis>
        <RatingAndLiked
          rating={MOCK_MOVIE.rating.score}
          likedCount={MOCK_MOVIE.rating.likedCount}
        ></RatingAndLiked>
        <MovieDirectorAndCast list={MOCK_MOVIE.cast}></MovieDirectorAndCast>
        <></>
      </PageContent>
    </PageContainer>
  )
}
export default index
