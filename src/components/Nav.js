import clsx from 'clsx';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { X } from 'heroicons-react';

export default function Nav() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflowY = isOpen ? 'hidden' : 'auto';
    document.body.style.overflowY = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [router]);

  return (
    <>
      <nav className="fixed z-40 w-full p-4 bg-transparent pointer-events-none lg:p-16">
        <div className="flex items-center justify-between">
          <NextLink href="/#get-in-touch" passHref>
            <a className="p-3 px-4 text-gray-900 transition bg-white rounded-full shadow-lg pointer-events-auto hover:scale-95 transform-gpu">
              Get in touch
            </a>
          </NextLink>

          <a
            role="button"
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center p-3 transition bg-white rounded-full shadow-lg pointer-events-auto transform-gpu hover:scale-95"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeWidth="2"
                d="M4 8h16M4 16h16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </nav>

      <Transition
        show={isOpen}
        as={Fragment}
        enter="transform transition ease-in-out duration-500 sm:duration-700"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leaving="transform transition ease-in-out duration-500 sm:duration-700"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="fixed top-0 left-0 z-50 w-full h-screen overflow-hidden bg-c-purple-500">
          <div className="absolute w-full bg-transparent pointer-events-none">
            <div className="flex justify-end p-4 lg:p-16">
              <a
                role="button"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center p-3 transition bg-white rounded-full shadow-lg pointer-events-auto transform-gpu hover:scale-95"
              >
                <X className="w-6 h-6 text-black" />
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-full">
            <nav className="flex flex-col items-center space-y-6 lg:space-y-8">
              <Link href="/">Home</Link>
              <Link href="/our-values">Our values</Link>
              <Link href="/#work">Work</Link>
              <Link href="/#store">Store</Link>
              <Link href="/#warehouse">Warehouse</Link>
              <Link href="/#get-in-touch">Get in touch</Link>
            </nav>
          </div>
        </div>
      </Transition>
    </>
  );
}

const Link = ({ href, children }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <NextLink href={href} passHref>
      <a
        className={clsx(
          'transition text-4xl font-bold lg:text-6xl',
          isActive ? 'text-white' : 'hover:text-white text-c-purple-300',
        )}
      >
        {children}
      </a>
    </NextLink>
  );
};
