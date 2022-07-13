import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_type_photo ${card.link && "popup_opened"}`}>
      <div className="popup__container-photo">
        <button
          className="popup__close popup__close_type_photo"
          type="button"
          onClick={onClose}
        />
        <div className="popup__content-photo">
          <img className="popup__photo" src={card.link} alt={card.name} />
          <h2 className="popup__photo-title">{card.name}</h2>
        </div>
      </div>
    </div>
  );
}

export default ImagePopup;
