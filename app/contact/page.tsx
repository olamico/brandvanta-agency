export default function Contact() {
return (
<main className="min-h-screen bg-fog font-sans py-24 px-6 flex justify-center">
<div className="max-w-3xl w-full bg-white p-12 shadow-sm border border-gray-100">
<h1 className="text-5xl font-bold text-obsidian mb-4 text-center">Let’s Build Something Iconic.</h1>
<p className="text-lg text-gray-700 text-center mb-10">
Whether you have a fully scoped project or just a business challenge you need to solve, our team is ready to listen. Reach out today and receive a response within one business day.
</p>

    <form className="space-y-6">
      <div>
        <label className="block text-sm font-bold text-obsidian mb-2">Full Name</label>
        <input type="text" className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-gold" placeholder="Jane Doe" required />
      </div>
      <div>
        <label className="block text-sm font-bold text-obsidian mb-2">Company</label>
        <input type="text" className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-gold" placeholder="Your Company Name" required />
      </div>
      <div>
        <label className="block text-sm font-bold text-obsidian mb-2">Interest</label>
        <select className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-gold bg-white">
          <option>Brand Identity</option>
          <option>Web Design / UI/UX</option>
          <option>Organic SEO</option>
          <option>Social Architecture</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-bold text-obsidian mb-2">Project Details</label>
        <textarea rows={5} className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-gold" placeholder="Tell us about your goals..." required></textarea>
      </div>
      <button type="submit" className="w-full bg-obsidian text-white font-bold py-4 rounded hover:bg-gold hover:text-obsidian transition-colors duration-300">
        Submit Inquiry
      </button>
    </form>
  </div>
</main>
);
}