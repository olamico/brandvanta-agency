import Link from "next/link";

export default function Home() {
return (
<main className="min-h-screen bg-fog font-sans">
  {/* Section 1: Hero (The Vantage Point) */}
  <section className="relative text-white py-32 px-6 text-center flex flex-col items-center justify-center min-h-[80vh] bg-[url('/hero-bg.png')] bg-cover bg-center">

{/* Dark Overlay to keep text readable */}

<div className="absolute inset-0 bg-obsidian/80"></div>

{/* Content (needs relative z-10 to sit above the overlay) */}

<div className="relative z-10 max-w-4xl mx-auto">
<h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
Your Brand, Accelerated. <span className="text-gold">Results, Multiplied.</span>
</h1>
<p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-300 leading-relaxed">
brandvanta agency is a full-service marketing partner that bridges the gap between creative ambition and commercial rigour. We don’t just build brands; we engineer growth engines that make your business impossible to ignore in an overcrowded marketplace.
</p>
<Link href="/contact" className="inline-block bg-gold text-obsidian px-8 py-4 font-bold rounded hover:bg-yellow-600 transition-colors duration-300">
Schedule Your Strategy Session
</Link>
</div>

</section>

  {/* Section 2: About (The Philosophy) */}
  <section className="py-24 px-6 max-w-5xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-obsidian mb-8">
      Strategic Insight Meets Disruptive Creativity.
    </h2>
    <p className="text-lg md:text-xl leading-relaxed text-gray-800">
      At brandvanta agency, we believe that creativity without direction is merely decoration. We were founded on the principle that your visual identity, your content strategy, and your performance marketing should exist as a single, integrated team. We partner with ambitious startups and established enterprises to transform their digital presence into a measurable competitive advantage.
    </p>
  </section>

  {/* Section 3: Services (The Engine) */}
  <section className="bg-white py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-obsidian mb-12 text-center">
        Bespoke Solutions for Modern Growth.
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-10 border border-gray-200 shadow-sm hover:border-gold transition-colors duration-300">
          <h3 className="text-2xl font-bold text-obsidian mb-4">Brand Identity & Strategy</h3>
          <p className="text-gray-700 leading-relaxed">Developing the complete visual language and positioning of your business.</p>
        </div>
        <div className="p-10 border border-gray-200 shadow-sm hover:border-gold transition-colors duration-300">
          <h3 className="text-2xl font-bold text-obsidian mb-4">Performance Marketing</h3>
          <p className="text-gray-700 leading-relaxed">Scaling ROI through data-driven PPC and precision-targeted SEO.</p>
        </div>
        <div className="p-10 border border-gray-200 shadow-sm hover:border-gold transition-colors duration-300">
          <h3 className="text-2xl font-bold text-obsidian mb-4">Social Architecture</h3>
          <p className="text-gray-700 leading-relaxed">Building and managing engaged communities across global platforms.</p>
        </div>
        <div className="p-10 border border-gray-200 shadow-sm hover:border-gold transition-colors duration-300">
          <h3 className="text-2xl font-bold text-obsidian mb-4">Content Creation</h3>
          <p className="text-gray-700 leading-relaxed">High-impact storytelling designed to nurture leads and build long-term equity.</p>
        </div>
      </div>
    </div>
  </section>

  {/* Section 4: Why Choose Us (The brandvanta Edge) */}
  <section className="bg-obsidian text-white py-24 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gold mb-8">Strategy First, Always.</h2>
      <p className="text-lg leading-relaxed text-gray-300">
        We operate as an extension of your internal team, prioritizing transparency and real-time reporting over vanity metrics. While traditional agencies hand work to junior staff, brandvanta ensures senior talent is involved in every stage of your project, from the initial brief to final delivery. We hit deadlines, challenge mediocre briefs, and focus relentlessly on revenue and retention.
      </p>
    </div>
  </section>

  {/* Section 5: Our Process (The Blueprint) */}
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-obsidian mb-16 text-center">Our Process</h2>
    <div className="grid md:grid-cols-4 gap-8 text-center">
      <div>
        <div className="text-gold text-5xl font-bold mb-4">01</div>
        <h3 className="text-xl font-bold text-obsidian mb-2">Discovery</h3>
        <p className="text-gray-700">We immerse ourselves in your market landscape and business objectives.</p>
      </div>
      <div>
        <div className="text-gold text-5xl font-bold mb-4">02</div>
        <h3 className="text-xl font-bold text-obsidian mb-2">Strategy</h3>
        <p className="text-gray-700">We translate insights into a data-backed roadmap with clear success criteria.</p>
      </div>
      <div>
        <div className="text-gold text-5xl font-bold mb-4">03</div>
        <h3 className="text-xl font-bold text-obsidian mb-2">Execution</h3>
        <p className="text-gray-700">Our creative and technical teams bring the strategy to life with meticulous craft.</p>
      </div>
      <div>
        <div className="text-gold text-5xl font-bold mb-4">04</div>
        <h3 className="text-xl font-bold text-obsidian mb-2">Optimization</h3>
        <p className="text-gray-700">We constantly iterate based on performance data to ensure compounding results.</p>
      </div>
    </div>
  </section>

  {/* Section 6: CTA (The Next Step) */}
  <section className="bg-gold text-obsidian py-24 px-6 text-center">
    <h2 className="text-4xl font-bold mb-6">Ready to Define Your Future?</h2>
    <p className="text-xl mb-10 max-w-2xl mx-auto font-medium">
      Stop guessing and start growing. Let’s talk about what’s possible for your brand.
    </p>
    <Link href="/contact" className="bg-obsidian text-white px-10 py-4 font-bold rounded shadow-lg hover:bg-gray-900 transition-colors duration-300">
      Schedule Your Strategy Session
    </Link>
  </section>

</main>);
}