"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Flame,
  Moon,
  ShieldCheck,
  Heart,
  Sparkles,
  Users,
  Lightbulb,
  ArrowRight,
  Globe,
  Waves
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

export default function PournamiVilakkuPoojaPage() {
  return (
    <main className="bg-slate-50 overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center bg-[#1a1a1a]">
        <div className="absolute inset-0 z-0">
           {/* Placeholder for Lamp/Moon Image */}
           <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#a7150b]/90 z-10" />
           <Image 
             src="https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/mapims-12.jpg?updatedAt=1767689426630" // Replace with specific Vilakku Pooja image
             alt="Pournami Vilakku Pooja"
             fill
             className="object-cover opacity-80"
             priority
           />
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="inline-block mb-4">
              <span className="px-5 py-2 rounded-full bg-[#ffc107] text-[#1a1a1a] text-xs font-bold tracking-widest uppercase shadow-lg border border-yellow-500/50">
                A Day of Grace
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-3xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-xl">
              Pournami <span className="text-[#ffc107]">Vilakku Pooja</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-yellow-50 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
              Removing life's darkness and inviting divine prosperity through the collective worship of the Sacred Flame.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= INTRO & BASIC CONCEPT ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
               initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
               className="space-y-6 text-slate-600 text-lg leading-relaxed"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 tracking-tight">
                 Worshipping the <span className="text-[#a7150b]">Divine Light</span>
              </h2>
              <p>
                 At Melmaruvathur Siddhar Peedam, the Pournami (Full Moon) is considered a "Day of Grace." According to Amma, the spiritual energy of the universe is at its peak during this time.
              </p>
              <p>
                 <strong>What is Vilakku Pooja?</strong> It is a collective worship where thousands of devotees (Sakthis) gather to light sacred lamps. The lamp is not merely an object; it represents the Divine Mother Adi Parashakti herself.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                 {[
                    { icon: Heart, text: "Mental Peace", sub: "Calming anxious minds" },
                    { icon: Users, text: "Family Unity", sub: "Resolving conflicts" },
                    { icon: ShieldCheck, text: "Protection", sub: "Spiritual Kavasam" },
                    { icon: Sparkles, text: "Prosperity", sub: "Invoking Aishwarya" },
                 ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                       <div className="bg-[#a7150b]/10 p-2 rounded-lg text-[#a7150b]">
                          <item.icon className="w-5 h-5" />
                       </div>
                       <div>
                          <h4 className="font-bold text-gray-900 text-sm">{item.text}</h4>
                          <p className="text-xs text-slate-500">{item.sub}</p>
                       </div>
                    </div>
                 ))}
              </div>
            </motion.div>

            {/* Right Side - Image/Graphic */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-slate-50"
            >
               <div className="absolute inset-0 bg-[#1a1a1a] flex items-center justify-center">
                   {/* Decorative background for placeholder */}
                   {/* <Flame className="text-[#ffc107]/20 w-64 h-64 absolute" /> */}
                  <span className="text-white/50 relative z-10 font-bold">Image: Devotees Lighting Lamps</span>
               </div>
            <Image src="https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/occasion_tkfaud.jpg" fill alt="Navaratri Ritual" className="object-fill" />
               
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= 5 POWERS OF THE LAMP ================= */}
      <section className="py-20 bg-[#a7150b] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffc107 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
           <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
             className="text-center mb-16"
           >
              <div className="inline-block p-3 bg-white/10 backdrop-blur-md rounded-full mb-4 text-[#ffc107]">
                 <Flame className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Arul Gnana Deepam</h2>
              <p className="text-white/80 text-lg">The Lamp of Wisdom possesses five distinct powers according to Amma.</p>
           </motion.div>

           <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              
              {/* Power 1 */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-colors">
                  <h3 className="text-xl font-bold text-[#ffc107] mb-3">1. Awakening</h3>
                  <p className="text-white/90 leading-relaxed">It empowers women to realize and manifest their inner spiritual strength, breaking societal limitations.</p>
              </motion.div>

              {/* Power 2 */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.1 }} className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-colors">
                  <h3 className="text-xl font-bold text-[#ffc107] mb-3">2. Dispelling Ignorance</h3>
                  <p className="text-white/90 leading-relaxed">The light burns away the "internal darkness" of ego, pride, and illusion that clouds the mind.</p>
              </motion.div>

              {/* Power 3 */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }} className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-colors">
                  <h3 className="text-xl font-bold text-[#ffc107] mb-3">3. Divine Guidance</h3>
                  <p className="text-white/90 leading-relaxed">Acts as a beacon, helping devotees navigate safely through life's trials and dangerous situations.</p>
              </motion.div>

              {/* Power 4 */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-colors md:col-span-1.5 lg:col-span-1">
                  <h3 className="text-xl font-bold text-[#ffc107] mb-3">4. Karmic Cleansing</h3>
                  <p className="text-white/90 leading-relaxed">Worshipping the lamp on a full moon helps wash away past <em>Oolvinai</em> (accumulated karmic debts).</p>
              </motion.div>

               {/* Power 5 */}
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.1 }} className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-colors md:col-span-1.5 lg:col-span-2">
                  <h3 className="text-xl font-bold text-[#ffc107] mb-3">5. Manifestation</h3>
                  <p className="text-white/90 leading-relaxed">It serves as a direct bridge between the devotee and the Divine, allowing for the immediate fulfillment of righteous prayers and noble desires.</p>
              </motion.div>

           </div>
        </div>
      </section>

      {/* ================= SCIENCE OF FULL MOON ================= */}
      <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-xl overflow-hidden">
                  <div className="grid md:grid-cols-2">
                      <div className="p-10 md:p-14 flex flex-col justify-center">
                          <div className="inline-flex items-center gap-2 text-indigo-600 font-bold uppercase tracking-wider text-xs mb-4">
                              <Moon className="w-4 h-4" />
                              <span>Cosmic Energy</span>
                          </div>
                          <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">The Science of the Full Moon</h3>
                          <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                              <p>
                                  The Peedam teaches that during Pournami, the earth's vibrations are highly receptive.
                              </p>
                              <p>
                                  Performing the <strong>Vilakku Pooja</strong> and <strong>Pradakshinam</strong> (circumambulating the temple) on this day is considered equivalent to many months of regular meditation.
                              </p>
                              <p>
                                  The collective chanting of Tamil Mantras creates a massive energy field that purifies the soul.
                              </p>
                          </div>
                      </div>
                      <div className="bg-indigo-950 relative min-h-[300px] flex items-center justify-center overflow-hidden">
                          <div className="absolute inset-0 opacity-30">
                              <Waves className="w-[200%] h-[200%] text-indigo-500 animate-pulse" />
                          </div>
                          <Moon className="text-[#ffc107] w-32 h-32 relative z-10 drop-shadow-[0_0_30px_rgba(255,193,7,0.5)]" />
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* ================= ONLINE SEVA CTA ================= */}
      <section className="py-24 bg-[#1a1a1a] text-white relative overflow-hidden">
         <div className="container mx-auto px-4 relative z-10 text-center">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-3xl mx-auto">
                 <div className="w-20 h-20 bg-[#ffc107] rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(255,193,7,0.4)]">
                    <Lightbulb className="w-10 h-10 text-[#1a1a1a]" />
                 </div>
                 
                 <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Light a Lamp from Home</h2>
                 
                 <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                     "Distance is no barrier to the Mother's Grace." Participate in the Pournami Vilakku Pooja online. Your prayers will join the collective vibration of thousands.
                 </p>

                 <Link href="https://masm.omsakthiamma.in/donate-other/?c=VELAKU" target="_blank" rel="noopener noreferrer">
                     <Button className="bg-[#ffc107] hover:bg-[#e6ac00] text-[#1a1a1a] font-bold text-lg px-10 py-7 rounded-full shadow-2xl transition-transform hover:scale-105">
                         Register for Online Pooja <ArrowRight className="w-5 h-5 ml-2" />
                     </Button>
                 </Link>
             </motion.div>
         </div>
      </section>

    </main>
  )
}