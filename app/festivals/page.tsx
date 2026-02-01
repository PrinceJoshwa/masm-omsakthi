"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  CalendarDays,
  ArrowRight,
  Flame,
  Moon,
  Sparkles,
  Users,
  Flower
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

// --- Festival Data ---
const festivals = [
  {
    title: "Navaratri Maha Vizha",
    date: "Sep - Oct (9 Days)",
    desc: "A period of intense spiritual awakening celebrating Shakti. Unique for the empowerment of women, who perform the rituals including Abhishekam and Yagnas.",
    link: "/festivals/navaratri",
    icon: Flower,
    color: "text-pink-600",
    bg: "bg-pink-50",
    image: "https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/navratri_pcitav.jpg"
},
{
    title: "Pournami Vilakku Pooja",
    date: "Monthly (Full Moon)",
    desc: "A 'Day of Grace' where the universe's energy is at its peak. Thousands light the 'Arul Gnana Deepam' to dispel the darkness of ignorance and ego.",
    link: "/festivals/pournami-vilakku-pooja",
    icon: Sparkles,
    color: "text-yellow-600",
    bg: "bg-yellow-50",
    image: "https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/occasion_tkfaud.jpg"
  },
{
  title: "Chitra Pournami Velvi",
  date: "April - May (Full Moon)",
  desc: "The crown jewel of festivals featuring 1008 Yaga Kundams. A 'Public Welfare Yagna' to prevent global disasters and channel cosmic energy for individual peace.",
  link: "/festivals/chitra-pournami",
  icon: Flame,
  color: "text-orange-600",
  bg: "bg-orange-50",
  image: "https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/chitrapournami_aiszbx.jpg"
},
  {
    title: "Amavasai Velvi",
    date: "Monthly (New Moon)",
    desc: "A sacred day for ancestral connection. Devotees perform the fire ritual directly to cleanse 'Oolvinai' (karma) and receive blessings from their lineage.",
    link: "/festivals/amavasai-velvi",
    icon: Moon,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    image: "https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/occasion_tkfaud.jpg"
  }
]

export default function FestivalsPage() {
  return (
    <main className="bg-slate-50 overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center bg-[#a7150b]">
        <div className="absolute inset-0 z-0 opacity-40">
           {/* <Image 
             src="https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/dental-hospital.jpg?updatedAt=1767689427027"
             alt="Festival Background"
             fill
             className="object-cover mix-blend-multiply"
             priority
           /> */}
           <div className="absolute inset-0 bg-gradient-to-t from-[#a7150b] via-transparent to-transparent" />
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="inline-block mb-4">
              <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-[#ffc107] text-xs font-bold tracking-widest uppercase border border-white/20">
                Spiritual Celebrations
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
              Festivals of <span className="text-[#ffc107]">Transformation</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              Experience the divine vibrations at Melmaruvathur Siddhar Peedam through rituals that cleanse the soul, empower the individual, and heal the world.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= OVERVIEW SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
           <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
             className="space-y-6 text-slate-600 text-lg leading-relaxed"
           >
              <h2 className="text-3xl font-serif font-bold text-gray-900 tracking-tight">
                 More Than Just <span className="text-[#a7150b]">Rituals</span>
              </h2>
              <p>
                 At Melmaruvathur, festivals are not mere observational events; they are participatory spiritual movements. Under the guidance of <strong>Arulthiru Bangaru Adigalar (Amma)</strong>, every festival is designed to break social barriers—allowing women to lead yagnas, devotees to perform Abhishekam, and people of all backgrounds to serve together.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                 <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full text-sm font-semibold text-slate-700">
                    <Users className="w-4 h-4 text-[#a7150b]" /> Community Service (Thondu)
                 </div>
                 <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full text-sm font-semibold text-slate-700">
                    <Flame className="w-4 h-4 text-[#a7150b]" /> Fire Rituals (Velvi)
                 </div>
                 <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full text-sm font-semibold text-slate-700">
                    <Sparkles className="w-4 h-4 text-[#a7150b]" /> Spiritual Vibrations
                 </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* ================= FESTIVAL GRID ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
           <motion.div 
             variants={staggerContainer}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
           >
              {festivals.map((item, idx) => (
                 <motion.div key={idx} variants={fadeInUp} className="h-full">
                    <Link href={item.link} className="block h-full group">
                       <Card className="h-full border-none shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white flex flex-col rounded-3xl relative">
                          
                          {/* Image Header - Increased height to h-64 and changed object-fill to object-cover */}
                          <div className="relative h-64 w-full overflow-hidden">
                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                             <Image 
                                src={item.image} 
                                alt={item.title} 
                                fill 
                                className="object-fill group-hover:scale-110 transition-transform duration-700"
                             />
                             <div className="absolute bottom-4 left-6 z-20 flex items-center gap-2 text-white/90 text-xs font-bold uppercase tracking-wider">
                                <CalendarDays className="w-4 h-4 text-[#ffc107]" />
                                {item.date}
                             </div>
                          </div>

                          {/* Content */}
                          <div className="p-8 flex flex-col flex-1">
                             <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-serif font-bold text-gray-900 group-hover:text-[#a7150b] transition-colors">
                                   {item.title}
                                </h3>
                                <div className={`p-3 rounded-xl ${item.bg} ${item.color}`}>
                                   <item.icon className="w-6 h-6" />
                                </div>
                             </div>
                             
                             <p className="text-slate-600 leading-relaxed mb-8 flex-1 text-base">
                                {item.desc}
                             </p>

                             <div className="flex items-center text-[#a7150b] font-bold text-sm tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                                Explore Rituals <ArrowRight className="w-4 h-4 ml-2" />
                             </div>
                          </div>
                       </Card>
                    </Link>
                 </motion.div>
              ))}
           </motion.div>
        </div>
      </section>

      {/* ================= ONLINE SEVA BANNER ================= */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-4 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Participate From Anywhere</h2>
              <p className="text-white/80 text-lg mb-10 leading-relaxed">
                 "Distance is no barrier to the Mother's Grace." <br/>
                 If you cannot visit the Siddhar Peedam in person, you can participate in all major festivals through our Online Seva Portal.
              </p>
              <Link href="https://masm.omsakthiamma.in/" target="_blank" rel="noopener noreferrer">
                 <Button className="bg-[#ffc107] hover:bg-[#e6ac00] text-[#1a1a1a] font-bold text-lg px-8 py-6 rounded-full shadow-xl transition-transform hover:scale-105">
                    View Upcoming Online Sevas <ArrowRight className="w-5 h-5 ml-2" />
                 </Button>
              </Link>
           </motion.div>
        </div>
      </section>

    </main>
  )
}