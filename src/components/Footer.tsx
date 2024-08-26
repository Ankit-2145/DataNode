"use client";

import Link from "next/link";
import logoSvg from "./../../public/logo-svg.svg";
import Image from "next/image";

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
                  width={60}
                  height={60}
                />
              </div>
              <span className="font-medium text-xl">DataNode</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
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
                About DataNode
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-base font-medium dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
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
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between py-6">
          <span className="text-sm text-center dark:text-white">
            DataNode © {new Date().getFullYear()} | All rights reserved
          </span>
          <div className="flex mt-4 text-sm sm:justify-center sm:mt-0">
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
