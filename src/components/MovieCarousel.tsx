"use client"
import { useKeenSlider } from "keen-slider/react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

type Poster = { id: string | number; src: string; alt: string }

interface Props {
  list: Poster[]
  autoplayMs?: number // 자동재생 간격(ms), 미지정 시 비활성
  className?: string
}

export default function MovieCarousel({ list, autoplayMs = 0, className }: Props) {
  const [current, setCurrent] = useState(0)
  const mouseOverRef = useRef(false)

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap", // 스냅 이동
    slides: {
      perView: 1.2, // 가운데 1, 양옆 살짝 보이게
      spacing: 16,
      origin: "center", // 중앙 기준
    },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 1.4, spacing: 20 } },
      "(min-width: 768px)": { slides: { perView: 1.6, spacing: 24 } },
      "(min-width: 1024px)": { slides: { perView: 1.8, spacing: 28 } },
    },
    slideChanged(s) {
      setCurrent(s.track.details.rel)
    },
    created() {
      // 초기 포커싱/접근성 등 필요하면 여기서
    },
  })

  // 자동재생 (마우스 오버 시 일시정지)
  useEffect(() => {
    if (!slider || !autoplayMs) return
    const timer = setInterval(() => {
      if (mouseOverRef.current) return
      slider.current?.next()
    }, autoplayMs)
    return () => clearInterval(timer)
  }, [slider, autoplayMs])

  return (
    <div
      className={`relative w-full ${className ?? ""}`}
      onMouseEnter={() => (mouseOverRef.current = true)}
      onMouseLeave={() => (mouseOverRef.current = false)}
      aria-roledescription="carousel"
    >
      {/* 트랙 */}
      <div ref={sliderRef} className="keen-slider bg-brand-background mx-auto max-w-[580px]">
        {list.map((p) => (
          <div key={p.id} className="keen-slider__slide rounded-xl shadow-lg">
            <div className="relative h-[380px] w-full overflow-hidden rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.25)]">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 580px) 100vw, 580px"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* 네비게이션 버튼 */}
      <button
        type="button"
        aria-label="Previous"
        onClick={() => slider.current?.prev()}
        className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-sm shadow hover:bg-white"
      >
        ←
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => slider.current?.next()}
        className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-sm shadow hover:bg-white"
      >
        →
      </button>

      {/* 도트 페이지네이션 */}
      <div className="list-center mt-3 flex w-full justify-center gap-2">
        {list.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current}
            onClick={() => slider.current?.moveToIdx(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === current ? "w-6 bg-violet-500" : "w-2.5 bg-zinc-300 hover:bg-zinc-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
