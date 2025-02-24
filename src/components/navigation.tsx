export default function Navigation() {
  return (
    <nav className='mb-8 hidden md:block'>
      <div className='flex justify-center space-x-4'>
        <a href='#about' className='hover:text-accent-9 transition-colors'>
          About
        </a>
        <a
          href='#certifications'
          className='hover:text-accent-9 transition-colors'
        >
          Certifications
        </a>
        <a href='#projects' className='hover:text-accent-9 transition-colors'>
          Projects
        </a>
        <a
          href='#achievements'
          className='hover:text-accent-9 transition-colors'
        >
          Achievements
        </a>
        <a href='#experience' className='hover:text-accent-9 transition-colors'>
          Experience
        </a>
        <a href='#skills' className='hover:text-accent-9 transition-colors'>
          Skills
        </a>
        <a href='#contact' className='hover:text-accent-9 transition-colors'>
          Contact
        </a>
      </div>
    </nav>
  )
}
