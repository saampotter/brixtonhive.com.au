import Link from 'next/link';

const classes =
  'inline-block px-8 py-4 text-lg text-center transition bg-white rounded-full shadow-lg text-gray-900 transform-gpu hover:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-200';

export default function Button({ href, children }) {
  if (href)
    return (
      <Link href={href} passHref>
        <a className={classes}>{children}</a>
      </Link>
    );

  return <button className={classes}>{children}</button>;
}
