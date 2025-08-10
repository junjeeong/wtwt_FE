import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"

const pageContainerVariants = cva("mx-auto w-full max-w-[744px] h-screen flex-col", {
  variants: {
    bg: {
      main: "bg-brand-bg-main",
    },
  },
  defaultVariants: {
    bg: "main",
  },
})

type PageContainerProps = VariantProps<typeof pageContainerVariants> &
  React.HTMLAttributes<HTMLDivElement>

const PageContainer = ({ className, bg, ...props }: PageContainerProps) => {
  return <div {...props} className={cn(pageContainerVariants({ bg }), className)}></div>
}

export default PageContainer
