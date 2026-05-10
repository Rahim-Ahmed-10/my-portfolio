import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto scroll-mt-32" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-heading font-light uppercase tracking-tighter text-foreground-primary">
              The <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Odyssey</span>
            </h2>
            <div className="h-1 w-20 bg-accent-primary rounded-full" />
          </div>

          <div className="space-y-6 text-lg font-light text-foreground-secondary leading-relaxed">
            <p>
              আমার জীবন গড়ার গল্পটা একটু ভিন্ন। আমি যখন মানবিক বিভাগে আমার পড়াশোনা শুরু করি, তখন থেকেই মানুষের একে অপরের সাথে যোগাযোগের মাধ্যম এবং সমাজের গভীরে লুকিয়ে থাকা কাঠামোগুলো আমাকে খুব টানত। আমি সবসময় ভাবতাম, কীভাবে এই যোগাযোগকে আরও সহজ আর সুন্দর করা যায়।
            </p>
            <p>
              কৌতূহল থেকেই একদিন পরিচিত হই ওয়েব ডেভেলপমেন্টের সাথে। আমি অবাক হয়ে লক্ষ্য করলাম, কোডিং কেবল কিছু যান্ত্রিক শব্দ বা লজিক নয়; এটিও একটি শক্তিশালী ভাষা। এমন এক ভাষা, যা দিয়ে শূন্য থেকে নতুন কিছু তৈরি করা যায় এবং মুহূর্তেই তা পৌঁছে যায় পৃথিবীর প্রতিটি প্রান্তে।
            </p>
            <p>
              আজ আমি সেই মানবিক মূল্যবোধ আর প্রযুক্তির মাঝখানের দেয়ালটা ভেঙে দিতে কাজ করছি। আমি আমার মানবিক ব্যাকগ্রাউন্ড থেকে পাওয়া সৃজনশীলতা আর সহমর্মিতাকে এখন ফ্রন্টএন্ড ইঞ্জিনিয়ারিংয়ের লজিক্যাল দুনিয়ায় প্রয়োগ করছি। আমি শুধু কোড করি না, আমি এমন সব ডিজিটাল প্ল্যাটফর্ম তৈরি করতে চাই যা মানুষের প্রয়োজন বুঝবে এবং ব্যবহারকারীর মনে গেঁথে থাকবে।
            </p>
          </div>

          <div className="pt-4 grid grid-cols-2 gap-8">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-primary opacity-60">Origin</span>
              <p className="text-sm font-bold text-foreground-primary">Humanities Background</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-secondary opacity-60">Current Focus</span>
              <p className="text-sm font-bold text-foreground-primary">Full-Stack Exploration</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-square glass-panel p-1 rounded-[3rem] overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 via-transparent to-accent-tertiary/20 group-hover:opacity-40 transition-opacity" />
            <div className="h-full w-full bg-surface-secondary/50 rounded-[2.8rem] flex items-center justify-center p-12 relative overflow-hidden">
                {/* Abstract Visual Representation */}
                <div className="absolute inset-0 opacity-10">
                   <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--accent-primary)_1px,_transparent_1px)] [background-size:20px_20px]" />
                </div>
                
                <div className="relative z-10 text-center space-y-4">
                    <div className="text-6xl md:text-8xl font-black text-white/10 select-none">HUMAN</div>
                    <div className="text-2xl md:text-4xl font-heading font-light tracking-[0.5em] text-accent-primary">CODE</div>
                    <div className="text-6xl md:text-8xl font-black text-white/10 select-none">LOGIC</div>
                </div>

                {/* Animated Rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-accent-primary/20 rounded-full animate-pulse-slow" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-accent-secondary/10 rounded-full animate-float" />
            </div>
          </div>
          
          {/* Floating Badges */}
          <div className="absolute -top-6 -right-6 glass-panel px-6 py-4 rounded-2xl border border-white/10 shadow-2xl animate-float">
             <span className="text-[10px] font-bold uppercase tracking-widest text-accent-primary">Adaptability</span>
          </div>
          <div className="absolute -bottom-6 -left-6 glass-panel px-6 py-4 rounded-2xl border border-white/10 shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
             <span className="text-[10px] font-bold uppercase tracking-widest text-accent-secondary">Perspective</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
