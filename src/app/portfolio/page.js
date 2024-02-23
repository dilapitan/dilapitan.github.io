import Link from 'next/link'

function Portfolio() {
  const WORKS = [
    {
      url: 'https://amiabaselinesurvey.github.io/',
      description:
        'Information system to store and view different farmer beneficiaries and their information',
      technologies: 'Vue, Vuex, Vuetify, Firebase, Github',
    },
    {
      url: 'https://dilapitan.github.io/text-blaster-poc/',
      description:
        'A simple proof of concept text blaster using Semaphore as an SMS library',
      technologies: 'React, Semaphore, Chakra UI',
    },
    {
      url: 'https://amia-cis.github.io/',
      description:
        'A Climate Information System that generates bulletin with recommendation, given climate data, to be shared and sent to rice farmers',
      technologies:
        'NextJS, Material UI, Firebase, Node, Github Actions, Render, Semaphore',
    },
    {
      url: 'https://phbcn.vercel.app/',
      description: 'A simple website for a church. Currently being updated',
      technologies: 'NextJS, Material UI',
    },
    {
      url: 'https://dilapitan.github.io/daily-reading-counter/',
      description:
        'A simple website for easily calculating the pages to be read per session given the starting page. Built this for for 2022 and helped me read 29 books for that year.',
      technologies: 'Vue, Vuetify',
    },
  ]

  return (
    <div className="min-h-screen px-3 py-12">
      <Link href="/">
        <div className="flex items-center">
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
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          &nbsp;&nbsp;
          <span className="underline">Home</span>
        </div>
      </Link>

      <br />

      <div className="text-center">
        <h1 className="text-xl font-semibold">PORTFOLIO</h1>
        <br />
        <div className="text-sm">
          <p>
            These are some of the works I made/involved with that I can only
            share.
          </p>
          <p>
            Some are publicly available and some needed credentials to login
            further.
          </p>
        </div>
      </div>

      <br />

      <div className="px-4 sm:px-52">
        {WORKS.map((work) => {
          return (
            <div key={work.url} className="mt-10">
              <p>
                <span className="mr-2">URL:</span>
                <span>
                  <a
                    href={work.url}
                    target="_blank"
                    className="underline text-blue-600"
                  >
                    {work.url}
                  </a>
                </span>
              </p>
              <p>
                <span className="mr-2">Description:</span>
                <span>{work.description}</span>
              </p>
              <p>
                <span className="mr-2">Technologies:</span>
                <span>{work.technologies}</span>
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Portfolio
