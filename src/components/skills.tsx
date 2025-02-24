import { Card } from "./ui/card"

// Skills component
export default function Skills() {
  const skills = {
    Languages: ["Python", "Golang", "Javascript", "Solidity", "Bash"],
    Frameworks: ["Django", "FASTAPI", "Flask"],
    Tools: [
      "Git",
      "Docker",
      "Kubernetes",
      "Google Cloud Platform",
      "Linux",
      "BurpSuite",
      "Wireshark",
      "Vim",
    ],
  }

  return (
    <Card className='mb-8' id='skills'>
      <h2 className='text-2xl font-semibold mb-4'>Technical Skills</h2>
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className='mb-4 last:mb-0'>
          <h3 className='font-semibold mb-2'>{category}</h3>
          <div className='flex flex-wrap gap-2'>
            {skillList.map((skill, index) => (
              <span
                key={index}
                className='bg-[#212223] text-[#9B9CA0] px-2 py-1 rounded'
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </Card>
  )
}
