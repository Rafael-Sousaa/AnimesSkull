import Header from '@components/Header'

interface PageTemplateProps {
  children: React.ReactNode
}
const PageTemplate = (props: PageTemplateProps) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  )
}

export default PageTemplate
