export default function LanguageSelector() {
  return (
    <div className="language-selector">
      <button tooltip="German">
        <img src={process.env.PUBLIC_URL + '/assets/lang/de.png'} alt="de" />
      </button>
      <button tooltip="English">
        <img src={process.env.PUBLIC_URL + '/assets/lang/en.png'} alt="de" />
      </button>
    </div>
  );
}
