"use client";

import { useState } from "react";

const services = [
  {
    title: "Brand Identity",
    description:
      "Logo systems, typography, and comprehensive brand guidelines tailored for your market positioning.",
  },
  {
    title: "Performance Marketing",
    description:
      "Targeted campaigns across Google, Meta, and LinkedIn designed specifically for rapid customer acquisition.",
  },
  {
    title: "Social Architecture",
    description:
      "Strategic social ecosystems that turn attention into trust, engagement, and consistent brand momentum.",
  },
  {
    title: "Content Creation",
    description:
      "Premium storytelling, motion, and editorial content designed to elevate your brand voice and conversion experience.",
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<string>(services[0].title);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service: string) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen bg-obsidian text-white font-sans py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-gold/90 mb-4">Lead Capture Services</p>
          <h1 className="text-5xl font-bold tracking-tight text-white mb-6">
            Precision Marketing for Scaling Brands.
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-slate-300 leading-relaxed">
            Our service suite addresses every touchpoint of the customer journey, from initial discovery to final conversion. Whether you need a complete brand refresh or a performance marketing engine, brandvanta delivers with clinical precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white/5 border border-white/10 shadow-2xl shadow-black/20 rounded-3xl p-10 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40"
            >
              <div className="mb-6">
                <h2 className="text-3xl font-semibold text-white mb-3">{service.title}</h2>
                <p className="text-slate-300 leading-relaxed">{service.description}</p>
              </div>
              <button
                type="button"
                onClick={() => openModal(service.title)}
                className="mt-auto inline-flex items-center justify-center rounded-full border border-gold/40 bg-gold/10 px-6 py-3 text-sm font-semibold text-gold transition-all duration-300 hover:bg-gold/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-gold/40"
              >
                Request Service
              </button>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 py-10 transition-all duration-300">
          <div className="relative w-full max-w-3xl rounded-[32px] border border-white/10 bg-obsidian/90 p-8 shadow-2xl shadow-black/50 backdrop-blur-xl transition-all duration-300">
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-white/10"
              aria-label="Close modal"
            >
              ×
            </button>

            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.35em] text-gold/90 mb-3">Request a Service</p>
              <h2 className="text-4xl font-bold text-white">{selectedService}</h2>
              <p className="mt-4 max-w-2xl text-slate-300 leading-relaxed">
                Share the details and we’ll reach out with a custom proposal built around your goals.
              </p>
            </div>

            <form className="grid gap-6">
              <div className="grid gap-3">
                <label className="text-sm font-medium text-slate-300">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all duration-300 focus:border-gold/70 focus:bg-white/10"
                />
              </div>
              <div className="grid gap-3">
                <label className="text-sm font-medium text-slate-300">Email</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all duration-300 focus:border-gold/70 focus:bg-white/10"
                />
              </div>
              <div className="grid gap-3">
                <label className="text-sm font-medium text-slate-300">Company URL</label>
                <input
                  type="url"
                  placeholder="https://yourbrand.com"
                  className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all duration-300 focus:border-gold/70 focus:bg-white/10"
                />
              </div>
              <div className="grid gap-3">
                <label className="text-sm font-medium text-slate-300">Project Details</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your goals, timeline, and what you want to achieve."
                  className="w-full resize-none rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all duration-300 focus:border-gold/70 focus:bg-white/10"
                />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={closeModal}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:bg-white/10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-obsidian transition-all duration-300 hover:bg-gold/90"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </main>
  );
}
