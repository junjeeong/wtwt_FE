import Logo from "@/components/common/Logo"
import PageHeader from "@/components/ui/PageHeader"
import PageTitle from "@/components/ui/PageTitle"

function Header() {
  return (
    <PageHeader>
      <PageTitle>
        <Logo />
      </PageTitle>
    </PageHeader>
  )
}

export default Header
