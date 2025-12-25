"use client"

import { motion } from "framer-motion"
import { CheckCircle2, ShieldCheck, Globe2, Rocket, Award, Users } from "lucide-react"

const features = [
    {
        title: "Engineering Excellence",
        description: "We don't cut corners. We deliver robust, maintainable code built on industry best practices.",
        icon: Award,
    },
    {
        title: "Cloud-Native DNA",
        description: "Born in the cloud. Architectures designed for AWS, Azure, and GCP scalability from day one.",
        icon: Rocket,
    },
    {
        title: "Global Standards",
        description: "Agile delivery, transparent communication, and flexible engagement models for global clients.",
        icon: Globe2,
    },
    {
        title: "Enterprise Security",
        description: "Security-first approach with ISO-guided processes and rigorous DevSecOps pipelines.",
        icon: ShieldCheck,
    },
    {
        title: "Proven Track Record",
        description: "Trusted by enterprises for mission-critical systems in FinTech, Telco, and Healthcare.",
        icon: CheckCircle2,
    },
    {
        title: "Top-Tier Talent",
        description: "Access a pool of highly skilled engineers and architects ready to solve complex problems.",
        icon: Users,
    },
]

export function WhyChooseUs() {
    return (
        <section id="why-choose-us" className="py-32 bg-[#020617] relative border-t border-white/5">
            <div className="container px-4 max-w-7xl mx-auto">
                {/* Header - Centered for Alignment */}
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                        Why Enterprises <span className="text-primary">Choose Cytec</span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        Partner with a team that understands the intersection of business value and technical excellence.
                    </p>
                </motion.div>

                {/* Features Grid - 3 Columns Uniform */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="group p-8 rounded-2xl bg-[#0F172A]/40 border border-white/5 hover:border-primary/30 transition-all duration-300 hover:bg-[#0F172A] hover:shadow-2xl hover:shadow-primary/5"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                                <feature.icon className="w-7 h-7" />
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                                {feature.title}
                            </h3>

                            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
