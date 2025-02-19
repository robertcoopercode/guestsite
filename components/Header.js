import NextLink from 'next/link'
import Logo from '../elements/logos/Logo'
import LogoMobile from '../elements/logos/LogoMobile'

import { TranslateIcon } from '@heroicons/react/solid'

export default function Header() {
  return (
    <div className="sticky top-0 z-50 max-w-6xl pt-4 mx-auto bg-white bg-opacity-90">
      <div className="flex items-center justify-between py-6 text-xl font-semibold border-b-2 border-gray-100">
        <div>
          <NextLink href="/">
            <div className="cursor-pointer">
              <Logo />
            </div>
          </NextLink>
          <NextLink href="/">
            <div className="cursor-pointer">
              <LogoMobile />
            </div>
          </NextLink>
        </div>
        <div className="grid grid-flow-col gap-4 text-sm font-medium outline-none md:text-base md:gap-8 focus:outline-none">
          <NextLink href="/about">
            <span className="cursor-pointer hover:text-brand-600">
              About
            </span>
          </NextLink>
          <NextLink href="/past">
            <span className="cursor-pointer hover:text-brand-600">
              Past Events
            </span>
          </NextLink>
          <NextLink href="/contact">
            <span className="cursor-pointer hover:text-brand-600">
              Contact
            </span>
          </NextLink>
          <a href="https://fr.montrealphoto.club">
            <TranslateIcon className="w-5 h-5 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  )
}
