import { GithubLogo, LinkSimple, X } from "@phosphor-icons/react"
import { Project } from "./projects"
import { Button } from "./ui/button"
import { Dialog, DialogClose, DialogContent } from "./ui/dialog"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
// ProjectDialog component
export default function ProjectDialog({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className='max-h-screen overflow-y-auto'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-2xl font-semibold'>{project.name}</h2>
          <DialogClose asChild>
            <Button variant='ghost' aria-label='Close'>
              <X />
            </Button>
          </DialogClose>
        </div>
        <div className='flex space-x-2 mb-4'>
          {project.github && (
            <Tooltip>
              <TooltipTrigger>
                <Button
                  variant='ghost'
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <GithubLogo />
                </Button>
              </TooltipTrigger>
              <TooltipContent>GitHub</TooltipContent>
            </Tooltip>
          )}
          {project.link && (
            <Tooltip>
              <TooltipTrigger>
                <Button
                  variant='ghost'
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <LinkSimple />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Visit</TooltipContent>
            </Tooltip>
          )}
        </div>
        <p className='text-fg-secondary mb-4'>{project.description}</p>
        {project.image && (
          <img
            src={`//wsrv.nl?url=${project.image}&w=600&h=500&format=jpg`}
            alt={project.name}
            className='mb-4 w-full h-64 object-cover'
          />
        )}
        <h3 className='font-semibold mb-2'>Technologies Used:</h3>
        <div className='flex flex-wrap gap-2 mb-4'>
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className='bg-[#212223] text-[#9B9CA0] px-2 py-1 rounded'
            >
              {tech}
            </span>
          ))}
        </div>

        <DialogClose asChild>
          <Button variant='secondary'>Close</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
