export const MOCK_MOVIE: Movie = {
  title: "Inception",
  releaseYear: 2010,
  runningTime: "148분",
  genres: "액션, SF, 스릴러",
  ageRating: "15세",
  synopsis:
    "2092년, 우주 청소선 ‘승리호’의 선원들은 우연히 대량 살상 무기 로봇 도로시를 발견한다. " +
    "거액의 현상금을 노린 그들의 모험은 인류의 운명을 바꿀 거대한 사건으로 이어진다.",
  rating: {
    score: 4.7,
    likedCount: 1250,
  },
  cast: [
    {
      name: "봉준호",
      role: "감독",
      profileImage: "https://example.com/images/director.jpg",
    },
    {
      name: "송강호",
      role: "출연",
      profileImage: "https://example.com/images/song-kang-ho.jpg",
    },
    {
      name: "이선균",
      role: "출연",
      profileImage: "https://example.com/images/lee-sun-kyun.jpg",
    },
    {
      name: "조여정",
      role: "출연",
      profileImage: "https://example.com/images/cho-yeo-jeong.jpg",
    },
  ],
}

export type Cast = {
  name: string
  role: string
  profileImage: string
}

export type Rating = {
  score: number
  likedCount: number
}

export type Movie = {
  title: string
  releaseYear: number
  runningTime: string
  genres: string
  ageRating: string
  synopsis: string
  rating: Rating
  cast: Cast[]
}
