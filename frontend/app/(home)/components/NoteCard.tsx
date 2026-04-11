import { Note } from '@/app/types'
import Image from 'next/image'
import React from 'react'

const NoteCard = ({notes}:{notes:Note[]}) => {
  return (

notes.map((note)=>{
  return(
    <section className="relative bg-gray-900 text-white py-16 px-8 mt-15 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 320">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" className="text-gray-700" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" opacity="0.2" key={note._id}/>
        </svg>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-center md:space-x-12">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image src={note.file} width={400} height={200} alt='image'/>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold mb-4 border-b-4 border-blue-500 inline-block" >{note.title}</h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            {note.subtitle}
          </p>
          <p className="mb-4 text-gray-300 leading-relaxed">
            Join us on our journey to make a difference in the industry through creativity, dedication, and excellence.
          </p>
          <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
            Contact Us
          </a>
        </div>
        <link href={`/note/${note._id}`} >
        read more.
        </link>
      </div>
</section>
  )
})
  )
}

export default NoteCard
