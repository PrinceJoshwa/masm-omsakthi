"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import {
  Globe,
  Landmark,
  AlertTriangle,
  Mail,
  FileText,
  CheckCircle2,
  X,
  CreditCard,
  ArrowRight,
  ShieldCheck,
  Download
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

export default function FCRAPage() {
  const [isFcraModalOpen, setIsFcraModalOpen] = useState(false)

  return (
    <main className="bg-background overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center bg-[#1a1a1a]">
        {/* Abstract Globe Background */}
        <div className="absolute inset-0 z-0 opacity-20">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/20 rounded-full" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/20 rounded-full" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/20 rounded-full" />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent z-10" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffc107]/10 border border-[#ffc107]/30 rounded-full text-[#ffc107] text-sm font-bold tracking-widest uppercase mb-6">
               <Globe className="w-4 h-4" /> Global Contribution
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
               Overseas Donations <br/> <span className="text-[#a7150b]">& FCRA Compliance</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              Guidelines for foreign contributions in accordance with the Ministry of Home Affairs and Reserve Bank of India.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= BANKING DETAILS SECTION ================= */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
             
             {/* Left: Introduction & Warning */}
             <motion.div 
               initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
             >
                <h2 className="text-3xl font-serif font-bold text-[#1a1a1a] mb-6">Official Donation Procedure</h2>
                
                <div className="prose text-slate-600 leading-relaxed mb-8">
                   <p className="mb-4">
                      As per the new guidelines of the <strong>Reserve Bank of India (RBI)</strong> and <strong>Foreign Contributions Regulations Authority (FCRA)</strong>, Foreign Contributions/Donations to our trust can effectively only be made through <strong>Wire Transfer</strong> to our specific designated Bank Account.
                   </p>
                   <p>
                      This ensures full compliance with the requirements of the Ministry of Home Affairs (MHA), Government of India.
                   </p>
                </div>

                {/* Important Alert Card */}
                <div className="bg-red-50 border-l-4 border-[#a7150b] p-6 rounded-r-xl mb-8">
                   <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-[#a7150b] shrink-0 mt-1" />
                      <div>
                         <h4 className="text-[#a7150b] font-bold text-lg mb-1">Crucial Restriction</h4>
                         <p className="text-red-900/80 text-sm leading-relaxed">
                            Transfer from any <strong>Bank Branch within India</strong> via UPI, NEFT, or RTGS is <strong>RESTRICTED</strong> for this specific FCRA account. 
                            <br/><br/>
                            <span className="font-semibold">Note:</span> The management will not be responsible for any loss of funds if such domestic transactions are attempted to this overseas account.
                         </p>
                      </div>
                   </div>
                </div>

                <Button 
                   onClick={() => setIsFcraModalOpen(true)}
                   className="bg-[#1a1a1a] hover:bg-black text-white px-8 py-6 rounded-full font-bold text-lg shadow-lg flex items-center gap-2"
                >
                   <ShieldCheck className="w-5 h-5" /> View FCRA Certificate
                </Button>
             </motion.div>

             {/* Right: Bank Details Card */}
             <motion.div 
               initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
               className="relative"
             >
                {/* Visual Card Styling */}
                <div className="bg-gradient-to-br from-[#0a2342] to-[#0f3460] rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden border border-white/10">
                   {/* Background Pattern */}
                   <div className="absolute top-0 right-0 p-8 opacity-10">
                      <Landmark size={200} />
                   </div>
                   
                   <div className="relative z-10">
                      <div className="flex justify-between items-start mb-8">
                         <div>
                            <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">Beneficiary Name</p>
                            <h3 className="font-bold text-lg leading-tight text-white/90">
                               Adhiparasakthi Charitable Medical<br/> Educational and Cultural Trust
                            </h3>
                         </div>
                         <CreditCard className="w-10 h-10 text-[#ffc107]" />
                      </div>

                      <div className="space-y-6">
                         <div className="bg-white/10 rounded-xl p-4 border border-white/5 backdrop-blur-sm">
                            <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">Account Number</p>
                            <p className="text-2xl font-mono font-bold tracking-wider text-[#ffc107]">40209740361</p>
                         </div>

                         <div className="grid grid-cols-2 gap-4">
                            <div>
                               <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">Bank Name</p>
                               <p className="font-semibold">State Bank of India</p>
                            </div>
                            <div>
                               <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">Account Type</p>
                               <p className="font-semibold text-green-300">FCRA Current Account</p>
                            </div>
                            <div>
                               <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">Branch</p>
                               <p className="font-semibold text-sm">New Delhi Main Branch</p>
                            </div>
                            <div>
                               <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">Branch Code</p>
                               <p className="font-mono font-semibold">00691</p>
                            </div>
                         </div>

                         <div className="border-t border-white/10 pt-4 mt-4">
                            <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">SWIFT Code</p>
                            <p className="text-xl font-mono font-bold tracking-widest text-[#ffc107]">SBININBB104</p>
                            <p className="text-[10px] text-blue-300 mt-1">*Only Last 3 Digits are Numeric</p>
                         </div>
                      </div>
                   </div>
                </div>
                
                {/* Decorative blob */}
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#a7150b]/10 rounded-full blur-3xl -z-10" />
             </motion.div>
          </div>
        </div>
      </section>

      {/* ================= REPORTING STEPS ================= */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
               <h2 className="text-3xl font-serif font-bold text-[#1a1a1a] mb-4">Post-Transfer Procedure</h2>
               <p className="text-slate-600">
                  To comply with government regulations, please ensure you share the following details with us via email immediately after a successful transfer.
               </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
               <div className="order-2 md:order-1">
                  <Card className="p-8 border-t-4 border-[#ffc107] bg-stone-50 shadow-lg">
                     <div className="flex items-center gap-3 mb-6">
                        <Mail className="w-6 h-6 text-[#1a1a1a]" />
                        <h3 className="font-bold text-lg">Email Details Required</h3>
                     </div>
                     <ul className="space-y-4">
                        {[
                           "Name of the Donor",
                           "Donor's Address",
                           "Purpose of Remittance",
                           "Country of Origin",
                           "Currency & Amount",
                           "ID Proof (Passport Number)"
                        ].map((item, i) => (
                           <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-[#ffc107] shrink-0" />
                              {item}
                           </li>
                        ))}
                     </ul>
                     
                     <div className="mt-8 p-4 bg-white rounded-xl border border-stone-200">
                        <p className="text-xs text-slate-500 font-bold uppercase mb-2">Send details to:</p>
                        <a href="mailto:aspwctrust@gmail.com" className="flex items-center gap-2 text-[#a7150b] font-bold hover:underline">
                           <Mail className="w-4 h-4" /> aspwctrust@gmail.com
                        </a>
                     </div>
                  </Card>
               </div>

               <div className="order-1 md:order-2 space-y-6">
                  <div className="flex gap-4">
                     <div className="w-10 h-10 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center font-bold shrink-0">1</div>
                     <div>
                        <h4 className="font-bold text-lg mb-1">Make the Transfer</h4>
                        <p className="text-slate-600 text-sm">Complete the wire transfer using the SWIFT code and account details provided above.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="w-10 h-10 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center font-bold shrink-0">2</div>
                     <div>
                        <h4 className="font-bold text-lg mb-1">Prepare Documents</h4>
                        <p className="text-slate-600 text-sm">Scan your <strong>Passport (Front & Back)</strong>. Contributions cannot be accepted without this ID proof.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="w-10 h-10 rounded-full bg-[#ffc107] text-black flex items-center justify-center font-bold shrink-0">3</div>
                     <div>
                        <h4 className="font-bold text-lg mb-1">Send Confirmation Email</h4>
                        <p className="text-slate-600 text-sm">Email the transaction details and the passport copy to our official email address.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ================= FCRA CERTIFICATE MODAL ================= */}
      <AnimatePresence>
        {isFcraModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFcraModalOpen(false)}
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-4xl h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col relative"
            >
               {/* Modal Header */}
               <div className="flex justify-between items-center p-4 border-b bg-gray-50 z-10 shrink-0">
                  <h3 className="font-bold text-gray-800 text-lg flex items-center gap-2">
                     <ShieldCheck className="w-5 h-5 text-green-600" /> FCRA Certificate
                  </h3>
                  <button 
                    onClick={() => setIsFcraModalOpen(false)} 
                    className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors text-gray-700"
                  >
                    <X className="w-6 h-6" />
                  </button>
               </div>

               {/* Modal Body - Scrollable */}
               <div className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-8">
                  <div className="flex flex-col gap-6 max-w-3xl mx-auto">
                     {/* Page 1 */}
                     <div className="bg-white shadow-lg p-2 rounded-lg">
                        <Image 
                          src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766133511/Renewal-Certificate-_ACMEC_TRUST_FCRA_page-0001_nw5ao7.jpg" 
                          alt="FCRA Certificate Page 1" 
                          width={1000} 
                          height={1400}
                          className="w-full h-auto block rounded" 
                          priority
                        />
                     </div>
                     {/* Page 2 */}
                     <div className="bg-white shadow-lg p-2 rounded-lg">
                        <Image 
                          src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766133704/Renewal-Certificate-_ACMEC_TRUST_FCRA_page-0002_vth9g7.jpg" 
                          alt="FCRA Certificate Page 2" 
                          width={1000} 
                          height={1400}
                          className="w-full h-auto block rounded" 
                        />
                     </div>
                  </div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  )
}