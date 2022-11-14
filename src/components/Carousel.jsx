import { useEffect, useState } from 'react';

export default function Carousel({ data }) {
  // data = [{img:'foo.png', href:'/link.html', title: 'Slide 1', description: 'This is the first slide', ctas: [{text: 'Click here', primary: 'true'}]}]
  const id = 'carousel--' + Math.random().toString(36).substring(2);
  const [current, setCurrent] = useState(0);
  const [dotIndex, setDotIndex] = useState(0);
  const [pauseCycle, setPauseCycle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const nextSlide = () => {
    setCurrent(current === data.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? data.length - 1 : current - 1);
  };

  // Update the slides
  useEffect(() => {
    const carouselEl = document.querySelector(`.${id}`);
    const slidesEl = carouselEl.querySelector('.carousel-slides');
    slidesEl.scrollTo({
      left: current * carouselEl.offsetWidth,
      behavior: 'smooth'
    });
  }, [current]);

  // Update the carousel dots when the user scrolls
  useEffect(() => {
    const carouselEl = document.querySelector(`.${id}`);
    const slidesEl = carouselEl.querySelector('.carousel-slides');
    const handleScroll = () => {
      // Set the current slide based on the scroll position
      const c = Math.round(slidesEl.scrollLeft / carouselEl.offsetWidth);
      setDotIndex(c);
    };
    slidesEl.addEventListener('scroll', handleScroll);

    return () => slidesEl.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setDotIndex(current);
  }, [current]);

  // Cycle through the slides automatically if the user is not interacting with the carousel
  useEffect(() => {
    if (pauseCycle || isMobile) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [pauseCycle, isMobile]);

  // Pause the cycle when the user hovers over the carousel
  useEffect(() => {
    const carouselEl = document.querySelector(`.${id}`);
    const handleMouseEnter = () => setPauseCycle(true);
    const handleMouseLeave = () => setPauseCycle(false);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    carouselEl.addEventListener('mouseenter', handleMouseEnter);
    carouselEl.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      carouselEl.removeEventListener('mouseenter', handleMouseEnter);
      carouselEl.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`carousel ${id}`}>
      <div className="carousel-slides">
        {data.map((slide, index) => {
          return (
            <a
              href={slide.href}
              target={slide.openInNewTab ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="slide"
              data-index={index}
              key={index}
            >
              <img src={slide.img} alt={slide.img} />

              <div className="slide-content">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>

                <div className="button-bar">
                  {slide.ctas.map((cta, index) => {
                    return (
                      <button
                        className={`with-arrow ${cta.primary ? 'cta' : ''}`}
                        key={index}
                      >
                        {cta.text}
                      </button>
                    );
                  })}
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <div className="carousel-controls">
        <div className="carousel-controls-arrows">
          <button className="btn-icon" onClick={prevSlide}>
            <i className="fa fa-chevron-left" />
          </button>

          <button className="btn-icon" onClick={nextSlide}>
            <i className="fa fa-chevron-right" />
          </button>
        </div>

        <div className="carousel-dots">
          {data.map((slide, index) => {
            return (
              <button
                className={`carousel-dot ${
                  index === dotIndex ? 'carousel-dot--active' : ''
                }`}
                onClick={() => setCurrent(index)}
                key={index}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
