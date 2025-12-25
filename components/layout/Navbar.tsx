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
                    "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 transition-all duration-300",
                    isScrolled
                        ? "h-16 bg-[#050A14]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/10"
                        : "h-20 bg-white/[0.03] backdrop-blur-md border-b border-white/[0.02]"
                )}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-2">
                    <Link href="/" className="relative w-40 h-10 block grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                        <Image
                            src={logo}
                            alt="Cytec Cloud Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {[
                        { name: "Services", href: "#services" },
                        { name: "About", href: "#about" },
                        { name: "Work", href: "#work" },
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-slate-300 hover:text-[#00F0FF] transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00F0FF] group-hover:w-full transition-all duration-300" />
                        </Link>
                    ))}

                    <div className="w-px h-6 bg-white/10 mx-2" />

                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>

                    <Link
                        href="#contact"
                        className="bg-white/5 hover:bg-primary hover:text-black border border-white/10 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 backdrop-blur-md"
                    >
                        Contact Us
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        className="fixed inset-0 z-40 bg-[#050A14]/90 pt-28 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {[
                                { name: "Services", href: "#services" },
                                { name: "About", href: "#about" },
                                { name: "Work", href: "#work" },
                            ].map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-2xl font-medium text-slate-300 hover:text-[#00F0FF] transition-colors border-b border-white/5 pb-4"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <div className="flex items-center justify-between py-4 border-b border-white/5">
                                <span className="text-lg font-medium text-slate-300">Switch Theme</span>
                                <button
                                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                    className="p-3 rounded-full hover:bg-white/10 border border-white/10 text-slate-300"
                                >
                                    {theme === "dark" ? <Sun className="w-5 h-5 text-[#00F0FF]" /> : <Moon className="w-5 h-5" />}
                                </button>
                            </div>

                            <Link
                                href="#contact"
                                className="w-full bg-[#00F0FF] text-black px-4 py-3 rounded-lg font-bold text-center hover:opacity-90 transition-opacity mt-4"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence >
        </>
    )
}
