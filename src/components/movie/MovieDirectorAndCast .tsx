import CastItem from "@/components/movie/CastItem"
import { Cast } from "@/mocks/movie"

function MovieDirectorAndCast({ list }: { list: Cast[] }) {
  return (
    <section>
      <h2 className="px-2 text-2xl font-bold text-gray-800">감독/출연</h2>
      <ul className="flex flex-col gap-2">
        {list.map((el, index) => (
          <li key={index}>
            <CastItem personInfo={el} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default MovieDirectorAndCast
