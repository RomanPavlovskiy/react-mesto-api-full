import okIcon from "../images/ok-icon.svg";
import errorIcon from "../images/error-icon.svg";
import React from "react";

function InfoTooltip({ isOpen, isSuccess, onClose }) {
  return (
    <div className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        {isSuccess ? (
          <>
            <img
              src={`${okIcon}`}
              alt="Вы зарегистрировались"
              className="popup__tooltip_image"
            />
            <p className="popup__header">Вы успешно зарегистрировались!</p>
          </>
        ) : (
          <>
            <img
              src={`${errorIcon}`}
              alt="Ошибка"
              className="popup__tooltip_image"
            />
            <p className="popup__header">
              Что-то пошло не так. Попробуйте ещё раз!
            </p>
          </>
        )}
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
          aria-label="Закрыть попап"
        ></button>
      </div>
    </div>
  );
}
export default InfoTooltip;
