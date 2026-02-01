"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Flame,
  Moon,
  Users,
  HandHeart,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Briefcase,
  Baby,
  ArrowRight,
  Ghost
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

export default function AmavasaiVelviPage() {
  return (
    <main className="bg-slate-50 overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center bg-[#1a1a1a]">
        <div className="absolute inset-0 z-0">
           {/* Placeholder for Amavasai / Fire Ritual Image */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-[#a7150b]/40 to-black/60 z-10" />
           <Image 
             src="https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/mapims-12.jpg?updatedAt=1767689426630" // Replace with Amavasai Velvi image
             alt="Amavasai Velvi"
             fill
             className="object-cover opacity-60"
             priority
           />
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="inline-block mb-4">
              <span className="px-5 py-2 rounded-full bg-[#ffc107] text-[#1a1a1a] text-xs font-bold tracking-widest uppercase shadow-lg border border-yellow-500/50">
                Ancestral Grace
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-3xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-xl">
              Amavasai <span className="text-[#ffc107]">Velvi</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-yellow-50 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
              A sacred opportunity for deep spiritual cleansing, removing life's obstacles, and connecting with ancestral blessings.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= INTRO: WHY AMAVASAI? ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
               initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
               className="space-y-6 text-slate-600 text-lg leading-relaxed"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 tracking-tight">
                 The Ritual of <span className="text-[#a7150b]">Transformation</span>
              </h2>
              <p>
                 Under the guidance of <strong>Arulthiru Bangaru Adigalar (Amma)</strong>, Amavasai (New Moon) is not just a lunar phase but a cornerstone ritual for millions. In spiritual science, this is the ideal time for internal reflection and addressing ancestral bondages.
              </p>

              <div className="space-y-4 mt-4">
                 <div className="bg-slate-50 p-5 rounded-2xl border-l-4 border-[#a7150b]">
                    <h4 className="font-bold text-gray-900 flex items-center gap-2 mb-2">
                       <Ghost className="w-5 h-5 text-[#a7150b]"/> Honoring Ancestors
                    </h4>
                    <p className="text-sm text-slate-600">
                       The Velvi acts as a "spiritual feast." Offerings made into the fire satisfy the souls of ancestors, earning their blessings for the family.
                    </p>
                 </div>
                 
                 <div className="bg-slate-50 p-5 rounded-2xl border-l-4 border-[#ffc107]">
                    <h4 className="font-bold text-gray-900 flex items-center gap-2 mb-2">
                       <Sparkles className="w-5 h-5 text-yellow-600"/> Karmic Cleansing
                    </h4>
                    <p className="text-sm text-slate-600">
                       It is a powerful day to burn away <em>Oolvinai</em> (past karmic debts) and neutralize the effects of <em>Pithru Dosham</em> (ancestral curses).
                    </p>
                 </div>
              </div>
            </motion.div>

            {/* Right Side - Image/Graphic */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-slate-50"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
                   {/* <Moon className="text-[#ffc107]/20 w-64 h-64 absolute" />
                   <Flame className="text-[#a7150b] w-32 h-32 relative z-10 animate-pulse" /> */}
                  <span className="text-white/50 absolute bottom-10 font-bold">Image: 1008 Yaga Kundam</span>
               </div>
            <Image src="https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/occasion_tkfaud.jpg" fill alt="Navaratri Ritual" className="object-fill" />
               
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= KEY RITUALS GRID ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
           <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
             className="text-center mb-16"
           >
              <span className="text-[#a7150b] font-bold tracking-widest uppercase text-xs mb-2 block">Sacred Procedures</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">Layers of Devotion</h2>
           </motion.div>

           <div className="grid md:grid-cols-3 gap-8">
              
              {/* The Velvi */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                 <Card className="h-full p-8 border-none shadow-lg bg-white rounded-3xl hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-orange-600">
                       <Flame className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Velvi (Fire Ritual)</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                       Devotees directly participate in the 1008 Yaga Kundam ritual.
                    </p>
                    <div className="bg-orange-50 p-4 rounded-xl text-xs text-orange-900 leading-relaxed">
                       <strong>Process:</strong> Devotees circle sacred materials (Ahuthi) around their heads three times to remove negativity before offering them into the fire.
                    </div>
                 </Card>
              </motion.div>

              {/* Angavalam */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.1 }}>
                 <Card className="h-full p-8 border-none shadow-lg bg-white rounded-3xl hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                       <RotateCcw className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Angavalam</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                       Devotees perform circumambulation by rolling around the temple in wet clothes.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-xl text-xs text-blue-900 leading-relaxed">
                       <strong>Significance:</strong> Connects the devotee to nature. Sincere performance is believed to be powerful enough to bring rain to parched lands.
                    </div>
                 </Card>
              </motion.div>

              {/* Thondu */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}>
                 <Card className="h-full p-8 border-none shadow-lg bg-white rounded-3xl hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-600">
                       <HandHeart className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Thondu (Service)</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                       Selfless service is the fastest way to dissolve ego.
                    </p>
                    <div className="bg-green-50 p-4 rounded-xl text-xs text-green-900 leading-relaxed">
                       <strong>Benefit:</strong> Dedicated service changes one’s karmic laws and acts as a protective shield (Kavasam) for the devotee.
                    </div>
                 </Card>
              </motion.div>

           </div>
        </div>
      </section>

      {/* ================= REMEDIES & BENEFITS ================= */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12">
                  
                  {/* Specialized Remedies */}
                  <div className="space-y-8">
                      <h3 className="text-2xl font-serif font-bold text-gray-900">Specialized Remedies</h3>
                      
                      <div className="flex gap-4">
                          <div className="shrink-0 w-10 h-10 rounded-full bg-[#a7150b]/10 flex items-center justify-center text-[#a7150b]">
                              <ShieldCheck className="w-5 h-5" />
                          </div>
                          <div>
                              <h4 className="font-bold text-gray-900">Neutralizing Negative Energies</h4>
                              <p className="text-sm text-slate-600 mt-1">
                                  For those suffering from "Evil Eye" (Drishti), offerings are made to Mother Atharvana Bhadrakali. Participating for 3 consecutive Amavasais brings significant shifts.
                              </p>
                          </div>
                      </div>

                      <div className="flex gap-4">
                          <div className="shrink-0 w-10 h-10 rounded-full bg-[#ffc107]/20 flex items-center justify-center text-yellow-700">
                              <HandHeart className="w-5 h-5" />
                          </div>
                          <div>
                              <h4 className="font-bold text-gray-900">Charity & Gifting</h4>
                              <p className="text-sm text-slate-600 mt-1">
                                  Performing Annadhanam (feeding the poor) and Vastra Dhanam (gifting clothes) is highly recommended to reduce sins and improve health.
                              </p>
                          </div>
                      </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-[#1a1a1a] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-6 opacity-10"><Sparkles size={150} /></div>
                      <h3 className="text-2xl font-serif font-bold mb-6 text-[#ffc107]">Benefits of Participation</h3>
                      <ul className="space-y-6 relative z-10">
                          <li className="flex items-start gap-4">
                              <Users className="w-6 h-6 text-[#ffc107] shrink-0" />
                              <div>
                                  <h4 className="font-bold text-lg">Family Unity</h4>
                                  <p className="text-gray-400 text-sm">Healing broken relationships and bringing peace to the household.</p>
                              </div>
                          </li>
                          <li className="flex items-start gap-4">
                              <Briefcase className="w-6 h-6 text-[#ffc107] shrink-0" />
                              <div>
                                  <h4 className="font-bold text-lg">Professional Growth</h4>
                                  <p className="text-gray-400 text-sm">Removing barriers in business and career advancements.</p>
                              </div>
                          </li>
                          <li className="flex items-start gap-4">
                              <Baby className="w-6 h-6 text-[#ffc107] shrink-0" />
                              <div>
                                  <h4 className="font-bold text-lg">Life Milestones</h4>
                                  <p className="text-gray-400 text-sm">Targeted prayers for those facing delays in marriage or childbirth.</p>
                              </div>
                          </li>
                      </ul>
                  </div>

              </div>
          </div>
      </section>

      {/* ================= ONLINE SEVA CTA ================= */}
      <section className="py-24 bg-[#a7150b] text-white relative overflow-hidden">
         <div className="container mx-auto px-4 relative z-10 text-center">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-3xl mx-auto">
                 <div className="w-20 h-20 bg-[#ffc107] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                    <Ghost className="w-10 h-10 text-[#1a1a1a]" />
                 </div>
                 
                 <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Receive Amavasai Grace at Home</h2>
                 
                 <p className="text-white/90 text-lg mb-10 leading-relaxed">
                     For devotees unable to travel to the Peedam, you can participate in the Amavasai Velvi Sankalpam online. Your name and Nakshatra will be included in the mass prayers.
                 </p>
                 
                 <div className="inline-block bg-black/20 backdrop-blur-sm rounded-xl px-6 py-4 mb-8 border border-white/10">
                    <p className="font-semibold text-[#ffc107] text-sm uppercase tracking-wide mb-1">Prasadam Includes</p>
                    <p className="text-white text-sm">Energized Sacred Ash (Vibhuthi) & Rakshai (Protective Thread)</p>
                 </div>

                 <div className="block">
                    <Link href="https://masm.omsakthiamma.in/donate-other/?c=A7" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-[#ffc107] hover:bg-[#e6ac00] text-[#1a1a1a] font-bold text-lg px-10 py-7 rounded-full shadow-2xl transition-transform hover:scale-105">
                            Register for Online Velvi <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </Link>
                 </div>
             </motion.div>
         </div>
      </section>

    </main>
  )
}