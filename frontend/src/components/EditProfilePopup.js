import {useState, useContext, useEffect} from 'react';
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      isLoading={isLoading}
      onSubmit={handleSubmit}
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
    >
      <label className="popup__field">
        <input
          value={name || ""}
          onChange={handleNameChange}
          id="name"
          name="name"
          className="popup__input popup__input_type_name"
          placeholder="Имя пользователя"
          minLength="2"
          maxLength="40"
          required
        />
        <span id="error-name" className="popup__error"></span>
      </label>
      <label className="popup__field">
        <input
          value={description || ""}
          onChange={handleDescriptionChange}
          id="description"
          name="description"
          className="popup__input popup__input_type_job"
          placeholder="Описание пользователя"
          type="text"
          minLength="2"
          maxLength="200"
          required
        />
        <span id="error-description" className="popup__error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
