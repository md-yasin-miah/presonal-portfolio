import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Steven D. Park for real estate advisory, consultations, private training, and partnership inquiries. Institutional-grade advisory.",
  openGraph: {
    title: "Contact | Steven D. Park",
    description: "Get in touch for consultations and partnership inquiries.",
  },
};

export default function ContactPage() {
  return (
    <>
      <section
        className="max-w-4xl mx-auto px-6 py-32"
        aria-labelledby="contact-heading"
      >
        <div className="text-center mb-16">
          <span className="accent-heading block mb-6">Get in Touch</span>
          <h1
            id="contact-heading"
            className="text-5xl md:text-7xl font-display font-normal mb-8 editorial-spacing"
          >
            Refine Your <span className="italic text-brand-mahogany">Legacy.</span>
          </h1>
          <p className="text-brand-muted font-light mb-12 max-w-xl mx-auto text-lg leading-relaxed">
            Elevate your real estate trajectory with institutional-grade
            advisory and clinical market execution. Serious inquiries will
            receive a response within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-muted mb-4">
              Office
            </h2>
            <p className="text-brand-black font-light leading-relaxed">
              1200 Avenue of the Arts
              <br />
              New York, NY 10019
            </p>
          </div>
          <div>
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-muted mb-4">
              Email & Phone
            </h2>
            <p className="text-brand-black font-light leading-relaxed">
              <a
                href="mailto:contact@stevendpark.com"
                className="hover:text-brand-mahogany transition-colors"
              >
                contact@stevendpark.com
              </a>
              <br />
              <a
                href="tel:+13105550192"
                className="hover:text-brand-mahogany transition-colors"
              >
                +1 (310) 555-0192
              </a>
            </p>
          </div>
        </div>

        <form
          action="#"
          className="space-y-8 border-t border-gray-100 pt-16"
          aria-label="Contact form"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-muted mb-2"
              >
                Full Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                className="w-full border border-gray-200 bg-transparent py-4 px-0 border-t-0 border-x-0 border-b focus:ring-0 focus:border-brand-mahogany transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-muted mb-2"
              >
                Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                className="w-full border border-gray-200 bg-transparent py-4 px-0 border-t-0 border-x-0 border-b focus:ring-0 focus:border-brand-mahogany transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="contact-interest"
              className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-muted mb-2"
            >
              Interest
            </label>
            <select
              id="contact-interest"
              name="interest"
              className="w-full border border-gray-200 bg-transparent py-4 px-0 border-t-0 border-x-0 border-b focus:ring-0 focus:border-brand-mahogany transition-colors"
            >
              <option value="">Select an option</option>
              <option value="consultation">Consultation</option>
              <option value="advisory">Apply for Advisory</option>
              <option value="private-training">Private Training</option>
              <option value="property-inquiry">Property Inquiry</option>
              <option value="investment">Investment / Partner</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="contact-message"
              className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-muted mb-2"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              className="w-full border border-gray-200 bg-transparent py-4 px-0 border-t-0 border-x-0 border-b focus:ring-0 focus:border-brand-mahogany transition-colors resize-none"
              placeholder="How can we help?"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-brand-mahogany text-white px-14 py-5 text-[11px] font-semibold uppercase tracking-[0.3em] hover:bg-brand-mahogany-light transition-all shadow-lg shadow-brand-mahogany/10"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}
