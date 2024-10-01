'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Resources',
      links: [
        { name: 'Academics', href: '/BCA/getting-started' },
        { name: 'BCA Syllabus', href: '/BCA/semesters/Syllabus-1' },
        { name: 'BCA Semesters', href: '/BCA/semesters/Semester-1' },
        { name: 'BCA Community', href: 'https://bcacommunity.netlify.app/', external: true },
        { name: "Previous Year's Question Papers", href: '/academics' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/legal/privacy-policy' },
        { name: 'Terms & Conditions', href: '/legal/terms-and-conditions' },
      ],
    },
  ]

  const socialLinks = [
    { name: 'Twitter', href: 'https://x.com/Ankit__46', icon: FaSquareXTwitter },
    { name: 'GitHub', href: 'https://github.com/Ankit-2145/DataNode', icon: FaGithub },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ankit-sharma-03a680218/', icon: FaLinkedin },
  ]

  return (
    <footer className=" text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center group">
              <Image 
                src="/logo-svg.svg" 
                alt="DataNode Logo" 
                width={50} 
                height={50} 
                className="mr-2 transition-transform duration-300" 
              />
              <span className="font-medium text-2xl">DataNode</span>
            </Link>
            <div className="flex items-center gap-6 my-8 pl-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-110"
                  aria-label={`Visit our ${link.name} page`}
                >
                  <link.icon size={32} />
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h2 className="mb-6 text-base font-medium">{section.title}</h2>
                <ul className="text-sm font-normal">
                  {section.links.map((link) => (
                    <li key={link.name} className="mb-4 font-medium text-gray-500 hover:text-white transition-all duration-150">
                      <Link
                        href={link.href}
                        className="transition-all duration-300 relative group"
                        {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-custom-gradient transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="flex flex-col sm:flex-row items-center sm:justify-between">
          <span className="text-sm text-center sm:text-left">
            DataNode © {currentYear} | All rights reserved
          </span>
          <div className="mt-4 sm:mt-0">
            <Link
              href="https://sspinnacle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-all duration-300 relative group"
            >
              Powered By Pinnacle Smart Solutions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-custom-gradient transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer