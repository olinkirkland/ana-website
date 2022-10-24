import { useState } from 'react';

export default function Slideshow({ data }) {
  // data = [{img:'foo.png', href:'/link.html'}, {img:'bar.png', href:'/link.html'}]
  const [current, setCurrent] = useState(0);
  const length = data.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="slideshow">
      <button className="btn-icon" onClick={prevSlide}>
        <i className="fa fa-chevron-left" />
      </button>

      <button className="btn-icon" onClick={nextSlide}>
        <i className="fa fa-chevron-right" />
      </button>

      <div className="slideshow-slides">
        {data.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              <img src={slide.img} alt="No data" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
