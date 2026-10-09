import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaSpinner } from 'react-icons/fa';

const ContactForm = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    const name = formRef.current.from_name.value.trim();
    const email = formRef.current.from_email.value.trim();
    const message = formRef.current.message.value.trim();

    if (!name || !email || !message) {
      setStatus({ type: 'error', message: 'Please complete all required input fields.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_ub2eh3g';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_ue2drh2';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'AHR6j1QuXodw1nf78';

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        () => {
          setStatus({ type: 'success', message: 'Transmission received! I will reply shortly.' });
          formRef.current.reset();
          setIsSubmitting(false);

          setTimeout(() => {
            setStatus({ type: null, message: '' });
          }, 5000);
        },
        (error) => {
          console.error('EmailJS Error Status:', error.status, error.text);
          setStatus({ type: 'error', message: 'Transmission failed. Please try again or use direct email.' });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="w-full relative z-10">
      <div className="mb-8">
        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-cyan-400 block mb-1">
          Direct Terminal
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-slate-100">
          Send Message
        </h3>
      </div>

      {/* Status Alert Banner */}
      <AnimatePresence>
        {status.type && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`mb-6 flex items-center gap-3 p-4 rounded-2xl border backdrop-blur-md font-mono text-xs ${status.type === 'success'
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.15)]'
                : 'bg-rose-500/10 border-rose-500/30 text-rose-300 shadow-[0_0_20px_rgba(244,63,94,0.15)]'
              }`}
          >
            {status.type === 'success' ? <FaCheckCircle className="text-lg shrink-0" /> : <FaExclamationCircle className="text-lg shrink-0" />}
            <p className="font-semibold">{status.message}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="space-y-6 text-left"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="from_name" className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 block">
              Your Name
            </label>
            <input
              type="text"
              name="from_name"
              id="from_name"
              required
              placeholder="e.g. Alex Morgan"
              className="w-full px-5 py-4 rounded-2xl bg-slate-900/90 border border-white/10 focus:border-cyan-400/80 focus:outline-none focus:ring-1 focus:ring-cyan-400/80 text-slate-100 placeholder:text-slate-600 font-sans text-sm transition-all shadow-inner"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="from_email" className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 block">
              Email Address
            </label>
            <input
              type="email"
              name="from_email"
              id="from_email"
              required
              placeholder="alex@company.com"
              className="w-full px-5 py-4 rounded-2xl bg-slate-900/90 border border-white/10 focus:border-cyan-400/80 focus:outline-none focus:ring-1 focus:ring-cyan-400/80 text-slate-100 placeholder:text-slate-600 font-sans text-sm transition-all shadow-inner"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 block">
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            rows="5"
            placeholder="Describe your project, inquiry, or potential role..."
            className="w-full px-5 py-4 rounded-2xl bg-slate-900/90 border border-white/10 focus:border-cyan-400/80 focus:outline-none focus:ring-1 focus:ring-cyan-400/80 text-slate-100 placeholder:text-slate-600 font-sans text-sm transition-all shadow-inner resize-none"
          />
        </div>

        {/* Premium Cyber Action Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="relative w-full h-14 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-[1px] shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:shadow-[0_0_35px_rgba(0,240,255,0.5)] transition-all duration-500 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer overflow-hidden group"
        >
          {/* Inner Glass Layer */}
          <div className="w-full h-full bg-slate-950/20 backdrop-blur-md rounded-[15px] flex items-center justify-center gap-3 text-white font-mono font-black text-xs uppercase tracking-[0.25em] transition-colors group-hover:bg-transparent">
            {isSubmitting ? (
              <>
                <FaSpinner className="text-base animate-spin text-cyan-300" />
                <span className="text-cyan-200">Transmitting...</span>
              </>
            ) : (
              <>
                <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Send Message</span>
                <FaPaperPlane className="text-sm text-cyan-200 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5" />
              </>
            )}
          </div>
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;