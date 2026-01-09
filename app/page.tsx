// "use client"

// import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
// import Image from "next/image"
// import Link from "next/link"
// import {
//   Heart,
//   CheckCircle2,
//   Landmark,
//   Activity,
//   Eye,
//   FileText,
//   Phone,
//   Building2,
//   Clock,
//   HeartHandshake,
//   Mail,
//   ShieldCheck,
//   AlertCircle,
//   X
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { useState } from "react"
// import type { Variants } from "framer-motion"

// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// }


// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15, delayChildren: 0.3 },
//   },
// }

// const scaleOnHover = {
//   hover: { scale: 1.02, transition: { duration: 0.3 } },
// }

// // ========== MAIN PAGE EXPORT ==========
// export default function Home() {
//   return (
//     <main className="bg-slate-50 overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">
//       <Hero />
//       <About />
//       <Leadership />
//       <CsrRegistration />
//       <MissionVision />
//       <Awards />
//       <Donation />
//       <CsrProjects />
//       <CsrInquiry />
//     </main>
//   )
// }

// // ========== HERO COMPONENT ==========
// function Hero() {
//   const { scrollY } = useScroll()
//   const y1 = useTransform(scrollY, [0, 500], [0, 150])

//   return (
//     <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
//       {/* Background Image */}
//       <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
//         <Image
//           src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091901/dental-hospital_cd4gda.jpg"
//           alt="Hero Background"
//           fill
//           className="object-cover scale-110"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
//       </motion.div>

//       <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center pt-16 md:pt-20">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//           className="max-w-5xl mx-auto text-center"
//         >
//           <motion.div variants={fadeInUp} className="inline-block mb-6">
//             <span className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md text-[#ffc107] text-sm font-bold tracking-widest uppercase border border-white/10 shadow-xl">
//               Est. 1988 • Registered Trust
//             </span>
//           </motion.div>

//           <motion.h1
//             variants={fadeInUp}
//             className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] drop-shadow-2xl tracking-tight"
//           >
//             Healing Hands.{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc107] via-yellow-200 to-[#ffc107]">
//               Compassionate Hearts.
//             </span>
//           </motion.h1>

//           <motion.p
//             variants={fadeInUp}
//             className="text-lg md:text-2xl text-gray-200 mb-12 leading-relaxed font-light max-w-3xl mx-auto text-balance"
//           >
//             Melmaruvathur Adhiparasakthi Spiritual Movement (MASM)
//             dedicated to serving humanity through holistic healthcare and education.
//           </motion.p>

//           <motion.div
//             variants={fadeInUp}
//             className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8"
//           >
//             <Link
//               href="https://aspwct.omsakthiamma.in/" target="_blank" rel="noopener noreferrer"
//               className="w-full sm:w-auto"
//             >
//               <Button className="w-full sm:w-auto bg-[#a7150b] hover:bg-[#d91e11] text-white rounded-full px-10 py-7 text-lg font-bold shadow-lg transition-all hover:scale-105">
//                 <Heart className="mr-3 w-5 h-5 fill-current" />
//                 Donate Now
//               </Button>
//             </Link>

//             <Link href="#about" className="w-full sm:w-auto">
//               <Button
//                 variant="outline"
//                 className="w-full sm:w-auto border-2 border-white/40 text-white hover:bg-white hover:text-black rounded-full px-10 py-7 text-lg font-bold backdrop-blur-sm transition-all hover:scale-105 bg-white/5"
//               >
//                 Explore Our Work
//               </Button>
//             </Link>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// // ========== ABOUT COMPONENT ==========
// function About() {
//   return (
//     <section id="about" className="py-20 md:py-32 px-4 container mx-auto">
//       <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
//         {/* LEFT CONTENT */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={staggerContainer}
//           className="text-center lg:text-left"
//         >
//           <motion.span
//             variants={fadeInUp}
//             className="inline-block px-4 py-2 bg-[#a7150b]/5 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4"
//           >
//             About The Trust
//           </motion.span>

//           <motion.h2
//             variants={fadeInUp}
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight tracking-tight"
//           >
//             A Legacy of Service{" "}
//             <span className="relative inline-block whitespace-nowrap">
//               <span className="relative z-10">Since 1988</span>
//               <span className="absolute bottom-2 left-0 right-0 h-3 bg-[#ffc107]/60 -z-0" />
//             </span>
//           </motion.h2>

//           <motion.div
//             variants={fadeInUp}
//             className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 space-y-4"
//           >
//             <p>
//               M/s Melmaruvathur Adhiparasakthi Spiritual Movement (MASM), as the name suggests
//               has dedicated itself to serve the people in the areas of:
//             </p>

//             <div className="grid sm:grid-cols-2 gap-3 py-4">
//               {["Charity", "Medical", "Educational", "Cultural Activities"].map((item) => (
//                 <div key={item} className="flex items-start gap-3 group">
//                   <div className="w-10 h-10 rounded-full bg-[#a7150b]/10 group-hover:bg-[#a7150b] transition-colors flex items-center justify-center shrink-0">
//                     <CheckCircle2 className="text-[#a7150b] group-hover:text-white w-5 h-5 transition-colors" />
//                   </div>
//                   <span className="font-semibold text-gray-800 leading-10">{item}</span>
//                 </div>
//               ))}
//             </div>

//             <p>
//               This trust is a non-profitable organization which was founded by{" "}
//               <strong className="text-gray-900">H.H. Bangaru Adigalar</strong> in the year 1988 with a small corpus
//               fund and with few cents of land in Melmaruvathur.
//             </p>
//           </motion.div>

