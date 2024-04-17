/*----TOGGLE MODE----*/
function toggleDarkMode() {
  const checkbox = document.getElementById("dark-mode-switch");
  const body = document.body;

  if (checkbox.checked) {
      body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
  } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
  }
}

/*----TOGGLE SWITCH----*/
document.getElementById("dark-mode-switch").addEventListener("change", toggleDarkMode);

/*----INITIALIZE TOGGLE BASED ON LOCAL STORAGE----*/
document.addEventListener("DOMContentLoaded", function() {
  const darkMode = localStorage.getItem("darkMode");

  if (darkMode === "enabled") {
      document.getElementById("dark-mode-switch").checked = true;
      document.body.classList.add("dark-mode");
  } else {
      document.getElementById("dark-mode-switch").checked = false;
      document.body.classList.remove("dark-mode");
  }
});

