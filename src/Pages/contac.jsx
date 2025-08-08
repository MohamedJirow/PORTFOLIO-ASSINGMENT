import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../Componants/header";
import imageOne from "../images/WhatsApp_Image_2025-08-06_at_00.02.41_84875810-removebg-preview.png";


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
      
      <div className="bg-[#4b4030] px-6 md:px-20 lg:px-48 py-10 mt-10">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 animate-fadeIn transition-all duration-1000">
              
              {/* Sawirka */}
              <div className="w-52 h-52 md:w-60 md:h-60 bg-[#c4a35a] rounded-full overflow-hidden flex justify-center items-center shadow-lg hover:scale-105 transition-transform duration-500">
                <img className="w-full h-full object-cover" src={imageOne } alt="Mohamed Sharmake" />
              </div>
       
              {/* Qaybta Qoraalka */}
              <div className="text-center lg:text-left">
                <h1 className="text-white text-2xl font-semibold">
                  <span className="text-yellow-600 text-3xl">–</span> About Me
                </h1>
      
                <h1 className="text-3xl font-semibold text-white mt-4">
                  Who is <span className="text-yellow-600">Mohamed Sharmake</span>
                </h1>
      
                <p className="text-lg text-white mt-4 max-w-xl leading-relaxed">
                  Mohamed Sharmake is a passionate web developer based in Somalia,
                  dedicated to building modern, responsive, and user-friendly websites...
                </p>
                
              <a
        href="/ Mohamed_Sharmake_CV_Updated.pdf"
        download
        className="bg-[#c4a35a] hover:bg-yellow-700 text-white px-6 py-2 rounded-md text-xl font-semibold transition-all duration-300 inline-block mt-4"
      >
        Download CV
      </a>
              </div>
            </div>
          </div>
      

      
    </>
  );
}

export default Contact;
