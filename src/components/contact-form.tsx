import React from "react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

export default function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = React.useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })
  const [isLoading, setIsLoading] = React.useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: null, message: "" })

    try {
      const message = `
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
      `
      const response = await fetch("/api/discord", {
        method: "POST",
        body: JSON.stringify({ message }),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setFormData({ name: "", email: "", message: "" })
      setStatus({
        type: "success",
        message: "Message sent successfully! Thank you for contacting.",
      })
    } catch (error) {
      console.error("Error sending message:", error)
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className='mb-8' id='contact'>
      <h2 className='text-2xl font-semibold mb-4'>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='name' className='block mb-2'>
            Name
          </label>
          <Input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block mb-2'>
            Email
          </label>
          <Input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='message' className='block mb-2'>
            Message
          </label>
          <Textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>
        <Button type='submit' variant='default' disabled={isLoading}>
          {isLoading ? "Sending..." : "Send Message"}
        </Button>
        {status.type && (
          <div
            className={`mt-4 p-3 rounded ${
              status.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {status.message}
          </div>
        )}
      </form>
    </Card>
  )
}
