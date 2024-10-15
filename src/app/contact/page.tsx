'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Mail, Send } from "lucide-react"
import MagicButton from "@/components/ui/MagicButton"

export default function Contact() {
  const [isMessageSent, setIsMessageSent] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "15d3c890-1153-4639-9c8a-42a933fbfe46",
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    })
    const result = await response.json()
    if (result.success) {
      console.log(result)
      setIsMessageSent(true)
      // Clear form fields
      setFormData({
        name: '',
        email: '',
        message: ''
      })
      // Reset the success message after 5 seconds
      setTimeout(() => setIsMessageSent(false), 5000)
    }
  }

  return (
    <div className="w-full dark:bg-black dark:bg-dot-white/[0.2] relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl leading-normal mt-28 text-transparent bg-clip-text bg-custom-gradient tracking-tight text-center font-semibold">
            Get in Touch
          </h1>
          <p className="text-base text-center max-w-sm md:max-w-xl tracking-wider leading-8 mt-2.5 mb-10 text-muted-foreground">
            We value your feedback and are here to assist you. Feel free to
            reach out with any questions or concerns.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-14">
          {/* Contact Form */}
          <div className="bg-card rounded-lg p-8 shadow-lg transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-6 text-white">
              Send us a message
            </h2>
            {isMessageSent && (
              <div className="bg-green-500 text-white p-4 rounded-md mb-6">
                Your message has been sent successfully!
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="text-white placeholder:text-gray-400" required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="text-white placeholder:text-gray-400" required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="text-white placeholder:text-gray-400" 
                  rows={4} required
                />
              </div>
              <MagicButton
                title="Send Message"
                icon={<Send />}
                position="right"
                otherClasses="mt-14 w-full"
                ButtonType="submit"
              />
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card rounded-lg p-8 shadow-lg transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-6 text-white">
                Contact Information
              </h2>
              <ul className="space-y-6">
                <li className="flex items-center space-x-4 group">
                  <div className="bg-custom-gradient p-3 rounded-full transition-all duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <span className="transition-colors duration-300">
                    Solan, Himachal Pradesh, India
                  </span>
                </li>
                <li className="flex items-center space-x-4 group">
                  <div className="bg-custom-gradient p-3 rounded-full transition-all duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <span className="transition-colors duration-300">
                    contact@datanode.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}