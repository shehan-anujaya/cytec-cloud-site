"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Brain, Cloud, Radio, Share2, Rocket, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { GlowCard } from "@/components/ui/GlowCard"

const services = [
    {
        title: "Cloud-Native Dev",
        description: "Scalable, resilient applications built on modern serverless & container architectures.",
        icon: Cloud,
        glow: "#00F0FF"
    },
    {
        title: "Microservices",
        description: "Decoupled systems with robust API gateways for agility and scale.",
        icon: Share2,
        glow: "#A855F7"
    },
    {
        title: "AI & Data Solutions",
        description: "Unlock insights with advanced data engineering and predictive AI integration.",
        icon: Brain,
        glow: "#10B981"
    },
    {
        title: "Enterprise Systems",
        description: "Seamless integration with Telco, CRM, and Middleware platforms.",
        icon: Radio,
        glow: "#F59E0B"
    },
    {
        title: "DevOps & Cloud",
        description: "Automated CI/CD and infrastructure-as-code for rapid, reliable deployment.",
        icon: Rocket,
        glow: "#EF4444"
    },
    {
        title: "Mobile & Web",
        description: "High-performance cross-platform applications with premium UX.",
        icon: Smartphone,
        glow: "#3B82F6"
    },
    {
        title: "SaaS Engineering",
        description: "End-to-end product development from concept to market-ready solution.",
        icon: Code,
        glow: "#EC4899"
    },
    {
        title: "Team Augmentation",
        description: "Expert engineering teams ready to integrate and accelerate your delivery.",
        icon: Users,
        glow: "#6366F1"
    },
]

export function Services() {
    return (
        <section id="services" className="py-32 relative overflow-hidden bg-background">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            <div className="container px-4 relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="mb-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-4 block">Our Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                        Engineering <span className="text-slate-500">Capabilities</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        We build the digital backbone of modern enterprises with cloud-native precision.
                    </p>
                </motion.div>

                {/* Uniform Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="h-full"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <GlowCard
                                className="h-full flex flex-col items-start p-8 group border-white/5 bg-white/[0.02] hover:bg-white/[0.04]"
                                glowColor={service.glow}
                            >
                                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary/50 group-hover:bg-primary/20 transition-all duration-300">
                                    <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors">
                                    {service.description}
                                </p>
                            </GlowCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
