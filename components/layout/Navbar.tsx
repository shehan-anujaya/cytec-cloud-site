"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import logo from "@/assets/logo.png"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export function Navbar() {
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
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6 pointer-events-none">
            <motion.header
                className={cn(
                    "w-full max-w-7xl flex items-center justify-between px-8 py-3 transition-all duration-500 pointer-events-auto",
                    "border rounded-2xl backdrop-blur-3xl shadow-2xl transition-all",
                    isScrolled
                        ? "h-16 bg-[#050A14]/60 border-white/[0.1] shadow-black/40 -translate-y-2"
                        : "h-20 bg-white/[0.03] border-white/[0.08] shadow-transparent"
                )}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                {/* Logo Section */}
                <Link href="/" className="relative flex items-center gap-2">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative w-40 h-10"
                    >
                        <Image
                            src={logo}
                            alt="Cytec Cloud Logo"
                            fill
                            className="object-contain object-left grayscale opacity-90 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                            priority
                        />
                    </motion.div>
                </Link>

                {/* Desktop Nav - Aligned items */}
                <nav className="hidden md:flex items-center gap-10">
                    {[
                        { name: "Services", href: "#services" },
                        { name: "About", href: "#about" },
                        { name: "Work", href: "#work" },
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative text-sm font-medium text-slate-300 transition-colors hover:text-white group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full opacity-60" />
                        </Link>
                    ))}

                    <div className="w-px h-6 bg-white/10 mx-2" />

                    <Link
                        href="#contact"
                        className="relative group overflow-hidden px-6 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all duration-300"
                    >
                        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                        <span className="relative z-10 text-sm font-bold text-white group-hover:text-primary transition-colors">
                            Contact Us
                        </span>
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </motion.button>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[49] bg-black/40 backdrop-blur-sm md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ type: "spring", damping: 20, stiffness: 300 }}
                            className="fixed top-24 left-4 right-4 z-[50] p-6 rounded-3xl border border-white/10 bg-[#050A14]/90 backdrop-blur-2xl shadow-2xl md:hidden"
                        >
                            <div className="flex flex-col gap-4">
                                {[
                                    { name: "Services", href: "#services" },
                                    { name: "About", href: "#about" },
                                    { name: "Work", href: "#work" },
                                ].map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-xl font-medium text-slate-300 hover:text-primary transition-colors py-2"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}

                                <Link
                                    href="#contact"
                                    className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-center hover:shadow-[0_0_20px_-5px_rgba(0,128,255,0.4)] transition-all mt-4"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}
