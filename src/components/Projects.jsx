import authImg from '../assets/auth.png'
import sentifyImg from '../assets/sentify.png'
import lightImg from '../assets/light.png'
import calculatorImg from '../assets/calculator.png'
import portfolioImg from '../assets/portfolio.png'

const projects = [
  {
    title: 'MERN Secure Authentication System',
    desc: 'Secure authentication flow using JWT, bcrypt authentication and protected routes with full MERN stack integration.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    link: 'https://secureauth-frontend-2xf6.vercel.app/',
    image: authImg,
  },

  {
    title: 'SentiFy E-Commerce Store',
    desc: 'Modern full-stack e-commerce platform with responsive UI, shopping features and smooth user experience.',
    tech: ['React', 'Tailwind', 'Node.js'],
    link: 'https://prahladkumar-dev.github.io/Sentify/index.html',
    image: sentifyImg,
  },

  {
    title: 'Interactive Light Reveal UI',
    desc: 'Creative interactive lighting animation effect built using JavaScript and smooth CSS transitions.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://prahladkumar-dev.github.io/lightbulb-project/',
    image: lightImg,
  },

  {
    title: 'Modern Calculator App',
    desc: 'Beautiful responsive calculator with glowing neon UI, hover effects and smooth modern interactions.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://prahladkumar-dev.github.io/calculator-app/',
    image: calculatorImg,
  },

  {
    title: 'Personal Portfolio Website',
    desc: 'Fully responsive personal portfolio showcasing projects, skills, experience and modern frontend design.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    link: 'https://prahladkumar-dev.github.io/myportfolio/',
    image: portfolioImg,
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
        <div className='flex flex-wrap justify-center gap-8'>

          {projects.map((project) => (

            <div
              key={project.title}
              className='group bg-[#0b0b0b] rounded-2xl overflow-hidden border border-purple-500/20 hover:-translate-y-2 hover:border-purple-500 transition duration-300 shadow-[0_0_15px_rgba(168,85,247,0.08)] w-[320px]'
            >

              {/* IMAGE */}
              <div className='overflow-hidden h-44'>

                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition duration-500'
                />

              </div>

              {/* CONTENT */}
              <div className='p-5'>

                {/* TITLE */}
                <h3 className='text-xl font-bold mb-3 leading-tight'>
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className='text-gray-400 leading-6 mb-5 text-sm'>
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
                  className='inline-block w-full text-center px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 transition duration-300 font-medium text-sm'
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