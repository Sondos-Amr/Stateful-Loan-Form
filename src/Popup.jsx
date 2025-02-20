export default function Popup({ isVisiable, errorMessage }) {
  return isVisiable ? (
    <div className="popup-container">
      <div className="popup-content">
        <p>
          {errorMessage != null
            ? errorMessage
            : " The Form Has Been Submitted Successfully "}
        </p>
      </div>
    </div>
  ) : null;
}
