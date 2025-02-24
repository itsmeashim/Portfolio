interface SparkAppProps {
  children: React.ReactNode
}

export default function SparkApp({ children }: SparkAppProps) {
  return (
    <div className='min-h-screen bg-[#111114]'>
      <div className='font-mono max-w-7xl mx-auto pt-15 px-3'>{children}</div>
    </div>
  )
}
