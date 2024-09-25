"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import logoSvg from "./../../public/logo-svg.svg";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Tech Trends & Updates",
    href: "/docs/primitives/alert-dialog",
    description:
      "Articles on Emerging Technologies.",
  },
  {
    title: "Project Ideas & Case Studies",
    href: "/docs/primitives/hover-card",
    description:
      "Real-world Case Studies & Ideas for you to build.",
  },
  {
    title: "Programming Resources",
    href: "/docs/primitives/progress",
    description:
      "Code Snippets & Programming Challenges",
  },
  {
    title: "Certifications",
    href: "/docs/primitives/scroll-area",
    description: "Certifications That Open Doors to New Opportunities.",
  },
  {
    title: "Success Stories",
    href: "/docs/primitives/tabs",
    description: "Real-Life Success Stories of Career Growth and Achievements.",
  },
  {
    title: "Resume & Interview Tips",
    href: "/docs/primitives/tooltip",
    description: "Craft a Winning Resume and Ace Your Interviews.",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="flex h-16 items-center px-8">
        <Link href={"/"}>
          <div className="mr-4 flex items-center">
            <Image src={logoSvg} alt="DataNode Logo" width={40} height={40} />
            <span className="font-bold text-xl ml-1">DataNode</span>
          </div>
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
          <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          <NavigationMenuItem>
              <Link href="/academics" legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                >
                  Academics
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                Careers
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Career Pathways
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Discover the Right Career Path for Your Future
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Skill Development">
                    Master the Skills Needed to Succeed in the Industry
                  </ListItem>
                  <ListItem
                    href="/docs/installation"
                    title="Resume & Interview Tips"
                  >
                    Craft a Winning Resume and Ace Your Interviews
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Master's Programs"
                  >
                    Discover Top Master&apos;s Programs in Your Field
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                >
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex md:hidden ml-auto">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden hover:cursor-pointer"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
                <SheetDescription>Access all pages from here.</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-4">
                <Link
                  href="/"
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === "/" ? "text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Getting Started</h4>
                  <Link
                    href="/docs"
                    className={cn(
                      "block text-sm transition-colors hover:text-primary",
                      pathname === "/docs"
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    Introduction
                  </Link>
                  <Link
                    href="/docs/installation"
                    className={cn(
                      "block text-sm transition-colors hover:text-primary",
                      pathname === "/docs/installation"
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    Installation
                  </Link>
                  <Link
                    href="/docs/primitives/typography"
                    className={cn(
                      "block text-sm transition-colors hover:text-primary",
                      pathname === "/docs/primitives/typography"
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    Typography
                  </Link>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Components</h4>
                  {components.map((component) => (
                    <Link
                      key={component.title}
                      href={component.href}
                      className={cn(
                        "block text-sm transition-colors hover:text-primary",
                        pathname === component.href
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {component.title}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/docs"
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === "/docs"
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Documentation
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === "/contact"
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
                <Link
                  href="/login"
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === "/login"
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="https://github.com/Ankit-2145/DataNode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <FaGithub size={28} />
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <div className="ml-auto hidden md:flex items-center space-x-4 cursor-pointer">
          <Button variant="ghost" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Link
            href="https://github.com/Ankit-2145/DataNode"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <FaGithub size={28} />
          </Link>
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
