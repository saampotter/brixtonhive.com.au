import Image from 'next/image';
/* <Image src="/images/logo.png" width={299} height={328} quality={100} priority /> */
/* <Image src="/images/text-logo.png" width={526} height={131} quality={100} priority /> */

export default function Index() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col items-center max-w-xl px-4 space-y-4">
        <div>
          <Image src="/images/logo.png" width={299} height={328} quality={100} priority />
        </div>

        <div>
          <Image src="/images/text-logo.png" width={526} height={131} quality={100} priority />{' '}
        </div>

        <div className="max-w-sm space-y-4 text-center text-white">
          <p>
            We're busy creating 4000m<sup>2</sup> of exciting new spaces for short and long term
            lease.
          </p>

          <p>Please contact us to discuss customising your ideal space.</p>

          <p>Availability from July 2021</p>
        </div>

        <div className="inline-flex items-center space-x-4 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>

          <a href="tel:+61420545024">0420 545 024</a>
        </div>

        <div className="inline-flex items-center space-x-4 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-instagram"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>

          <a
            href="https://www.instagram.com/brixton.hive/"
            target="_blank"
            rel="noopener noreferrer"
          >
            brixton.hive
          </a>
        </div>
      </div>
    </div>
  );
}
