import React, { useEffect } from "react";
import "../output.css";

const Boo = () => {
  useEffect(() => {
    // Create the animated background effect
    const animateBackground = () => {
      const colors = [
        'rgba(255, 102, 102, 0.2)', // Light red
        'rgba(102, 178, 255, 0.2)', // Light blue
        'rgba(255, 178, 102, 0.2)', // Light orange
        'rgba(178, 102, 255, 0.2)', // Light purple
        'rgba(102, 255, 178, 0.2)'  // Light green
      ];
      
      let colorIndex = 0;
      
      setInterval(() => {
        document.querySelector('.animated-bg').style.background = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
      }, 3000); // Change color every 3 seconds
    };
    
    animateBackground();
    
    // Cleanup interval on component unmount
    return () => {
      const intervals = window.setInterval(() => {}, 0);
      for (let i = 0; i < intervals; i++) {
        window.clearInterval(i);
      }
    };
  }, []);
  
  return (
    <>
      <main className="h-dvh w-dvw flex flex-col justify-center items-center gap-6 font-afacad overflow-hidden relative">
        <div className="animated-bg absolute inset-0 transition-all duration-1000 ease-in-out z-0"></div>
        <div className="upper-container h-fit w-fit flex justify-center items-center gap-3 sm:gap-4 relative z-10">
          <span className="h-fit w-fit text-8xl md:text-9xl font-bold text-neutral-700 drop-shadow-md">
            4
          </span>
<img src={`${process.env.PUBLIC_URL}/assets/Ghost.svg`} alt="Ghost" />

          <span className="h-fit w-fit text-8xl md:text-9xl font-bold text-neutral-700 drop-shadow-md">
            4
          </span>
        </div>
        <div className="lower-container h-fit w-fit text-center flex flex-col gap-4 relative z-10">
          <div className="container-heading h-fit w-full font-bold text-3xl sm:text-4xl md:text-5xl text-neutral-700 drop-shadow-md">
            Boo! Page missing!
          </div>
          <div className="container-paragraph h-fit w-full font-medium text-base sm:text-lg md:text-xl text-neutral-500 drop-shadow-sm">
            Whoops! This page must be a ghost - it's not here!
          </div>
        </div>
      </main>
    </>
  );
};

export default Boo;
