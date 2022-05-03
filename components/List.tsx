import clsx from 'clsx'
import { ComponentProps } from 'react'

type ListProps = ComponentProps<'ul'>

const Container = ({ children, ...props }: ListProps) => (
  <Presenter {...props}>{children}</Presenter>
)

const Presenter = ({ children, className, ...props }: ListProps) => (
  <ul className={clsx(className, 'divide-y divide-slate-400')} {...props}>
    {children}
  </ul>
)

export default Container
