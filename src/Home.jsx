export default function Home() {
  return (
    <article>
      <section id="hero">
        <h1 className="logo">Angelika Paints</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo vitae
          hic quia vel, cumque eligendi nostrum eaque doloremque aliquid
          dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatem, officia.
        </p>

        <div className="button-bar">
          {/* <button>Lessons</button> */}
          <button>Explore the collections</button>
          <button className="cta">Order a Commission</button>
        </div>
      </section>
      {/* <section>About</section>
      <section>Gallery</section>
      <section>Services</section>
      <section>News</section>
      <section>Contact</section> */}
    </article>
  );
}
