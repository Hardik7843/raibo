"use client";
import React, { useState } from "react";
import SectionHead from "./SectionHead";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    website: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      console.log("Submitted Data:", formData);
      // Simulate async action
      await new Promise((res) => setTimeout(res, 2000));
      resetForm();
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      website: "",
    });
  };

  return (
    <section
      id="contact"
      className="text-white scroll-mt-[80px] min-h-[60vh] mb-10"
    >
      <SectionHead>Contact Us</SectionHead>

      <div className="max-w-lg mx-auto flex flex-col gap-y-5 mt-8">
        <Input
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="bg-zinc-900 p-3 rounded-md outline-none "
        />
        <Input
          name="email"
          type="text"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="bg-zinc-900 p-3 rounded-md outline-none"
        />
        <Input
          name="phone"
          type="text"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="bg-zinc-900 p-3 rounded-md outline-none"
        />
        <Textarea
          name="subject"
          typeof="text"
          placeholder="Subject"
          value={formData.subject}
          onChange={(e) => handleChange(e)}
          className="bg-zinc-900 p-3 rounded-md outline-none"
        />
        <Input
          name="website"
          type="text"
          placeholder="Website (optional)"
          value={formData.website}
          onChange={handleChange}
          className="bg-zinc-900 p-3 rounded-md outline-none"
        />

        <div className="flex gap-4 mt-4">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`bg-blue-500 w-full hover:bg-purple-500 transition-all duration-200 ease-initial px-3 py-2 rounded-md text-white font-medium 
              ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
