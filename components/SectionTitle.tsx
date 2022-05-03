import clsx from 'clsx'
import { ComponentProps } from 'react'

type SectionTitleProps = ComponentProps<'h1'>

const Container = ({ children, ...props }: SectionTitleProps) => (
  <Presenter {...props}>{children}</Presenter>
)

const Presenter = ({ children, className, ...props }: SectionTitleProps) => (
  <h1 className={clsx(className, 'text-2xl')} {...props}>
    {children}
  </h1>
)

export default Container