//           {/* STATS */}
//           <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             <div className="group hover:scale-105 transition-transform">
//               <Card className="p-6 border-none shadow-md bg-white hover:shadow-xl transition-shadow rounded-2xl">
//                 <h4 className="text-3xl md:text-4xl font-bold text-[#ffc107] mb-1">1988</h4>
//                 <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Established</p>
//               </Card>
//             </div>

//             <div className="group hover:scale-105 transition-transform">
//               <Card className="p-6 border-none shadow-md bg-white hover:shadow-xl transition-shadow rounded-2xl">
//                 <h4 className="text-xl md:text-2xl font-bold text-[#a7150b] mb-1">Melmaruvathur</h4>
//                 <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Headquarters</p>
//               </Card>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* RIGHT IMAGE */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="relative group"
//         >
//           <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
//             <Image
//               src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766143744/a12_nbqg5x.webp"
//               alt="Medical Service"
//               width={700}
//               height={500}
//               className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
//             />
//           </div>

//           <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#ffc107]/20 rounded-full blur-3xl -z-10" />
//           <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#a7150b]/10 rounded-full blur-3xl -z-10" />
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// // ========== LEADERSHIP COMPONENT ==========
// function Leadership() {
//   return (
//     <section className="py-24 bg-white">
//       <div className="container mx-auto px-4">
//         {/* Founders */}
//         <div className="mb-24">
//           <div className="text-center mb-16">
//             <span className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
//               Our Guidance
//             </span>
//             <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight">
//               Founder & President
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
//             {[
//               {
//                 name: "His Holiness Bangaru Adigalar",
//                 role: "Founder",
//                 image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091903/3952Founder-President_k3xqz3.png",
//                 borderColor: "border-[#ffc107]",
//               },
//               {
//                 name: "Smt. Lakshmi Bangaru Adigalar",
//                 role: "President",
//                 image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091895/Vice-President_z3lp84.jpg",
//                 borderColor: "border-[#a7150b]",
//               },
//             ].map((person, idx) => (
//               <motion.div
//                 key={person.name}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.2 }}
//                 whileHover={{ y: -8 }}
//               >
//                 <Card className="p-8 text-center border-none shadow-lg bg-slate-50 hover:bg-white transition-all duration-300 rounded-3xl group">
//                   <div className={`w-48 h-48 mx-auto rounded-full overflow-hidden border-4 ${person.borderColor} shadow-xl mb-6 relative group-hover:scale-105 transition-transform`}>
//                     <Image src={person.image} alt={person.name} fill className="object-cover" />
//                   </div>
//                   <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">{person.name}</h3>
//                   <p className="text-[#a7150b] font-bold uppercase tracking-widest text-sm">{person.role}</p>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Board of Trustees Grid */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 tracking-tight">Board of Trustees</h2>
//           <div className="w-24 h-1.5 bg-[#ffc107] mx-auto rounded-full" />
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
//           {[
//             { name: "Mrs. V. Lakshmi", role: "President / Trustee" },
//             { name: "Mrs. B. Umadevi", role: "Vice President / Trustee" },
//             { name: "Mrs. B. Sridevi", role: "Secretary / Trustee" },
//           ].map((trustee, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               whileHover={{ y: -5 }}
//             >
//               <Card className="p-6 hover:shadow-xl transition-all group bg-white border border-gray-100 rounded-2xl">
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 bg-[#ffc107]/20 text-[#ffc107] rounded-full flex items-center justify-center shrink-0 font-bold text-xl">
//                     {trustee.name.split(" ")[1][0]}
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#a7150b] transition-colors mb-2">
//                       {trustee.name}
//                     </h3>
//                     <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold uppercase tracking-wide">
//                       {trustee.role}
//                     </span>
//                   </div>
//                 </div>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
        
//         {/* General Trustees Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//           {[
//             { name: "Mrs. A. Asharani", role: "Trustee" },
//             { name: "Dr. E. Srilekha", role: "Trustee" },
//             { name: "Mrs. M. Vanitha", role: "Trustee" },
//             { name: "Mrs. A. Madhumalar", role: "Trustee" },
//             { name: "Miss. S. Monasakthi", role: "Trustee" },
//             { name: "Mrs. A. Sasikala", role: "Trustee" },
//           ].map((trustee, idx) => (
//             <motion.div
//               key={trustee.name}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: (idx + 5) * 0.1 }}
//               whileHover={{ y: -5 }}
//             >
//               <Card className="p-5 hover:shadow-lg transition-all group border border-gray-100 rounded-2xl bg-white">
//                 <div className="flex flex-col gap-3">
//                   <div className="flex items-center justify-between">
//                     <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500">
//                       {trustee.name.split(" ")[1][0]}
//                     </div>
//                     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border border-slate-200 px-2 py-1 rounded">
//                       {trustee.role}
//                     </span>
//                   </div>
//                   <h4 className="text-sm font-bold text-gray-800 group-hover:text-[#a7150b] transition-colors">
//                     {trustee.name}
//                   </h4>
//                 </div>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// // ========== CSR COMPONENT ==========
// function CsrRegistration() {
//   return (
//     <section className="py-20 bg-[#1a1a1a] text-white">
//       <div className="container mx-auto px-4">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
          
//           <motion.div 
//             initial="hidden" 
//             whileInView="visible" 
//             viewport={{ once: true }} 
//             variants={staggerContainer}
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <Landmark className="w-8 h-8 text-[#ffc107]" />
//               <span className="text-[#ffc107] font-bold tracking-widest uppercase text-sm">Government of India</span>
//             </div>
            
//             <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 tracking-tight">Official CSR Registration</h2>
            
//             <p className="text-gray-400 text-lg mb-8 leading-relaxed">
//               Melmaruvathur Adhiparasakthi Spiritual Movement is officially registered with the
//               Ministry of Corporate Affairs for undertaking CSR activities.
//             </p>
            
//             <div className="grid sm:grid-cols-2 gap-6">
//               <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
//                 <p className="text-xs text-gray-300 uppercase tracking-widest mb-1">Registration Number</p>
//                 <p className="text-2xl font-mono font-bold text-[#ffc107]">CSR00002407</p>
//               </div>
//               <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
//                 <p className="text-xs text-gray-300 uppercase tracking-widest mb-1">Date of Registration</p>
//                 <p className="text-xl font-bold text-white">16-04-2021</p>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10"
//           >
//             <div className="bg-white p-2">
//                 <Image 
//                   src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766399036/Approval_Letter_Women_s_-CSR_ACTIVITIES_1__page-0001_ohogf3.jpg" 
//                   alt="Official CSR Approval Letter" 
//                   width={800}
//                   height={1000}
//                   className="w-full h-auto object-contain"
//                 />
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   )
// }

