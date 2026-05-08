import authImg from '../assets/auth.png'
import sentifyImg from '../assets/sentify.png'
import lightImg from '../assets/light.png'

const projects = [
  {
    title: 'MERN Secure Authentication System',
    desc: 'Secure authentication flow using JWT and bcrypt authentication.',
    tech: ['MongoDB', 'Express', 'React', 'Node'],
    link: 'https://secureauth-frontend-2xf6.vercel.app/',
    image: authImg,
  },

  {
    title: 'SentiFy E-Commerce Store',
    desc: 'Modern full-stack e-commerce platform with responsive UI.',
    tech: ['React', 'Tailwind', 'Node JS'],
    link: 'https://prahladkumar-dev.github.io/Sentify/index.html',
    image: sentifyImg,
  },

  {
    title: 'Interactive Light Reveal UI',
    desc: 'Interactive lighting effect using animations and JavaScript.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://prahladkumar-dev.github.io/lightbulb-project/',
    image: lightImg,
  },
]

export default function Projects() {
  return (
    <section
      id='projects'
      className='py-20 px-6 bg-black text-white'
    >
      <div className='max-w-7xl mx-auto'>

        {/* HEADING */}
        <div className='text-center mb-14'>

          <p className='text-purple-400 tracking-[4px] uppercase mb-3 text-sm'>
            My Work
          </p>

          <h2 className='text-3xl md:text-4xl font-bold'>
            Featured Projects
          </h2>

        </div>

        {/* PROJECTS */}
        <div className='flex flex-wrap justify-center gap-6'>

          {projects.map((project) => (

            <div
              key={project.title}
              className='bg-[#0b0b0b] rounded-2xl overflow-hidden border border-purple-500/20 hover:-translate-y-2 hover:border-purple-500 transition duration-300 shadow-[0_0_15px_rgba(168,85,247,0.08)] w-[320px]'
            >

              {/* IMAGE */}
              <div className='overflow-hidden'>

                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-40 object-cover hover:scale-105 transition duration-500'
                />

              </div>

              {/* CONTENT */}
              <div className='p-4'>

                {/* TITLE */}
                <h3 className='text-lg font-bold mb-2 leading-tight'>
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className='text-gray-400 leading-6 mb-4 text-sm'>
                  {project.desc}
                </p>

                {/* TECH STACK */}
                <div className='flex flex-wrap gap-2 mb-5'>

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className='px-3 py-1 rounded-full text-xs bg-purple-500/15 border border-purple-500/20 text-purple-300'
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* BUTTON */}
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block w-full text-center px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition duration-300 font-medium text-sm'
                >
                  View Live Project
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  )
}