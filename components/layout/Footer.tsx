"use client"

import Link from "next/link"
import Image from "next/image"
import logo from "@/assets/logo.png"
import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer id="contact" className="bg-[#020617] border-t border-white/5 pt-20 pb-10">
            <div className="container px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="relative w-36 h-10 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <Image
                                    src={logo}
                                    alt="Cytec Cloud Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                            Engineering Intelligent Digital Futures. We enable digital transformation with secure, scalable, and modern cloud-native technologies.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-black transition-all duration-300">
                                <Linkedin className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-black transition-all duration-300">
                                <Twitter className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-black transition-all duration-300">
                                <Github className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Services</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#services" className="text-slate-400 hover:text-primary transition-colors">Cloud-Native Dev</Link></li>
                            <li><Link href="#services" className="text-slate-400 hover:text-primary transition-colors">Microservices</Link></li>
                            <li><Link href="#services" className="text-slate-400 hover:text-primary transition-colors">AI & Data Solutions</Link></li>
                            <li><Link href="#services" className="text-slate-400 hover:text-primary transition-colors">Enterprise Systems</Link></li>
                            <li><Link href="#services" className="text-slate-400 hover:text-primary transition-colors">DevOps Outsourcing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#about" className="text-slate-400 hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#why-choose-us" className="text-slate-400 hover:text-primary transition-colors">Why Choose Us</Link></li>
                            <li><Link href="#careers" className="text-slate-400 hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#contact" className="text-slate-400 hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link href="#privacy" className="text-slate-400 hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3 text-slate-400">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span>123 Tech Park, Innovation Drive, <br />Colombo 03, Sri Lanka</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <a href="mailto:hello@cyteccloud.com" className="hover:text-primary transition-colors">hello@cyteccloud.com</a>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <a href="tel:+94763006300" className="hover:text-primary transition-colors">+94 76 300 6300</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs text-center md:text-left">
                    <p>&copy; {currentYear} Cytec Cloud (PVT) LTD. All rights reserved.</p>
                    <p>Designed  &  Developed by Cytec Engineering</p>
                </div>
            </div>
        </footer>
    )
}