// // ========== MISSION & VISION COMPONENT ==========
// function MissionVision() {
//   return (
//     <section className="py-24 px-4 bg-slate-50 relative overflow-hidden">
//       <div className="container mx-auto relative z-10">
//         <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
//           <motion.div whileHover="hover" variants={scaleOnHover} className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border-l-8 border-[#a7150b]">
//             <div className="relative z-10">
//               <div className="w-14 h-14 bg-[#a7150b]/10 rounded-2xl flex items-center justify-center mb-8">
//                 <Activity className="text-[#a7150b] w-8 h-8" />
//               </div>
//               <h3 className="text-3xl font-serif font-bold mb-4 text-gray-900">Our Mission</h3>
//               <p className="text-gray-600 text-lg leading-relaxed">
//               The MASM is committed to the selfless service of humanity by managing resources with transparency and strategic foresight to deliver high-quality social welfare services.
//               </p>
//             </div>
//           </motion.div>

//           <motion.div whileHover="hover" variants={scaleOnHover} className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border-l-8 border-[#ffc107]">
//             <div className="relative z-10">
//               <div className="w-14 h-14 bg-[#ffc107]/10 rounded-2xl flex items-center justify-center mb-8">
//                 <Eye className="text-gray-900 w-8 h-8" />
//               </div>
//               <h3 className="text-3xl font-serif font-bold mb-4 text-gray-900">Our Vision</h3>
//               <p className="text-gray-600 text-lg leading-relaxed font-medium">
//                 To create a sustainable, inclusive society where the burdens of human suffering are alleviated through institutional excellence in healthcare, education, and cultural preservation.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// // ========== AWARDS COMPONENT ==========
// function Awards() {
//   const awards = [
//     { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092337/2911191530526914-150x150_a5fseg.jpg", title: "State Govt Honor", desc: "Honored by Chief Minister Ms. J. Jayalalitha..." },
//     { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092336/2911191530538674-150x150_semv32.jpg", title: "Nirmal Gram Puraskar", desc: "National award for sanitation..." },
//     { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092336/2911191530539144-150x150_dyivy6.jpg", title: "Certificate of Excellence", desc: "Recognition for outstanding contribution..." },
//     { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092336/2911191530534191-150x150_lo2fc6.jpg", title: "Best Institution", desc: "Awarded to Adhiparasakthi Annai Illam..." },
//   ]

//   return (
//     <section className="py-24 bg-white">
//       <div className="container mx-auto px-4">
//         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
//           <span className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4">Our Achievements</span>
//           <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight">Awards and Recognition</h2>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {awards.map((award, idx) => (
//             <motion.div key={idx} whileHover={{ y: -8 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
//               <div className="relative h-56 overflow-hidden">
//                 <Image src={award.img} alt={award.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
//               </div>
//               <div className="p-5">
//                 <h4 className="font-bold text-gray-900 leading-tight mb-2 group-hover:text-[#a7150b] transition-colors">{award.title}</h4>
//                 <p className="text-sm text-gray-500 leading-relaxed">{award.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// // ========== DONATION COMPONENT ==========
// function Donation() {
//   const [isOverseasModalOpen, setIsOverseasModalOpen] = useState(false)

//   return (
//     <>
//       <section className="py-20 md:py-24 px-4 bg-slate-50" id="donate">
//         <div className="container mx-auto max-w-6xl">

//           {/* WHY DONATE */}
//           <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16 space-y-4">
//             <div className="inline-flex items-center gap-2 bg-[#ffc107]/20 text-yellow-800 px-4 py-1.5 rounded-full text-sm font-semibold">
//               <HeartHandshake className="w-4 h-4" />
//               <span>Join Our Mission</span>
//             </div>

//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
//               Empowering Lives, Creating Impact
//             </h2>

//             <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
//               We have created meaningful impacts in rural education and healthcare.
//               Your contribution helps us sustain these efforts. Join us and empower
//               the mission to help the needy—every rupee counts towards building a better future.
//             </p>
//           </div>

//           {/* DONATION CARDS */}
//           <div className="grid md:grid-cols-1 gap-8 items-stretch mb-16 md:mb-20">

//             {/* DOMESTIC */}
//             <motion.div
//               whileHover={{ y: -5 }}
//               className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-100 relative flex flex-col"
//             >
//               <div className="absolute top-0 left-0 w-full h-2 bg-[#a7150b]" />

