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
          src="https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/dental-hospital.jpg?updatedAt=1767689427027"
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
              src="https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/a12.webp?updatedAt=1767689037927"
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
                image: "https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/3952Founder-President.png?updatedAt=1767688737331",
                borderColor: "border-[#ffc107]",
              },
              {
                name: "Smt. Lakshmi Bangaru Adigalar",
                role: "President",
                image: "https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/Vice-President.jpg?updatedAt=1767688708134",
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
// function ContactForm() {
//   const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle")

// const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault()
//   setFormStatus("submitting")

//   const form = e.currentTarget
//   const formData = new FormData(form)

//   try {
//     const response = await fetch("https://formspree.io/f/mbdarayj", {
//       method: "POST",
//       body: formData,
//       headers: {
//         Accept: "application/json",
//       },
//     })

//     if (response.ok) {
//       setFormStatus("success")
//       form.reset()
//     } else {
//       setFormStatus("idle")
//       alert("Something went wrong!")
//     }
//   } catch (error) {
//     console.error(error)
//     setFormStatus("idle")
//     alert("Network error!")
//   }
// }


//   return (
//     <section className="py-12 md:py-24 px-4 bg-[#a7150b] relative">
//       <div className="container mx-auto max-w-5xl relative z-10">
//         <Card className="border-none shadow-2xl rounded-3xl overflow-hidden bg-white">
//           <div className="grid grid-cols-1 md:grid-cols-5">
//             {/* Form Side */}
//             <div className="md:col-span-3 p-6 md:p-12">
//               <div className="mb-6 md:mb-8">
//                 <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 tracking-tight">Contact Us</h3>
//                 <p className="text-sm md:text-base text-gray-500 mt-2">Reach out for information on rituals, education, or donations.</p>
//               </div>

//               {formStatus === "success" ? (
//                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-64 flex flex-col items-center justify-center text-center">
//                   <CheckCircle2 className="w-16 h-16 text-green-600 mb-4" />
//                   <h4 className="text-xl font-bold text-gray-900">Inquiry Sent!</h4>
//                   <p className="text-gray-500">We will get back to you shortly.</p>
//                 </motion.div>
//               ) : (
//                 <form onSubmit={handleFormSubmit} className="space-y-4 md:space-y-5">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="name">Name</Label>
//                       <Input id="name" required placeholder="Your Name" className="bg-slate-50 border-slate-200 h-12 focus:ring-[#a7150b] rounded-xl" />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="phone">Phone</Label>
//                       <Input id="phone" type="tel" required placeholder="+91..." className="bg-slate-50 border-slate-200 h-12 focus:ring-[#a7150b] rounded-xl" />
//                     </div>
//                   </div>
                  
//                   <div className="space-y-2">
//                     <Label htmlFor="email">Email</Label>
//                     <Input id="email" type="email" required placeholder="email@example.com" className="bg-slate-50 border-slate-200 h-12 focus:ring-[#a7150b] rounded-xl" />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="subject">Subject</Label>
//                     <Select>
//                       <SelectTrigger className="bg-slate-50 border-slate-200 h-12 rounded-xl"><SelectValue placeholder="Select Topic" /></SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="pooja">Pooja & Rituals</SelectItem>
//                         <SelectItem value="education">Education / Admission</SelectItem>
//                         <SelectItem value="medical">Medical Services</SelectItem>
//                         <SelectItem value="donation">Donation / Corpus Fund</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
                  
//                   <div className="space-y-2">
//                     <Label htmlFor="message">Message</Label>
//                     <Textarea id="message" placeholder="Your message..." className="bg-slate-50 border-slate-200 resize-none focus:ring-[#a7150b] rounded-xl" rows={3} />
//                   </div>
                  
//                   <Button type="submit" disabled={formStatus === "submitting"} className="w-full bg-[#ffc107] text-black font-bold h-12 text-lg rounded-xl shadow-md hover:bg-[#e6ac00]">
//                     {formStatus === "submitting" ? "Sending..." : "Submit Message"}
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
//                   Address & Contact
//                 </h4>
//                 <div className="space-y-6">
//                   <div className="flex items-start gap-4">
//                     <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#ffc107] shrink-0 mt-1" />
//                     <div>
//                       <p className="text-xs text-gray-400 uppercase tracking-wider">
//                         Email Us
//                       </p>
//                       <p className="font-medium text-sm break-all text-gray-300">
//                         masm@omsakthiamma.org
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
//                           Adhiparasakthi Siddhar Peedam
//                         </span>
//                         Melmaruvathur, Chengalpet District,<br/>
//                         TamilNadu-603319, India
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Card>
//       </div>
//     </section>
//   )
// }

function ContactForm() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle")
  const [subject, setSubject] = useState("")

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("submitting")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/mbdarayj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setFormStatus("success")
        form.reset()
        setSubject("")
      } else {
        setFormStatus("idle")
        alert("Something went wrong!")
      }
    } catch (error) {
      console.error(error)
      setFormStatus("idle")
      alert("Network error!")
    }
  }

  return (
    <section className="py-12 md:py-24 px-4 bg-[#a7150b] relative">
      <div className="container mx-auto max-w-5xl relative z-10">
        <Card className="border-none shadow-2xl rounded-3xl overflow-hidden bg-white">
          <div className="grid grid-cols-1 md:grid-cols-5">
            
            {/* Form Side */}
            <div className="md:col-span-3 p-6 md:p-12">
              <div className="mb-6 md:mb-8">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 tracking-tight">
                  Contact Us
                </h3>
                <p className="text-sm md:text-base text-gray-500 mt-2">
                  Reach out for information on rituals, education, or donations.
                </p>
              </div>

              {formStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-64 flex flex-col items-center justify-center text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-green-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900">Inquiry Sent!</h4>
                  <p className="text-gray-500">We will get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 md:space-y-5">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Your Name"
                        className="bg-slate-50 border-slate-200 h-12 focus:ring-[#a7150b] rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91..."
                        className="bg-slate-50 border-slate-200 h-12 focus:ring-[#a7150b] rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="email@example.com"
                      className="bg-slate-50 border-slate-200 h-12 focus:ring-[#a7150b] rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Subject</Label>
                    <Select onValueChange={setSubject}>
                      <SelectTrigger className="bg-slate-50 border-slate-200 h-12 rounded-xl">
                        <SelectValue placeholder="Select Topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Pooja & Rituals">Pooja & Rituals</SelectItem>
                        <SelectItem value="Education / Admission">Education / Admission</SelectItem>
                        <SelectItem value="Medical Services">Medical Services</SelectItem>
                        <SelectItem value="Donation / Corpus Fund">Donation / Corpus Fund</SelectItem>
                      </SelectContent>
                    </Select>

                    {/* Hidden input for Formspree */}
                    <input type="hidden" name="subject" value={subject} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      rows={3}
                      className="bg-slate-50 border-slate-200 resize-none focus:ring-[#a7150b] rounded-xl"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full bg-[#ffc107] text-black font-bold h-12 text-lg rounded-xl shadow-md hover:bg-[#e6ac00]"
                  >
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
                <h4 className="text-lg md:text-xl font-bold mb-6 text-[#ffc107]">
                  Address & Contact
                </h4>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#ffc107]" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase">Email Us</p>
                      <p className="font-medium text-sm text-gray-300 break-all">
                        masm@omsakthiamma.org
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#ffc107]" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase">Call Us</p>
                      <p className="text-sm font-medium text-gray-300">
                        Landline: +91 44 2752 9313
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Building2 className="w-6 h-6 text-[#ffc107]" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase">Visit Us</p>
                      <p className="text-sm font-medium text-gray-300 leading-relaxed">
                        <span className="font-bold block mb-1">
                          Adhiparasakthi Siddhar Peedam
                        </span>
                        Melmaruvathur, Chengalpet District,<br />
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