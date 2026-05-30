import clsx from 'clsx'

const Button = ({ className = '', type = 'button', children }) => {
  return (
    <button
      className={clsx('button', className)}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