//               <div className="flex items-start gap-4 mb-6">
//                 <div className="p-4 bg-red-50 rounded-2xl text-[#a7150b] shrink-0">
//                   <FileText className="w-8 h-8" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Domestic Donors</h3>
//                   <span className="text-xs sm:text-sm font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full">
//                     Indian Citizens Only
//                   </span>
//                 </div>
//               </div>

//               <div className="space-y-4 mb-8 flex-1 text-sm sm:text-base">
//                 <p className="text-gray-500">
//                   Maximize your philanthropic impact while saving on taxes.
//                   Your contributions support vital education and rural development initiatives.
//                 </p>

//                 <ul className="space-y-3">
//                   {[
//                     "Eligible for Section 80G Tax Exemption",
//                     "Valid Receipt with PAN for IT Returns",
//                     "Supports Education & Rural Development",
//                   ].map((item, i) => (
//                     <li key={i} className="flex items-start gap-3 font-medium text-gray-800">
//                       <CheckCircle2 className="w-5 h-5 text-[#a7150b] shrink-0 mt-0.5" />
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <div className="bg-red-50 border border-red-100 rounded-lg p-3 flex gap-2 text-xs text-red-800">
//                   <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
//                   <p>
//                     Note: As per Govt regulations, cash donations exceeding ₹2,000
//                     are not eligible for 80G deduction. Please use digital modes.
//                   </p>
//                 </div>
//               </div>

//               <Link
//                 href="https://aspwct.omsakthiamma.in/" target="_blank" rel="noopener noreferrer"
//                 className="block w-full mt-auto"
//               >
//                 <Button className="w-full bg-[#a7150b] hover:bg-[#8a0d08] text-white h-14 text-base sm:text-lg rounded-2xl shadow-lg transition-all hover:scale-[1.02]">
//                   Donate via UPI / NetBanking
//                 </Button>
//               </Link>
//             </motion.div>
//           </div>

//           {/* CERTIFICATES */}
//           <div className="space-y-14 md:space-y-16">
//             <div className="flex items-center justify-center gap-3 text-center">
//               <ShieldCheck className="w-7 h-7 text-[#a7150b]" />
//               <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
//                 Legal Certificates & Documents
//               </h2>
//             </div>

//             {/* 80G */}
//             <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-md border border-gray-100">
//               <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
//                 <FileText className="w-6 h-6 text-[#a7150b]" />
//                 <h3 className="text-lg sm:text-xl font-bold text-gray-900">
//                   80G Tax Exemption Certificate (Domestic)
//                 </h3>
//               </div>

//               <div className="flex justify-center bg-gray-50 rounded-xl p-4 border border-gray-100">
//                 <Image
//                   src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766399003/ASPWCT_80G_CERTIFICATE_1__page-0001_g1jeqw.jpg"
//                   alt="80G Certificate"
//                   width={800}
//                   height={1000}
//                   className="w-full max-w-3xl h-auto shadow-sm"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= MODAL FOR OVERSEAS PROCEDURE ================= */}
//       <AnimatePresence>
//         {isOverseasModalOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setIsOverseasModalOpen(false)}
//             className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm flex items-center justify-center p-4"
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               className="w-full max-w-3xl h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col relative overflow-hidden"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex justify-between items-center p-5 border-b bg-gray-50 z-10 shrink-0">
//                 <h3 className="font-bold text-xl text-gray-900">Overseas Donation Procedure</h3>
//                 <button onClick={() => setIsOverseasModalOpen(false)} className="p-2 hover:bg-gray-200 rounded-full">
//                   <X className="w-5 h-5 text-gray-500" />
//                 </button>
//               </div>

//               <div className="flex-1 overflow-y-auto p-8">
//                 <div className="bg-yellow-50 border-l-4 border-[#ffc107] p-4 mb-6 text-sm">
//                   <p className="font-bold mb-1 text-yellow-800">Important Note:</p>
//                   <p className="text-black">
//                     Donations can be done only through Wire Transfer to the specified Bank Account. UPI/NEFT/RTGS from
//                     Indian banks are restricted.
//                   </p>
//                 </div>

//                 <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-gray-900">
//                   <Building2 className="w-5 h-5 text-[#a7150b]" /> Wire Transfer Details
//                 </h4>
//                 <div className="bg-slate-50 rounded-xl p-6 border border-gray-200 space-y-3 font-mono text-sm mb-8">
//                   <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-200 pb-2">
//                     <span className="text-gray-500 font-sans">Account Name</span>
//                     <span className="font-bold text-right text-gray-900">
//                       Melmaruvathur Adhiparasakthi Spiritual Movement
//                     </span>
//                   </div>
//                   <div className="flex justify-between border-b border-gray-200 pb-2">
//                     <span className="text-gray-500 font-sans">Account No</span>
//                     <span className="font-bold text-lg text-gray-900">40209740361</span>
//                   </div>
//                   <div className="flex justify-between border-b border-gray-200 pb-2">
//                     <span className="text-gray-500 font-sans">Bank Name</span>
//                     <span className="font-bold text-gray-900">State Bank of India</span>
//                   </div>
//                   <div className="flex justify-between border-b border-gray-200 pb-2">
//                     <span className="text-gray-500 font-sans">Branch</span>
//                     <span className="font-bold text-gray-900">New Delhi Main Branch (Code: 00691)</span>
//                   </div>
//                   <div className="flex justify-between pt-1">
//                     <span className="text-gray-500 font-sans">SWIFT Code</span>
//                     <span className="font-bold bg-yellow-100 px-2 rounded text-black">SBININBB104</span>
//                   </div>
//                 </div>

