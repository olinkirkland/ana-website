export default function ContactForm() {
  return (
    <div className="form form--contact">
      <h2>Kontaktformular</h2>
      <p>
        Rufen Sie uns gerne für eine persönliche Beratung unter&nbsp;
        <a href="tel:+4901230456789">0123&nbsp;(0)&nbsp;456&nbsp;789</a>
        &nbsp;innerhalb unserer Öffnungszeiten an! Alternativ und darüber hinaus
        sind wir selbstverständlich über dieses Kontaktformular oder direkt
        unter&nbsp;
        <a href="mailto:me@angelikapaints.com">me@angelikapaints.com</a>
        &nbsp;für Sie erreichbar. Wir freuen uns auf Sie!
      </p>
      <p>
        Rückrufservice für eine persönliche Beratung: Gerne rufen wir Sie zu
        einer für Sie passenden Zeit zurück. Dazu senden Sie uns einfach die
        Telefonnummer und ein Zeitfenster, in welchem wir Sie am besten
        erreichen.
      </p>
      <p>Galerie Abstrakte Momente, Hoyerswerdaer Str. 21, 01099 Dresden</p>
      <span>Öffnungszeiten:</span>
      <ul>
        <li>Montag & Dienstag: 15.00 - 19.00 Uhr</li>
        <li>Mittwoch: 10.00 - 14.00 Uhr</li>
        <li>Donnerstag & Freitag: 15.00 - 19.00 Uhr</li>
        <li>Samstag: 10.00 - 13.00 Uhr</li>
      </ul>
      <p>Darüber hinaus nach Absprache.</p>
      <form>
        <input type="text" placeholder="Email address *" />
        <input type="text" placeholder="Phone number (optional)" />
        <input type="text" placeholder="Subject *" />
        <textarea placeholder="The content of your message *" />
        <div className="flex full-width">
          <p className="hint">Fields marked with * are required</p>
          <button className="inverted with-arrow" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
