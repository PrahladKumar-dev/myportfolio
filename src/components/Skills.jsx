import htmlImg from '../assets/html.png'
import cssImg from '../assets/css.png'
import jsImg from '../assets/javascript.png'
import reactImg from '../assets/reactjs.png'
import reduxImg from '../assets/redux.png'
import tailwindImg from '../assets/tailwindcss.png'

import nodeImg from '../assets/nodejs.png'
import expressImg from '../assets/express.png'
import mongoImg from '../assets/mongodb.png'
import mysqlImg from '../assets/mysql.png'
import postgresImg from '../assets/postgre.png'

import gitImg from '../assets/git.png'
import githubImg from '../assets/github.png'
import vscodeImg from '../assets/vscode.png'
import postmanImg from '../assets/postman.png'
import vercelImg from '../assets/vercel.png'

const skills = {
  frontend: [
    { name: 'HTML5', image: htmlImg },
    { name: 'CSS3', image: cssImg },
    { name: 'JavaScript', image: jsImg },
    { name: 'React JS', image: reactImg },
    { name: 'Redux Toolkit', image: reduxImg },
    { name: 'Tailwind CSS', image: tailwindImg },
  ],

  backend: [
    { name: 'Node JS', image: nodeImg },
    { name: 'Express JS', image: expressImg },
    { name: 'MongoDB', image: mongoImg },
    { name: 'MySQL', image: mysqlImg },
    { name: 'PostgreSQL', image: postgresImg },
  ],

  tools: [
    { name: 'Git', image: gitImg },
    { name: 'GitHub', image: githubImg },
    { name: 'VS Code', image: vscodeImg },
    { name: 'Postman', image: postmanImg },
    { name: 'Vercel', image: vercelImg },
  ],
}

export default function Skills() {
  return (
    <section id='skills' className='py-20 px-6 bg-black'>

      <div className='max-w-6xl mx-auto'>

        <h2 className='text-5xl font-bold text-center mb-14 text-purple-400'>
          Skills
        </h2>

        <div className='grid md:grid-cols-3 gap-6'>

          {Object.entries(skills).map(([category, items]) => (

            <div
              key={category}
              className='bg-[#0b0b0b] border border-purple-500/20 rounded-3xl p-5 hover:border-purple-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:-translate-y-2 transition-all duration-300'
            >

              <h3 className='text-2xl font-bold capitalize mb-6 text-center text-purple-300'>
                {category}
              </h3>

              <div className='grid grid-cols-2 gap-4'>

                {items.map((skill) => (

                  <div
                    key={skill.name}
                    className='flex flex-col items-center justify-center gap-2 p-3 rounded-2xl bg-[#111111] border border-transparent hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.45)] hover:-translate-y-2 hover:bg-[#151515] transition-all duration-300 cursor-pointer'
                  >

                    <img
                      src={skill.image}
                      alt={skill.name}
                      className='w-10 h-10 object-contain hover:scale-110 transition duration-300'
                    />

                    <p className='text-white text-xs md:text-sm font-medium text-center'>
                      {skill.name}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}