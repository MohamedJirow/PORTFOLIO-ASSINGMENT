import imageOne from "../images/WhatsApp_Image_2025-08-06_at_00.02.41_84875810-removebg-preview.png";
import imageTwo from "../images/WhatsApp Image 2025-08-06 at 11.00.59_6dac3d13.jpg";
import imageThree from "../images/2025.jpg";

import Header from "../Componants/header"

function Home () {

  const images = [imageOne, imageTwo, imageThree];
    
    return <>
    < Header />
    

     <div className="px-6 md:px-16 mt-10 flex flex-col-reverse md:flex-row items-center justify-around gap-10 animate-slide-up">
        {/* Text */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-semibold text-gray-500">Hello There!</h1>
          <h1 className="text-2xl font-semibold">
            I'm <span className="text-[#4b4030] underline">Mohamed Sharmake</span>
          </h1>
          <h1 className="mt-4 text-4xl font-semibold">Web Developer</h1>
          <h1 className="mt-4 text-4xl font-semibold">Based In Somalia.</h1>
          <p className="mt-4 text-xl">
            I’m a creative and dedicated web developer. <br />
            I enjoy building modern and user-friendly websites.
          </p>
          <button className="bg-[#4b4030] px-4 text-xl text-white py-2 rounded-md hover:bg-[#c4a35a] mt-4">
            View Portfolio
          </button>
        </div>

        {/* Image */}
        <div className="w-60 h-60 bg-[#724e18] rounded-full overflow-hidden flex justify-center items-center">
          <img className="w-[280px]" src={imageOne} alt="Mohamed Sharmake" />
        </div>
      </div>

       {/* Skill Tags */}
      <div className="bg-[#724e18] mt-10 py-4 px-6 text-white font-semibold text-xl flex flex-col md:flex-row justify-around items-center gap-4 animate-fade-in">
        <p>* Front-end Developer</p>
        <p>* Back-end Developer</p>
        <p>* Full-stack Developer</p>
      </div>

      {/* Portfolio Cards */}
      <div className="flex flex-wrap w-full px-4 mt-10 gap-10 justify-center items-start animate-fade-in">
  {images.map((img, index) => (
    <div
      key={index}
      className="w-80 bg-white rounded-lg shadow-md p-4 transition-transform duration-300 hover:scale-105 flex flex-col"
    >
      <img
        className="rounded-lg w-full h-48 object-cover"
        src={img}
        alt={`NTP Project ${index + 1}`}
      />

      <p className="mt-2 text-gray-700 text-base flex-grow">
        I am honored to be part of the NTP-FGS program 2025–2029.
        This opportunity has strengthened my skills, discipline, and commitment to professional growth.
      </p>
     

      <a
        href="#Portfolio"
        className="hover:underline text-xl hover:text-yellow-700 inline-flex items-center gap-1 mt-2"
      >
        Learn More <i className="fa-solid fa-arrow-right"></i>
      </a>
    </div>
  ))}
</div>

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

}
export default Home