const skills = {
  frontend: ['HTML5', 'CSS3', 'JavaScript', 'React JS', 'Redux Toolkit', 'Tailwind CSS'],
  backend: ['Node JS', 'Express JS', 'MongoDB', 'MySQL', 'PostgreSQL'],
  tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel'],
}

export default function Skills() {
  return (
    <section id='skills' className='py-24 px-6 bg-[#050505]'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-5xl font-bold text-center mb-16 text-purple-400'>
          Skills
        </h2>

        <div className='grid md:grid-cols-3 gap-8'>
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className='bg-[#0d0d0d] border border-purple-500/30 rounded-3xl p-8'
            >
              <h3 className='text-3xl font-bold capitalize mb-8 text-center text-purple-300'>
                {category}
              </h3>

              <div className='flex flex-wrap gap-4 justify-center'>
                {items.map((skill) => (
                  <span
                    key={skill}
                    className='px-5 py-3 rounded-full bg-purple-500/10 border border-purple-500/40'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}