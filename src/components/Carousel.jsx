import { useEffect, useState } from 'react';

export default function Carousel({ data }) {
  // data = [{img:'foo.png', href:'/link.html'}, {img:'bar.png', href:'/link.html'}]
  const id = 'carousel--' + Math.random().toString(36).substring(2);
  const length = data.length;
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // Cycle through the slides automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  // Update the carousel when the data changes
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
      if (c !== current) setCurrent(c);
    };
    slidesEl.addEventListener('scroll', handleScroll);
    return () => slidesEl.removeEventListener('scroll', handleScroll);
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
                className="btn-icon"
                onClick={() => setCurrent(index)}
                key={index}
              >
                <i
                  className={`fa ${
                    index === current ? 'fa-circle' : 'fa-circle-o'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
