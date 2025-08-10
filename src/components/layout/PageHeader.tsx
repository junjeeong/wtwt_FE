import { cva, VariantProps } from "class-variance-authority"
import { ChevronLeft as ChevronLeftIcon } from "lucide-react"
import { useRouter } from "next/router"
import { ComponentProps, useCallback } from "react"
import { cn } from "@/lib/utils"

const pageHeaderVariants = cva(
  "bg-white relative flex flex-row w-full items-center justify-center h-20 border-b border-b-[gray-50]",
  {
    variants: {},
    defaultVariants: {},
  },
)

type PageHeaderProps = VariantProps<typeof pageHeaderVariants> &
  React.HTMLAttributes<HTMLHeadingElement>

const PageHeader = ({ className, ...props }: PageHeaderProps) => {
  return <header {...props} className={cn(pageHeaderVariants(className), className)}></header>
}

const BackIcon = (props: ComponentProps<typeof ChevronLeftIcon>) => {
  const router = useRouter()

  const defaultClickHandler = useCallback(() => {
    router.back()
  }, [router])

  return (
    <ChevronLeftIcon
      {...props}
      className={cn("absolute left-4 cursor-pointer", props.className)}
      onClick={props.onClick ?? defaultClickHandler}
    />
  )
}
PageHeader.BackIcon = BackIcon

export default PageHeader
