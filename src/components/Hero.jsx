import { useEffect, useState } from 'react'
import profile from '../assets/Profile.jpeg'

export default function Hero() {

  const roles = [
    'MERN Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'Creative Coder',
  ]

  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {

    const currentText = roles[currentRole]

    const speed = isDeleting ? 50 : 100

    const timeout = setTimeout(() => {

      if (!isDeleting) {

        setDisplayText(
          currentText.substring(0, displayText.length + 1)
        )

        if (displayText === currentText) {

          setTimeout(() => {
            setIsDeleting(true)
          }, 1200)

        }

      } else {

        setDisplayText(
          currentText.substring(0, displayText.length - 1)
        )

        if (displayText === '') {

          setIsDeleting(false)

          setCurrentRole((prev) =>
            (prev + 1) % roles.length
          )

        }

      }

    }, speed)

    return () => clearTimeout(timeout)

  }, [displayText, isDeleting, currentRole])

  return (

    <section
      id='about'
      className='min-h-[85vh] bg-black text-white flex items-center px-6 py-16 overflow-hidden relative'
    >

      {/* BACKGROUND GLOW */}
      <div className='absolute top-0 left-0 w-[400px] h-[400px] bg-purple-700/20 blur-[120px] rounded-full'></div>

      <div className='max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 items-center relative z-10'>

        {/* LEFT CONTENT */}
        <div className='text-center lg:text-left order-2 lg:order-1'>

          {/* TYPING */}
          <div className='h-8 mb-3'>

            <p className='text-purple-400 text-xs sm:text-sm md:text-base tracking-[5px] uppercase font-semibold'>

              {displayText}

              <span className='animate-pulse'>
                |
              </span>

            </p>

          </div>

          {/* HEADING */}
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4'>

            Hi, I am <br />

            <span className='bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-300 bg-clip-text text-transparent'>

              Prahlad Kumar

            </span>

          </h1>

          {/* SUBTITLE */}
          <h2 className='text-xl md:text-2xl font-bold mb-4 text-white'>

            MERN Full Stack Developer

          </h2>

          {/* DESCRIPTION */}
          <p className='text-gray-400 text-sm md:text-base leading-7 max-w-xl mx-auto lg:mx-0 mb-8'>

            Results-driven Full Stack Developer (MERN) with expertise in building scalable web applications, responsive UI design, secure backend systems, and modern web technologies.

          </p>

          {/* BUTTONS */}
          <div className='flex flex-wrap justify-center lg:justify-start gap-4'>

            <a
              href='#projects'
              className='px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-300 text-sm md:text-base font-semibold shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:scale-105'
            >
              View Projects
            </a>

<a
  href="./resume.pdf"
  download="Prahlad_Kumar_Resume.pdf"
  target="_blank"
  rel="noreferrer"
  className='px-6 py-3 rounded-full border border-purple-500 hover:bg-purple-600 transition duration-300 text-sm md:text-base font-medium hover:scale-105'
>
  Download CV
</a>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className='flex justify-center order-1 lg:order-2'>

          <div className='relative group cursor-pointer transition duration-500 hover:-translate-y-3'>

            {/* GLOW */}
            <div className='absolute inset-0 rounded-full bg-purple-600 blur-[70px] opacity-40 group-hover:opacity-70 transition duration-500'></div>

            {/* ROTATING BORDER */}
            <div className='absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 animate-[spin_10s_linear_infinite]'></div>

            {/* IMAGE */}
            <div className='relative rounded-full overflow-hidden bg-black p-[4px]'>

              <img
                src={profile}
                alt='Prahlad Kumar'
                className='w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] rounded-full object-cover transition duration-500 group-hover:scale-105'
              />

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}