//                 <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-gray-900">
//                   <Mail className="w-5 h-5 text-[#a7150b]" /> Mandatory Reporting
//                 </h4>
//                 <p className="text-sm text-gray-500 mb-4">
//                   On successful transfer, kindly share the following details +{" "}
//                   <strong>Passport Copy (Front & Back)</strong> to{" "}
//                   <span className="font-bold text-gray-900">aspwctrust@gmail.com</span>:
//                 </p>
//                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-medium text-gray-700 bg-slate-50 p-4 rounded-lg">
//                   <li>1. Name of Donor</li>
//                   <li>2. Donor Address</li>
//                   <li>3. Purpose of Remittance</li>
//                   <li>4. Country of Donor</li>
//                   <li>5. Currency & Amount</li>
//                   <li>6. ID Proof (Passport)</li>
//                 </ul>
//               </div>

//               <div className="p-4 bg-gray-50 border-t flex justify-end gap-3 shrink-0">
//                 <Button variant="outline" onClick={() => setIsOverseasModalOpen(false)}>
//                   Close
//                 </Button>
//                 <Button className="bg-[#1a1a1a] text-white hover:bg-black">Copy Bank Details</Button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }

// function CsrProjects() {
//   return (
//     <section className="py-24 px-4 bg-white">
//       <div className="container mx-auto space-y-24">
        
//         {/* ================= PROJECT 1: EYE CAMP ================= */}
//         <div>
//           <div className="text-center mb-10">
//             <span className="inline-block px-4 py-2 bg-[#ffc107]/10 text-[#ffc107] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
//               CSR Initiative 01
//             </span>
//             <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight">Free Eye Camp</h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
//             {[
//               "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766164830/097A1993_anatnz.jpg",
//               "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766164805/097A1516_sodl4z.jpg",
//               "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766164845/097A1597_wxps2o.jpg",
//               "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766164797/097A1504_nn9vgr.jpg",
//             ].map((imgSrc, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 whileHover={{ y: -5 }}
//                 className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
//               >
//                 <Image
//                   src={imgSrc || "/placeholder.svg"}
//                   alt={`Eye Camp Image ${idx + 1}`}
//                   fill
//                   className="object-fill transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// // ========== 9. CSR INQUIRY FORM COMPONENT ==========
// function CsrInquiry() {
//   const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle")
//   const [selectedProject, setSelectedProject] = useState("")

//   const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setFormStatus("submitting")
//     setTimeout(() => {
//       setFormStatus("success")
//     }, 1500)
//   }

//   return (
//     <section className="py-12 md:py-24 px-4  bg-[#a7150b] relative">
//       <div className="container mx-auto max-w-5xl relative z-10">
//         <Card className="border-none shadow-2xl rounded-3xl overflow-hidden bg-white">
//           <div className="grid grid-cols-1 md:grid-cols-5">
//             {/* Form Side */}
//             <div className="md:col-span-3 p-6 md:p-12">
//               <div className="mb-6 md:mb-8">
//                 <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 tracking-tight">Partner with Us</h3>
//                 <p className="text-sm md:text-base text-gray-500 mt-2">Interested in a CSR collaboration? Let's connect.</p>
//               </div>

//               {formStatus === "success" ? (
//                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-64 flex flex-col items-center justify-center text-center">
//                   <CheckCircle2 className="w-16 h-16 text-green-600 mb-4" />
//                   <h4 className="text-xl font-bold text-gray-900">Inquiry Sent!</h4>
//                   <p className="text-gray-500">We will get back to you within 24 hours.</p>
//                 </motion.div>
//               ) : (
//                 <form onSubmit={handleFormSubmit} className="space-y-4 md:space-y-5">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="name">Full Name</Label>
//                       <Input id="name" required placeholder="John Doe" className="bg-slate-50 border-slate-200 h-12 focus:ring-[#a7150b] rounded-xl" />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="company">Company</Label>
//                       <Input id="company" required placeholder="Tech Corp" className="bg-slate-50 border-slate-200 h-12 focus:ring-[#a7150b] rounded-xl" />
//                     </div>
//                   </div>
                  
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="email">Email</Label>
//                       <Input id="email" type="email" required placeholder="john@example.com" className="bg-slate-50 border-slate-200 h-12 focus:ring-[#a7150b] rounded-xl" />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="phone">Phone</Label>
//                       <Input id="phone" type="tel" required placeholder="+91..." className="bg-slate-50 border-slate-200 h-12 focus:ring-[#a7150b] rounded-xl" />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="project">Interested Project</Label>
//                     <Select onValueChange={(value) => setSelectedProject(value)}>
//                       <SelectTrigger className="bg-slate-50 border-slate-200 h-12 rounded-xl"><SelectValue placeholder="Select a project" /></SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="education">EDUCATION</SelectItem>
//                         <SelectItem value="eye-camp">EYE CAMP</SelectItem>
//                         <SelectItem value="medical">MEDICAL</SelectItem>
//                         <SelectItem value="feeding-poor">FEEDING POOR</SelectItem>
//                         <SelectItem value="others">OTHERS</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
                  
//                   {selectedProject === "others" && (
//                     <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="space-y-2">
//                       <Label htmlFor="other-details">Specify Details</Label>
//                       <Input id="other-details" required placeholder="Please specify..." className="bg-slate-50 border-slate-200 h-12 focus:ring-[#a7150b] rounded-xl" />
//                     </motion.div>
//                   )}
                  
//                   <div className="space-y-2">
//                     <Label htmlFor="remarks">Remarks</Label>
//                     <Textarea id="remarks" placeholder="Any specific requirements?" className="bg-slate-50 border-slate-200 resize-none focus:ring-[#a7150b] rounded-xl" rows={3} />
//                   </div>
                  
