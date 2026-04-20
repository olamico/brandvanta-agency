export default function About() {
return (
<main className="min-h-screen bg-fog font-sans">

  <section className="bg-obsidian text-white py-24 px-6 text-center">
    <h1 className="text-5xl font-bold mb-6 tracking-tight">
      We Are brandvanta. <span className="text-gold">Built to Make You Market Leaders.</span>
    </h1>
    <p className="text-xl max-w-4xl mx-auto text-gray-300 leading-relaxed mb-10">
      Founded by a collective of strategists and designers, brandvanta agency exists to close the gap between great products and great marketing. Our mission is to provide businesses of all sizes with access to the same strategic rigour usually reserved for global enterprises. We value craft at every level—from the spacing in a headline to the hierarchy of a complex web application.
    </p>
  </section>

  <section className="py-24 px-6 max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-obsidian mb-12 text-center">What Our Partners Say</h2>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white p-8 border border-gray-200 shadow-sm">
        <p className="text-gray-700 italic mb-6">"brandvanta transformed our digital presence, resulting in a 45% increase in qualified leads within the first quarter."</p>
        <div>
          <h4 className="font-bold text-obsidian">Julian Sterling</h4>
          <p className="text-sm text-gold">CEO, AeroTech</p>
        </div>
      </div>
      <div className="bg-white p-8 border border-gray-200 shadow-sm">
        <p className="text-gray-700 italic mb-6">"Their team captured our brand's voice perfectly, making us feel like we finally have a partner who truly understands our vision."</p>
        <div>
          <h4 className="font-bold text-obsidian">Elena Rossi</h4>
          <p className="text-sm text-gold">Founder, Verven</p>
        </div>
      </div>
      <div className="bg-white p-8 border border-gray-200 shadow-sm">
        <p className="text-gray-700 italic mb-6">"The data-driven approach brandvanta took to our SEO strategy moved us to the top three results in months."</p>
        <div>
          <h4 className="font-bold text-obsidian">Thomas Wright</h4>
          <p className="text-sm text-gold">Director, Quantify</p>
        </div>
      </div>
    </div>
  </section>

</main>
);
}