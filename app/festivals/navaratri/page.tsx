"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Flame,
  ShieldCheck,
  Droplets,
  Users,
  Flower,
  ScrollText,
  ArrowRight,
  Globe,
  Sparkles,
  Heart
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

export default function NavaratriPage() {
  return (
    <main className="bg-slate-50 overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center bg-[#a7150b]">
        <div className="absolute inset-0 z-0">
            {/* Placeholder for a Navaratri/Amma Image */}
           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#a7150b]/60 to-[#a7150b]/80 z-10" />
           <Image 
             src="https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/mapims-12.jpg?updatedAt=1767689426630" // Replace with specific Navaratri Image
             alt="Navaratri Celebration"
             fill
             className="object-cover"
             priority
           />
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="inline-block mb-4">
              <span className="px-5 py-2 rounded-full bg-[#ffc107] text-[#1a1a1a] text-xs font-bold tracking-widest uppercase shadow-lg">
                Festivals of the Trust
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-md">
              Navaratri <br/> <span className="text-[#ffc107]">Maha Vizha</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-yellow-50 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
              A period of intense spiritual awakening, empowering women and invoking the universal grace of Mother Adi Parashakti.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= INTRO & WOMEN EMPOWERMENT ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
               initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
               className="space-y-6 text-slate-600 text-lg leading-relaxed text-justify"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 tracking-tight">
                A Divine Celebration of <span className="text-[#a7150b]">Shakti</span>
              </h2>
              <p>
                Navaratri at Melmaruvathur is not just a festival; it is a period of intense spiritual awakening. Under the guidance of <strong>Arulthiru Bangaru Adigalar (Amma)</strong>, the Peedam celebrates the Divine Mother Adi Parashakti through unique rituals that break traditional barriers.
              </p>
              
              <div className="bg-orange-50 p-6 rounded-2xl border-l-4 border-[#a7150b] mt-6">
                 <h3 className="font-bold text-[#a7150b] text-xl mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5"/> The Empowerment of Women
                 </h3>
                 <p className="text-sm md:text-base text-slate-700">
                    A hallmark of Melmaruvathur is the central role given to women (Sakthis). While many traditions limit major rituals to men, here women take the lead in:
                 </p>
                 <ul className="list-disc pl-5 mt-3 space-y-1 text-sm md:text-base text-slate-700">
                    <li>Organizing and executing Navaratri activities.</li>
                    <li>Performing the Abhishekam (ritual bathing) and Alankaram.</li>
                    <li>Leading continuous prayers, symbolizing Shakti in every woman.</li>
                 </ul>
              </div>
            </motion.div>

            {/* Right Side - Ritual Image/Graphic */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-[#ffc107]"
            >
               <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                  {/* Replace with specific Aganda Deepam or Alankaram image */}
                  <span className="text-slate-400 font-bold">Image: Navaratri Alankaram / Aganda Deepam</span>
               </div>
               <Image src="https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/navratri_pcitav.jpg" fill alt="Navaratri Ritual" className="object-cover" />
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
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">Key Rituals & Significance</h2>
           </motion.div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Aganda Deepam */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                 <Card className="h-full p-8 border-none shadow-lg bg-white rounded-3xl hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-14 h-14 bg-[#ffc107]/20 rounded-2xl flex items-center justify-center mb-6 text-yellow-700">
                       <Flame className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Aganda Deepam</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                       The "Infinite Flame" lit on Day 1 and kept burning for 9 nights. It represents the undivided light of wisdom (Gnana Jyothi).
                    </p>
                    <div className="bg-yellow-50 p-3 rounded-xl text-xs font-semibold text-yellow-800 flex items-start gap-2">
                       <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5"/> 
                       <span>Acts as a "Kavasam" (Shield) protecting devotees from dangers.</span>
                    </div>
                 </Card>
              </motion.div>

              {/* Laksharchana */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.1 }}>
                 <Card className="h-full p-8 border-none shadow-lg bg-white rounded-3xl hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-14 h-14 bg-[#a7150b]/10 rounded-2xl flex items-center justify-center mb-6 text-[#a7150b]">
                       <ScrollText className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Laksharchana</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                       A supreme Yagna where the Mother's names are chanted to reach 100,000 counts. The collective vibration dissolves ego.
                    </p>
                    <div className="bg-red-50 p-3 rounded-xl text-xs font-semibold text-red-800 flex items-start gap-2">
                       <Sparkles className="w-4 h-4 shrink-0 mt-0.5"/> 
                       <span>Performed to fulfill noble life goals (Latchiyangal).</span>
                    </div>
                 </Card>
              </motion.div>

               {/* Abhishekam */}
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}>
                 <Card className="h-full p-8 border-none shadow-lg bg-white rounded-3xl hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                       <Droplets className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Abhishekam</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                       Devotees directly enter the sanctum to bathe the Swayambu with milk, honey, and sandalwood.
                    </p>
                    <div className="bg-blue-50 p-3 rounded-xl text-xs font-semibold text-blue-800 flex items-start gap-2">
                       <Heart className="w-4 h-4 shrink-0 mt-0.5"/> 
                       <span>Symbolizes washing away internal impurities and direct communion.</span>
                    </div>
                 </Card>
              </motion.div>

              {/* Mukkoottu Ennai */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                 <Card className="h-full p-8 border-none shadow-lg bg-white rounded-3xl hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-orange-600">
                       <Droplets className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Mukkoottu Ennai</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                       A sacred blend of Ghee, Neem oil, and Gingelly oil. Burning this oil purifies the air, removes "Drishthi" (evil eye), and burns away negative qualities (Sattva, Rajas, Tamas).
                    </p>
                 </Card>
              </motion.div>

              {/* Kaapu */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.1 }}>
                 <Card className="h-full p-8 border-none shadow-lg bg-white rounded-3xl hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6 text-yellow-600">
                       <ShieldCheck className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Kaapu (Protection)</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                       A sacred yellow thread tied around the wrist. It marks the start of a vow (Vratham) and signals that the devotee is under the direct protection of Mother Adi Parashakti.
                    </p>
                 </Card>
              </motion.div>

              {/* Simple Service */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}>
                 <Card className="h-full p-8 border-none shadow-lg bg-white rounded-3xl hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-600">
                       <Flower className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Thondu (Service)</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                       Devotees perform Karma Yoga by preparing Turmeric/Kumkum, serving food (Annadhanam), and maintaining the temple cleanliness during the festival.
                    </p>
                 </Card>
              </motion.div>

           </div>
        </div>
      </section>

      {/* ================= SUMMARY TABLE ================= */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-10">
                  <h3 className="text-2xl font-serif font-bold text-gray-900">Ritual Summary Reference</h3>
              </div>
              
              <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                  <Table>
                      <TableHeader className="bg-[#a7150b]">
                          <TableRow className="hover:bg-[#a7150b]">
                              <TableHead className="text-white font-bold text-base">Ritual</TableHead>
                              <TableHead className="text-white font-bold text-base">Core Benefit</TableHead>
                              <TableHead className="text-white font-bold text-base">Who Performs?</TableHead>
                          </TableRow>
                      </TableHeader>
                      <TableBody>
                          {[
                              { name: "Laksharchana", benefit: "Fulfills noble goals and removes karma.", performer: "Thousands of devotees (Group)" },
                              { name: "Mukkoottu Ennai", benefit: "Purifies the mind and environment.", performer: "Devotees (by offering/lighting)" },
                              { name: "Kaapu", benefit: "Offers divine protection (Shield).", performer: "Individual Devotees" },
                              { name: "Aganda Deepam", benefit: "Provides spiritual wisdom and safety.", performer: "Lit by Amma, maintained by Sakthis" },
                              { name: "Abhishekam", benefit: "Grants direct communion with the Mother.", performer: "Individual Devotees (Equal access)" },
                          ].map((item, idx) => (
                              <TableRow key={idx} className="hover:bg-slate-50">
                                  <TableCell className="font-bold text-[#a7150b]">{item.name}</TableCell>
                                  <TableCell className="text-slate-600">{item.benefit}</TableCell>
                                  <TableCell className="text-slate-600">{item.performer}</TableCell>
                              </TableRow>
                          ))}
                      </TableBody>
                  </Table>
              </div>
          </div>
      </section>

      {/* ================= ONLINE SEVA CTA ================= */}
      <section className="py-24 bg-[#1a1a1a] text-white relative overflow-hidden">
         {/* Decorative BG elements */}
         <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
             <Globe size={300} />
         </div>
         
         <div className="container mx-auto px-4 relative z-10 text-center">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-3xl mx-auto">
                 <div className="inline-flex items-center gap-2 bg-[#ffc107]/20 text-[#ffc107] px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                     <Globe className="w-4 h-4" />
                     <span>Digital Participation</span>
                 </div>
                 
                 <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">"Distance is no barrier to the Mother's Grace."</h2>
                 
                 <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                     If you cannot visit the Siddhar Peedam in person, you can still participate. Register online for Laksharchana, Aganda Deepam Ghee offering, or Sankalpam. The Sacred Prasadam (Energized Vibhuthi, Kumkum, and Kaapu) will be sent to your home.
                 </p>

                 <Link href="https://masm.omsakthiamma.in/donate-navaratri/" target="_blank" rel="noopener noreferrer">
                     <Button className="bg-[#ffc107] hover:bg-[#e6ac00] text-[#1a1a1a] font-bold text-lg px-10 py-7 rounded-full shadow-2xl transition-transform hover:scale-105">
                         Register for Online Seva <ArrowRight className="w-5 h-5 ml-2" />
                     </Button>
                 </Link>
                 
                 <p className="mt-6 text-sm text-gray-500">
                    Secure Payment Gateway | Global Shipping for Prasadam
                 </p>
             </motion.div>
         </div>
      </section>

    </main>
  )
}