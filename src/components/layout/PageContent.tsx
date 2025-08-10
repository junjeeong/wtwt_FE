import { cva, VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const PageContentVariants = cva("flex flex-col w-full h-full", {
  variants: {
    bg: {
      main: "bg-brand-background",
    },
  },
  defaultVariants: {
    bg: "main",
  },
})

type PageContentProps = VariantProps<typeof PageContentVariants> &
  React.HTMLAttributes<HTMLDivElement>

const PageContent = ({ className, bg, ...props }: PageContentProps) => {
  return <main {...props} className={cn(PageContentVariants({ bg }), className)}></main>
}

export default PageContent
