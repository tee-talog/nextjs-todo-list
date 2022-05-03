import clsx from 'clsx'
import { ComponentProps } from 'react'

type PageTitleProps = ComponentProps<'h1'>

const Container = ({ children, ...props }: PageTitleProps) => (
  <Presenter {...props}>{children}</Presenter>
)

const Presenter = ({ children, className, ...props }: PageTitleProps) => (
  <h1 className={clsx(className, 'text-4xl')} {...props}>
    {children}
  </h1>
)

export default Container
