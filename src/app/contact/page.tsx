"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import MagicButton from "@/components/ui/MagicButton";

export default function Contact() {
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulating message send
    setTimeout(() => setIsMessageSent(true), 1000);
  };

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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="text-white placeholder:text-gray-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="text-white placeholder:text-gray-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="text-white placeholder:text-gray-400"
                  rows={4}
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
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <span className="transition-colors duration-300">
                    +1 (555) 123-4567
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
            <div className="bg-card rounded-lg p-8 shadow-lg transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Hangout hours
              </h2>
              <p className="text-white leading-8">
                Monday - Friday: 11:00 AM - 3:00 PM
                <br />
                Saturday: 11:00 AM - 12:00 PM
                <br />
                Sunday: Mail Us (we check our mailbox daily)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
