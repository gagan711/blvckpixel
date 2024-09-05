'use client'
import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay, EffectFade, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './test.css';
import SignInPopup from './popups/SignInPopup';
import SearchPopup from './popups/SearchPopup';
import TalentsPopup from './popups/TalentsPopup';
import DefaultPopup from './popups/DefaultPopup';
import Lottie from 'lottie-react';
import animationData from './animation.json';
import { SlArrowUp, SlArrowDown, SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { GiVerticalFlip } from 'react-icons/gi';

SwiperCore.use([Navigation, Pagination]);


const Home: React.FC = () => {
  
  const [isMenuPopupVisible, setMenuPopupVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      console.log('Clicked outside');
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuPopupVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenuPopup = () => {
    setMenuPopupVisible(!isMenuPopupVisible);
  };

  const toggleMenuPopupClose = () => {
    setMenuPopupVisible(false);
  };

  const containerRef = useRef(null);
  const [visitedSlides, setVisitedSlides] = useState<number[]>([0]);

  const addVisitedSlide = (index: number) => {
    setVisitedSlides(prev => [...prev, index]);
  };

  const handleGoBack = () => {
    console.log(visitedSlides)
    if (visitedSlides.length > 1) {
      const lastVisitedIndex = visitedSlides[visitedSlides.length - 2]; 
      if (swiperRef.current) {
        swiperRef.current.slideTo(lastVisitedIndex); 
        setVisitedSlides(prev => prev.slice(0, -1));
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        swiperRef.current?.slidePrev();
      } else if (e.key === 'ArrowDown') {
        swiperRef.current?.slideNext();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


    const [popupVisible, setPopupVisible] = useState(false);
    const [popupContent, setPopupContent] = useState({
      title: '',
      desc: '',
      backgroundImage: ''
    });

    const openPopup = (title: string, desc: string, backgroundImage: string) => {
      setPopupContent({ title, desc, backgroundImage });
      setPopupVisible(true);
    };

    const closePopup = () => {
      setPopupVisible(false);
    };

    const [isSignInPopupVisible, setSignInPopupVisible] = useState(false);
  const [isSearchPopupVisible, setSearchPopupVisible] = useState(false);
  const [isTalentsPopupVisible, setTalentsPopupVisible] = useState(false);

  const openSignInPopup = () => setSignInPopupVisible(true);
  const closeSignInPopup = () => setSignInPopupVisible(false);

  const openSearchPopup = () => setSearchPopupVisible(true);
  const closeSearchPopup = () => setSearchPopupVisible(false);

  const openTalentsPopup = () => setTalentsPopupVisible(true);
  const closeTalentsPopup = () => setTalentsPopupVisible(false);


    const swiperRef = useRef<SwiperCore | null>(null);

    const swiperRef1 = useRef<SwiperCore | null>(null);

    const handlePrev = () => {
      if (swiperRef1.current) {
        swiperRef1.current.slidePrev();
      }
    };
  
    const handleNext = () => {
      if (swiperRef1.current) {
        swiperRef1.current.slideNext();
      }
    };
  

    const swiperRef2 = useRef<SwiperCore | null>(null);

    const handlePrev1 = () => {
      if (swiperRef2.current) {
        swiperRef2.current.slidePrev();
      }
    };
  
    const handleNext1 = () => {
      if (swiperRef2.current) {
        swiperRef2.current.slideNext();
      }
    };

    const [activeMenu, setActiveMenu] = useState<number>(0);
    const [activeBack, setActiveBack] = useState<number>(0);

    const [afterActiveMenu, setAfterActiveMenu] = useState<number>(0);
    const [beforeActiveMenu, setBeforeActiveMenu] = useState<number>(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isActive, setIsActive] = useState(true);
    const [showSecondImage, setShowSecondImage] = useState(false);



    useEffect(() => {


      const interval = setInterval(() => {
        setIsActive((prev) => !prev);
      }, 5000);

      setTimeout(() => {
        setShowSecondImage(true);
      }, 1500);

      setTimeout(() => {
        setShowSecondImage(false);
      }, 11300);

      return () => {
        clearInterval(interval);
      };
    }, []);




    useEffect(() => {
      const updateWindowDimensions = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      updateWindowDimensions();

      window.addEventListener('resize', updateWindowDimensions);

      return () => {
        window.removeEventListener('resize', updateWindowDimensions);
      };
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const menus = ['who we are', 'why we exist', 'what we do', 'for whom we work', 'how we work', 'contact | jobs'];

    const toggleOptions = () => {
      setIsOpen(!isOpen);
    };

    const handleMenuClick = (index: number) => {
        setActiveMenu(index);
        setIsOpen(false);
        if (swiperRef.current) {
          if (index === 0) swiperRef.current.slideTo(1);
          else if (index === 1) swiperRef.current.slideTo(4);
          else if (index === 2) swiperRef.current.slideTo(6);
          else if (index === 3) swiperRef.current.slideTo(11);
          else if (index === 4) swiperRef.current.slideTo(13);
          else if (index === 5) swiperRef.current.slideTo(16);
          setActiveMenu(index);
        }
      };




    //   const wheelTimeout = useRef<NodeJS.Timeout | null>(null);
    //   const debounceTimeout = useRef<NodeJS.Timeout | null>(null);
    
    //   const debounce = (func: (...args: any[]) => void, delay: number) => {
    //     return (...args: any[]) => {
    //       if (debounceTimeout.current) {
    //         clearTimeout(debounceTimeout.current);
    //       }
    //       debounceTimeout.current = setTimeout(() => {
    //         func(...args);
    //       }, delay);
    //     };
    //   };
    
    //   const handleWheel = debounce((event: WheelEvent) => {
    //     if (wheelTimeout.current) {
    //       clearTimeout(wheelTimeout.current);
    //     }
      
    //     setActiveMenu((prev) => {
    //       const newActiveMenu = event.deltaY < 0 
    //         ? Math.max((prev ?? 0) - 1, 0)
    //         : Math.min((prev ?? 0) + 1, menus.length - 1);
    //       return newActiveMenu;
    //     });
      
    //     wheelTimeout.current = setTimeout(() => {
    //       if (activeMenu !== null) {
    //         // No need to call handleMenuClick directly here
    //         // handleMenuClick(activeMenu);  
    //         // Just setting activeMenu triggers the useEffect that handles the slide transition
    //       }
    //     }, 200);
    //   }, 95);
    
    
    //   useEffect(() => {
    //     const menuItemsContainer = document.getElementById('menu-items');
    //     if (menuItemsContainer) {
    //       menuItemsContainer.addEventListener('wheel', handleWheel);
    //     }
    //     return () => {
    //       if (menuItemsContainer) {
    //         menuItemsContainer.removeEventListener('wheel', handleWheel);
    //       }
    //       if (wheelTimeout.current) {
    //         clearTimeout(wheelTimeout.current);
    //       }
    //     };
    //   }, [activeMenu]);
    
      
    // useEffect(() => {
    //   const activeSlideIndex = swiperRef.current?.activeIndex;
    //   if (activeMenu !== null && swiperRef.current && swiperRef.current.activeIndex) {
    //     const slideMapping = [1, 4, 6, 10, 12, 15];
    //       setTimeout(() => {
    //         swiperRef.current?.slideTo(slideMapping[activeMenu]);
    //       }, 10);
    //   }
    // }, [activeMenu, swiperRef]);

    

      const handleSlideChangeTransitionStart = (swiper: SwiperCore) => {

        // if (swiperRef.current) {
        //   swiperRef.current.mousewheel.disable();
        // }
        
        swiper.slides.forEach((slide) => {
           const slideContent = slide.querySelector('.slide-content');
           if (slideContent) {
             slideContent.classList.remove('move-up-animation');
             slideContent.classList.add('brackets');
          }
         });
        
        const activeSlide = swiper.slides[swiper.activeIndex];
        const activeSlideContent = activeSlide.querySelector('.slide-content');
        if (activeSlideContent) {
          activeSlideContent.classList.add('move-up-animation');
          activeSlideContent.classList.remove('brackets');
        }

        addVisitedSlide(swiper.activeIndex);
      };


      const handleSlideChangeTransitionEnd = (swiper: SwiperCore) => {

        swiper.slides.forEach((slide) => {
           const slideContent = slide.querySelector('.slide-content');
           if (slideContent) {
             slideContent.classList.remove('move-up-animation');
             slideContent.classList.add('brackets');
          }
         });

        const activeSlide = swiper.slides[swiper.activeIndex];
        const activeSlideContent = activeSlide.querySelector('.slide-content');
        if (activeSlideContent) {
          activeSlideContent.classList.remove('move-up-animation');
          activeSlideContent.classList.add('brackets');
        }
      };

      const scrollToActiveMenuItem = (menuIndex: number) => {
        const menuItemsContainer = document.getElementById('menu-items');
        const activeMenuItem = document.getElementById(`menu-item-${menuIndex}`);
        if (menuItemsContainer && activeMenuItem) {
          setTimeout(() => {
            activeMenuItem.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'start',
            });
          }, 350);
        }
      };

    useEffect(() => {
        if (swiperRef.current) {
          setActiveMenu(swiperRef.current.activeIndex || 0);
          swiperRef.current.on('slideChange', () => {
            const activeSlideIndex = swiperRef.current?.activeIndex || 0;
            if (activeSlideIndex === 0) {
              const menuItemsContainer = document.getElementById('menu-items');
              const goBackContainer = document.getElementById('go-back');
              const homeContainer = document.getElementById('home');
              const mobileMenuContainer = document.getElementById('mobileMenu');
              if (menuItemsContainer) {
                menuItemsContainer.style.display = 'none';
              }
              if (goBackContainer) {
                goBackContainer.style.display = 'none';
              }
              if (homeContainer) {
                homeContainer.style.display = 'none';
              }
              if (mobileMenuContainer) {
                mobileMenuContainer.style.display = 'none';
              }
            } else {
              const menuItemsContainer = document.getElementById('menu-items');
              const goBackContainer = document.getElementById('go-back');
              const homeContainer = document.getElementById('home');
              const mobileMenuContainer = document.getElementById('mobileMenu');

              if (menuItemsContainer) {
                menuItemsContainer.style.display = 'flex';
              }
              if (goBackContainer) {
                goBackContainer.style.display = 'block';
              }
              if (homeContainer) {
                homeContainer.style.display = 'block';
              }
              if (mobileMenuContainer) {
                mobileMenuContainer.style.display = 'block';
              }
            }
            if (activeSlideIndex >= 1 && activeSlideIndex < 4) {
              setActiveMenu(0);
              setAfterActiveMenu(1);
              scrollToActiveMenuItem(0);
            } else if (activeSlideIndex >= 4 && activeSlideIndex < 6) {
              setBeforeActiveMenu(0);
              setActiveMenu(1);
              setAfterActiveMenu(2);
              scrollToActiveMenuItem(1);
            } else if (activeSlideIndex >= 6 && activeSlideIndex < 11) {
              setBeforeActiveMenu(1);
              setActiveMenu(2);
              setAfterActiveMenu(3);
              scrollToActiveMenuItem(2);
            } else if (activeSlideIndex >= 11 && activeSlideIndex < 13) {
              setBeforeActiveMenu(2);
              setActiveMenu(3);
              setAfterActiveMenu(4);
              scrollToActiveMenuItem(3);
            } else if (activeSlideIndex >= 13 && activeSlideIndex < 16) {
              setBeforeActiveMenu(3);
              setActiveMenu(4);
              setAfterActiveMenu(5);
              scrollToActiveMenuItem(4);
            } else if (activeSlideIndex >= 16) {
              setBeforeActiveMenu(4);
              setActiveMenu(5);
              scrollToActiveMenuItem(5);
            }
            if (swiperRef.current?.activeIndex === 0 || swiperRef.current?.activeIndex === 1) {
              setTimeout(() => {
               swiperRef.current?.mousewheel.enable();
              }, 1350);
            } else if (swiperRef.current?.activeIndex === 2 || swiperRef.current?.activeIndex === 3 || swiperRef.current?.activeIndex === 4 || swiperRef.current?.activeIndex === 5 || swiperRef.current?.activeIndex === 6 || swiperRef.current?.activeIndex === 7 || swiperRef.current?.activeIndex === 8 || swiperRef.current?.activeIndex === 9 || swiperRef.current?.activeIndex === 10 || swiperRef.current?.activeIndex === 11 || swiperRef.current?.activeIndex === 12 || swiperRef.current?.activeIndex === 13 || swiperRef.current?.activeIndex === 14 || swiperRef.current?.activeIndex === 15 || swiperRef.current?.activeIndex === 16 || swiperRef.current?.activeIndex === 17){
              setTimeout(() => {
                swiperRef.current?.mousewheel.enable();
               }, 1350);
            }
          });
        }
      }, []);

    return (
      <>
        <div className='rotate-icon'>
          <p>Please rotate your device to portrait mode.</p>
        </div>
        <div className='menu-items' id='menu-items'>
            <a className="selected-value" style={{display: 'none'}}>
              {activeMenu !== null ? menus[activeMenu] : 'Select Menu'}
            </a>
            <div className='wrapper' ref={containerRef}>
              {menus.map((menu, index) => (
                <a
                  href='#'
                  key={index}
                  id={`menu-item-${index}`}
                  onClick={() => handleMenuClick(index)}
                  className={activeMenu === index ? 'active' : beforeActiveMenu === index ? 'bactive' : afterActiveMenu === index ? 'bactive' : ''}
                  >
                  {activeMenu === index ? menu : menu}
                </a>
              ))}
            </div>
        </div>

{isSignInPopupVisible && <SignInPopup onClose={closeSignInPopup} />}
      {isSearchPopupVisible && <SearchPopup onClose={closeSearchPopup} />}
      {isTalentsPopupVisible && <TalentsPopup onClose={closeTalentsPopup} />}
      {popupVisible && (
        <DefaultPopup
          title={popupContent.title}
          desc={popupContent.desc}
          backgroundImage={`/${popupContent.backgroundImage}`}
          onClose={closePopup}
        />
      )}

      {isMobile &&
<a href='#' style={{display: 'none !important'}} id='mobileMenu' onClick={toggleMenuPopup}>{isMenuPopupVisible ? <SlArrowUp /> : <SlArrowDown />}</a>
}

{isMenuPopupVisible && (
  <div ref={menuRef} className="popup-container mobile">
  <div className="popup talents">
  <div className="menu-popup menu-items" id='menu-items'>
    <ul>
    {menus.map((menu, index) => (
    <a
      href='#'
      key={index}
      id={`menu-item-${index}`}
      onClick={() => handleMenuClick(index)}
      className={activeMenu === index ? 'active' : beforeActiveMenu === index ? 'bactive' : afterActiveMenu === index ? 'bactive' : ''}
      >
      {activeMenu === index ? menu : menu}
    </a>
  ))}
    </ul>
  </div>
  </div>
  </div>
)}

        <div className='header'>
      
  <a href='#' id='go-back' style={{display: 'none', marginRight: 'auto !important'}} onClick={handleGoBack}>
    <span style={{ transform: 'scale(-1)' }}>← </span>Go back
  </a>

            <a href='#' id='home' style={{display: 'none', marginLeft: 'auto'}} className='home' onClick={() => { if (swiperRef.current) { swiperRef.current.slideTo(0, 500, false); } }}>Home</a>
            {/* <a href='#' onClick={openSearchPopup}>Search</a>
            <a href='#' onClick={openSignInPopup}>Sign In</a> */}
          </div>
<Swiper
         onInit={(swiper) => {
          swiperRef.current = swiper;
          const firstSlideContent = swiper.slides[0].querySelector('.slide-content1');
          if (firstSlideContent) {
            firstSlideContent.classList.add('move-up-animation');
            firstSlideContent.classList.remove('brackets');
          }
      
          swiper.on('slideChangeTransitionStart', () => {
            const previousSlide = swiper.slides[swiper.previousIndex];
            const previousFirstSlideContent = previousSlide.querySelector('.slide-content1');
            if (previousFirstSlideContent) {
              previousFirstSlideContent.classList.remove('move-up-animation');
              previousFirstSlideContent.classList.add('brackets');
            }
      
            const currentSlideContent = swiper.slides[swiper.activeIndex].querySelector('.slide-content');
            if (currentSlideContent) {
              currentSlideContent.classList.add('move-up-animation');
            }
          });
        }}
          spaceBetween={0}
          centeredSlides={true}
          slidesPerView={1}
          speed={1800}
          autoplay={false}
          effect="fade"
          freeMode={true}
          onClick={toggleMenuPopupClose}
          fadeEffect={{
            crossFade: true,
          }}
          modules={[Autoplay, Pagination, EffectFade, Mousewheel, Keyboard]}
          className="mySwiper"
          mousewheel={{
            forceToAxis: true,
            sensitivity: 600, 
            releaseOnEdges: false,
            thresholdDelta: 1
          }}
          onSlideNextTransitionStart={(swiper) => handleSlideChangeTransitionStart(swiper)}

          onSlidePrevTransitionEnd={(swiper) => handleSlideChangeTransitionEnd(swiper)}


          // onSlideNextTransitionStart={(swiper) => handleSlideChangeTransitionStart(swiper)}
          // onSlideNextTransitionEnd={(swiper) => handleSlideChangeTransitionEnd(swiper)}

          // onSlidePrevTransitionStart={(swiper) => handleSlideChangeTransitionStart(swiper)}
          // onSlidePrevTransitionEnd={(swiper) => handleSlideChangeTransitionEnd(swiper)}


          onSlideChange={(swiper) => {
            if (swiper.activeIndex === 0) {
              setShowSecondImage(true);
            } else {
              setShowSecondImage(false);
            }
          }}

          direction={'vertical'}
          followFinger={false}
          autoHeight={true}
          threshold={isMobile ? 15 : 2}
          
          >
    <div className={`scrollanimation ${showSecondImage ? '' : 'hide'}`}>
        {/* <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          className="scroll-anim"
          style={{ width: '20px', height: '20px', background: 'red' }}
        /> */}
        <div className="icon">
          <img src="/animation.gif" alt="scroll animation" />
        </div>
        {/* <p>[ scroll to navigate ]</p> */}
      </div>


    
<SwiperSlide className="slide">
<div className='slide-content no-brackets'>
      <h1 className="blackColor logo" style={{ animationDelay: '0.0s' }}>
        <img src="/logo-cube-transparent-bck.png" alt="Image 2" className="no-fade" />
        <span className={isActive ? 'active' : ''}>
          BLVCK<span className='italics'>PIXEL</span>
        </span>
        <span className={isActive ? '' : 'active'}>
          the foresight company.
        </span>
      </h1>
    </div>

</SwiperSlide>


<SwiperSlide className="slide">
          <div className='slide-content'>
          <h1 className="blackColor" style={{ animationDelay: '0.01' }}> foresight </h1>
          <p className="para italics blackColor" style={{ animationDelay: '0.6s' }}>The ability to judge correctly what is going to happen in the future and plan your action based on this knowledge.</p>
          </div>
        </SwiperSlide>


 

      <SwiperSlide className="slide">
      <div className='slide-content'>
          <h1 className="blackColor" style={{ animationDelay: '0.01s' }}>vision</h1>
          <p className='para italics blackColor' style={{ animationDelay: '0.6s' }}>The act of using imagination and wisdom to set meaningful and inspiring goals grounded with purpose.</p>
          </div>
      </SwiperSlide>
      <SwiperSlide className="slide">
        <div className='slide-content'>
        <p className="para wide blackColor" style={{ animationDelay: '0.01s' }}>
        Our vision is focused on Cognitive Transformation: the convergence of technologies that will affect the way we live and work in the coming years such as artificial intelligence, blockchain and cryptography, spatial computing, advanced data mesh, robotics,...
    </p>
    <p className="para wide blackColor" style={{ animationDelay: '0.3s' }}>
    We continually develop methodologies and tools to accelerate the transition towards a Cognitive Society.
    </p>
    <p className="para wide blackColor" style={{ animationDelay: '0.6s' }}>
    By staying ahead of current trends, we future-proof our clients so that they anticipate, leap forward, and develop new models that align with what is to come.
    </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide">
        <div className='slide-content'>
          <h1 className="blackColor" style={{ animationDelay: '0.01s' }}>anthropology + technology</h1>
          <p className="para wide blackColor" style={{ animationDelay: '0.6s' }}>This best defines the core of our expertise. We seek to build a world where the symbiotic relationship between human ingenuity and machine intelligence forms the foundation for a better society.</p>
        </div>
      </SwiperSlide>

      <SwiperSlide className="slide">
        <div className='slide-content'>
        <p className="para wide blackColor" style={{ animationDelay: '0.01s' }}>
      The stone ax, the wheel, the steam engine, the computer, and now AI - the advancement of humanity has always been driven by our ability to innovate. No other technology will have been as impactful on our world as artificial general intelligence.
    </p>
    <p className="para wide blackColor" style={{ animationDelay: '0.3s' }}>
    We attempt to foresee these developments at all levels.
    </p>
    <p className="para wide blackColor" style={{ animationDelay: '0.6s' }}>
    The emergence of cognitive technologies will result in the most rapid socio-economic disruption since the beginning of recorded history. In the next few years, no matter the enterprise, government or organisation, every business and operational model will have to adapt, and evolve.
    </p>
        </div>
      </SwiperSlide>

      <SwiperSlide className="slide">
        <div  className='slide-content'>
        <h1 className="blackColor" style={{ animationDelay: '0.01s' }}>services</h1>
          <p className="para wide blackColor" style={{ animationDelay: '0.3s' }}>Through applied foresight, strategic planning, prototyping and implementation, we prepare enterprises, organisations and government bodies to take advantage of the accelerating technological disruption.</p>
          <p className="para wide blackColor" style={{ animationDelay: '0.6s' }}>Our future-proofing services is a three-stage cycle of <a href='#' className='purpleColor' onClick={() => swiperRef.current?.slideTo(7)}>foresight</a>, <a href='#' className='purpleColor' onClick={() => swiperRef.current?.slideTo(8)}>preparation</a>, and <a href='#' className='purpleColor' onClick={() => swiperRef.current?.slideTo(9)}>implementation</a>. We do <a href='#' className='purpleColor' onClick={() => swiperRef.current?.slideTo(10)}>innovation field trips</a> too, fostering visionary outlooks.</p>
        </div>
      </SwiperSlide>

      <SwiperSlide className="slide">
        <div className='slide-content'>
        <h1 className="blackColor" style={{ animationDelay: '0.01s' }}>what’s after next</h1>
        <p className="blackColor" style={{ animationDelay: '0.3s' }}><span className='purpleColor italics'>Foresight</span> | Look ahead</p>
        <p className="para wide blackColor" style={{ animationDelay: '0.5s' }}>We produce comprehensive reports on current trends and future trajectories for strategic decision-making. Our tailored reports address specific client needs, integrating cultural insights to offer a nuanced understanding of future industry landscapes for proactive innovation.</p>
        <p className="para wide blackColor italics" style={{ animationDelay: '0.7s' }}>Trend Analysis and Forecasting, Custom Foresight Reports, Qualitative and Quantitative research, Market Analysis, Technological Assessments, Scenario Planning, Delphi studies</p>
        </div>
      </SwiperSlide>

      <SwiperSlide className="slide">
        <div className='slide-content'>
        <h1 className="blackColor" style={{ animationDelay: '0.01s' }}>what’s next</h1>
        <p className="blackColor" style={{ animationDelay: '0.3s' }}><span className='purpleColor italics'>Preparation</span> | Get ready</p>
        <p className="para wide blackColor" style={{ animationDelay: '0.5s' }}>We facilitate immersive workshops involving key stakeholders for scenario development and strategic road mapping. Our applied foresight sessions are collaborative and produce robust strategic plans that incorporate diverse perspectives anticipating future challenges, enabling organizations to prepare effectively for tech innovations.</p>
        <p className="para wide blackColor italics" style={{ animationDelay: '0.7s' }}>Executive Education and Training, Strategic Planning Workshops, Scenario Development, Collaborative Applied Foresight, Adaptive Strategy Formulation, Risk Anticipation Exercises</p>
        </div>
      </SwiperSlide>
      

      <SwiperSlide className="slide">
        <div className='slide-content'>
        <h1 className="blackColor" style={{ animationDelay: '0.01s' }}>what’s now</h1>
        <p className="blackColor" style={{ animationDelay: '0.3s' }}><span className='purpleColor italics'>Implementation</span> | Act today</p>
        <p className="para wide blackColor" style={{ animationDelay: '0.5s' }}>We set up controlled environments to develop proof of concepts, reducing risk and enhancing innovation success. Our Innovation Labs and Pilot Programs facilitate the research and conception of cutting-edge products, services, and workplaces, turning applied foresight into tangible business operations.</p>
        <p className="para wide blackColor italics" style={{ animationDelay: '0.7s' }}>Rapid Prototyping, Proof of Concept Development, Iterative go-to-market Business Cases, Workplace Innovation, Systems Transformation, Process Optimization</p>
        </div>
      </SwiperSlide>

      <SwiperSlide className="slide">
        <div className='slide-content'>
        <h1 className="blackColor" style={{ animationDelay: '0.01s' }}>what’s beyond</h1>
        <p className="blackColor" style={{ animationDelay: '0.3s' }}><span className='purpleColor italics'>Innovation field trips</span> | Explore frontiers</p>
        <p className="para wide blackColor" style={{ animationDelay: '0.5s' }}>We organize immersive 4-5-day learning journeys that expose executives to cutting-edge innovations and disruptive technologies. Our curated trips include high-level meetings with Strategy Chiefs of global tech giants and CEOs of disruptive startups. These expeditions provide unparalleled insights into emerging and forthcoming trends, boosting innovation mindsets and strategic foresight for participants.</p>
        <p className="para wide blackColor italics" style={{ animationDelay: '0.7s' }}>Smart Cities, Artificial Intelligence, Robotics, Mobility, Genetics, Healthcare, Fintech, Spacetech, Agritech, Foodtech, Watertech, Sportstech, etc.</p>
        </div>
      </SwiperSlide>


      
      
<SwiperSlide className="slide">
        <div className='slide-content'>
        <h1 className="blackColor" style={{ animationDelay: '0.01s' }}>clients</h1>
        <p className="blackColor italics" style={{ animationDelay: '0.3s' }}>
          They <span className='purpleColor'>inspire</span> us.
          <br />
          We <span className='purpleColor'>advise</span> them.
          <br />
          We <span className='purpleColor'>innovate</span> as one.
          </p>
          <div className="swiper-container" style={{ animationDelay: '0.6s' }}>
          <button className='navigationArrow left' onClick={handlePrev1}><SlArrowLeft /></button>
            <Swiper
    onInit={(swiper) => (swiperRef2.current = swiper)}
    slidesPerView={5}
    autoplay={false}
    speed={500}
    loop={true}
    className="mySwiper1"
    modules={[Autoplay, Pagination, EffectFade, Mousewheel, Keyboard]}
    keyboard={true}
    spaceBetween={0}
    direction='horizontal'
    touchAngle={45}
    draggable
    style={{width: '100%'}}
    breakpoints={{
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    }}
    >
          <SwiperSlide className="slide">
           <img src='clients/Converse_small.png' width={80} />
          </SwiperSlide>
          <SwiperSlide className="slide">
           <img src='clients/Louboutin_small.png' width={80}/>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src='clients/Nike_small.png' width={80}/>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src='clients/nhood_small.png' width={80}/>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src='clients/lvmh-small.png' width={80}/>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src='clients/Louis-Vuitton_small.png' width={80}/>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src='clients/Sephora_small.png' width={80}/>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src='clients/Joa_small.png' width={80}/>
          </SwiperSlide>
            </Swiper>
            <button className='navigationArrow right' onClick={handleNext1}><SlArrowRight /></button>
</div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide">
        <div className='slide-content'>
        <h1 className="blackColor" style={{ animationDelay: '0.01s' }}>you</h1>
          <p className="para wide blackColor" style={{ animationDelay: '0.3s' }}>We are privileged to work with some of the most legendary clients and well-loved global brands.</p>
          <p className="para wide blackColor" style={{ animationDelay: '0.45s' }}>They trust us to deliver informative research, strategic planning reports, educational experiences, workplace and business innovations, use case prototypes.</p>
          <p className="para wide blackColor" style={{ animationDelay: '0.6s' }}>If you would like to join this illustrious circle of clients please contact us to start the conversation: <a href='mailto:hello@blvckpixel.com' className='purpleColor'>hello@blvckpixel.com</a></p>
        </div>
      </SwiperSlide>






      <SwiperSlide className="slide">
        <div className='slide-content'>
          <h1 className="blackColor" style={{ animationDelay: '0.01s' }}>our team + partners</h1>
          <p className="blackColor para " style={{ animationDelay: '0.6s' }}>
            <span className='italics' style={{marginBottom: '10px', display: 'block'}}>What makes us so different?</span>
            </p>
            <p className="para wide blackColor" style={{ animationDelay: '0.3s' }}>
            We believe in competitiveness, not competition. A principle guiding our collaborative efforts with integrators, academia and research laboratories. We leverage forthcoming and disruptive technologies to breathe soul into hybrid and living systems.
            </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide">
        <div className='slide-content'>
          <h1 className="blackColor" style={{ animationDelay: '0.01s' }}>ideation</h1>
          <p className="para wide blackColor" style={{ animationDelay: '0.3s' }}>Strategists, technologists, futurists, and creatives,  BLVCK<span className='italics'>PIXEL</span> is driven by our desire to prepare humanity for the incredible changes to come in our societies.</p>
          <p className="para wide blackColor" style={{ animationDelay: '0.6s' }}>Led by Teddy Pahagbia, one of the most singular voices in the emerging tech industry, the core team is backed by a global network of experts who create convergence-ready innovations for our clients.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide last-slide">
        <div className='slide-content'>
        <h1 className="blackColor">production</h1>
          <p className="para wide extra blackColor" style={{ animationDelay: '0.01s' }}>In addition, our partners bring complementary services that assure the readiness and scalability of our use cases and new business models.</p>
          <div className="swiper-container" style={{ animationDelay: '0.3s' }}>
          <button className='navigationArrow left' onClick={handlePrev}><SlArrowLeft /></button>

          <Swiper
              onInit={(swiper) => (swiperRef1.current = swiper)}
    slidesPerView={5}
    navigation={false}
    autoplay={true}
    speed={500}
    loop={true}
    className="mySwiper1"
    spaceBetween={0}
    style={{width: '100%'}}
    modules={[Autoplay, Pagination, EffectFade, Mousewheel, Keyboard]}
    keyboard={true}
    breakpoints={{
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    }}
    >
          <SwiperSlide className="slide">
            <img src='partners/palm-nft.png' width={100} />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src='partners/reblium.png' width={100} />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src='partners/surreal.png' width={100} />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src='partners/journee.png' width={100} />
          </SwiperSlide>
          <SwiperSlide className="slide">
           <img src='partners/Cosmic-Shelter_small.png' width={100} />
          </SwiperSlide>
          <SwiperSlide className="slide">
           <img src='partners/Customix_small.png' width={100} />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src='partners/Digitas_small.png' width={100} />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src='partners/Polygon_small.png' width={100} />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src='partners/Publicis-Media.png' width={100} />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src='partners/Shape-Immersive_small.png' width={100} />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src='partners/Tenbeo_small.png' width={100} />
          </SwiperSlide>
            </Swiper>
            <button className='navigationArrow right' onClick={handleNext}><SlArrowRight /></button>

</div>


        </div>
      </SwiperSlide>






      <SwiperSlide className="slide">
        <div className='slide-content'>
        <h1 className="blackColor fade-animation" style={{ animationDelay: '0.01s' }}>get in touch</h1>
        <p className="blackColor italics fade-animation" style={{ marginBottom: '15px', animationDelay: '0.3s' }}>let’s talk + meet + collaborate</p>
          <ul className='para wide ' style={{ animationDelay: '0.6s' }}>
            <li className='blackColor' style={{ marginBottom: '15px'}}>Feel free to ping us if you want to chat, we’ll be happy to share a coffee in our <a href='#' className='purpleColor' onClick={() => openPopup('Paris Headquarter', 'If you are in Paris, let’s have a rendez-vous in our office at 40, Rue du Louvre, Paris, Ile-de-France, 75001, France , if not, you can send an email with your request to <a href="mailto: hello@blvckpixel.com">hello@blvckpixel.com</a> and we will answer as soon as possible.', 'IMG_2393.jpg')}>Paris</a> headquarters or a fresh juice in our <a href='#' className='purpleColor'  onClick={() => openPopup('Dubai Bureau', 'If you are in Dubai, come get the freshest insights in our office at Technohub 1, Dubai Silicon Oasis, Sheikh Mohammed Bin Zayed Rd 47/3, Dubai, United Arab Emirates, if not, you can send an email with your request to <a href="mailto: hello@blvckpixel.com">hello@blvckpixel.com</a> and we will answer as soon as possible.',"IMG_2392.jpg")}>Dubai</a> bureau. </li>
            <li className='blackColor'>And yes, we’re always looking for <a href='#' className='purpleColor' onClick={openTalentsPopup}>talents</a>. ;)</li>
          </ul>
        </div>
        <div className='footer'>
            {/* <a href='#'>BLVCKBOOK</a>
            <a href='#'>the foresight journal. </a> */}
            <span>©2024 by BLVCK<span className='italics' style={{padding: 0}}>PIXEL</span> . All Rights Reserved.</span>
          </div>
      </SwiperSlide>



        </Swiper>


      </>
    );
  };

  export default Home;
