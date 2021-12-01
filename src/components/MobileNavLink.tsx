import cn from 'classnames'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Disclosure } from '@headlessui/react'

type MobileNavLinkProps = {
  href: string
  text: string
}

const MobileNavLink = ({ href, text }: MobileNavLinkProps) => {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <NextLink href={href}>
      <Disclosure.Button
        as="a"
        className={cn(
          isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
          'block px-3 py-2 rounded-md text-base font-medium',
        )}
        aria-current={isActive ? 'page' : undefined}
      >
        {text}
      </Disclosure.Button>
    </NextLink>
  )
}

export default MobileNavLink
