import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const ContactForm = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    // Basic validation
    const name = formRef.current.from_name.value.trim();
    const email = formRef.current.from_email.value.trim();
    const message = formRef.current.message.value.trim();

    if (!name || !email || !message) {
      setStatus({ type: 'error', message: 'Please fill out all fields before submitting.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    // Fallback to hardcoded credentials if env vars are undefined
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_ub2eh3g';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_ue2drh2';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'AHR6j1QuXodw1nf78';

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        () => {
          setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
          formRef.current.reset();
          setIsSubmitting(false);
          
          // Clear success message after 5 seconds
          setTimeout(() => {
            setStatus({ type: null, message: '' });
          }, 5000);
        },
        (error) => {
          console.error('EmailJS Error Status:', error.status, error.text);
          setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-10">
      {/* Status Banner */}
      <AnimatePresence>
        {status.type && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`mb-6 flex items-center gap-3 p-4 rounded-xl border backdrop-blur-md ${
              status.type === 'success' 
                ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                : 'bg-red-500/10 border-red-500/30 text-red-400'
            }`}
          >
            {status.type === 'success' ? <FaCheckCircle className="text-xl" /> : <FaExclamationCircle className="text-xl" />}
            <p className="text-sm font-medium">{status.message}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6 relative z-10 text-left"
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full space-y-2">
            <label htmlFor="from_name" className="text-sm font-medium text-slate-300 ml-2">Name</label>
            <input
              type="text"
              name="from_name"
              id="from_name"
              required
              placeholder="John Doe"
              className="w-full px-6 py-4 rounded-2xl bg-slate-900/50 border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-slate-100 placeholder:text-slate-500 transition-all backdrop-blur-sm"
            />
          </div>
          <div className="w-full space-y-2">
            <label htmlFor="from_email" className="text-sm font-medium text-slate-300 ml-2">Email</label>
            <input
              type="email"
              name="from_email"
              id="from_email"
              required
              placeholder="john@example.com"
              className="w-full px-6 py-4 rounded-2xl bg-slate-900/50 border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-slate-100 placeholder:text-slate-500 transition-all backdrop-blur-sm"
            />
          </div>
        </div>
        
        <div className="w-full space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-2">Message</label>
          <textarea
            name="message"
            id="message"
            required
            rows="5"
            placeholder="How can we help you?"
            className="w-full px-6 py-4 rounded-2xl bg-slate-900/50 border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-slate-100 placeholder:text-slate-500 transition-all backdrop-blur-sm resize-none"
          ></textarea>
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full group flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-heading font-black text-sm uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all duration-500 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
          {!isSubmitting && (
            <FaPaperPlane className="text-lg transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          )}
        </motion.button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
