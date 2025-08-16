import { cva, VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const PageContainerVariants = cva(
  "mx-auto flex flex-col w-full max-w-[744px] h-screen overflow-hidden shadow-lg",
  {
    variants: {
      bg: {
        main: "bg-background",
      },
    },
    defaultVariants: {
      bg: "main",
    },
  },
)

type PageContainerProps = VariantProps<typeof PageContainerVariants> &
  React.HTMLAttributes<HTMLDivElement>

const PageContainer = ({ className, bg, ...props }: PageContainerProps) => {
  return <div {...props} className={cn(PageContainerVariants({ bg }), className)}></div>
}

export default PageContainer
