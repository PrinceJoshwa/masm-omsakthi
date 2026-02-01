"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Flame,
  Globe,
  Sparkles,
  Zap,
  Dna,
  Box,
  Flower,
  ArrowRight,
  Droplets,
  Heart
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
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

export default function ChitraPournamiPage() {
  return (
    <main className="bg-slate-50 overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center bg-[#a7150b]">
        <div className="absolute inset-0 z-0">
           {/* Placeholder for Chitra Pournami / Yagna Fire Image */}
           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#a7150b]/60 to-[#a7150b]/80 z-10" />
           <Image 
             src="https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/mapims-12.jpg?updatedAt=1767689426630" // Replace with Chitra Pournami specific image
             alt="Chitra Pournami Yagna"
             fill
             className="object-cover"
             priority
           />
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="inline-block mb-4">
              <span className="px-5 py-2 rounded-full bg-[#ffc107] text-[#1a1a1a] text-xs font-bold tracking-widest uppercase shadow-lg">
                The Grand Chitra Pournami
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-3xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-md">
              1008 Kalasa Vilakku <br/> <span className="text-[#ffc107]">Maha Velvi</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-yellow-50 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
              A Global Spiritual Vibration to prevent disasters and provide individual relief, envisioned by Arulthiru Bangaru Adigalar.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
           <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
             className="space-y-6 text-slate-600 text-lg leading-relaxed"
           >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 tracking-tight">
                 The <span className="text-[#a7150b]">Podhunala Velvi</span> (Public Welfare Yagna)
              </h2>
              <p>
                 Performed during the auspicious full moon of the Chithirai month, this is the crown jewel of festivals at Melmaruvathur Siddhar Peedam. Its purpose is to create a global spiritual vibration to prevent natural disasters, pandemics, and wars, while providing individual relief to millions of devotees.
              </p>
              <div className="w-24 h-1 bg-[#ffc107] mx-auto rounded-full mt-8" />
           </motion.div>
        </div>
      </section>

      {/* ================= 1008 YAGA KUNDAMS ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
           <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
             className="text-center mb-16"
           >
              <span className="text-[#a7150b] font-bold tracking-widest uppercase text-xs mb-2 block">Sacred Architecture</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">The 1008 Yaga Kundams</h2>
              <p className="max-w-2xl mx-auto mt-4 text-slate-600">
                  These are not mere fire pits; they are "Siddha Energy Converters" built in sacred geometric shapes to channel specific cosmic powers.
              </p>
           </motion.div>

           <div className="grid md:grid-cols-2 gap-8">
              
              {/* Soolayutha */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                 <Card className="h-full p-8 border-none shadow-lg bg-white rounded-3xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5"><Zap size={100} /></div>
                    <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 text-[#a7150b]">
                       <Zap className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Soolayutha Yaga Kundam</h3>
                    <p className="text-[#a7150b] text-xs font-bold uppercase tracking-wider mb-4">The Trident of Transformation</p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                       The primary weapon of Mother Adi Parashakti, representing the destruction of Ego, Karma, and Illusion.
                    </p>
                    <div className="bg-red-50 p-4 rounded-xl text-xs font-semibold text-red-900">
                       <strong className="block mb-1 text-sm">Benefit:</strong>
                       Ideally for those suffering from chronic illness, deep mental agony, and spiritual blocks. The fire "cuts through" obstacles for immediate relief.
                    </div>
                 </Card>
              </motion.div>

              {/* Naga Yaga */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.1 }}>
                 <Card className="h-full p-8 border-none shadow-lg bg-white rounded-3xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5"><Dna size={100} /></div>
                    <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-600">
                       <Dna className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Naga Yaga Kundam</h3>
                    <p className="text-green-700 text-xs font-bold uppercase tracking-wider mb-4">The Serpent of Lineage</p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                       Designed in the shape of intertwined serpents, focusing on the "Life Force" to cleanse genetic lineage.
                    </p>
                    <div className="bg-green-50 p-4 rounded-xl text-xs font-semibold text-green-900">
                       <strong className="block mb-1 text-sm">Benefit:</strong>
                       Ultimate remedy for Naga/Kala Sarpa Dosham and ancestral curses (Pithru). Sought for marriage delays, family disputes, and child conception.
                    </div>
                 </Card>
              </motion.div>

              {/* Prapancha */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}>
                 <Card className="h-full p-8 border-none shadow-lg bg-white rounded-3xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5"><Globe size={100} /></div>
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                       <Globe className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Prapancha Chakra Kundam</h3>
                    <p className="text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">The Universal Zodiac Grid</p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                       A massive arrangement representing the 12 Zodiac signs (Rasis) and 27 Stars (Nakshatras).
                    </p>
                    <div className="bg-blue-50 p-4 rounded-xl text-xs font-semibold text-blue-900">
                       <strong className="block mb-1 text-sm">Benefit:</strong>
                       Harmonizes individual destiny with planetary movements. Promotes success in agriculture, business stability, and protection from planetary afflictions.
                    </div>
                 </Card>
              </motion.div>

              {/* Geometric */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.3 }}>
                 <Card className="h-full p-8 border-none shadow-lg bg-white rounded-3xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5"><Box size={100} /></div>
                    <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6 text-yellow-600">
                       <Box className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Geometric Chakkras</h3>
                    <p className="text-yellow-700 text-xs font-bold uppercase tracking-wider mb-4">Elemental Shapes</p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        Sacred shapes invoking elemental powers: Square (Earth), Triangle (Fire), and Circle (Space).
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-xl text-xs font-semibold text-yellow-900">
                       <strong className="block mb-1 text-sm">Benefit:</strong>
                       Grants property blessings, financial security (Square), success in education/intellect (Triangle), and inner calm/spiritual liberation (Circle).
                    </div>
                 </Card>
              </motion.div>

           </div>
        </div>
      </section>

      {/* ================= KEY RITUALS PROCEDURES ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <motion.div 
               initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
               className="text-center mb-16"
            >
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Sacred Ritual Procedures</h2>
            </motion.div>

            <div className="max-w-5xl mx-auto space-y-8">
                {/* Ritual 1 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex gap-6 items-start">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-[#ffc107] flex items-center justify-center font-bold text-[#1a1a1a] text-xl">1</div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Go-Puja (Worship of the Sacred Cow)</h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Before the fires are lit, a Go-Puja is performed to bring "Aishwarya" (divine wealth) and ensure the purity of the Ghee and milk used in the Yagna.
                        </p>
                    </div>
                </motion.div>

                {/* Ritual 2 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex gap-6 items-start">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-[#a7150b] flex items-center justify-center font-bold text-white text-xl">2</div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Kalasa Vilakku Puja</h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Thousands of women (Sakthis) dressed in red robes perform this ritual. The Kalasam represents the body, water the soul, and the lamp the awakening of Kundalini energy. This revolutionary practice allows women to lead fire rituals for family welfare.
                        </p>
                    </div>
                </motion.div>

                {/* Ritual 3 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex gap-6 items-start">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center font-bold text-white text-xl">3</div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Navadhanyam Offering</h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            During the climax, nine types of grains are offered into the 1008 fires. Each grain corresponds to a celestial body, acting as a collective prayer to heal the Earth and ensure food security for humanity.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* ================= ONLINE SEVA CTA ================= */}
      <section className="py-24 bg-[#1a1a1a] text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 p-10 opacity-5 pointer-events-none">
             <Sparkles size={300} />
         </div>
         
         <div className="container mx-auto px-4 relative z-10 text-center">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-4xl mx-auto">
                 <div className="inline-flex items-center gap-2 bg-[#ffc107]/20 text-[#ffc107] px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                     <Globe className="w-4 h-4" />
                     <span>Digital Seva Portal</span>
                 </div>
                 
                 <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Receive the Power at Home</h2>
                 
                 <div className="grid md:grid-cols-3 gap-6 text-left mb-10 text-gray-300">
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h4 className="text-[#ffc107] font-bold mb-2">Individual Sankalpam</h4>
                        <p className="text-sm text-gray-300">Your name, Rasi, and Nakshatra recited during mass prayers at the 1008 Yaga Kundams.</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h4 className="text-[#ffc107] font-bold mb-2">Targeted Blessings</h4>
                        <p className="text-sm text-gray-300">Choose specifically between Naga Velvi (Family/Marriage) or Soolayutha Velvi (Health).</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h4 className="text-[#ffc107] font-bold mb-2">Prasadam Delivery</h4>
                        <p className="text-sm text-gray-300">Energized Vibhuthi, Kumkum, and Rakshai (Protective Thread) delivered to your doorstep.</p>
                    </div>
                 </div>

                 <Link href="https://masm.omsakthiamma.in/donate-chitrapournami/" target="_blank" rel="noopener noreferrer">
                     <Button className="bg-[#ffc107] hover:bg-[#e6ac00] text-[#1a1a1a] font-bold text-lg px-10 py-7 rounded-full shadow-2xl transition-transform hover:scale-105">
                         Register for Online Velvi <ArrowRight className="w-5 h-5 ml-2" />
                     </Button>
                 </Link>
             </motion.div>
         </div>
      </section>

    </main>
  )
}