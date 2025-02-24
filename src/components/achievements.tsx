import { ArrowRight, Trophy } from "@phosphor-icons/react"
import { Card } from "./ui/card"

// Achievements component
export default function Achievements() {
  const achievements = [
    {
      name: "Best Use of Web3 for LeftOverLift",
      image:
        "https://pub-fd007d5f398b466586835c6748dd01d2.r2.dev/leftoverlift-achiev.jpg",
      link: "https://devpost.com/software/leftoverlift",
    },
    {
      name: "Stored XSS on tags in Concrete CMS (CVE-2023-28476)",
      image:
        "https://pub-fd007d5f398b466586835c6748dd01d2.r2.dev/cve-achiev.jpg",
      link: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-28476",
    },
  ]

  return (
    <Card className='mb-8' id='achievements'>
      <h2 className='text-2xl font-semibold mb-4 flex items-center'>
        <Trophy className='mr-2' /> Achievements
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {achievements.map((achievement, index) => (
          <Card key={index} className='p-4'>
            <h3 className='font-semibold mb-2'>{achievement.name}</h3>
            {achievement.image && (
              <img
                src={`//wsrv.nl?url=${achievement.image}&w=600&h=500&format=jpg`}
                alt={achievement.name}
                className='mb-2 w-full h-full object-cover'
              />
            )}
            {achievement.link && (
              <a
                href={achievement.link}
                className='flex underline text-sm items-center'
              >
                View Achievement <ArrowRight className='ml-1' />
              </a>
            )}
          </Card>
        ))}
      </div>
    </Card>
  )
}
