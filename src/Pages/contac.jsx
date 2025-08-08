import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../Componants/header";


function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "your_service_id",    // Halkan ku qor Service ID-gaaga EmailJS
        "your_template_id",   // Template ID-gaaga EmailJS
        form.current,
        "your_public_key"     // Public Key-gaaga EmailJS
      )
      .then(
        (result) => {
          console.log("SUCCESS:", result.text);
          alert("Message sent successfully!");
          form.current.reset(); // Reset foomka
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message.");
          setLoading(false);
        }
      );
  };

  return (
    <>
      < Header/>

      <section id="contact" className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#4b4030]">
            Contact Me
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#4b4030]"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#4b4030]"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#4b4030]"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className={`bg-[#4b4030] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#3a3225] transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* WhatsApp Button */}
          <div className="flex justify-center mt-10">
            <a
              href="https://wa.me/252610123456" // Ku beddel lambarkaaga saxda ah
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition"
            >
              <FaWhatsapp className="text-2xl" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
