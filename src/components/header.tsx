import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  Shield,
} from "@phosphor-icons/react"
import { buttonVariants } from "./ui/button"

export default function Header() {
  return (
    <header className='mb-8 text-center'>
      <h1 className='text-5xl font-bold mb-4 inline-block relative'>
        <Shield className='md:inline-block hidden  mr-2 text-accent-9' /> Ashim
        Chapagain
      </h1>
      <div className='flex flex-col md:flex-row items-center md:items-start justify-center space-x-4 mb-4'>
        <a
          href='mailto:ashimqwe@icloud.com'
          className='flex items-center hover:text-accent-9 transition-colors'
        >
          <Envelope className='mr-1' /> ashimqwe@icloud.com
        </a>
        <a
          href='https://linkedin.com/in/itsashim'
          className='flex items-center hover:text-accent-9 transition-colors'
          target='_blank'
        >
          <LinkedinLogo className='mr-1' /> LinkedIn
        </a>
        <a
          href='https://github.com/itsmeashim'
          className='flex items-center hover:text-accent-9 transition-colors'
          target='_blank'
        >
          <GithubLogo className='mr-1' /> GitHub
        </a>
      </div>
      <div className='flex gap-2 justify-center items-center'>
        <a
          href='https://pub-fd007d5f398b466586835c6748dd01d2.r2.dev/resume.pdf'
          target='_blank'
          className={buttonVariants({
            variant: "default",
            className: "mt-4 mr-2 custom-cv-button",
          })}
        >
          Download CV
        </a>
        <a
          href='#contact'
          className={buttonVariants({
            variant: "ghost",
            className: "mt-4 block md:hidden mr-2 custom-cv-button",
          })}
        >
          Contact
        </a>
      </div>
    </header>
  )
}
