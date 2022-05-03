import clsx from 'clsx'
import { ComponentProps } from 'react'

type ListItemProps = ComponentProps<'li'>

const Container = ({ children, ...props }: ListItemProps) => (
  <Presenter {...props}>{children}</Presenter>
)

const Presenter = ({ children, className, ...props }: ListItemProps) => (
  <li
    className={clsx(className, 'px-4 py-2 odd:bg-slate-100 hover:bg-slate-200')}
    {...props}
  >
    {children}
  </li>
)

Container.displayName = 'ListItemContainer'
Presenter.displayName = 'ListItemPresenter'

export default Container
