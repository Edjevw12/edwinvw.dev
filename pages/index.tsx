import { Circle } from '@/components/Circle'
import { Flag } from '@/components/icons/flag-icon'
import Image from 'next/image'
import type { NextPage } from 'next'
import { Github } from '@/components/icons/github-icon'
import { LinkedIn } from '@/components/icons/linkedin-icon'

const Home: NextPage = () => {
  return (
    <div className="my-12 flex flex-col h-content items-center relative space-y-12">
      <div className="w-full sm:w-[645px] text-center space-y-2 sm:space-y-5">
        <h1 className="text-4xl sm:text-8xl">
          <span className="text-red-600">H</span>
          <span className="text-blue-800 dark:text-white">ey, i&lsquo;m Edwin</span>
        </h1>
        <div className="flex items-center gap-2  justify-center">
          <div>
            <p className="text-lg leading-7">A Fullstack Developer from the Netherlands</p>
          </div>
          <div>
            <Flag />
          </div>
        </div>
      </div>
      <div className="absolute top-[-60%] left-[40%] w-[45vw] h-[45vw] lg:w-[800px] lg:h-[800px] z-[-1]">
        <Circle />
      </div>
      <div className="flex flex-col h-content items-center space-y-6">
        <div className="relative h-64 w-64 rounded-full overflow-hidden">
          <Image
            src="/static/images/ik.png"
            alt="Edwin van Wijngaarden"
            // width={260}
            // height={260}
            layout="fill"
          />
        </div>
        <div className="flex gap-4 items-center">
          <a>
            <Github />
          </a>
          <a>
            <LinkedIn />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <h2 className="text-2xl">How I started developing</h2>
        <div className="w-20 h-[0.11rem] rounded-sm bg-white" />
      </div>
    </div>
  )
}

export default Home
