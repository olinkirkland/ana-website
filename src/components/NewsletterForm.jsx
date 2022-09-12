export default function NewsletterForm() {
  return (
    <div className="newsletter-prompt">
      <h2>Sign up for the free Angelika Paints newsletter.</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum.</p>
      <form>
        <input type="text" placeholder="Your email address" />
        <button className="inverted" type="submit">Sign up</button>
      </form>
    </div>
  );
}
