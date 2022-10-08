const searchInput = document.querySelector("#search");
const searcBox = document.querySelector(".search-box");
const clearIcon = document.querySelector(".clear-icon");

searchInput.onfocus = () => {
  searcBox.style.boxShadow = "0px 3px 5px #cfcfcf";
};

searchInput.onblur = () => {
  searcBox.style.boxShadow = "unset";
};

searchInput.onkeyup = () => {
  if (searchInput.value == "") {
    clearIcon.style.display = "none";
  } else {
    clearIcon.style.display = "flex";
  }
};

clearIcon.onclick = () => {
  searchInput.value = "";
  searchInput.focus();
  clearIcon.style.display = "none";
};
