import TextSubmitButton from "@/components/common/button/TextSubmitButton"
import { cn } from "@/lib/utils"

function ChatInput({ ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const handleClick = () => {
    console.log("Submit button clicked")
  }

  return (
    <div
      className={cn(
        "flex h-[64px] w-full items-center justify-between gap-2 bg-white px-5 py-3",
        props.className,
      )}
    >
      <input
        type="text"
        placeholder="내용을 입력해 주세요"
        className="flex-1 rounded-full bg-gray-50 px-4 py-2.5 outline-none placeholder:text-gray-400"
      />
      <TextSubmitButton onClick={handleClick} />
    </div>
  )
}

export default ChatInput
