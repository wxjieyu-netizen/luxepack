import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-brand-grey">
      <Navbar />
      
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h1 className="text-brand-gold uppercase tracking-[0.4em] text-xs font-bold mb-6">Contact Us</h1>
            <h2 className="text-5xl md:text-7xl font-playfair tracking-tighter leading-tight mb-8">
              Let's create something extraordinary.
            </h2>
            <p className="text-gray-600 text-xl font-light leading-relaxed mb-12">
              Our specialists are ready to help you navigate the complexities of luxury packaging. Whether you have a clear vision or need creative guidance, we're here to assist.
            </p>
            
            <div className="space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Office</p>
                <p className="text-lg font-playfair">Global Design Hub, Building 8, Creative District, Shenzhen, China</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">General Inquiries</p>
                <p className="text-lg font-playfair">hello@luxepack.com</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Business Hours</p>
                <p className="text-lg font-playfair">Mon — Fri: 09:00 - 18:00 (GMT+8)</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 shadow-2xl">
            <h3 className="text-2xl font-playfair mb-10">Send an Enquiry</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 block font-bold">First Name</label>
                  <input type="text" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-brand-gold transition-colors font-light" placeholder="John" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 block font-bold">Last Name</label>
                  <input type="text" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-brand-gold transition-colors font-light" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 block font-bold">Email Address</label>
                <input type="email" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-brand-gold transition-colors font-light" placeholder="john@brand.com" />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 block font-bold">Brand Name</label>
                <input type="text" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-brand-gold transition-colors font-light" placeholder="Luxury Co." />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 block font-bold">Project Details</label>
                <textarea rows={4} className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-brand-gold transition-colors font-light resize-none" placeholder="Tell us about your packaging needs..."></textarea>
              </div>
              <button className="w-full btn-luxury mt-8">Submit Enquiry</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
