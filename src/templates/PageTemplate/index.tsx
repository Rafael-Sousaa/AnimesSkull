import Header from '@components/Header'

interface PageTemplateProps {
  children: React.ReactNode
  img: string
}
const PageTemplate = (props: PageTemplateProps) => {
  return (
    <>
      <Header img={props.img} />
      <div className="pt-5" />

      <main>{props.children}</main>
    </>
  )
}

export default PageTemplate
