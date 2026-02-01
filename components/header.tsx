"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Heart, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

// Updated Menu Items with Sub-menu for Festivals
const navItems = [
  { label: "Home", href: "/" },
  { label: "About the trust", href: "/about-us" },
  { 
    label: "Festivals", 
    href: "/festivals", // Placeholder parent link
    subItems: [
      { label: "Navaratri", href: "/festivals/navaratri" },
      { label: "Chitra Pournami", href: "/festivals/chitra-pournami" },
      { label: "Pournami Vilakku Pooja", href: "/festivals/vilakku-pooja" },
      { label: "Amavasai Velvi", href: "/festivals/amavasai-velvi" },
    ]
  },
  { label: "Educational Institution", href: "/educational-institution" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "bg-[#a7150b] backdrop-blur-md shadow-2xl py-2" : "bg-[#a7150b] py-3 shadow-lg"
      }`}
    >
      <div className="max-w-[95%] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative w-12 h-12 md:w-14 md:h-14 bg-white rounded-full p-1 shadow-lg group-hover:shadow-xl transition-shadow overflow-hidden"
            >
              <Image
                src="https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/logo_dl1zqj.png"
                alt="MASM Logo"
                fill
                className="object-contain p-1"
                sizes="(max-width: 768px) 48px, 56px"
                priority
              />
            </motion.div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-base md:text-xl text-white tracking-tight group-hover:text-[#ffc107] transition-colors">
                MASM
              </span>
              <span className="text-[10px] md:text-sm font-bold text-white/80 uppercase tracking-wider hidden sm:block">
                Adhiparasakthi
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-black/20 p-1.5 rounded-full relative">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              const hasSubmenu = item.subItems && item.subItems.length > 0
              
              return (
                <div 
                  key={item.label} 
                  className="relative group"
                  onMouseEnter={() => hasSubmenu && setActiveDropdown(item.label)}
                  onMouseLeave={() => hasSubmenu && setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => hasSubmenu && e.preventDefault()} // Prevent click for dropdown parent
                    className={`px-5 py-2.5 rounded-full text-sm font-black transition-all duration-300 flex items-center gap-1 cursor-pointer ${
                      isActive || (hasSubmenu && item.subItems?.some(sub => sub.href === pathname))
                        ? "bg-white text-[#a7150b] shadow-md" 
                        : "text-white hover:bg-white hover:text-[#a7150b] hover:shadow-md" 
                    }`}
                  >
                    {item.label}
                    {hasSubmenu && <ChevronDown className="w-4 h-4 mt-0.5" />}
                  </Link>

                  {/* Desktop Dropdown Menu */}
                  <AnimatePresence>
                    {hasSubmenu && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border-t-4 border-[#ffc107] overflow-hidden z-50"
                      >
                        <div className="py-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className={`block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-[#a7150b]/5 hover:text-[#a7150b] transition-colors ${
                                pathname === subItem.href ? "text-[#a7150b] bg-[#a7150b]/5" : ""
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </nav>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-3">
            <Link href="https://masm.omsakthiamma.in/" target="_blank" rel="noopener noreferrer" className="hidden sm:block">
              <Button className="bg-[#ffc107] text-[#1a1a1a] hover:bg-[#e6ac00] rounded-full font-black shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Heart className="w-4 h-4 mr-2 fill-current" />
                Donate
              </Button>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-sm"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t-4 border-[#ffc107] overflow-hidden shadow-2xl"
          >
            <nav className="flex flex-col p-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {navItems.map((item) => {
                 const isActive = pathname === item.href
                 const hasSubmenu = item.subItems && item.subItems.length > 0

                 return (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        if(hasSubmenu) {
                           e.preventDefault(); // Don't navigate, just show list (technically already visible in mobile design below)
                        } else {
                           setMobileMenuOpen(false);
                        }
                      }}
                      className={`block px-4 py-3 font-black rounded-lg transition-all duration-300 flex justify-between items-center ${
                         isActive 
                         ? "bg-[#a7150b]/10 text-[#a7150b]" 
                         : "text-gray-800 hover:text-[#a7150b] hover:bg-[#a7150b]/5"
                      }`}
                    >
                      {item.label}
                    </Link>

                    {/* Mobile Submenu (Always rendered indented for clarity or could be collapsible) */}
                    {hasSubmenu && (
                      <div className="pl-6 space-y-1 mt-1 mb-2 border-l-2 border-gray-100 ml-4">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-2 text-sm font-bold rounded-lg transition-colors ${
                               pathname === sub.href ? "text-[#a7150b]" : "text-gray-600 hover:text-[#a7150b]"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                 )
              })}
              {/* Mobile CTA Button */}
              <Link
                href="https://aspwct.omsakthiamma.in/" target="_blank" rel="noopener noreferrer"
                className="block px-4 py-3 font-black text-[#1a1a1a] bg-[#ffc107] hover:bg-[#e6ac00] rounded-lg text-center mt-4 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Heart className="inline w-4 h-4 mr-2 fill-current" />
                Donate Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}