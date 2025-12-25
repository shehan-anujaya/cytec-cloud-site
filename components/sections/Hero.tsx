"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Cloud, Zap, Shield, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export function Hero() {
    const { scrollY } = useScroll()
    const y1 = useTransform(scrollY, [0, 500], [0, 200])
    const y2 = useTransform(scrollY, [0, 500], [0, -150])

    const [lightningActive, setLightningActive] = useState(false)

    // Random lightning effect
    useEffect(() => {
        const triggerLightning = () => {
            setLightningActive(true)
            setTimeout(() => setLightningActive(false), 200) // Flash duration

            // Schedule next flash (random between 5s and 15s)
            const nextFlashDelay = Math.random() * 10000 + 5000
            setTimeout(triggerLightning, nextFlashDelay)
        }

        const timer = setTimeout(triggerLightning, 3000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 bg-background selection:bg-primary/30">
            {/* Ambient Background Layers */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Deep Gradient Base */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#050A14] to-[#0B1121]" />

                {/* Cloud/Fog Layers */}
                <div className="absolute top-0 inset-x-0 h-[600px] bg-primary/5 blur-[120px] opacity-40 mix-blend-screen" />
                <div className="absolute bottom-[-100px] left-[-200px] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] mix-blend-screen" />
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] mix-blend-screen" />

                {/* Lightning Flash Overlay */}
                <div
                    className={`absolute inset-0 bg-white/5 z-10 transition-opacity duration-100 ${lightningActive ? 'opacity-100' : 'opacity-0'}`}
                    style={{ mixBlendMode: 'overlay' }}
                />
            </div>

            <div className="container px-4 z-10 relative max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-center">

                    {/* Left Column: Content */}
                    <motion.div
                        className="flex-1 text-center lg:text-left pt-10 lg:pt-0"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg shadow-black/10 hover:border-primary/30 transition-colors group"
                        >
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
                            <span className="text-sm font-medium text-slate-300 tracking-wide">
                                Next-Gen Cloud Architecture
                            </span>
                        </motion.div>

                        <motion.h1
                            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white leading-[1.1]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Powering <br className="hidden lg:block" />
                            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#0080FF] to-[#00F0FF] bg-[length:200%_auto] animate-gradient">
                                Intelligent
                                <svg className="absolute w-full h-3 bottom-1 left-0 text-primary/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span> <br />
                            Enterprise Growth
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            We engineer high-performance cloud platforms that scale effortlessly.
                            Secure, intelligent, and built for the future of digital business.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <Link href="/contact" className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-primary px-8 text-base font-semibold text-black transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_30px_-5px_rgba(0,240,255,0.6)]">
                                <span className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12" />
                                <span className="relative flex items-center gap-2">
                                    Start Transformation
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Link>
                            <Link href="#services" className="inline-flex h-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-8 text-base font-medium text-white shadow-sm backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20">
                                View Solutions
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Visual Architecture */}
                    <motion.div
                        className="flex-1 w-full max-w-[600px] lg:max-w-none relative"
                        style={{ y: y1 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        {/* Glow Behind */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-blue-600/10 rounded-full blur-3xl" />

                        {/* Main Glass Panel */}
                        <div className="relative aspect-square md:aspect-[4/3] bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-black/50 overflow-hidden ring-1 ring-white/5">
                            {/* Grid Overlay */}
                            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />

                            {/* Animated Connection Lines (SVG) */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                                <motion.path
                                    d="M100 100 Q 200 50 300 150 T 500 100"
                                    stroke="url(#gradient-line)"
                                    strokeWidth="2"
                                    fill="none"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
                                />
                                <defs>
                                    <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#00F0FF" stopOpacity="0" />
                                        <stop offset="50%" stopColor="#00F0FF" />
                                        <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Floating Architecture Nodes */}
                            <div className="relative h-full w-full">
                                {/* Center Node */}
                                <motion.div
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-xl bg-[#0B1121] border border-primary/30 shadow-[0_0_30px_-5px_rgba(0,240,255,0.2)] z-20"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <Cloud className="w-12 h-12 text-primary" />
                                </motion.div>

                                {/* Satellite 1 */}
                                <motion.div
                                    className="absolute top-[20%] right-[20%] p-3 rounded-lg bg-[#0F172A] border border-white/10 shadow-lg z-10"
                                    animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                >
                                    <Zap className="w-6 h-6 text-yellow-400" />
                                </motion.div>

                                {/* Satellite 2 */}
                                <motion.div
                                    className="absolute bottom-[25%] left-[15%] p-3 rounded-lg bg-[#0F172A] border border-white/10 shadow-lg z-10"
                                    animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                >
                                    <Shield className="w-6 h-6 text-emerald-400" />
                                </motion.div>

                                {/* Code Snippet Block */}
                                <motion.div
                                    className="absolute bottom-8 right-8 bg-black/40 backdrop-blur-md rounded-lg border border-white/5 p-4 font-mono text-xs text-slate-400 w-48 shadow-xl"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1 }}
                                >
                                    <div className="flex gap-1.5 mb-2 opacity-50">
                                        <div className="w-2 h-2 rounded-full bg-white" />
                                        <div className="w-2 h-2 rounded-full bg-white" />
                                        <div className="w-2 h-2 rounded-full bg-white" />
                                    </div>
                                    <div className="space-y-1">
                                        <p><span className="text-purple-400">deploy</span>(target);</p>
                                        <p><span className="text-blue-400">scaling</span>: <span className="text-green-400">auto</span>;</p>
                                        <p className="text-primary animate-pulse">_optimized</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
