// Находим форму в DOM
const formElement = document.querySelector(".popup__form"); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = document.querySelector(".popup__input_type_name"); // Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector(".popup__input_type_job"); // Воспользуйтесь инструментом .querySelector()
const popupElement = document.querySelector(".popup");
const buttonEditForm = document.querySelector(".profile__edit-button");
const buttonClose = popupElement.querySelector(".popup__close-button");

const profileBlock = document.querySelector(".profile__block");
const profileName = profileBlock.querySelector(".profile__name");
const profileJob = profileBlock.querySelector(".profile__job");

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.
  // Получите значение полей jobInput и nameInput из свойства value

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  handleClose();
  // Выберите элементы, куда должны быть вставлены значения полей

  // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", handleFormSubmit);

buttonEditForm.addEventListener("click", handleOpen);
buttonClose.addEventListener("click", handleClose);

function handleOpen() {
  popupElement.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function handleClose() {
  popupElement.classList.remove("popup_opened");
}
