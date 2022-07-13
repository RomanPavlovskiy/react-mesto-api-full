import {useRef, useEffect} from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const avatar = useRef("");

  useEffect(() => {
    avatar.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatar.current.value,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      isLoading={isLoading}
      onSubmit={handleSubmit}
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
    >
      <label className="popup__field">
        <input
          ref={avatar}
          id="avatar"
          name="avatar"
          className="popup__input popup__input_type_avatar"
          type="url"
          placeholder="Ссылка на аватар"
          required
        />
        <span id="error-avatar" className="popup__error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
