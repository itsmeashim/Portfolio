import { ArrowRight, Certificate } from "@phosphor-icons/react"
import { Card } from "./ui/card"

// Certifications component
export default function Certifications() {
  const certifications = [
    {
      name: "Junior Penetration Tester",
      issuer: "INE",
      id: "79637734",
      image:
        "https://pub-fd007d5f398b466586835c6748dd01d2.r2.dev/ejpt-cert.jpg",
      link: "https://certs.ine.com/3d71626f-7480-479f-97a6-d0c6a75dd981#acc.k9hDvHsm",
    },
    {
      name: "Programming with Google Go Specialization",
      issuer: "University of California, Irvine",
      id: "PXAKEW5RGGDW",
      image:
        "https://pub-fd007d5f398b466586835c6748dd01d2.r2.dev/golang-cert.jpg",
      link: "https://www.coursera.org/account/accomplishments/specialization/PXAKEW5RGGDW",
    },
    {
      name: "OWASP Top 10 - 2021",
      issuer: "Infosec",
      id: "CN8XN3ES53TH",
      image:
        "https://pub-fd007d5f398b466586835c6748dd01d2.r2.dev/owasp-cert.jpg",
      link: "https://www.coursera.org/account/accomplishments/specialization/CN8XN3ES53TH",
    },
    {
      name: "Javascript Security",
      issuer: "Infosec",
      id: "CQH45QRXV9VY",
      image:
        "https://pub-fd007d5f398b466586835c6748dd01d2.r2.dev/javascript-cert.jpg",
      link: "https://www.coursera.org/account/accomplishments/specialization/CQH45QRXV9VY",
    },
  ]

  return (
    <Card className='mb-8' id='certifications'>
      <h2 className='text-2xl font-semibold mb-4 flex items-center'>
        <Certificate className='mr-2' /> Certifications
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {certifications.map((cert, index) => (
          <Card key={index} className='p-4'>
            <h3 className='font-semibold mb-2'>{cert.name}</h3>
            <p className='text-fg-secondary mb-2'>{cert.issuer}</p>
            <p className='text-fg-secondary mb-2'>ID: {cert.id}</p>
            {cert.image && (
              <img
                src={`//wsrv.nl?url=${cert.image}&w=600&h=500&format=jpg`}
                alt={cert.name}
                className='mb-2 w-full h-full object-cover'
              />
            )}
            {cert.link && (
              <a
                href={cert.link}
                className='flex underline text-sm items-center'
                target='_blank'
              >
                View Certificate <ArrowRight className='ml-1' />
              </a>
            )}
          </Card>
        ))}
      </div>
    </Card>
  )
}
