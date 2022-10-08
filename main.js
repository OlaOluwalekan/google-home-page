const searchInput = document.querySelector("#search");
const searcBox = document.querySelector(".search-box");
const clearIcon = document.querySelector(".clear-icon");

const history = ["hello", "please", "quantum"];

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
  SearchQuery();
};

// searchInput.onmouseover = () => {
//   searcBox.style.boxShadow = "0px 3px 5px #cfcfcf";
// };

// searchInput.onmouseout = () => {
//   searcBox.style.boxShadow = "unset";
// };

clearIcon.onclick = () => {
  searchInput.value = "";
  searchInput.focus();
  clearIcon.style.display = "none";
};

const SearchQuery = () => {
  // console.log(searchInput.value);

  for (let i = 0; i < history.length; i++) {
    if (history[i].includes(searchInput.value)) {
      console.log(history[i]);
    }
  }
};
