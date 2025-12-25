"use client"

import Link from "next/link"
import Image from "next/image"
import logo from "@/assets/logo.png"
import { Github, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-[#020617] border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="container px-4 max-w-7xl mx-auto pt-20 pb-12 relative z-10">

                {/* Top Section: Brand */}
                <div className="mb-20 border-b border-white/5 pb-10">
                    <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                        <div className="relative w-48 h-12 mb-6 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                            <Image
                                src={logo}
                                alt="Cytec Cloud Logo"
                                fill
                                className="object-contain object-center"
                            />
                        </div>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Engineering intelligent digital futures with secure, scalable, and modern cloud-native technologies.
                        </p>
                    </div>
                </div>

                {/* Main Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <div>
                        <h4 className="font-bold text-white mb-6">Services</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link href="#services" className="text-slate-400 hover:text-primary transition-colors">Cloud Engineering</Link></li>
                            <li><Link href="#services" className="text-slate-400 hover:text-primary transition-colors">Microservices Architecture</Link></li>
                            <li><Link href="#services" className="text-slate-400 hover:text-primary transition-colors">AI & Data Analytics</Link></li>
                            <li><Link href="#services" className="text-slate-400 hover:text-primary transition-colors">DevOps Solutions</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link href="#about" className="text-slate-400 hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#careers" className="text-slate-400 hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#partners" className="text-slate-400 hover:text-primary transition-colors">Partners</Link></li>
                            <li><Link href="#news" className="text-slate-400 hover:text-primary transition-colors">News & Insights</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Resources</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link href="#docs" className="text-slate-400 hover:text-primary transition-colors">Documentation</Link></li>
                            <li><Link href="#security" className="text-slate-400 hover:text-primary transition-colors">Security</Link></li>
                            <li><Link href="#support" className="text-slate-400 hover:text-primary transition-colors">Support Center</Link></li>
                            <li><Link href="#contact" className="text-slate-400 hover:text-primary transition-colors">Contact Sales</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Socials</h4>
                        <div className="flex gap-4 mb-6">
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-black transition-all duration-300 border border-white/5">
                                <Linkedin className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-black transition-all duration-300 border border-white/5">
                                <Twitter className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-black transition-all duration-300 border border-white/5">
                                <Github className="w-4 h-4" />
                            </Link>
                        </div>
                        <p className="text-slate-500 text-sm">
                            Colombo 03, Sri Lanka <br />
                            hello@cyteccloud.com
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">&copy; {currentYear} Cytec Cloud (PVT) LTD. All rights reserved.</p>
                    <div className="flex gap-8 text-sm font-medium text-slate-500">
                        <Link href="#privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#cookies" className="hover:text-white transition-colors">Cookie Settings</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
