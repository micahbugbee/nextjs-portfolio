"use client";
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity: 0
    }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>

        <motion.img
        initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1.3,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.18169-9/27867579_10100284112903748_7590402413292668229_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7a1959&_nc_ohc=8xYv1xBf5nsAX-AA3D-&_nc_oc=AQkt8IV_1JbZBkxTmHkZthkQACz8j7U5yKewXfkRk8Rd9x6_PG1m65aQCbdZeiVgJ9H-xO1gOxCtM-WrZxXlO-hv&_nc_ht=scontent-dfw5-2.xx&oh=00_AfDkcanTOipjr9yQY7ddzDldqrsF27n3ou3oxxMdibWREQ&oe=65870591'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]'>little</span>{" "} background</h4>
            <p className='text-base'>I specialize in building exceptional real-world digital applications.  Currently, I am focused on building fully responsive full-stack web applications with React and Typescript.</p>
        </div>
    </motion.div>
  )
}

export default About