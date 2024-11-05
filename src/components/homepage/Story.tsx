"use client"

import { ArrowDownRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export default function Story() {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <section className="flex pt-8 px-5 pb-16 justify-center items-center">
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="inline-block"
            >
                <Link href="/" className="flex items-center hover:blur-[3px]">
                    <p className="text-[70px] md:text-[130px] xl:text-[168px] text-white tracking-tighter">
                        Story
                    </p>
                    <motion.div
                        animate={{ rotate: isHovered ? -45 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ArrowDownRight className="text-white h-24 w-24 md:h-52 md:w-52" />
                    </motion.div>
                </Link>
            </div>
        </section>
    )
}