export default function Popup({ isVisiable }) {
  return isVisiable ? (
    <div className="popup-container">
      <div className="popup-content">
        <p>The Form Has Been Submitted Successfully</p>
      </div>
    </div>
  ) : null;
}
