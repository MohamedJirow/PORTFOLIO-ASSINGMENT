import Header from "../Componants/header"
import { FaWhatsapp } from "react-icons/fa";

function Contact () {
  return <>
  < Header />
  <div>
  <section id="contact" className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#4b4030]">Contact Me</h2>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#4b4030]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#4b4030]"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#4b4030]"
          ></textarea>
          <button
            type="submit"
            className="bg-[#4b4030] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#3a3225] transition"
          >
            Send Message
          </button>
        </form>

        {/* WhatsApp Button */}
        <div className="flex justify-center mt-10">
          <a
            href="https://wa.me/+252612498175" 
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
    </div>


  </>
}
export default Contact