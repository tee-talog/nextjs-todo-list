import { ReactNode } from 'react'

type PageTitleProps = {
  children: ReactNode
}
const PageTitle = ({ children }: PageTitleProps) => <h1>{children}</h1>

export default PageTitle
