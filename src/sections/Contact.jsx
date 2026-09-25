import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        }
      );

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex justify-center items-center py-12 md:py-16 px-5 md:px-10 xl:px-20 scroll-mt-20"
    >
      <div className="w-full max-w-7xl">
        <TitleHeader
          title="Get in Touch – Let's Connect"
          sub="💬 Have questions or ideas? Let's talk! 🚀"
        />

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mt-8 md:mt-10 items-stretch">

          {/* LEFT: Form Card */}
          <div className="xl:col-span-5 flex">
            <div className="w-full bg-[#0e0e11] border border-[#1f2029] rounded-2xl p-7 md:p-9 flex flex-col justify-center">

              {success ? (
                <div className="flex flex-col items-center justify-center text-center min-h-[400px]">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-5">
                    <span className="text-3xl text-green-400">✓</span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Message Sent!
                  </h2>

                  <p className="text-white/50 mt-3 text-sm md:text-base">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col gap-6"
                >
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-white/80 text-sm font-medium"
                    >
                      Your name
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="What's your good name?"
                      required
                      className="w-full px-4 py-3.5 rounded-lg bg-[#1a1c23] text-white placeholder:text-[#525866] text-sm border border-[#2a2d39]/40 focus:border-blue-400 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-white/80 text-sm font-medium"
                    >
                      Your Email
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="What's your email address?"
                      required
                      className="w-full px-4 py-3.5 rounded-lg bg-[#1a1c23] text-white placeholder:text-[#525866] text-sm border border-[#2a2d39]/40 focus:border-blue-400 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone"
                      className="text-white/80 text-sm font-medium"
                    >
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="What's your phone number?"
                      className="w-full px-4 py-3.5 rounded-lg bg-[#1a1c23] text-white placeholder:text-[#525866] text-sm border border-[#2a2d39]/40 focus:border-blue-400 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-white/80 text-sm font-medium"
                    >
                      Your Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      rows="5"
                      required
                      className="w-full px-4 py-3.5 rounded-lg bg-[#1a1c23] text-white placeholder:text-[#525866] text-sm border border-[#2a2d39]/40 focus:border-blue-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-[#d9ecff] hover:bg-white text-black font-semibold text-sm tracking-wider uppercase rounded-lg transition-colors duration-200 mt-2 cursor-pointer disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "SEND MESSAGE"}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* RIGHT: 3D Computer Scene */}
          <div className="xl:col-span-7 flex min-h-[400px] xl:min-h-0">
            <div className="bg-[#cd7c2e] w-full h-full rounded-3xl overflow-hidden hover:cursor-grab active:cursor-grabbing">
              <ContactExperience />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;