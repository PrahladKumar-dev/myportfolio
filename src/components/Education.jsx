export default function Education() {
  return (
    <section id='education' className='py-24 px-6 bg-black'>
      <div className='max-w-5xl mx-auto text-center'>
        <h2 className='text-5xl font-bold mb-16 text-purple-400'>
          Education
        </h2>

        <div className='grid md:grid-cols-2 gap-8'>
          <div className='bg-[#0d0d0d] border border-purple-500/30 rounded-3xl p-8 text-left'>
            <h3 className='text-2xl font-bold mb-3'>
              Bachelor of Computer Applications
            </h3>

            <p className='text-purple-300 mb-4'>
              CCSU Meerut | 2022 - 2025
            </p>
          </div>

          <div className='bg-[#0d0d0d] border border-purple-500/30 rounded-3xl p-8 text-left'>
            <h3 className='text-2xl font-bold mb-3'>
              Intermediate (Class XII)
            </h3>

            <p className='text-purple-300 mb-4'>
              CBSE Board | 2022
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}