import cn from 'classnames'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

type NavLinkProps = {
  href: string
  text: string
}

const NavLink = ({ href, text }: NavLinkProps) => {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? 'bg-gray-900 text-white'
            : 'text-gray-300 hover:bg-gray-700 dark:text-gray-700 dark:hover:bg-gray-300 hover:text-white',
          'px-3 py-2 rounded-md text-sm font-medium',
        )}
        aria-current={isActive ? 'page' : undefined}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  )
}

export default NavLink