//                   <Button type="submit" disabled={formStatus === "submitting"} className="w-full bg-[#ffc107] text-black font-bold h-12 text-lg rounded-xl shadow-md">
//                     {formStatus === "submitting" ? "Sending..." : "Submit Inquiry"}
//                   </Button>
//                 </form>
//               )}
//             </div>

//             {/* Info Side */}
//             <div className="md:col-span-2 bg-[#1a1a1a] p-6 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
//               <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
//                 <Building2 size={150} className="md:w-[200px] md:h-[200px]" />
//               </div>
              
//               <div className="relative z-10">
//                 <h4 className="text-lg md:text-xl font-bold mb-6 text-[#ffc107] ">
//                   Contact Information
//                 </h4>
//                 <div className="space-y-6">
//                   <div className="flex items-start gap-4">
//                     <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#ffc107] shrink-0 mt-1" />
//                     <div>
//                       <p className="text-xs text-gray-400 uppercase tracking-wider">
//                         Email Us
//                       </p>
//                       <p className="font-medium text-sm break-all text-gray-300">
//                         contact@aspwctrust.org
//                       </p>
//                     </div>
//                   </div>               
//                   <div className="flex items-start gap-4">
//                     <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#ffc107] shrink-0 mt-1" />
//                     <div>
//                       <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
//                         Call Us
//                       </p>
//                       <div className="space-y-1 text-sm font-medium">
//                         <p className="text-gray-300">Landline: +91 44 2752 9313</p>
//                         <p className="text-gray-300">Mobile: +91 91500 45391</p>
//                         <p className="text-gray-300">Whatsapp: +91 91500 45391</p>
//                         <p className="text-gray-300">PRO: +91 44 27529276</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <Building2 className="w-5 h-5 md:w-6 md:h-6 text-[#ffc107] shrink-0 mt-1" />
//                     <div>
//                       <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
//                         Visit Us
//                       </p>
//                       <p className="font-medium text-sm leading-relaxed text-gray-300">
//                         <span className="font-bold block mb-1">
//                           Adhiparasakthi Charitable Medical Educational and
//                           Cultural Trust
//                         </span>
//                         No.1 GST Road, Adhiparasakthi Siddhar Peeda Temple
//                         Campus, Melmaruvathur, Chengalpet District,
//                         TamilNadu-603319, India
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <Clock className="w-5 h-5 md:w-6 md:h-6 text-[#ffc107] shrink-0 mt-1" />
//                     <div>
//                       <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
//                         Timing
//                       </p>
//                       <p className="font-medium text-sm text-gray-300">
//                         8:00 am To 8:00 PM
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
//                 <p className="text-xs text-gray-500">
//                   By submitting this form, you agree to our privacy policy
//                   regarding data collection.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </Card>
//       </div>
//     </section>
//   )
// }

"use client"

import { AnimatePresence, motion, useScroll, useTransform, type Variants } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Heart,
  CheckCircle2,
  Landmark,
  Activity,
  Eye,
  FileText,
  Phone,
  Building2,
  Clock,
  HeartHandshake,
  Mail,
  ShieldCheck,
  AlertCircle,
  Quote,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

// ========== ANIMATION VARIANTS ==========
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const scaleOnHover = {
  hover: { scale: 1.02, transition: { duration: 0.3 } },
}

export default function Home() {
  return (
    <main className="bg-slate-50 overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">
      <Hero />
      <ChairpersonMessage />
      <About />
      <Leadership />
      <MissionVision />
      <KeyInitiatives />
      <DonationAndCorpus />
      <ContactForm />
    </main>
  )
}

