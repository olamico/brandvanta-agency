import Link from "next/link";

export default function Services() {
return (
<main className="min-h-screen bg-fog font-sans py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h1 className="text-5xl font-bold text-obsidian mb-6 tracking-tight">Precision Marketing for Scaling Brands.</h1>
<p className="text-xl max-w-3xl mx-auto text-gray-700 leading-relaxed">
Our service suite addresses every touchpoint of the customer journey, from initial discovery to final conversion. Whether you need a complete brand refresh or a performance marketing engine, brandvanta delivers with clinical precision.
</p>
</div>

    <div className="grid md:grid-cols-2 gap-10">
      <div className="bg-white p-10 border-t-4 border-gold shadow-sm">
        <h2 className="text-3xl font-bold text-obsidian mb-4">Complete Brand Identity</h2>
        <p className="text-gray-700 leading-relaxed">Logo systems, typography, and comprehensive brand guidelines tailored for your market positioning.</p>
      </div>
      <div className="bg-white p-10 border-t-4 border-gold shadow-sm">
        <h2 className="text-3xl font-bold text-obsidian mb-4">Custom UI/UX Design</h2>
        <p className="text-gray-700 leading-relaxed">High-converting web experiences built around user behavior and premium visual aesthetics.</p>
      </div>
      <div className="bg-white p-10 border-t-4 border-gold shadow-sm">
        <h2 className="text-3xl font-bold text-obsidian mb-4">Organic SEO & Content</h2>
        <p className="text-gray-700 leading-relaxed">Building durable visibility that grows while you sleep, ensuring long-term search engine dominance.</p>
      </div>
      <div className="bg-white p-10 border-t-4 border-gold shadow-sm">
        <h2 className="text-3xl font-bold text-obsidian mb-4">Paid Advertising</h2>
        <p className="text-gray-700 leading-relaxed">Targeted campaigns across Google, Meta, and LinkedIn designed specifically for rapid customer acquisition.</p>
      </div>
    </div>
  </div>
</main>
);
}
