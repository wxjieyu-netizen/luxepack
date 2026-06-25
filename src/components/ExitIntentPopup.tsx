"use client";

import { useState, useEffect } from "react";
import { X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed in session
    if (sessionStorage.getItem("exit-popup-dismissed")) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) {
        setShow(true);
        setDismissed(true);
      }
    };

    // Also trigger on mobile after 60s
    const timer = setTimeout(() => {
      if (!dismissed && !sessionStorage.getItem("exit-popup-dismissed")) {
        setShow(true);
        setDismissed(true);
      }
    }, 60000);

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
    };
  }, [dismissed]);

  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem("exit-popup-dismissed", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, source: "exit-intent-popup", message: "Requesting free sample catalogue" }),
      });
      setSubmitted(true);
      setTimeout(handleClose, 3000);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[100] backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-0 z-[101] flex items-center justify-center px-4"
          >
            <div className="bg-white max-w-lg w-full relative overflow-hidden">
              {/* Close */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-brand-grey hover:text-brand-black transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <div className="hidden md:block aspect-square overflow-hidden">
                  <img
                    src="https://sc02.alicdn.com/kf/A7e83a7b29edd46678d0dcd8f5c756c39b.png"
                    alt="Free Sample"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  {!submitted ? (
                    <>
                      <span className="section-label">Before You Go</span>
                      <h3 className="font-playfair text-2xl tracking-tight mb-3 leading-snug">
                        Get a Free Packaging Sample
                      </h3>
                      <p className="text-brand-grey text-xs font-light leading-relaxed mb-6">
                        Enter your email and we'll send you our premium sample kit — real materials, real finishes, zero cost.
                      </p>
                      <form onSubmit={handleSubmit} className="space-y-3">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your business email"
                          required
                          className="w-full border border-brand-grey-mid px-4 py-3 text-sm focus:outline-none focus:border-brand-sage transition-colors"
                        />
                        <button
                          type="submit"
                          disabled={loading}
                          className="btn-primary w-full justify-center gap-2"
                        >
                          {loading ? "Sending..." : "Send Me Samples"}
                          {!loading && <ChevronRight size={14} />}
                        </button>
                      </form>
                      <p className="text-[10px] text-brand-grey mt-3 text-center">
                        No spam. Unsubscribe at any time.
                      </p>
                      <div className="mt-6 pt-4 border-t border-brand-grey-mid">
                        <p className="text-[11px] text-brand-grey text-center mb-2">Or chat directly</p>
                        <a
                          href="https://wa.me/8613801514296?text=Hi%20ELAPACK%2C%20I%27d%20like%20to%20request%20a%20free%20packaging%20sample."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 text-xs text-green-600 font-semibold hover:text-green-700 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          WhatsApp +86 138 0151 4296
                        </a>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full py-8 text-center">
                      <div className="w-12 h-12 bg-brand-sage/10 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-brand-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="font-playfair text-xl mb-2">Thank You!</h3>
                      <p className="text-brand-grey text-sm font-light">We'll be in touch within 24 hours.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
