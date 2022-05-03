import clsx from 'clsx'
import { ComponentProps } from 'react'

type InputProps = ComponentProps<'input'>

const Container = ({ ...props }: InputProps) => <Presenter {...props} />

const Presenter = ({ className, ...props }: InputProps) => (
  <input
    className={clsx(
      className,
      'rounded border-2 border-solid border-slate-500 p-1 active:bg-slate-200'
    )}
    {...props}
  />
)

export default Container
