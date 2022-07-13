function PopupWithForm({
  name,
  isOpen,
  children,
  onClose,
  title,
  buttonText,
  onSubmit,
  isLoading,
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button className="popup__close" type="button" onClick={onClose} />
        <form
          onSubmit={onSubmit}
          className={`popup__form popup__form_type_${name}`}
          name={`edit-${name}`}
        >
          <h3 className="popup__header">{title}</h3>
          {children}
          <button
            className={`popup__button popup__button_type_profile${name}`}
            type="submit"
            value={buttonText}
          >
            {isLoading ? "Сохранение..." : buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
