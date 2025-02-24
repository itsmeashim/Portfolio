import { Code, GithubLogo, LinkSimple } from "@phosphor-icons/react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "./ui/button"
import { Card } from "./ui/card"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

export type Project = {
  name: string
  description: string
  technologies: string[]
  image: string
  github: string
  link: string
}

// Projects component
export default function Projects({
  onProjectSelect,
}: {
  onProjectSelect: (project: Project) => void
}) {
  const projects = [
    {
      name: "Certchain",
      description:
        "Full-stack web application using Next.js, Nest.js, PostgreSQL, and Docker",
      technologies: ["Next.js", "Nest.js", "PostgreSQL", "Docker"],
      image:
        "https://pub-fd007d5f398b466586835c6748dd01d2.r2.dev/certchain-preview.jpg",
      github: "https://github.com/itsmeashim/Certchain-app",
      link: "https://certchain.co",
    },
    {
      name: "LeftOverLift",
      description:
        "Web3 project for Vertex Hackathon using Solidity and Next.js",
      technologies: ["Solidity", "Next.js", "Thirdweb"],
      image:
        "https://pub-fd007d5f398b466586835c6748dd01d2.r2.dev/leftoverlift-preview.jpg",
      github: "https://github.com/projectashik/meta-goblins-vertex",
      link: "https://devfolio.co/projects/leftoverlift-7a40",
    },
    {
      name: "ghchk and shochk",
      description: "Golang scripts to check valid GitHub and Shodan.io keys",
      technologies: ["Golang"],
      image:
        "https://pub-fd007d5f398b466586835c6748dd01d2.r2.dev/gochk-shochk-preview.jpg",
      github: "https://github.com/itsmeashim/ghchk",
      link: "https://github.com/itsmeashim/shochk",
    },
  ]

  return (
    <Card className='mb-8' id='projects'>
      <h2 className='text-2xl font-semibold mb-4 flex items-center'>
        <Code className='mr-2' /> Projects
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {projects.map((project, index) => (
          <Card
            key={index}
            className='p-4 cursor-pointer flex flex-col justify-between'
            onClick={() => onProjectSelect(project)}
          >
            <h3 className='font-semibold mb-2'>{project.name}</h3>
            <div className='flex space-x-2 mb-2'>
              {project.github && (
                <Tooltip>
                  <TooltipTrigger>
                    <a
                      href={project.github}
                      target='_blank'
                      className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "p-2"
                      )}
                      rel='noopener noreferrer'
                    >
                      <GithubLogo />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>GitHub</TooltipContent>
                </Tooltip>
              )}
              {project.link && (
                <Tooltip>
                  <TooltipTrigger>
                    <a
                      href={project.link}
                      target='_blank'
                      className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "p-2"
                      )}
                      rel='noopener noreferrer'
                    >
                      <LinkSimple />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>Visit</TooltipContent>
                </Tooltip>
              )}
            </div>
            <p className='text-fg-secondary mb-2'>{project.description}</p>
            {project.image && (
              <img
                src={`//wsrv.nl?url=${project.image}&w=600&h=500&format=jpg`}
                alt={project.name}
                className='mb-2 w-full object-cover'
              />
            )}
            <Button variant='default' className='mt-2 justify-self-end '>
              View Details
            </Button>
          </Card>
        ))}
      </div>
    </Card>
  )
}
