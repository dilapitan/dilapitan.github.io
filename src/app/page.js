import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen px-3 py-12">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">DOMINIC INOCENO LAPITAN</h1>
        <h3 className="text-xl text-gray-500">Software Developer</h3>

        <br />

        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div></div>
          <div>
            <p>
              👋 Hello! My name is Dominic. I&apos;m a 5-year Software Developer
              focused on building and developing web applications and growing my
              knowledge on Modern Web Developement.
            </p>
          </div>
          <div></div>
        </div>

        <br />
        <br />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          <div>
            <h4>Check out some of my works:</h4>
            <Link href="/portfolio">
              <div className="flex justify-center items-center pt-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                  />
                </svg>
                &nbsp;&nbsp;
                <span className="underline">Portfolio</span>
              </div>
            </Link>
          </div>

          <div>
            <h4 className="text-base font-semibold">My Current Stack:</h4>
            <div className="pt-5">
              <p>
                <span>
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    className="text-blue-600"
                  >
                    React
                  </a>
                </span>
                ,&nbsp;
                <span>
                  <a
                    href="https://nextjs.org/"
                    target="_blank"
                    className="text-blue-600"
                  >
                    NextJS
                  </a>
                </span>
                ,&nbsp;
                <span>
                  <a
                    href="https://vuejs.org/"
                    target="_blank"
                    className="text-blue-600"
                  >
                    Vue
                  </a>
                </span>
              </p>
              <p>
                <span>
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    className="text-blue-600"
                  >
                    TailwindCSS
                  </a>
                </span>
                ,&nbsp;
                <span>
                  <a
                    href="https://mui.com/"
                    target="_blank"
                    className="text-blue-600"
                  >
                    MaterialUI
                  </a>
                </span>
              </p>
              <p>
                <span>
                  <a
                    href="https://nodejs.org/en/"
                    target="_blank"
                    className="text-blue-600"
                  >
                    Node
                  </a>
                </span>
                ,&nbsp;
                <span>
                  <a
                    href="https://firebase.google.com/"
                    target="_blank"
                    className="text-blue-600"
                  >
                    Firebase
                  </a>
                </span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold">Contact Me at:</h4>
            <div className="flex justify-center items-center pt-5">
              <svg
                className="h-4 w-4 text-blue-600"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {' '}
                <path stroke="none" d="M0 0h24v24H0z" />{' '}
                <rect x="3" y="5" width="18" height="14" rx="2" />{' '}
                <polyline points="3 7 12 13 21 7" />
              </svg>
              &nbsp;&nbsp;
              <p>domlapitan@gmail.com</p>
            </div>
            <a href="https://www.linkedin.com/in/dilapitan/" target="_blank">
              <div className="flex justify-center items-center pt-5">
                <svg
                  className="h-4 w-4 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {' '}
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{' '}
                  <rect x="2" y="9" width="4" height="12" />{' '}
                  <circle cx="4" cy="4" r="2" />
                </svg>
                &nbsp;&nbsp;
                <p className="underline">Dominic Lapitan</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
