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
        <div className="fixed top-2 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <motion.header
                className={cn(
                    "flex items-center gap-8 px-6 transition-all duration-500 pointer-events-auto",
                    "border rounded-full backdrop-blur-3xl shadow-2xl",
                    isScrolled
                        ? "h-14 bg-[#050A14]/60 border-white/[0.12] shadow-black/60 scale-[0.95] translate-y-2"
                        : "h-16 bg-white/[0.03] border-white/[0.08] shadow-black/20"
                )}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                {/* Logo Section - Keep it compact */}
                <Link href="/" className="relative shrink-0">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative w-32 h-6"
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

                {/* Desktop Nav - Tight spacing for pill feel */}
                <nav className="hidden md:flex items-center gap-1">
                    {[
                        { name: "Services", href: "#services" },
                        { name: "About", href: "#about" },
                        { name: "Work", href: "#work" },
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative px-4 py-1.5 text-xs font-semibold text-slate-300 transition-colors hover:text-white group"
                        >
                            <span className="relative z-10">{item.name}</span>
                            <motion.span
                                className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"
                                layoutId="nav-bg"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        </Link>
                    ))}

                    <div className="w-px h-4 bg-white/10 mx-3" />

                    <Link
                        href="#contact"
                        className="relative group"
                    >
                        <div className="relative bg-primary px-5 py-2 rounded-full text-xs font-bold text-white transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_15px_-3px_rgba(0,128,255,0.5)] active:scale-95">
                            Contact Us
                        </div>
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-slate-300"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
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
