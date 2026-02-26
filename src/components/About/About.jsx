import React, { useState, useEffect } from 'react';
import profileImage from '../../assets/profile2.jpg';

const About = () => {
  const [currentText, setCurrentText] = useState('Frontend Web Developer');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  
  const texts = ['Frontend Web Developer', 'React Developer', 'programmer'];
  
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];
      
      setCurrentText(isDeleting 
        ? fullText.substring(0, currentText.length - 1)
        : fullText.substring(0, currentText.length + 1)
      );
      
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, texts]);

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Arooba Dilshad
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#3b82f6] leading-tight">
            <span className="text-white">I am a </span>
            <span className="typing-text">
              <span className="typing-text-content">{currentText}</span>
              <span className="typing-cursor"></span>
            </span>
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
          I'm a React Frontend Developer focused on building clean, responsive, and user-friendly web interfaces.
           I enjoy turning ideas into real products using modern JavaScript and React, with strong attention to UI structure,
            smooth navigation, and reusable components. I've built multiple real-world frontend projects, worked with APIs, 
            and deployed applications using tools like Vercel and Netlify. I'm a fast learner who values clean code, continuous improvement,
             and real-world problem solving, and I'm actively seeking opportunities as a junior frontend developer or React intern.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1ZNBeGiD4ct9sUDuF7jHaYyTCg7G3KU4A/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold hover-lift"
            style={{
              background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
              boxShadow: '0 0 2px #3b82f6, 0 0 2px #3b82f6, 0 0 40px #3b82f6',
            }}
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-blue-600 rounded-full tilt-card"
          >
            <img
              src={profileImage}
              alt="Arooba Dilshad"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(59,130,246,0.5)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
