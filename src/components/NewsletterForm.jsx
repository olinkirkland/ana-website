export default function NewsletterForm() {
  return (
    <div className="newsletter-prompt">
      <h2>Sign up for our newsletter</h2>
      <form>
        <input type="text" placeholder="Your email address" />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
