import Link from 'next/link';

export default function Button({ href, children }) {
  return (
    <Link href={href} passHref>
      <a className="inline-block px-8 py-4 text-lg text-center transition bg-white rounded-full shadow-lg text-c-blue-900 transform-gpu hover:scale-95">
        {children}
      </a>
    </Link>
  );
}
