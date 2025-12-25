"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Brain, Cloud, Radio, Share2, Rocket, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { GlowCard } from "@/components/ui/GlowCard"

const services = [
    {
        title: "Cloud-Native Software Development",
        description: "Build scalable, resilient applications using cloud-native architectures and modern development practices.",
        icon: Cloud,
        className: "md:col-span-2",
        glow: "#00F0FF"
    },
    {
        title: "Microservices & API Engineering",
        description: "Design and implement microservices architectures with robust API gateways and event-driven systems.",
        icon: Share2,
        className: "md:col-span-1",
        glow: "#A855F7"
    },
    {
        title: "Data Engineering & AI Solutions",
        description: "Data streaming, analytics, and AI integration to unlock insights and drive intelligent decision-making.",
        icon: Brain,
        className: "md:col-span-1",
        glow: "#10B981"
    },
    {
        title: "Enterprise Integrations",
        description: "Seamless integration with Telco, CRM, Billing, and Middleware systems for unified business operations.",
        icon: Radio,
        className: "md:col-span-2",
        glow: "#F59E0B"
    },
    {
        title: "DevOps & Cloud Deployment",
        description: "Automated CI/CD pipelines and cloud deployment strategies for rapid, reliable releases.",
        icon: Rocket,
        className: "md:col-span-2 md:row-span-1",
        glow: "#EF4444"
    },
    {
        title: "Web & Mobile Applications",
        description: "Modern web and mobile applications built with cutting-edge technologies and best practices.",
        icon: Smartphone,
        className: "md:col-span-1",
        glow: "#3B82F6"
    },
    {
        title: "SaaS Product Engineering",
        description: "End-to-end SaaS product development from concept to scalable cloud-based solutions.",
        icon: Code,
        className: "md:col-span-1",
        glow: "#EC4899"
    },
    {
        title: "IT Resource Outsourcing",
        description: "Dedicated teams and IT resource outsourcing to extend your development capabilities.",
        icon: Users,
        className: "md:col-span-2",
        glow: "#6366F1"
    },
]

export function Services() {
    return (
        <section id="services" className="py-32 relative overflow-hidden bg-background">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}
            />

            <div className="container px-4 relative z-10">
                <motion.div
                    className="mb-20 max-w-2xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-4 block">What We Do</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Engineering Capabilities</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Comprehensive cloud-native solutions tailored to accelerate your digital transformation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={cn("h-full", service.className)} // Wrapper for grid positioning
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <GlowCard
                                className="h-full flex flex-col justify-between group"
                                glowColor={service.glow}
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500 pointer-events-none">
                                    <service.icon className="w-32 h-32" />
                                </div>

                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                                        <service.icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                                        {service.description}
                                    </p>
                                </div>
                            </GlowCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
