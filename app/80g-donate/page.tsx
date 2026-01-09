"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  FileText,
  Banknote,
  Calculator,
  X,
  ShieldCheck,
  Info,
  Heart,
  Plus,
  Minus,
  HelpCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}

// --- FAQ Data ---
const faqs = [
  {
    question: "What is Section 80G of the Income Tax Act, 1961?",
    answer: "Section 80G provides for a deduction in computing the total income of an assessee in respect of donations to certain funds, charitable institutions, etc."
  },
  {
    question: "What is the difference between donations and deductions?",
    answer: "A donation is the actual amount of money donated to a charitable organization, trust or fund. However, a deduction is the tax benefit you get for making that donation to any eligible donee, when computing your taxable income as per extant rules and provisions of Section 80G."
  },
  {
    question: "Who is eligible to claim deduction under Section 80G?",
    answer: "Any taxpayer – including individuals, HUFs, companies, firms, or any other person – who has taxable income and has made donations to an eligible entity, can claim a deduction under this section."
  },
  {
    question: "Are all donations eligible for 80G deduction?",
    answer: "No. Only donations made to specified trusts, charitable funds or institutions, which are specifically mentioned under section 80G(2)(a) of the Act and funds or institutions registered and approved under Section 80G by the Income Tax Department, are eligible for deduction."
  },
  {
    question: "How will the Income Tax Department verify my deduction claim?",
    answer: "It is mandatory for certain category of donees to file Form 10BD, which includes detailed information about each donor—such as their PAN or Aadhaar number. Accordingly, it is mandatory that the deduction claimed by the donor under Section 80G in their ITR matches with the details submitted by the donee in Form 10BD."
  },
  {
    question: "What are the types of donations allowed under 80G?",
    answer: "Donations fall into four categories based on deduction limits: 100% deduction without qualifying limit, 50% deduction without qualifying limit, 100% deduction with qualifying limit, and 50% deduction with qualifying limit."
  }
]

