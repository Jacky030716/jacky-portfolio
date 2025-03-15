"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { textVariant } from "@/constants/variants";
import { ContactForm } from "@/modules/components/ContactForm";

const GlobeModel = dynamic(() => import("@/components/GlobeModel"), {
  ssr: false,
});

const Contact = () => {
  return (
    <section id="contact" className="w-full mt-5 text-4xl text-white">
      <motion.div
        variants={textVariant(0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <p className="section-sub">For further enquiry</p>
        <h2 className="section-main">Contact Me</h2>
      </motion.div>

      <div className="flex-1 w-full flex justify-between gap-4 mt-12">
        {/* Contact Form */}
        <ContactForm />

        {/* 3D Phone Model */}
        <div className="flex-1">
          <GlobeModel />
        </div>
      </div>
    </section>
  );
};

export default Contact;
