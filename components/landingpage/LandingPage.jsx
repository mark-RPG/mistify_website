import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Nav from "@/components/Navigation/Nav";
import { Droplets, Lightbulb, Gauge, Zap, Volume2, Battery, Leaf, Timer, Sparkles } from "lucide-react";
import Link from 'next/link'

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartY = useRef(0);
  
  const images = [
    "images/mainroom.png",
    "images/bedroom.png",
    "images/livingroom.png",
  ];

  const scrollToProgress = (target, duration = 500) => {
    const start = scrollProgress;
    const change = target - start;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setScrollProgress(start + change * easeInOutQuad(progress));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Humidifier positions and sizes - responsive
  const humidifierStyles = [
    { bottom: "120px", right: "570px", width: 280, mobileBottom: "80px", mobileRight: "50%", mobileWidth: 200 },
    { bottom: "170px", left: "57%", width: 180, mobileBottom: "100px", mobileRight: "50%", mobileWidth: 140 },
    { bottom: "80px", right: "520px", width: 210, mobileBottom: "70px", mobileRight: "50%", mobileWidth: 160 },
  ];

  // Split headline into two lines
  const line1 = "Breathe better.";
  const line2 = "Live smarter.";

  // Character split helper
  const splitChars = (text) => text.split("").map((char, index) => ({ char, index }));

  // Scroll-based tracking with mouse wheel
  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const delta = e.deltaY;
      setScrollProgress(prev => {
        const newProgress = prev + delta * 0.5;
        return Math.max(0, Math.min(3250, newProgress));
      });
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  // Touch support for mobile
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const touchY = e.touches[0].clientY;
      const delta = touchStartY.current - touchY;
      
      setScrollProgress(prev => {
        const newProgress = prev + delta * 2;
        return Math.max(0, Math.min(3250, newProgress));
      });
      
      touchStartY.current = touchY;
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  // Calculate overlay darkness (0 to 1 for complete coverage)
  const overlayDarkness = Math.min(1, scrollProgress / 1000);
  
  // Nav opacity and slide animation
  const getNavStyle = () => {
    let opacity = 1;
    let translateY = 0;

    if (scrollProgress <= 300) {
      opacity = 1 - scrollProgress / 300;
      translateY = 0;
    } else if (scrollProgress > 300 && scrollProgress < 1750) {
      opacity = 0;
      translateY = -100;
    } else if (scrollProgress >= 1750 && scrollProgress <= 2250) {
      opacity = 1;
      translateY = -100 + ((scrollProgress - 1750) / 500) * 100;
    } else if (scrollProgress > 2250) {
      opacity = 1;
      translateY = 0;
    }

    return {
      opacity,
      transform: `translateY(${translateY}px)`,
      transition: "opacity 0.3s, transform 0.3s",
    };
  };

  // Grid squares animation - smooth staggered appearance
  const getSquareScale = (index) => {
    const startPoint = index * 80;
    const animationLength = 200;
    
    if (scrollProgress >= startPoint + animationLength) return 1;
    if (scrollProgress >= startPoint) {
      return (scrollProgress - startPoint) / animationLength;
    }
    return 0;
  };
  
  // Border radius animation (1000-1250: rounded to square)
  const getBorderRadius = () => {
    if (scrollProgress < 1000) return 24;
    if (scrollProgress >= 1250) return 0;
    return 24 - ((scrollProgress - 1000) / 250) * 24;
  };
  
  // Gap animation (1250-1500: connect squares)
  const getGap = () => {
    if (scrollProgress < 1250) return 20;
    if (scrollProgress >= 1500) return 0;
    return 20 - ((scrollProgress - 1250) / 250) * 20;
  };

  // Expand to full screen (1250-1500, then 1500-1750)
  const getGridExpansion = () => {
    if (scrollProgress < 1250) return 1;
    if (scrollProgress < 1500) return 1 + ((scrollProgress - 1250) / 250) * 0.5;
    if (scrollProgress >= 1750) return 2.5;
    return 1.5 + ((scrollProgress - 1500) / 250) * 1.0;
  };
  
  // Text opacity in squares (1250-1500: fade out)
  const getTextOpacity = () => {
    if (scrollProgress < 1250) return 1;
    if (scrollProgress >= 1500) return 0;
    return 1 - ((scrollProgress - 1250) / 250);
  };

  // New content slide up animation (1750-2250)
  const getNewContentTranslateY = () => {
    if (scrollProgress < 1750) return 100;
    if (scrollProgress >= 3250) return -100;
    return 100 - ((scrollProgress - 1750) / 1250) * 125;
  };

  const getNewContentOpacity = () => {
    if (scrollProgress < 1750) return 0;
    if (scrollProgress > 1750 && scrollProgress < 3000) return 1;
    if (scrollProgress >= 3250) return 0;
    return 1 - ((scrollProgress - 3000) / 250);
  };

  // Slide up animation for stats
  const getStatsTranslateY = () => {
    if (scrollProgress < 2750) return 100;
    if (scrollProgress >= 3250) return 0;
    return 100 - ((scrollProgress - 2750) / 1000) * 100;
  };

  const getStatsOpacity = () => {
    if (scrollProgress < 2250) return 0;
    if (scrollProgress >= 2750) return 1;
    return (scrollProgress - 1750) / 1000;
  };

  const squares = [
    { 
      title: "Real-Time", 
      subtitle: "Monitor room humidity and temperature instantly with built-in sensors", 
      icon: Gauge, 
      color: "bg-blue-500" 
    },
    { 
      title: "Smart Modes", 
      subtitle: "Switch between auto-adjust or manual settings for perfect comfort", 
      icon: Zap, 
      color: "bg-purple-500" 
    },
    { 
      title: "Ambient Glow", 
      subtitle: "Customizable LED lighting to match your mood or decor", 
      icon: Lightbulb, 
      color: "bg-yellow-500" 
    },
    { 
      title: "Silent", 
      subtitle: "Ultra-quiet operation ideal for bedrooms and workspaces", 
      icon: Volume2, 
      color: "bg-green-500" 
    },
    { 
      title: "Modular Design", 
      subtitle: "Easily switch tops or refill water for convenience and style", 
      icon: Droplets, 
      color: "bg-cyan-500" 
    },
    { 
      title: "Eco-Friendly", 
      subtitle: "Made from recyclable materials for a sustainable choice", 
      icon: Leaf, 
      color: "bg-emerald-500" 
    },
    { 
      title: "Connected", 
      subtitle: "Control settings remotely via web app anytime, anywhere", 
      icon: Battery, 
      color: "bg-orange-500" 
    },
    { 
      title: "Timed Comfort", 
      subtitle: "Set schedules or timers for automated humidity control", 
      icon: Timer, 
      color: "bg-pink-500" 
    },
    { 
      title: "Future-Proof", 
      subtitle: "Receive OTA updates and enjoy locally-manufactured quality", 
      icon: Sparkles, 
      color: "bg-indigo-500" 
    },
  ];

  return (
    <div className="h-screen w-screen overflow-hidden relative bg-[rgb(21,21,21)]">
      {/* Navigation */}
      <div 
        className="fixed top-0 left-0 right-0 z-50"
        style={getNavStyle()}
      >
        <Nav />
      </div>

      {/* Main landing section */}
      <div
        className="absolute inset-0 flex flex-col justify-between"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        {/* Dark fade overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.4)_40%,rgba(0,0,0,0)_80%)]" />
        
        {/* Additional darkness overlay when scrolling */}
        <div 
          className="absolute inset-0 transition-opacity duration-200 pointer-events-none z-30"
          style={{ 
            opacity: overlayDarkness,
            backgroundColor: 'rgb(21, 21, 21)'
          }}
        />

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start w-full max-w-7xl px-5 mx-auto md:pt-[8vh] flex-grow relative z-10">
          {/* Left Text Section */}
          <div
            className="w-full md:w-1/2 text-center md:text-left"
            style={{
              transform: `translateX(${Math.max(-400, -400 * (scrollProgress / 1000))}px)`,
              transition: "transform 0.3s ease-in-out"
            }}
          >
          {/* Headline Line 1 */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight text-white drop-shadow-lg flex justify-center md:justify-start font-aeonik whitespace-nowrap overflow-hidden">
            <span className="inline-flex">
              {splitChars(line1).map(({ char, index }) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </h1>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight text-white drop-shadow-lg flex justify-center md:justify-start mt-2 font-aeonik whitespace-nowrap overflow-hidden">
            <span className="inline-flex">
              {splitChars(line2).map(({ char, index }) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.03 }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </h1>



            {/* Paragraphs */}
            <motion.p
              className="text-md md:text-lg mt-3 text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              A modern humidifier that balances comfort and intelligence. 
              Monitors humidity and temperature in real time while adapting 
              to your space with ambient lighting.
            </motion.p>
            <motion.p
              className="text-sm mt-2 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              Designed for both performance and aesthetics.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, type: "spring", stiffness: 120 }}
            >
              <Link
                href="/buy"
                className="backdrop-blur-2xl bg-white/20 text-white font-semibold px-7 py-3 rounded-2xl shadow-[0_10px_45px_rgba(0,0,0,0.45)] hover:bg-white/50 hover:shadow-[0_10px_60px_rgba(0,0,0,0.55)] transition-all duration-300 hover:scale-110"
              >
                Buy Now
              </Link>
              <button
                onClick={() => scrollToProgress(1000, 400)}
                className="backdrop-blur-xl bg-white/15 text-white font-medium px-6 py-3 rounded-2xl shadow-[0_8px_35px_rgba(0,0,0,0.35)] hover:bg-white/25 hover:shadow-[0_8px_45px_rgba(0,0,0,0.45)] transition-all duration-300 hover:scale-105"
              >
                Learn More
              </button>
            </motion.div>
          </div>
        </div>

        {/* Humidifier Image - Responsive */}
        <div
          className="absolute transition-opacity duration-500 ease-in-out z-20 hidden md:block"
          style={{
            opacity: fade ? 1 : 0,
            position: "absolute",
            ...humidifierStyles[currentImageIndex],
          }}
        >
          <Image
            src="/humidifierfake1.png"
            width={humidifierStyles[currentImageIndex].width}
            height={humidifierStyles[currentImageIndex].width}
            alt="Smart Humidifier Product"
            className="drop-shadow-2xl"
          />
        </div>
        
        {/* Mobile Humidifier Image */}
        <div
          className="absolute md:hidden transition-opacity duration-500 ease-in-out z-20"
          style={{
            opacity: fade ? 1 : 0,
            bottom: humidifierStyles[currentImageIndex].mobileBottom,
            right: humidifierStyles[currentImageIndex].mobileRight,
            transform: 'translateX(50%)',
          }}
        >
          <Image
            src="/humidifierfake1.png"
            width={humidifierStyles[currentImageIndex].mobileWidth}
            height={humidifierStyles[currentImageIndex].mobileWidth}
            alt="Smart Humidifier Product"
            className="drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Grid of squares overlay - Responsive */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-40">
        <div 
          className="grid grid-cols-2 sm:grid-cols-3 w-full px-4 transition-all duration-300"
          style={{
            gap: `${getGap()}px`,
            transform: `scale(${getGridExpansion()})`,
            maxWidth: '750px'
          }}
        >
          {squares.slice(0, isMobile ? 6 : 9).map((square, index) => {
            const IconComponent = square.icon;
            return (
              <div
                key={index}
                className="aspect-square flex flex-col items-center justify-center p-3 sm:p-6 transition-all duration-300"
                style={{
                  transform: `scale(${getSquareScale(index)})`,
                  opacity: getSquareScale(index),
                  borderRadius: `${getBorderRadius()}px`,
                  backgroundColor: "rgba(50, 50, 50, 0.9)",
                }}
              >
                <div
                  className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3"
                  style={{
                    backgroundColor: "rgba(70, 70, 70, 0.8)",
                    opacity: getTextOpacity()
                  }}
                >
                  <IconComponent className="w-5 h-5 sm:w-7 sm:h-7 text-white" strokeWidth={2} />
                </div>
                <div className="text-sm sm:text-lg font-bold text-white text-center mb-1" style={{ opacity: getTextOpacity() }}>
                  {square.title}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-300 text-center font-medium leading-tight" style={{ opacity: getTextOpacity() }}>
                  {square.subtitle}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* New Content Section - slides up from bottom */}
      <div 
        className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none px-4"
        style={{
          transform: `translateY(${getNewContentTranslateY()}vh)`,
          opacity: getNewContentOpacity(),
          transition: "transform 0.1s ease-out, opacity 0.1s ease-out"
        }}
      >
        <div className="max-w-6xl w-full px-4 sm:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-white text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Experience Pure Comfort
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-3 md:mb-4">
              Keep your home healthy and comfortable. Proper humidity helps reduce dry skin, irritated eyes, and respiratory discomfort while supporting better sleep.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-4">
              A well-humidified room also protects wood furniture, flooring, and electronics from cracking or static buildup, preserving your space.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              <Image
                src="/humidifierfake1.png"
                width={400}
                height={400}
                alt="Smart Humidifier Detail"
                className="drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div
        className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none px-4"
        style={{
          transform: `translateY(${getStatsTranslateY()}vh)`,
          opacity: getStatsOpacity(),
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-out",
        }}
      >
        <div className="pointer-events-auto max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-12 md:py-16 bg-white/90 rounded-2xl sm:rounded-3xl shadow-[0_12px_50px_rgba(0,0,0,0.1)] flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-16">
          
          {/* Left: Product Image */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-full max-w-[200px] sm:max-w-xs md:max-w-sm lg:max-w-md aspect-square">
              <Link href="/buy">
                <Image
                  src="/humidifierfake1.png"
                  width={400}
                  height={400}
                  alt="Humidifier"
                  className="w-full h-full object-contain drop-shadow-2xl rounded-2xl sm:rounded-3xl transition-transform duration-500 hover:scale-105 cursor-pointer"
                />
              </Link>
            </div>
          </div>

          {/* Right: Stats Section */}
          <div className="flex-1 flex flex-col items-start justify-center text-left w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Performance at a Glance</h2>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 w-full">
              {[
                { label: "Runtime per Refill", value: "24–48h" },
                { label: "Average Power", value: "30W" },
                { label: "Room Coverage", value: "30–50 m²" },
                { label: "Tank Capacity", value: "1.5–2L" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-start justify-center p-3 sm:p-4 md:p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-1 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-500 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;