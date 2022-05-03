import clsx from 'clsx'
import { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'>

const Container = ({ children, ...props }: ButtonProps) => (
  <Presenter {...props}>{children}</Presenter>
)

const Presenter = ({ children, className, ...props }: ButtonProps) => (
  <button
    className={clsx(
      className,
      'rounded border-2 border-solid border-slate-500 py-1 px-4 active:bg-slate-200'
    )}
    {...props}
  >
    {children}
  </button>
)

Container.displayName = 'ButtonContainer'
Presenter.displayName = 'ButtonPresenter'

export default Container
