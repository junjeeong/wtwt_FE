import AgeRating from "@/components/movie/AgeRating"
import { Movie } from "@/mocks/movie"

function MovieMeta({ info }: { info: Movie }) {
  return (
    <section className="flex flex-col gap-1 px-2">
      <h2 className="text-2xl font-bold text-gray-800">{info.title}</h2>
      <span className="text-sm text-gray-500">
        {info.releaseYear} • {info.runningTime} • {info.genres}
      </span>
      <AgeRating rating={info.rating.score} />
    </section>
  )
}

export default MovieMeta
