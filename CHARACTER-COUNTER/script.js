const textArea = document.getElementById("textarea");
const characterDisplay = document.getElementById("character");

const updateCharacterCount = () => {
  const currentLength = textArea.value.length;
  const maxLength = 200;

  if (currentLength <= maxLength) {
    characterDisplay.textContent = currentLength;
    characterDisplay.textContent = `${currentLength}/${maxLength}`;
  } else {
    characterDisplay.textContent = "character has exceded the limit";
  }
};

textArea.addEventListener("input", updateCharacterCount);
