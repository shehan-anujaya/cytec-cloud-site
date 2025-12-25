"use client"

import { motion } from "framer-motion"
import { CheckCircle2, ShieldCheck, Globe2, Rocket, Award, Users, ChevronRight } from "lucide-react"

const features = [
    {
        title: "Engineering Excellence",
        description: "Quality and reliability above all — we deliver solutions built to last using best-in-class patterns.",
        icon: Award,
    },
    {
        title: "Cloud-Native DNA",
        description: "Built for scalability, performance, and resilience from the ground up on AWS, Azure, and GCP.",
        icon: Rocket,
    },
    {
        title: "Global Delivery Approach",
        description: "Adaptable to business demands with agile methodologies and flexible engagement models.",
        icon: Globe2,
    },
    {
        title: "Proven Experience",
        description: "Track record in mission-critical enterprise projects across FinTech, Telco, and Healthcare.",
        icon: CheckCircle2,
    },
    {
        title: "Security-First Approach",
        description: "Compliance-aligned delivery processes with ISO-based best practices and DevSecOps.",
        icon: ShieldCheck,
    },
    {
        title: "Highly Skilled Talent",
        description: "Access to top-tier engineering talent and subject matter experts ready to integrate.",
        icon: Users,
    },
]

export function WhyChooseUs() {
    return (
        <section id="why-choose-us" className="py-32 bg-[#020617] relative">
            <div className="container px-4">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Sticky Header Left */}
                    <motion.div
                        className="lg:w-1/3 lg:sticky lg:top-32"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                            Why Enterprises <br />
                            <span className="text-primary">Choose Cytec</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            We don't just write code. We engineer intelligent systems that drive real business growth.
                            Partner with us for digital transformation done right.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 text-white font-medium">
                                <div className="w-8 h-[1px] bg-primary"></div>
                                <span>Expert Engineering Team</span>
                            </div>
                            <div className="flex items-center gap-3 text-white font-medium">
                                <div className="w-8 h-[1px] bg-primary"></div>
                                <span>Enterprise-Grade Security</span>
                            </div>
                            <div className="flex items-center gap-3 text-white font-medium">
                                <div className="w-8 h-[1px] bg-primary"></div>
                                <span>24/7 Support & Maintenance</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Features Grid Right */}
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="group p-8 rounded-2xl bg-[#0F172A]/50 border border-white/5 hover:border-primary/30 transition-all duration-300 hover:bg-[#0F172A]"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-primary transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
