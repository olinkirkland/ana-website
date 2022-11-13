import Carousel from './components/Carousel';
import { text } from './locale/locale';

export default function Home() {
  const carouselData = [
    {
      img: 'https://olinkirk.land/ana-website/assets/1.webp',
      href: 'http://www.google.com',
      openInNewTab: true,
      title: 'Slide 1',
      description: 'This is the first slide',
      ctas: [{ text: 'Click here', primary: true }]
    },
    {
      img: 'https://olinkirk.land/ana-website/assets/2.webp',
      href: 'http://www.google.com',
      openInNewTab: true,
      title: 'Slide 2',
      description: 'This is the second slide',
      ctas: [
        { text: 'Click here', primary: false },
        { text: 'Click here', primary: true }
      ]
    },
    {
      img: 'https://olinkirk.land/ana-website/assets/3.webp',
      href: 'http://www.google.com',
      openInNewTab: true,
      title: 'Slide 3',
      description: 'This is the third slide',
      ctas: [{ text: 'Click here', primary: false }]
    }
  ];

  return (
    <article>
      {/* <div className="hero-container">
        <section id="hero">
          <h1 className="logo">{text('title')}</h1>
          <p>{text('hero-subtitle')}</p>
          <div className="button-bar">
            <button className="with-arrow">{text('hero-cta-1')}</button>
            <button className="with-arrow cta">{text('hero-cta-2')}</button>
          </div>
        </section>
      </div> */}
      <div className="hero-container">
        <Carousel data={carouselData} />
      </div>
      <section>
        <span>Mehrere Seiten - Mehrere “Geschichten” One Two Three…</span>
      </section>
      <section>
        <h2>About</h2>
        <p>
          Bildende Künstlerin, arbeitet für private Aufträge und öffentliche
          Projekte. Kunstausstellungen, individueller Kunstunterricht und
          Kreative Workshops für kleine Gruppen. Born and raised in the vibrant
          city Berlin Germany, Angelika has been exposed and involved in art
          making and learned from an early age to express herself visually. Her
          dad once told her: "what's the use if you have a profession that makes
          you miserable because then you make everyone else around you miserable
          too!"
        </p>
        <p>
          Painting lets her get lost in imaginative stories that get transformed
          into a visual diary. Art Education & Art Educator. There is always an
          opportunity to learn. My favourite years were, studying art at UMBC
          and again for as a graduate student at MICA (Maryland Institute
          College of Art).
        </p>
        <p>
          I have been living, creating art, and teaching to a broad community of
          learners with diverse backgrounds, cultures, and learning profiles.
          Living in the USA for almost 20 years, I visited Europe at least once
          a year collecting new ideas for my classroom and reconnecting with my
          personal roots.
        </p>
      </section>
      <section>
        <h2>Services</h2>
        <span>
          Headline: Gratis Schnupperstunde - jetzt buchen! Aufträge Unterricht
          Schnupperstunde buchen Unterrichts-Bündel-Preise (5er Stunden, 10er,
          20er) Workshops Events{' '}
        </span>
      </section>
    </article>
  );
}
