import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer>
      <ContactForm />
      <section>
        <div className="social-container">
          <p>Follow us on social media!</p>
          <SocialLinks />
        </div>
        <ul className="site-map">
          <li>
            <h2>Title</h2>
            <hr />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
              asperiores dolor vero similique exercitationem totam sed enim
              voluptatum itaque quisquam.
            </p>
          </li>
          <li>
            <h2>Title</h2>
            <hr />
            <ul>
              <li>Dolor sit amet</li>
              <li>Laborum, at</li>
              <li>Adipisicing elit</li>
              <li>Ullam natus</li>
            </ul>
          </li>
          <li>
            <h2>Title</h2>
            <hr />
            <ul>
              <li>Lorem ipsum</li>
              <li>Blanditiis</li>
              <li>Amet consectetur</li>
              <li>Adipisicing elit</li>
            </ul>
          </li>
          <li>
            <h2>Contact</h2>
            <hr />
            <ul>
              <li>
                <i className="fas fa-envelope"></i>
                <span>me@angelikapaints.com</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>(123) 456-7890</span>
              </li>

              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>123 Main St, Anytown, CA 12345</span>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <div className="bottom-footer">
        <section>
          <p>&copy; {new Date().getFullYear()} Angelika Paints</p>
          <a href="/impressum" className="link">
            Impressum
          </a>
        </section>
      </div>
    </footer>
  );
}
