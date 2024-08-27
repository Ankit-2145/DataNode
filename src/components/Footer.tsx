"use client";

import Link from "next/link";
import logoSvg from "./../../public/logo-svg.svg";
import Image from "next/image";
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-custom-gradient">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-0">
        <div className="md:flex md:justify-between lg:py-8">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <div className="mr-2">
                <Image
                  src={logoSvg}
                  alt="DataNode Logo"
                  width={50}
                  height={50}
                />
              </div>
              <span className="font-medium text-2xl">DataNode</span>
            </Link>
            <div className="flex items-center gap-6 my-8 mx-2">
              <Link href="">
                <FaSquareXTwitter size={32} />
              </Link>
              <Link href="https://github.com/Ankit-2145/DataNode">
                <FaGithub size={32} />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 my-5">
            <div>
              <h2 className="mb-6 text-base font-medium dark:text-white">
                Resources
              </h2>
              <ul className="text-white text-sm font-normal">
                <li className="mb-4">
                  <Link href="BCA/getting-started" className="hover:underline">
                    Academics
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="BCA/semesters/Semester-1"
                    className="hover:underline"
                  >
                    BCA Semesters
                  </Link>
                </li>
                <li>
                  <Link
                    href="BCA/semesters/Syllabus-1"
                    className="hover:underline"
                  >
                    BCA Syllabus
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-base font-medium dark:text-white">
                Company
              </h2>
              <ul className="text-white text-sm font-normal">
                <li className="mb-4">
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-base font-medium dark:text-white">
                Legal
              </h2>
              <ul className="text-white text-sm font-normal">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/BCA/Training" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between md:py-6">
          <span className="text-sm text-center mt-4 md:mt-0 dark:text-white">
            DataNode © {new Date().getFullYear()} | All rights reserved
          </span>
          <div className="flex mt-4 md:mt-0 text-sm sm:justify-center sm:mt-0">
            <Link href="https://sspinnacle.com" target="_blank">
              Powered By Pinnacle Smart solutions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
