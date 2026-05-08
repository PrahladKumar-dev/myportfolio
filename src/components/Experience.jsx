import certificate from '../assets/certificates.png'

export default function Experience() {

  return (

    <section
      id='experience'
      className='py-24 px-6 bg-[#050505] text-white'
    >

      <div className='max-w-6xl mx-auto'>

        {/* HEADING */}
        <div className='text-center mb-16'>

          <h2 className='text-4xl md:text-6xl font-extrabold text-purple-400 mb-4'>
            Experience
          </h2>

          <p className='text-gray-400 text-sm md:text-lg'>
            My internship and development journey.
          </p>

        </div>

        {/* EXPERIENCE CARD */}
        <div className='bg-[#0d0d0d] border border-purple-500/30 rounded-3xl p-6 md:p-10 shadow-[0_0_40px_rgba(168,85,247,0.08)]'>

          {/* TOP */}
          <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8'>

            <div>

              <h3 className='text-3xl md:text-4xl font-bold mb-2'>
                Python Developer Intern
              </h3>

              <p className='text-purple-300 text-lg'>
                Softapper Tech Solutions
              </p>

            </div>

            <p className='text-gray-400 text-base md:text-lg'>
              June 2024 - July 2024
            </p>

          </div>

          {/* DESCRIPTION */}
          <p className='text-gray-300 leading-8 text-base md:text-lg mb-10'>

            Developed automation scripts using Python and optimized backend logic.
            Worked on backend development concepts, debugging, scripting, and
            gained hands-on experience during the internship program.

          </p>

          {/* BUTTONS */}
          <div className='flex flex-wrap gap-5'>

            {/* VIEW CERTIFICATE */}
            <a
              href={certificate}
              target='_blank'
              rel='noreferrer'
              className='px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-300 text-white font-semibold shadow-[0_0_25px_rgba(168,85,247,0.4)]'
            >
              View Certificate
            </a>

            {/* DOWNLOAD CERTIFICATE */}
            <a
              href={certificate}
              download
              className='px-8 py-3 rounded-full border border-purple-500 hover:bg-purple-600 transition duration-300 font-semibold'
            >
              Download Certificate
            </a>

          </div>

        </div>

      </div>

    </section>

  )
}