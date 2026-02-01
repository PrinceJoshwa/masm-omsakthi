"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
   Landmark,
   Globe,
   Users,
   Award,
   Stethoscope,
   GraduationCap,
   Sprout,
   Heart,
   MapPin,
   Phone,
   Mail,
   Quote,
   Calendar,
   Bird,
   Flame
} from "lucide-react"
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

export default function AboutUsPage() {
   return (
      <main className="bg-slate-50 overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">

         {/* ================= HERO SECTION ================= */}
         <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center bg-[#a7150b]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#a7150b] via-[#a7150b]/40 to-transparent z-10" />
            
            {/* Optional: Add a background image of the temple/crowd here if available */}
            
            <div className="relative z-20 container mx-auto px-4 text-center">
               <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                  <motion.div variants={fadeInUp} className="inline-block mb-4">
                     <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#ffc107] text-xs font-bold tracking-widest uppercase">
                        Universal Love & Service
                     </span>
                  </motion.div>
                  <motion.h1 variants={fadeInUp} className="text-3xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
                     Melmaruvathur Adhiparasakthi <br /> Spiritual Movement
                  </motion.h1>
                  <motion.p variants={fadeInUp} className="text-yellow-50 max-w-4xl mx-auto text-lg leading-relaxed font-light">
                     Fostering spirituality, education, healthcare, and social welfare under the divine guidance of Amma.
                  </motion.p>
               </motion.div>
            </div>
         </section>

         {/* ================= ORIGINS & SIGNIFICANCE ================= */}
         <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
               <div className="grid lg:grid-cols-2 gap-12 items-center">

                  {/* Text Content */}
                  <motion.div
                     initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                     className="space-y-6 text-slate-600 text-lg leading-relaxed text-justify"
                  >
                     <div className="flex items-center gap-3 mb-2">
                        <Landmark className="w-8 h-8 text-[#a7150b]" />
                        <h2 className="text-3xl font-serif font-bold text-gray-900 tracking-tight">Origins and Significance</h2>
                     </div>
                     <p>
                        The Melmaruvathur Adhiparasakthi Spiritual Movement is not just a religious organization but a holistic movement. It traces its roots to the <strong>Adhiparasakthi Siddhar Peedam</strong>, a sacred temple in Melmaruvathur where the Divine Mother is believed to have manifested through <strong>Arulthiru Bangaru Adigalar</strong>.
                     </p>
                     <p>
                        The movement gained prominence due to its emphasis on universal love, equality, and selfless service, transcending caste, creed, and gender barriers. It continues to inspire millions to lead a life of devotion, compassion, and service to humanity.
                     </p>
                  </motion.div>

                  {/* IMAGE */}
                  <motion.div
                     initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                     className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-[#ffc107]"
                  >
                     {/* Placeholder for Siddhar Peedam Image */}
                     <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                        <span className="text-slate-400">Adhiparasakthi Siddhar Peedam Image</span>
                     </div>
                     <Image
                        src="https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/mapims-12.jpg?updatedAt=1767689426630" // Using existing image as placeholder
                        alt="Siddhar Peedam"
                        fill
                        className="object-cover"
                     />
                  </motion.div>
               </div>
            </div>
         </section>

         {/* ================= SPIRITUAL ACTIVITIES & FESTIVALS ================= */}
         <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-4xl mx-auto text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 tracking-tight">Spiritual & Religious Activities</h2>
                  <div className="w-24 h-1 bg-[#a7150b] mx-auto rounded-full" />
               </motion.div>

               <div className="grid md:grid-cols-2 gap-8">
                  {/* Daily Poojas */}
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                     <Card className="p-8 h-full border-none shadow-lg bg-white rounded-3xl">
                        <div className="flex items-start gap-4 mb-4">
                           <div className="p-4 bg-[#a7150b]/10 rounded-2xl text-[#a7150b]">
                              <Flame className="w-8 h-8" />
                           </div>
                           <div>
                              <h3 className="text-xl font-bold text-gray-900">Daily Poojas & Rituals</h3>
                              <p className="text-slate-600 mt-2 leading-relaxed text-justify">
                                 The temple conducts regular prayers, homams (fire rituals), and special abhishekams (sacred baths) to the deity.
                              </p>
                           </div>
                        </div>
                     </Card>
                  </motion.div>

                  {/* Irumudi Festival */}
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.1 }}>
                     <Card className="p-8 h-full border-none shadow-lg bg-white rounded-3xl border-l-4 border-l-[#ffc107]">
                        <div className="flex items-start gap-4 mb-4">
                           <div className="p-4 bg-[#ffc107]/20 rounded-2xl text-[#b45309]">
                              <Users className="w-8 h-8" />
                           </div>
                           <div>
                              <h3 className="text-xl font-bold text-gray-900">Irumudi Festival</h3>
                              <p className="text-slate-600 mt-2 leading-relaxed text-justify">
                                 A significant event where devotees wear a special garland called <strong>Sakthi Malai</strong>, fast, and perform penance. Devotees perform rituals like Abishegam (milk anointment) to the Swayambu. The festival is characterized by large-scale Kalasa Vezhvi Pooja and Yagnas.
                              </p>
                           </div>
                        </div>
                     </Card>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* ================= SOCIAL & ENVIRONMENTAL INITIATIVES ================= */}
         <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-4xl mx-auto text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 tracking-tight">Social & Environmental Welfare</h2>
                  <p className="text-slate-600 text-lg leading-relaxed">
                     "Service to humanity is service to God."
                  </p>
               </motion.div>

               <div className="grid md:grid-cols-3 gap-8">

                  {/* Annadanam */}
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                     <Card className="p-8 h-full border-none shadow-lg bg-stone-50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-3xl">
                        <div className="p-4 bg-orange-100 rounded-2xl text-orange-600 w-fit mb-4">
                           <Heart className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Annadanam (Free Food)</h3>
                        <p className="text-slate-600 leading-relaxed text-sm mb-4">
                           "All the hungry stomachs should be fed and their life expanded." ~ Amma's oracle.
                        </p>
                        <p className="text-slate-600 text-sm">
                           Melmaruvathur Siddhar Peedam is a <strong>Hunger Free Zone</strong> where free food is served to all devotees.
                        </p>
                     </Card>
                  </motion.div>

                  {/* Environmental */}
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.1 }}>
                     <Card className="p-8 h-full border-none shadow-lg bg-stone-50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-3xl">
                        <div className="p-4 bg-green-100 rounded-2xl text-green-600 w-fit mb-4">
                           <Sprout className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Environmental Initiatives</h3>
                        <p className="text-slate-600 leading-relaxed text-sm mb-4">
                           The trust promotes eco-friendly practices, mass tree-planting events, and water conservation through rainwater harvesting.
                        </p>
                        <p className="text-slate-600 text-sm">
                           Excess rain water is drained into the Melmaruvathur lake, preserving water resources.
                        </p>
                     </Card>
                  </motion.div>

                  {/* Avian Activity */}
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}>
                     <Card className="p-8 h-full border-none shadow-lg bg-stone-50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-3xl">
                        <div className="p-4 bg-blue-100 rounded-2xl text-blue-600 w-fit mb-4">
                           <Bird className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Increased Avian Activity</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">
                           Following cleaning initiatives, Melmaruvathur Lake has seen a rise in bird populations. Sightings of egrets, herons, and kingfishers suggest sustained nesting activity due to improved water quality.
                        </p>
                     </Card>
                  </motion.div>

               </div>
            </div>
         </section>

         {/* ================= LEADERSHIP ================= */}
         <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 text-center">
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 tracking-tight">Divine Guidance</h2>
                  <div className="w-24 h-1 bg-[#ffc107] mx-auto rounded-full" />
               </motion.div>

               <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {/* Founder */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                     className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center"
                  >
                     <div className="w-48 h-48 relative rounded-full mb-6 overflow-hidden border-4 border-[#a7150b] shadow-lg">
                        <Image
                           src="https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/3952Founder-President.png?updatedAt=1767688737331"
                           alt="His Holiness Bangaru Adigalar"
                           fill
                           className="object-cover"
                        />
                     </div>
                     <h3 className="text-xl font-bold text-gray-900">His Holiness<br />Bangaru Adigalar</h3>
                     <p className="text-[#a7150b] font-bold uppercase tracking-widest text-xs mt-3">Founder</p>
                  </motion.div>

                  {/* President */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                     className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center"
                  >
                     <div className="w-48 h-48 relative rounded-full mb-6 overflow-hidden border-4 border-[#ffc107] shadow-lg">
                        <Image
                           src="https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/Vice-President.jpg?updatedAt=1767688708134"
                           alt="Smt. Lakshmi Bangaru Adigalar"
                           fill
                           className="object-cover"
                        />
                     </div>
                     <h3 className="text-xl font-bold text-gray-900">Smt. Lakshmi<br />Bangaru Adigalar</h3>
                     <p className="text-[#ffc107] font-bold uppercase tracking-widest text-xs mt-3 text-yellow-700">President</p>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* ================= CONTACT INFO ================= */}
         <section className="py-20 bg-[#a7150b] text-white">
            <div className="container mx-auto px-4">
               <div className="bg-black/20 rounded-[2.5rem] p-8 md:p-14 backdrop-blur-md border border-white/10">
                  <div className="grid md:grid-cols-2 gap-12 items-center">

                     <div>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8 leading-tight tracking-tight">
                           Melmaruvathur Adhiparasakthi Institute of Medical Sciences and Research (MAPIMS)
                        </h3>

                        <div className="space-y-6">
                           <div className="flex items-start gap-4">
                              <MapPin className="w-6 h-6 text-[#ffc107] mt-1 shrink-0" />
                              <p className="text-white/90 text-lg">
                                 Melmaruvathur, Chengalpattu District,<br />
                                 Tamilnadu, India - 603319
                              </p>
                           </div>

                           <div className="flex items-center gap-4">
                              <Phone className="w-6 h-6 text-[#ffc107] shrink-0" />
                              <p className="text-white/90 text-lg">044-27528302, 27528303</p>
                           </div>

                           <div className="flex items-center gap-4">
                              <Mail className="w-6 h-6 text-[#ffc107] shrink-0" />
                              <div className="flex flex-col gap-1">
                                 <a href="mailto:info@mapims.org" className="text-white/90 hover:text-[#ffc107] transition-colors">info@mapims.org</a>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="relative h-64 md:h-80 w-full bg-black/20 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        <Image
                           src="https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/a12.webp?updatedAt=1767689037927"
                           alt="MAPIMS Building"
                           fill
                           className="object-cover"
                        />
                     </div>

                  </div>
               </div>
            </div>
         </section>

      </main>
   )
}