import Image from "next/image"

function MovieThumbnail({ imageUrl }: { imageUrl: string }) {
  return (
    <section className="relative min-h-[280px] w-full overflow-hidden">
      <Image src={imageUrl} alt="영화 썸네일" fill className="object-cover" priority />
    </section>
  )
}

export default MovieThumbnail
