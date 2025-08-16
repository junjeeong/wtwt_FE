import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface ChatInputProps extends React.HTMLAttributes<HTMLDivElement> {
  updateAnswers: (value: string) => void
}

function ChatInput({ updateAnswers, ...props }: ChatInputProps) {
  const [innerValue, setInnerValue] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setInnerValue("")
    updateAnswers(innerValue)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex h-[64px] w-full items-center justify-between gap-2 bg-white px-5 py-3",
        props.className,
      )}
    >
      <input
        type="text"
        value={innerValue}
        onChange={(e) => setInnerValue(e.target.value)}
        placeholder="내용을 입력해 주세요"
        className="flex-1 rounded-full bg-gray-50 px-4 py-2.5 outline-none placeholder:text-gray-400"
      />
      <button
        type="submit"
        className="bg-brand-primary hover:bg-brand-primary/90 flex size-10 items-center justify-around rounded-full"
      >
        <Image src="/icons/arrow_top.svg" alt="화살표" width={16} height={16} />
      </button>
    </form>
  )
}

export default ChatInput
