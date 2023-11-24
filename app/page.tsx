import About from '@/components/About'
import ContactMe from '@/components/ContactMe'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Link from 'next/link'
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Experience - To Do */}
      <section id='experience'>
      </section>

      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
          <ArrowUpCircleIcon 
            className='h-10 w-10 cursor-pointer'
          />
          </div>
        </footer>
      </Link>
    </div>
  )
}
