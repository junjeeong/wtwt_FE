import Image from "next/image"

function TextSubmitButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="bg-brand-primary hover:bg-brand-primary/90 flex size-10 items-center justify-around rounded-full"
      onClick={onClick}
    >
      <Image src="/icons/arrow_top.svg" alt="화살표" width={16} height={16} />
    </button>
  )
}

export default TextSubmitButton
