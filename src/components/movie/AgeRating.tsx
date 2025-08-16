function AgeRating({ rating }: { rating: number }) {
  return (
    <div className="inline-block w-fit rounded-sm bg-gray-500 px-2 py-1 text-xs text-white">
      {rating}
    </div>
  )
}

export default AgeRating
