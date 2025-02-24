import { Card } from "./ui/card"

export default function About() {
  return (
    <Card className='mb-8 p-5' id='about'>
      <h2 className='text-2xl font-semibold mb-4'>About Me</h2>
      <p className='text-fg-secondary'>
        Passionate cybersecurity enthusiast with a strong foundation in
        programming and web technologies. Committed to continuous learning and
        staying up-to-date with the latest security trends and best practices.
      </p>
    </Card>
  )
}