// ========== HERO COMPONENT ==========
function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091901/dental-hospital_cd4gda.jpg"
          alt="Hero Background"
          fill
          className="object-cover scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center pt-16 md:pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-6">
            <span className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md text-[#ffc107] text-sm font-bold tracking-widest uppercase border border-white/10 shadow-xl">
              Melmaruvathur Adhiparasakthi Spiritual Movement
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] drop-shadow-2xl tracking-tight"
          >
            Spirituality.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc107] via-yellow-200 to-[#ffc107]">
              Education. Service.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-2xl text-gray-200 mb-12 leading-relaxed font-light max-w-3xl mx-auto text-balance"
          >
            Inspiring millions to lead a life of devotion, compassion, and service to humanity under the divine guidance of Amma.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8"
          >
            <Link
              href="https://aspwct.omsakthiamma.in/" target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto bg-[#a7150b] hover:bg-[#d91e11] text-white rounded-full px-10 py-7 text-lg font-bold shadow-lg transition-all hover:scale-105">
                <Heart className="mr-3 w-5 h-5 fill-current" />
                Donate
              </Button>
            </Link>

            <Link href="#about" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-2 border-white/40 text-white hover:bg-white hover:text-black rounded-full px-10 py-7 text-lg font-bold backdrop-blur-sm transition-all hover:scale-105 bg-white/5"
              >
                Learn More
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ========== CHAIRPERSON'S MESSAGE (NEW) ==========
function ChairpersonMessage() {
  return (
    <section className="py-24 bg-[#ffc107] text-[#1a1a1a] relative overflow-hidden">
      <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
        <Quote size={200} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 bg-black/10 text-black rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              Leadership Message
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">
              Chairperson's Message
            </h2>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-10 md:p-14 rounded-[2.5rem] shadow-xl text-lg leading-relaxed text-slate-800">
            <div className="italic mb-8 space-y-6">
              <p>
                "It is with great grief I am here to continue my services to all the charitable organisations and educational institutions founded by His Holiness Aruthiru Bangaru Adigalar. Though 'AMMA' chose to renounce this body, He is still with us through his blessings which manifests itself and guides in our daily life."
              </p>
              <p>
                "Countless leaders in all walks of life have condoled the unfortunate demise of AMMA. Numerous followers of him are subjected to inconsolable sorrow. May AMMA guide them all to regain their strength and composure to fulfil the purpose of their life."
              </p>
            </div>

            <div className="space-y-6 not-italic border-t border-slate-200 pt-8">
              <div>
                <h4 className="font-bold text-xl mb-2 text-[#a7150b]">Festival Updates</h4>
                <p className="text-sm">
                  The Sakthi Maalai Irumudi festival at Melmaruvathur was held from <strong>December 1, 2023, to January 24, 2024</strong>. This was the first year carried out without "AMMA's" physical presence, yet devotees participated in large numbers.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ========== ABOUT COMPONENT ==========
function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 container mx-auto">
      <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center lg:text-left"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-2 bg-[#a7150b]/5 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4"
          >
            About The Movement
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight tracking-tight"
          >
            A Holistic <br/>Spiritual Movement
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 space-y-4"
          >
            <p>
              The Melmaruvathur Adhiparasakthi Spiritual Movement is not just a religious organization but a holistic movement fostering spirituality, education, healthcare, and social welfare.
            </p>
            <p>
              Under the divine guidance of Amma, it continues to inspire millions. The movement gained prominence due to its emphasis on universal love, equality, and selfless service, transcending caste, creed, and gender barriers.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-3 py-4">
              {["Daily Poojas & Rituals", "Irumudi Festival", "Education & Training", "Social Welfare"].map((item) => (
                <div key={item} className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-[#a7150b]/10 group-hover:bg-[#a7150b] transition-colors flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-[#a7150b] group-hover:text-white w-5 h-5 transition-colors" />
                  </div>
                  <span className="font-semibold text-gray-800 leading-10">{item}</span>
                </div>
              ))}
            </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766143744/a12_nbqg5x.webp"
              alt="Medical Service"
              width={700}
              height={500}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#ffc107]/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#a7150b]/10 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  )
}

// ========== LEADERSHIP COMPONENT ==========
function Leadership() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              Divine Guidance
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight">
              Founder & President
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[
              {
                name: "His Holiness Bangaru Adigalar",
                role: "Founder",
                image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091903/3952Founder-President_k3xqz3.png",
                borderColor: "border-[#ffc107]",
              },
              {
                name: "Smt. Lakshmi Bangaru Adigalar",
                role: "President",
                image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091895/Vice-President_z3lp84.jpg",
                borderColor: "border-[#a7150b]",
              },
            ].map((person, idx) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -8 }}
              >
                <Card className="p-8 text-center border-none shadow-lg bg-slate-50 hover:bg-white transition-all duration-300 rounded-3xl group">
                  <div className={`w-48 h-48 mx-auto rounded-full overflow-hidden border-4 ${person.borderColor} shadow-xl mb-6 relative group-hover:scale-105 transition-transform`}>
                    <Image src={person.image} alt={person.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">{person.name}</h3>
                  <p className="text-[#a7150b] font-bold uppercase tracking-widest text-sm">{person.role}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ========== MISSION & VISION COMPONENT ==========
function MissionVision() {
  return (
    <section className="py-24 px-4 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div whileHover="hover" variants={scaleOnHover} className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border-l-8 border-[#a7150b]">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-[#a7150b]/10 rounded-2xl flex items-center justify-center mb-8">
                <Activity className="text-[#a7150b] w-8 h-8" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4 text-gray-900">Origins</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                The spiritual movement traces its roots to the Adhiparasakthi Siddhar Peedam, a sacred temple in Melmaruvathur where the Divine Mother is believed to have manifested through Bangaru Adigalar.
              </p>
            </div>
          </motion.div>

          <motion.div whileHover="hover" variants={scaleOnHover} className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border-l-8 border-[#ffc107]">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-[#ffc107]/10 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="text-gray-900 w-8 h-8" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4 text-gray-900">Core Belief</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                "Atheism should be destroyed and Spirituality should spread; The God consciousness and faith should prevail strongly with the people. All the hungry stomachs should be fed and their life expanded." ~ Amma's Oracle
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ========== KEY INITIATIVES (REPLACED CSR PROJECTS) ==========
function KeyInitiatives() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto">
        
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#ffc107]/10 text-[#ffc107] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight">Key Initiatives</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Education */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" className="bg-slate-50 p-8 rounded-3xl">
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#a7150b]/10 p-3 rounded-full text-[#a7150b]"><Building2 className="w-6 h-6"/></div>
                    <h3 className="text-2xl font-bold">Education</h3>
                </div>
                <p className="text-gray-600">Building infrastructure from primary to professional education. Significant contributions to Lakshmi Bangaru Arts & Science College, scholarships, and vocational training.</p>
            </motion.div>

            {/* Healthcare */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" className="bg-slate-50 p-8 rounded-3xl">
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600"><Activity className="w-6 h-6"/></div>
                    <h3 className="text-2xl font-bold">Healthcare</h3>
                </div>
                <p className="text-gray-600">MAPIMS 1000+ bed hospital offering free/subsidized care. Regular medical camps for eyes, dental, and general health for rural poor.</p>
            </motion.div>

            {/* Social */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" className="bg-slate-50 p-8 rounded-3xl">
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-orange-100 p-3 rounded-full text-orange-600"><Heart className="w-6 h-6"/></div>
                    <h3 className="text-2xl font-bold">Annadanam</h3>
                </div>
                <p className="text-gray-600">Providing free food to all devotees. Melmaruvathur Siddhar Peedam is a "Hunger Free Zone".</p>
            </motion.div>

            {/* Environment */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" className="bg-slate-50 p-8 rounded-3xl">
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-green-100 p-3 rounded-full text-green-600"><Landmark className="w-6 h-6"/></div>
                    <h3 className="text-2xl font-bold">Environment</h3>
                </div>
                <p className="text-gray-600">Tree plantation drives, water conservation in Melmaruvathur lake, and creating habitats for increased avian activity.</p>
            </motion.div>
        </div>
      </div>
    </section>
  )
}

// ========== DONATION & CORPUS FUNDS ==========
function DonationAndCorpus() {
  return (
    <section className="py-20 md:py-24 px-4 bg-slate-50" id="donate">
      <div className="container mx-auto max-w-6xl">

        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#ffc107]/20 text-yellow-800 px-4 py-1.5 rounded-full text-sm font-semibold">
            <HeartHandshake className="w-4 h-4" />
            <span>Support The Cause</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Corpus Funds & Donations
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            The trust credits the corpus funds for land received as gifts from devotees (e.g., Natrampalli, Mammalla Nagar). Interest generated is utilized to meet the expenditure for which the corpus fund was created.
          </p>
        </div>

        {/* DONATION CARDS */}
        <div className="grid md:grid-cols-1 gap-8 items-stretch mb-16 md:mb-20">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-100 relative flex flex-col"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-[#a7150b]" />

            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 bg-red-50 rounded-2xl text-[#a7150b] shrink-0">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Make a Contribution</h3>
                <span className="text-xs sm:text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  Support Annadanam & Development
                </span>
              </div>
            </div>

            <div className="space-y-4 mb-8 flex-1 text-sm sm:text-base">
              <p className="text-gray-500">
                Your contributions help sustain the free food distribution, medical camps, and educational scholarships provided by the Trust.
              </p>
            </div>

            <Link
              href="https://aspwct.omsakthiamma.in/" target="_blank" rel="noopener noreferrer"
              className="block w-full mt-auto"
            >
              <Button className="w-full bg-[#a7150b] hover:bg-[#8a0d08] text-white h-14 text-base sm:text-lg rounded-2xl shadow-lg transition-all hover:scale-[1.02]">
                Donate via UPI / NetBanking
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ========== CONTACT FORM ==========
function ContactForm() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle")

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")
    setTimeout(() => {
      setFormStatus("success")
    }, 1500)
  }

  return (
    <section className="py-12 md:py-24 px-4 bg-[#a7150b] relative">
      <div className="container mx-auto max-w-5xl relative z-10">
        <Card className="border-none shadow-2xl rounded-3xl overflow-hidden bg-white">
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Form Side */}
            <div className="md:col-span-3 p-6 md:p-12">
              <div className="mb-6 md:mb-8">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 tracking-tight">Contact Us</h3>
                <p className="text-sm md:text-base text-gray-500 mt-2">Reach out for information on rituals, education, or donations.</p>
              </div>

              {formStatus === "success" ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-64 flex flex-col items-center justify-center text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900">Inquiry Sent!</h4>
                  <p className="text-gray-500">We will get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 md:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" required placeholder="Your Name" className="bg-slate-50 border-slate-200 h-12 focus:ring-[#a7150b] rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" required placeholder="+91..." className="bg-slate-50 border-slate-200 h-12 focus:ring-[#a7150b] rounded-xl" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required placeholder="email@example.com" className="bg-slate-50 border-slate-200 h-12 focus:ring-[#a7150b] rounded-xl" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger className="bg-slate-50 border-slate-200 h-12 rounded-xl"><SelectValue placeholder="Select Topic" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pooja">Pooja & Rituals</SelectItem>
                        <SelectItem value="education">Education / Admission</SelectItem>
                        <SelectItem value="medical">Medical Services</SelectItem>
                        <SelectItem value="donation">Donation / Corpus Fund</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message..." className="bg-slate-50 border-slate-200 resize-none focus:ring-[#a7150b] rounded-xl" rows={3} />
                  </div>
                  
                  <Button type="submit" disabled={formStatus === "submitting"} className="w-full bg-[#ffc107] text-black font-bold h-12 text-lg rounded-xl shadow-md hover:bg-[#e6ac00]">
                    {formStatus === "submitting" ? "Sending..." : "Submit Message"}
                  </Button>
                </form>
              )}
            </div>

            {/* Info Side */}
            <div className="md:col-span-2 bg-[#1a1a1a] p-6 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                <Building2 size={150} className="md:w-[200px] md:h-[200px]" />
              </div>
              
              <div className="relative z-10">
                <h4 className="text-lg md:text-xl font-bold mb-6 text-[#ffc107] ">
                  Address & Contact
                </h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#ffc107] shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">
                        Email Us
                      </p>
                      <p className="font-medium text-sm break-all text-gray-300">
                        contact@masm.org
                      </p>
                    </div>
                  </div>               
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#ffc107] shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                        Call Us
                      </p>
                      <div className="space-y-1 text-sm font-medium">
                        <p className="text-gray-300">Landline: +91 44 2752 9313</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Building2 className="w-5 h-5 md:w-6 md:h-6 text-[#ffc107] shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                        Visit Us
                      </p>
                      <p className="font-medium text-sm leading-relaxed text-gray-300">
                        <span className="font-bold block mb-1">
                          Adhiparasakthi Siddhar Peedam
                        </span>
                        Melmaruvathur, Chengalpet District,<br/>
                        TamilNadu-603319, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}