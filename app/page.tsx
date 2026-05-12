import Link from "next/link";
import Image from "next/image";

export default function Home() {
return (
<main className="min-h-screen bg-fog font-sans gap-2 overflow-x-hidden">
  {/* Section 1: Hero (The Vantage Point) */}
  <section className="relative text-white py-32 px-6 text-center flex flex-col items-center justify-center min-h-[80vh] bg-[url('/hero-bg.png')] bg-cover bg-center animate-fade-up">

{/* Dark Overlay to keep text readable */}

<div className="absolute inset-0 bg-obsidian/80"></div>

{/* Content (needs relative z-10 to sit above the overlay) */}

<div className="relative z-10 max-w-4xl mx-auto animate-fade-up animate-delay-0">
<h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-hero-text">
  Your Brand, Accelerated. <span className="text-gold">Results, Multiplied.</span>
</h1>
<p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-300 leading-relaxed animate-fade-up animate-delay-1">
brandvanta agency is a full-service marketing partner that bridges the gap between creative ambition and commercial rigour. We don’t just build brands; we engineer growth engines that make your business impossible to ignore in an overcrowded marketplace.
</p>
<Link href="/contact" className="inline-block bg-gold text-obsidian px-8 py-4 font-bold rounded hover:bg-yellow-600 transition-colors duration-300 animate-fade-up animate-delay-2">
Schedule Your Strategy Session
</Link>
</div>

</section>

  {/* Section 2: About (The Philosophy) */}
      <section className="py-24 px-6 max-w-7xl mx-auto animate-fade-up animate-delay-1">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: The Text */}
          <div className="animate-fade-up animate-delay-2">
            <h2 className="text-3xl md:text-5xl font-bold text-obsidian mb-8 tracking-tight">
              Strategic Insight Meets <br/>
              <span className="text-gold">Disruptive Creativity.</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                At brandvanta agency, we believe that creativity without direction is merely decoration. We were founded on the principle that your visual identity, your content strategy, and your performance marketing should exist as a single, integrated team.
              </p>
              <p>
                We partner with ambitious startups and established enterprises to transform their digital presence into a measurable competitive advantage.
              </p>
            </div>
          </div>

          {/* Right Side: The Image Box */}
          <div className="relative h-[400px] md:h-[500px] rounded-sm overflow-hidden shadow-2xl border-l-4 border-gold animate-fade-up animate-delay-3">
            
            <Image
              src="/hero-bg.png"
              alt="Strategic Insight and Creativity"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>
  {/* Section 3: Services (The Engine) */}
<section className="bg-obsidian py-24 px-6 border-t border-gray-800 relative overflow-hidden">
  
  {/* Subtle background glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-full bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

  <div className="max-w-7xl mx-auto relative z-10 animate-fade-up animate-delay-1">
    <h2 className="text-4xl font-bold text-white mb-12 text-center animate-fade-up animate-delay-2">
      Bespoke Solutions for Modern Growth.
    </h2>
    
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
      
      {/* Card 1: Brand Identity */}
      <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-gold/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-300 group opacity-0 animate-fade-up animate-delay-3">
        <div className="relative w-full aspect-[4/3] mb-6 rounded-3xl overflow-hidden shadow-lg border border-white/10">
          <Image 
            src="/service-1.jpg" 
            alt="Brand Identity" 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors">Brand Identity & Strategy</h3>
        <p className="text-gray-400 leading-relaxed">Developing the complete visual language and positioning of your business.</p>
      </div>
      
      {/* Card 2: Performance Marketing */}
      <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-gold/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-300 group opacity-0 animate-fade-up animate-delay-4">
        <div className="relative w-full aspect-[4/3] mb-6 rounded-3xl overflow-hidden shadow-lg border border-white/10">
          <Image 
            src="/service-2.jpg" 
            alt="Performance Marketing" 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors">Performance Marketing</h3>
        <p className="text-gray-400 leading-relaxed">Scaling ROI through data-driven PPC and precision-targeted SEO.</p>
      </div>
      
      {/* Card 3: Social Architecture */}
      <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-gold/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-300 group opacity-0 animate-fade-up animate-delay-5">
        <div className="relative w-full aspect-[4/3] mb-6 rounded-3xl overflow-hidden shadow-lg border border-white/10">
          <Image 
            src="/service-3.jpg" 
            alt="Social Architecture" 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors">Social Architecture</h3>
        <p className="text-gray-400 leading-relaxed">Building and managing engaged communities across global platforms.</p>
      </div>
      
      {/* Card 4: Content Creation */}
      <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-gold/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-300 group opacity-0 animate-fade-up animate-delay-6">
        <div className="relative w-full aspect-[4/3] mb-6 rounded-3xl overflow-hidden shadow-lg border border-white/10">
          <Image 
            src="/service-4.jpg" 
            alt="Content Creation" 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors">Content Creation</h3>
        <p className="text-gray-400 leading-relaxed">High-impact storytelling designed to nurture leads and build long-term equity.</p>
      </div>
      
    </div>
  </div>
</section>
  {/* Section 4: Why Choose Us (The brandvanta Edge) */}
  <section className="bg-obsidian text-white py-24 px-6 animate-fade-up animate-delay-2">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gold mb-8 animate-fade-up animate-delay-3">Strategy First, Always.</h2>
      <p className="text-lg leading-relaxed text-gray-300">
        We operate as an extension of your internal team, prioritizing transparency and real-time reporting over vanity metrics. While traditional agencies hand work to junior staff, brandvanta ensures senior talent is involved in every stage of your project, from the initial brief to final delivery. We hit deadlines, challenge mediocre briefs, and focus relentlessly on revenue and retention.
      </p>
    </div>
  </section>

  {/* Section 5: Our Process (The Blueprint) */}
  <section className="relative py-24 px-6 animate-fade-up animate-delay-2">
    <div className="pointer-events-none absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-10 animate-soft-pulse"></div>
    <div className="relative max-w-7xl mx-auto rounded-[2rem] bg-white/95 shadow-2xl ring-1 ring-black/5 p-10 sm:p-12 animate-fade-up animate-delay-3">
      <h2 className="text-4xl font-bold text-obsidian mb-12 text-center">Our Process</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-3xl border border-slate-200/70 bg-slate-50 p-8 text-center shadow-sm opacity-0 animate-fade-up animate-delay-4">
          <div className="text-gold text-4xl font-bold mb-4">01</div>
          <h3 className="text-xl font-semibold text-obsidian mb-3">Discovery</h3>
          <p className="text-slate-600 leading-relaxed">We immerse ourselves in your market landscape and business objectives.</p>
        </div>
        <div className="rounded-3xl border border-slate-200/70 bg-slate-50 p-8 text-center shadow-sm opacity-0 animate-fade-up animate-delay-5">
          <div className="text-gold text-4xl font-bold mb-4">02</div>
          <h3 className="text-xl font-semibold text-obsidian mb-3">Strategy</h3>
          <p className="text-slate-600 leading-relaxed">We translate insights into a data-backed roadmap with clear success criteria.</p>
        </div>
        <div className="rounded-3xl border border-slate-200/70 bg-slate-50 p-8 text-center shadow-sm opacity-0 animate-fade-up animate-delay-6">
          <div className="text-gold text-4xl font-bold mb-4">03</div>
          <h3 className="text-xl font-semibold text-obsidian mb-3">Execution</h3>
          <p className="text-slate-600 leading-relaxed">Our creative and technical teams bring the strategy to life with meticulous craft.</p>
        </div>
        <div className="rounded-3xl border border-slate-200/70 bg-slate-50 p-8 text-center shadow-sm opacity-0 animate-fade-up animate-delay-7">
          <div className="text-gold text-4xl font-bold mb-4">04</div>
          <h3 className="text-xl font-semibold text-obsidian mb-3">Optimization</h3>
          <p className="text-slate-600 leading-relaxed">We constantly iterate based on performance data to ensure compounding results.</p>
        </div>
      </div>
    </div>
  </section>

  {/* Section 6: CTA (The Next Step) */}
  <section className="bg-gold text-obsidian py-24 px-6 text-center animate-fade-up animate-delay-3">
    <h2 className="text-4xl font-bold mb-6 animate-fade-up animate-delay-4">Ready to Define Your Future?</h2>
    <p className="text-xl mb-10 max-w-2xl mx-auto font-medium animate-fade-up animate-delay-5">
      Stop guessing and start growing. Let’s talk about what’s possible for your brand.
    </p>
    <Link href="/contact" className="bg-obsidian text-white px-10 py-4 font-bold rounded shadow-lg hover:bg-gray-900 transition-colors duration-300">
      Schedule Your Strategy Session
    </Link>
  </section>

</main>);
}