"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import logo from "@/assets/logo.png"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export function Navbar() {
    const { theme, setTheme } = useTheme()
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <motion.header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300",
                    isScrolled
                        ? "bg-background/70 backdrop-blur-xl border-b border-primary/10 shadow-lg shadow-black/5"
                        : "bg-transparent"
                )}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-2">
                    <div className="relative w-40 h-12">
                        <Image
                            src={logo}
                            alt="Cytec Cloud Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
                        Services
                    </Link>
                    <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                        About
                    </Link>
                    <Link href="#work" className="text-sm font-medium hover:text-primary transition-colors">
                        Work
                    </Link>
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="group relative p-2 rounded-full hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring flex items-center justify-center w-10 h-10"
                        aria-label="Toggle theme"
                    >
                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground" />
                        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground" />
                    </button>
                    <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium hover:opacity-90 transition-opacity">
                        Contact Us
                    </button>
                </nav>

                <button
                    className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            <Link
                                href="#services"
                                className="text-2xl font-medium text-foreground/80 hover:text-primary transition-colors border-b border-white/5 pb-4"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Services
                            </Link>
                            <Link
                                href="#about"
                                className="text-2xl font-medium text-foreground/80 hover:text-primary transition-colors border-b border-white/5 pb-4"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="#work"
                                className="text-2xl font-medium text-foreground/80 hover:text-primary transition-colors border-b border-white/5 pb-4"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Work
                            </Link>
                            <div className="flex items-center justify-between py-4 border-b border-white/5">
                                <span className="text-lg font-medium text-foreground/80">Switch Theme</span>
                                <button
                                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                    className="p-3 rounded-full hover:bg-white/5 transition-colors border border-white/10"
                                >
                                    {theme === "dark" ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5" />}
                                </button>
                            </div>
                            <button className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-md font-medium hover:opacity-90 transition-opacity">
                                Contact Us
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
