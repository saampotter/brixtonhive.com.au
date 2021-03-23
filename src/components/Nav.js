import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Nav() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [router]);

  return (
    <>
      <nav className="fixed z-10 w-full bg-transparent pointer-events-none">
        <div className="px-16 pt-16">
          <div className="flex items-center justify-between">
            <NextLink href="/#get-in-touch" passHref>
              <a className="pointer-events-auto text-c-green-900">Get in touch</a>
            </NextLink>

            <a
              role="button"
              onClick={() => setIsOpen(true)}
              className="flex items-center justify-center w-12 h-12 rounded-full pointer-events-auto bg-c-green-900"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white"
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
        </div>
      </nav>

      {isOpen && (
        <div className="fixed top-0 left-0 z-20 w-full h-screen overflow-hidden bg-c-brown-500">
          <div className="absolute w-full bg-transparent pointer-events-none">
            <div className="flex justify-end px-16 pt-16">
              <a
                role="button"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-12 h-12 rounded-full pointer-events-auto bg-c-green-900"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-full">
            <nav className="flex flex-col items-center space-y-8">
              <Link href="/">Home</Link>
              <Link href="/our-values">Our values</Link>
              <Link href="/#get-in-touch">Get in touch</Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

const Link = ({ href, children }) => (
  <NextLink href={href} passHref>
    <a className="text-6xl font-bold">{children}</a>
  </NextLink>
);
