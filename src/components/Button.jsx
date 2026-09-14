import { ArrowUpRight } from 'lucide-react'

export default function Button({ children, href, variant = 'primary', onClick, type = 'button' }) {
  const className = `button button--${variant}`

  if (href) {
    return <a className={className} href={href} onClick={onClick}>{children}<ArrowUpRight size={16} aria-hidden="true" /></a>
  }

  return <button className={className} type={type} onClick={onClick}>{children}<ArrowUpRight size={16} aria-hidden="true" /></button>
}
