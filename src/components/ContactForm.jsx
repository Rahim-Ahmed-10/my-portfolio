import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { FaPaperPlane } from 'react-icons/fa6';

const ContactForm = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Using import.meta.env since this is a Vite project, not Next.js
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Explicit template parameters matching EmailJS standard fields
    const templateParams = {
      from_name: formRef.current.user_name.value,
      from_email: formRef.current.user_email.value,
      message: formRef.current.message.value,
    };

    emailjs
      .send(serviceId, templateId, templateParams, {
        publicKey: publicKey,
      })
      .then(
        () => {
          toast.success('Message sent successfully!', {
            style: {
              background: 'rgba(24, 28, 36, 0.9)',
              color: '#fff',
              border: '1px solid rgba(56, 189, 248, 0.4)',
              backdropFilter: 'blur(10px)',
            },
            iconTheme: {
              primary: '#38BDF8',
              secondary: '#181C24',
            },
          });
          formRef.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.error('EmailJS Error Details:', error);
          toast.error('Failed to send message. Please try again.', {
            style: {
              background: 'rgba(24, 28, 36, 0.9)',
              color: '#fff',
              border: '1px solid rgba(239, 68, 68, 0.4)',
              backdropFilter: 'blur(10px)',
            },
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={sendEmail}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-2xl mx-auto space-y-6 relative z-10 text-left mt-10"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full space-y-2">
          <label htmlFor="user_name" className="text-sm font-medium text-foreground-secondary ml-2">Name</label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            required
            placeholder="John Doe"
            className="w-full glass-panel iridescent-border px-6 py-4 rounded-2xl bg-surface-elevated/40 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-accent-primary/50 text-white placeholder:text-foreground-tertiary transition-all"
          />
        </div>
        <div className="w-full space-y-2">
          <label htmlFor="user_email" className="text-sm font-medium text-foreground-secondary ml-2">Email</label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            required
            placeholder="john@example.com"
            className="w-full glass-panel iridescent-border px-6 py-4 rounded-2xl bg-surface-elevated/40 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-accent-primary/50 text-white placeholder:text-foreground-tertiary transition-all"
          />
        </div>
      </div>
      
      <div className="w-full space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground-secondary ml-2">Message</label>
        <textarea
          name="message"
          id="message"
          required
          rows="5"
          placeholder="How can we help you?"
          className="w-full glass-panel iridescent-border px-6 py-4 rounded-2xl bg-surface-elevated/40 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-accent-primary/50 text-white placeholder:text-foreground-tertiary transition-all resize-none"
        ></textarea>
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full group flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-heading font-black text-sm uppercase tracking-[0.2em] shadow-lg shadow-accent-primary/20 hover:shadow-[0_0_30px_rgba(var(--accent-primary),0.4)] transition-all duration-500 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
        {!isSubmitting && (
          <FaPaperPlane className="text-lg transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
        )}
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
