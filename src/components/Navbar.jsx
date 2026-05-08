export default function Navbar() {
  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-purple-500/20'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-purple-400'>
          &lt; Prahlad Kumar /&gt;
        </h1>

        <ul className='hidden md:flex gap-8 text-gray-300'>
          <li><a href='#about'>About</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#education'>Education</a></li>
        </ul>

        <div className='flex gap-4'>
          <a href='https://github.com/PrahladKumar-dev' target='_blank'>GitHub</a>
          <a href='https://www.linkedin.com/in/prahlad-kumar-38aa49312/' target='_blank'>LinkedIn</a>
        </div>
      </div>
    </nav>
  )
}