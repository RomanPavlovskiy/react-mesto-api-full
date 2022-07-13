import { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name,
      link: link,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      name="add-card"
      title="Новое место"
      buttonText="Сохранить"
    >
      <label className="popup__field">
        <input
          value={name}
          onChange={handleNameChange}
          id="place"
          name="place"
          className="popup__input popup__input_type_card-name"
          placeholder="Название"
          minLength="2"
          maxLength="40"
          required
        />
        <span id="error-plac" className="popup__error"></span>
      </label>
      <label className="popup__field">
        <input
          value={link}
          onChange={handleLinkChange}
          id="place-link"
          name="place-link"
          className="popup__input popup__input_type_img-link"
          type="url"
          placeholder="Ссылка на картинку"
          required
        />
        <span id="error-place-link" className="popup__error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
