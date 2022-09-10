export default function Alert({ text, icon, onClick }) {
  return (
    <div className="alert">
      <div className="alert-content" onClick={onClick}>
        <i className={`fa fa-${icon}`} />
        <p>{text}</p>
      </div>

      <button
        className="btn-icon"
        onClick={(event) => {
          document.querySelector('.alert').classList.add('alert-hidden');
        }}
      >
        <i className="fa fa-times" />
      </button>
    </div>
  );
}
