function RatingAndLiked({ rating, likedCount }: { rating: number; likedCount: number }) {
  return (
    <section className="flex w-full gap-1 px-2">
      {/* 평균 별점 */}
      <div className="bg-brand-primary-bright flex flex-1 flex-col items-center rounded-md py-3 text-white">
        <div className="text-center text-xl font-bold">
          <span className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="text-yellow-300"
            >
              <path
                fill="currentColor"
                d="M11.3 2.61a.75.75 0 0 1 1.35 0l2.72 5.52a.3.3 0 0 0 .19.14l6.09.88a.75.75 0 0 1 .41 1.28l-4.4 4.3a.3.3 0 0 0-.08.21l1.05 6.07a.75.75 0 0 1-1.1.79l-5.44-2.86a.3.3 0 0 0-.23 0L6.4 21.8a.75.75 0 0 1-1.09-.79l1.04-6.06a.3.3 0 0 0-.07-.22l-4.4-4.3a.75.75 0 0 1 .41-1.28l6.1-.88a.3.3 0 0 0 .18-.14z"
              ></path>
            </svg>
            <path
              fill="currentColor"
              d="M11.3 2.61a.75.75 0 0 1 1.35 0l2.72 5.52a.3.3 0 0 0 .19.14l6.09.88a.75.75 0 0 1 .41 1.28l-4.4 4.3a.3.3 0 0 0-.08.21l1.05 6.07a.75.75 0 0 1-1.1.79l-5.44-2.86a.3.3 0 0 0-.23 0L6.4 21.8a.75.75 0 0 1-1.09-.79l1.04-6.06a.3.3 0 0 0-.07-.22l-4.4-4.3a.75.75 0 0 1 .41-1.28l6.1-.88a.3.3 0 0 0 .18-.14z"
            ></path>
            {rating}
          </span>
        </div>
        <span className="text-sm">평균 별점</span>
      </div>
      {/* 좋아요 */}
      <div className="bg-brand-primary-bright flex flex-1 flex-col items-center justify-center rounded-md text-white">
        <div className="text-xl font-bold">{likedCount}</div>
        <div className="text-sm">좋아요</div>
      </div>
    </section>
  )
}

export default RatingAndLiked
