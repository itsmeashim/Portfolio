import { Briefcase } from "@phosphor-icons/react"
import { Card } from "./ui/card"

export default function Experience() {
  const experiences = [
    {
      title: "Editor",
      company: "Thetechrim.com",
      description:
        "Wrote various technical articles for readers on thetechrim.com",
    },
    {
      title: "Co-founder and Editor",
      company: "Toptechpal.com",
      description:
        "Wrote various technical articles for readers on toptechpal.com",
    },
  ]

  return (
    <Card className='mb-8' id='experience'>
      <h2 className='text-2xl font-semibold mb-4 flex items-center'>
        <Briefcase className='mr-2' /> Experience
      </h2>
      {experiences.map((exp, index) => (
        <div key={index} className='mb-4 last:mb-0'>
          <h3 className='font-medium'>{exp.title}</h3>
          <p className='text-[#9B9CA0] font-light'>{exp.company}</p>
          <p className='text-[#9B9CA0] font-light'>{exp.description}</p>
        </div>
      ))}
    </Card>
  )
}