export default function DonatePage() {
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState<number>(5000)
  const [customAmount, setCustomAmount] = useState<string>("")
  const [openAccordion, setOpenAccordion] = useState<number | null>(0)

  const donationAmounts = [5000, 10000, 25000, 50000]

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  return (
    <main className="bg-slate-50 overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-20 bg-[#a7150b] text-white overflow-hidden">
        {/* Abstract Pattern */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ffc107]/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
             <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 rounded-full text-[#ffc107] font-bold text-sm uppercase tracking-widest mb-6 border border-white/20 backdrop-blur-md">
                <Heart className="w-4 h-4 fill-current" /> Support Our Cause
             </motion.div>
             <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-tight">
                Donate to <br/> MASM
             </motion.h1>
             <motion.p variants={fadeInUp} className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Your generous contribution helps us continue our mission of serving humanity through healthcare, education, and cultural preservation.
             </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= TAX BENEFITS ================= */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                  <span className="inline-block px-4 py-2 bg-[#a7150b]/5 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                    Tax Benefits
                  </span>
                  <h2 className="text-3xl font-serif font-bold text-gray-900 tracking-tight">80G Tax Deduction Benefits</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 border-l-4 border-[#ffc107] bg-white shadow-md">
                      <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-gray-900">
                        <ShieldCheck className="w-5 h-5 text-[#ffc107]" /> Recognized Organizations
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        It is essential to make sure that donations are given to recognized organizations. Donations to specified funds and charitable institutions qualify for deductions under Section 80G.
                      </p>
                  </Card>
                  
                  <Card className="p-6 border-l-4 border-[#a7150b] bg-white shadow-md">
                      <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-gray-900">
                        <FileText className="w-5 h-5 text-[#a7150b]" /> Verify Registration
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Not all donations are eligible for tax benefits, so it is essential to verify the organization's registration under Section 80G before making a contribution.
                      </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-red-500 bg-red-50 md:col-span-2 shadow-none">
                      <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-red-700">
                        <Banknote className="w-5 h-5" /> Cash Donation Limit: Rs. 2,000
                      </h3>
                      <p className="text-red-900 text-sm leading-relaxed font-medium">
                        Contributions made in cash exceeding Rs. 2,000 are not eligible for tax deduction benefits under Section 80G. Hence, it is advisable to make donations through banking channels or cheques.
                      </p>
                  </Card>
                </div>
            </motion.div>
          </div>
      </section>

      {/* ================= CALCULATOR & RATES ================= */}
      <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                  <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 tracking-tight">Tax Deduction Rates</h2>
                  <p className="text-slate-600 mb-8">
                      Taxpayers can avail different rates of deduction based on the nature of the charitable organization and the donation made.
                  </p>

                  <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-green-100 text-green-700 rounded-2xl flex items-center justify-center shrink-0 font-bold text-lg">100%</div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-lg">Full Deduction</h4>
                            <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                              Donations to institutions that provide relief to the poor, promote education, or support rural development are eligible for a 100% deduction.
                            </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-yellow-100 text-yellow-700 rounded-2xl flex items-center justify-center shrink-0 font-bold text-lg">50%</div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-lg">Partial Deduction</h4>
                            <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                              For donations made to other charitable institutions, the deduction is limited to 50% of the donated amount.
                            </p>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-white rounded-xl border border-stone-200 mt-6 shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><Info className="w-4 h-4 text-[#a7150b]"/> Limits on Deductions</h4>
                        <ul className="text-sm text-slate-600 list-disc pl-5 space-y-2">
                            <li>The total deduction claimed under Section 80G cannot exceed 10% of the taxpayer's gross total income.</li>
                            <li>For certain donations, the limit is restricted to 100% of the donated amount.</li>
                        </ul>
                      </div>
                  </div>
                </motion.div>

                {/* Calculator Card */}
                <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <div className="bg-[#1a1a1a] rounded-[2rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 opacity-10"><Calculator size={150} /></div>
                      
                      <h3 className="text-2xl font-bold mb-6 relative z-10">Claiming Tax Deduction</h3>
                      <p className="text-gray-400 mb-8 text-sm">To avail tax benefits on donations under Section 80G, taxpayers need to ensure the following:</p>

                      <div className="space-y-4 relative z-10">
                        {[
                          { title: "Step 01", desc: "Obtain a receipt with 80G registration number & PAN." },
                          { title: "Step 02", desc: "Report donation details accurately in ITR filing." },
                          { title: "Step 03", desc: "Keep records of all donations made during the financial year." }
                        ].map((step, i) => (
                           <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                              <p className="font-bold text-[#ffc107] mb-1 text-sm uppercase tracking-wider">{step.title}</p>
                              <p className="text-sm text-gray-300">{step.desc}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 pt-6 border-t border-white/10">
                          <Button onClick={() => setIsPdfModalOpen(true)} className="w-full bg-white text-[#1a1a1a] hover:bg-gray-200 font-bold h-12 rounded-xl transition-colors">
                              <FileText className="w-4 h-4 mr-2" /> View Our 80G Certificate
                          </Button>
                      </div>
                  </div>
                </motion.div>
            </div>
          </div>
      </section>

      {/* ================= DONATION SELECTOR ================= */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true }} 
                  variants={fadeInUp}
                  className="text-center mb-12"
                >
                  <span className="inline-block px-4 py-2 bg-[#ffc107]/20 text-yellow-800 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                      Make a Donation
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 tracking-tight">
                      Support Our Mission
                  </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10 items-start">
                  
                  {/* Selector Card */}
                  <motion.div 
                      initial={{ opacity: 0, x: -30 }} 
                      whileInView={{ opacity: 1, x: 0 }} 
                      viewport={{ once: true }}
                  >
                      <Card className="p-8 shadow-xl border-none bg-white rounded-3xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Select Amount</h3>
                        
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            {donationAmounts.map((amount) => (
                              <button 
                                  key={amount}
                                  onClick={() => {
                                    setSelectedAmount(amount)
                                    setCustomAmount("")
                                  }}
                                  className={`py-4 px-4 font-bold text-lg rounded-xl transition-all ${
                                    selectedAmount === amount && !customAmount
                                        ? "bg-[#a7150b] text-white shadow-md ring-2 ring-[#a7150b] ring-offset-2" 
                                        : "bg-slate-50 text-gray-900 border border-slate-200 hover:border-[#a7150b] hover:text-[#a7150b]"
                                  }`}
                              >
                                  ₹ {amount.toLocaleString('en-IN')}
                              </button>
                            ))}
                        </div>

                        <div className={`flex items-center mb-6 rounded-xl overflow-hidden border-2 transition-colors ${
                            customAmount ? "border-[#a7150b]" : "border-slate-200"
                        }`}>
                            <div className="shrink-0 py-3 px-4 bg-slate-100 font-bold text-gray-600">
                              ₹
                            </div>
                            <input 
                              type="number" 
                              placeholder="Enter Custom Amount" 
                              value={customAmount}
                              onChange={(e) => {
                                  setCustomAmount(e.target.value)
                                  if (e.target.value) {
                                    setSelectedAmount(0)
                                  }
                              }}
                              className="flex-1 py-3 px-4 focus:outline-none text-lg bg-white"
                            />
                        </div>

                        <p className="text-sm text-slate-500 mb-6 text-center">
                            Donations are tax exempted under <strong className="text-[#a7150b]">80G</strong> of Indian Income Tax Act
                        </p>

                        <Link href="https://aspwct.omsakthiamma.in/" target="_blank" rel="noopener noreferrer">
                            <Button className="w-full h-14 bg-[#ffc107] hover:bg-[#e6ad00] text-[#1a1a1a] font-bold text-lg rounded-xl shadow-md transition-transform hover:scale-[1.02]">
                              DONATE NOW →
                            </Button>
                        </Link>

                        <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                            <p className="text-sm text-slate-500 mb-4">
                              Donate for a specific purpose?
                            </p>
                            <Link href="https://aspwct.omsakthiamma.in/" target="_blank" rel="noopener noreferrer">
                              <Button variant="outline" className="w-full h-12 border-2 border-[#a7150b] text-[#a7150b] hover:bg-[#a7150b] hover:text-white font-bold rounded-xl">
                                  Select Specific Cause
                              </Button>
                            </Link>
                        </div>
                      </Card>
                  </motion.div>

                  {/* Impact Stats */}
                  <motion.div 
                      initial={{ opacity: 0, x: 30 }} 
                      whileInView={{ opacity: 1, x: 0 }} 
                      viewport={{ once: true }}
                      className="space-y-6"
                  >
                      {/* Healthcare */}
                      <Card className="p-8 bg-[#a7150b] text-white rounded-3xl shadow-lg relative overflow-hidden border-none">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
                        <div className="relative z-10">
                            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                              Healthcare
                            </span>
                            <div className="text-5xl font-black mb-2 tracking-tight">50,000+</div>
                            <p className="text-lg font-bold text-white/90">
                              Patients Treated Annually
                            </p>
                        </div>
                      </Card>

                      {/* Education */}
                      <Card className="p-8 bg-[#1a1a1a] text-white rounded-3xl shadow-lg relative overflow-hidden border-none">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffc107]/20 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
                        <div className="relative z-10">
                            <span className="inline-block px-3 py-1 bg-[#ffc107]/30 text-[#ffc107] rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                              Education
                            </span>
                            <div className="text-5xl font-black mb-2 tracking-tight">15,000+</div>
                            <p className="text-lg font-bold text-white/90">
                              Students Benefiting
                            </p>
                        </div>
                      </Card>

                      {/* Community */}
                      <Card className="p-8 bg-[#ffc107] text-[#1a1a1a] rounded-3xl shadow-lg relative overflow-hidden border-none">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
                        <div className="relative z-10">
                            <span className="inline-block px-3 py-1 bg-black/10 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                              Community
                            </span>
                            <div className="text-5xl font-black mb-2 tracking-tight">750+</div>
                            <p className="text-lg font-bold text-[#1a1a1a]/80">
                              Villages Impacted
                            </p>
                        </div>
                      </Card>
                  </motion.div>

                </div>
            </div>
          </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-gray-900 text-lg flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#ffc107] shrink-0" />
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full bg-slate-100 transition-transform duration-300 ${openAccordion === index ? "rotate-180 bg-[#a7150b] text-white" : "text-gray-500"}`}>
                    {openAccordion === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {openAccordion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed pl-[3.25rem]">
                          {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="py-24 bg-[#a7150b]">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Ready to Make a Difference?</h2>
            <p className="text-white/80 leading-relaxed mb-10 text-lg">
                Your donation helps us serve communities through healthcare, education, and cultural preservation. All donations are eligible for 80G tax benefits.
            </p>
            <Link href="https://aspwct.omsakthiamma.in/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-br from-[#ffc107] to-[#ffb300]  hover:bg-[#8a0d08] text-black text-lg px-10 py-6 rounded-full shadow-2xl transition-transform hover:scale-105">
                  <Heart className="w-5 h-5 mr-2 fill-current text-black" /> Donate Now
                </Button>
            </Link>
          </div>
      </section>

      {/* ================= 80G PDF MODAL ================= */}
      <AnimatePresence>
        {isPdfModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setIsPdfModalOpen(false)}
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-3xl h-[85vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col relative"
            >
               <div className="flex justify-between items-center p-4 border-b bg-slate-50 z-10 shrink-0">
                  <h3 className="font-bold text-gray-900 text-lg">Official 80G Certificate Document</h3>
                  <button 
                    onClick={() => setIsPdfModalOpen(false)} 
                    className="p-2 bg-slate-200 hover:bg-slate-300 rounded-full transition-colors text-gray-700"
                  >
                    <X className="w-6 h-6" />
                  </button>
               </div>
               <div className="flex-1 overflow-y-auto bg-slate-100 p-4 md:p-8">
                  <div className="bg-white shadow-lg mx-auto w-full">
                      <Image 
                        src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766399003/ASPWCT_80G_CERTIFICATE_1__page-0001_g1jeqw.jpg" 
                        alt="80G Certificate Document" 
                        width={800}
                        height={1100}
                        className="w-full h-auto block" 
                        priority
                      />
                  </div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  )
}