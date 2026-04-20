
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
return (
<nav className="bg-obsidian text-white sticky top-0 z-50 shadow-md">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    {/* Brand Logo */}
  <Link href="/">
      <Image 
        src="/logo.png" 
        alt="brandvanta agency logo" 
        width={180} 
        height={50} 
        className="w-auto h-8 md:h-10"
        priority 
      />
    </Link>
    {/* Navigation Links */}
    <div className="hidden md:flex space-x-8 text-sm font-medium">
      <Link href="/" className="hover:text-gold transition-colors duration-300">Home</Link>
      <Link href="/services" className="hover:text-gold transition-colors duration-300">Services</Link>
      <Link href="/about" className="hover:text-gold transition-colors duration-300">About Us</Link>
      <Link href="/contact" className="hover:text-gold transition-colors duration-300">Contact</Link>
    </div>

    {/* Call to Action */}
    <div className="hidden md:block">
      <Link href="/contact" className="bg-gold text-obsidian px-5 py-2 font-bold rounded hover:bg-yellow-600 transition-colors duration-300">
        Let's Talk
      </Link>
    </div>

  </div>
</nav>);
}