import Link from "next/link";

export default function Footer() {
const currentYear = new Date().getFullYear();

return (
<footer className="bg-obsidian text-gray-300 py-16 px-6 border-t border-gray-800">
<div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">{/* Brand Column */}
    <div>
      <Link href="/" className="text-3xl font-bold text-white tracking-tighter mb-4 block">
        brandvanta<span className="text-gold">.</span>
      </Link>
      <p className="text-sm leading-relaxed mb-6 pr-4">
        A full-service marketing partner bridging the gap between creative ambition and commercial rigour.
      </p>
      <a href="mailto:hello@brandvanta.agency" className="text-gold font-bold hover:underline">
        hello@brandvanta.agency
      </a>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Navigation</h3>
      <ul className="space-y-3 text-sm">
        <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
        <li><Link href="/services" className="hover:text-gold transition-colors">Services</Link></li>
        <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
        <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
      </ul>
    </div>

    {/* Legal Links */}
    <div>
      <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Compliance</h3>
      <ul className="space-y-3 text-sm">
        <li><Link href="/legal" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
        <li><Link href="/legal" className="hover:text-gold transition-colors">Refund Policy</Link></li>
        <li><Link href="/legal" className="hover:text-gold transition-colors">Terms & Conditions</Link></li>
        <li><Link href="/legal" className="hover:text-gold transition-colors">Shipping & Delivery</Link></li>
      </ul>
    </div>

  </div>

  <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
    <p>&copy; {currentYear} brandvanta agency. All rights reserved.</p>
    <p className="mt-2 md:mt-0">brandvanta.agency</p>
  </div>
</footer>);
}