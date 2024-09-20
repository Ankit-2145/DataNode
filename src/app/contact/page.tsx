"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Github,
  Twitter,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import MagicButton from "@/components/ui/MagicButton";
import { FaArrowRight } from "react-icons/fa6";

export default function Contact() {
  const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState(false);

  return (
      <div className="min-h-screen text-white">
        {/* Hero Section */}
        <section className="flex items-center justify-center overflow-hidden">
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl leading-normal mt-28 text-transparent bg-clip-text bg-custom-gradient tracking-tight text-center font-semibold">
              Get in Touch
            </h1>
            <p className="text-base text-center max-w-sm md:max-w-xl tracking-wider leading-8 mt-2.5 mb-10 text-gray-500">
              We love to hear{" "}
              <span className="text-transparent bg-clip-text bg-custom-gradient italic">
                Hi
              </span>{" "}
              from our users
            </p>
          </div>
        </section>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12 max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 shadow-xl">
              <h2 className="text-3xl font-semibold mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-white transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-white transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-white transition-all duration-300"
                    rows={4}
                  />
                </div>
                <MagicButton
                  title="Send Message"
                  icon={<FaArrowRight />}
                  position="right"
                  otherClasses="w-full rounded-md"
                />
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 shadow-xl">
                <h2 className="text-3xl font-semibold mb-6">Contact Info</h2>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6" />
                    <span>Solan, Himachal Pradesh, India</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Phone className="w-6 h-6" />
                    <span>+1 (555) 123-4567</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Mail className="w-6 h-6" />
                    <span>hello@awesomecompany.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
  );
}
