import Header from "../Componants/header";
import imageThree from "../images/WhatsApp Image 2025-08-06 at 11.04.58_0eec82db.jpg";
import imageOne from "../images/WhatsApp_Image_2025-08-06_at_00.02.41_84875810-removebg-preview.png";

function About() {
  return   <>
  
      <Header />
<div>
      <section className="bg-white py-16 px-6 md:px-20" id="about">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text Section */}
          <div className="md:w-1/2 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4b4030] mb-6 border-b-4 border-green-600 inline-block pb-2">
              About Me
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Hello! I’m{" "}
                <span className="font-semibold text-[#4b4030] underline">
                  Mohamed Sharmake
                </span>
                , a self-taught web developer with one year of experience
                building responsive, accessible, and visually appealing websites.
              </p>
              <p>
                My focus is on front-end technologies like{" "}
                <span className="font-medium text-[#4b4030]">HTML</span>,{" "}
                <span className="font-medium text-[#4b4030]">CSS</span>,{" "}
                <span className="font-medium text-[#4b4030]">Tailwind CSS</span>,{" "}
                <span className="font-medium text-[#4b4030]">JavaScript</span>, and{" "}
                <span className="font-medium text-[#4b4030]">React.js</span>. I've
                worked on various freelance projects that helped me understand
                real-world challenges and improve my skills.
              </p>
              <p>
                I’m passionate about creating clean, fast, and user-friendly digital
                experiences. I’m always learning and looking for opportunities to
                grow and collaborate on meaningful projects.
              </p>
              <p>
                <span className="font-semibold text-[#4b4030]">Let’s build something amazing together!</span>
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center animate-slide-in">
            <img
              src={imageThree}
              alt="Mohamed Sharmake"
              className="w-[300px] md:w-[400px] rounded-2xl shadow-xl object-cover border-4 border-[#4b4030]"
            />
          </div>
        </div>

    
      </section>
      </div>

     <div className="bg-[#4b4030] px-6 md:px-20 lg:px-48 py-10 mt-10">
           <div className="flex flex-col lg:flex-row items-center justify-center gap-10 animate-fadeIn transition-all duration-1000">
             
             {/* Sawirka */}
             <div className="w-52 h-52 md:w-60 md:h-60 bg-[#c4a35a] rounded-full overflow-hidden flex justify-center items-center shadow-lg hover:scale-105 transition-transform duration-500">
               <img className="w-full h-full object-cover" src={imageOne} alt="Mohamed Sharmake" />
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
     
               <button className="bg-[#c4a35a] hover:bg-yellow-700 text-white mt-6 px-6 py-2 rounded-md text-xl font-semibold transition-all duration-300">
                 Download CV
               </button>
             </div>
             </div>
             </div>
      

    </>

}

export default About
