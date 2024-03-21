
  function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
      return localStorageTheme;
    }

    if (systemSettingDark.matches) {
      return "dark";
    }

    return "light";
  }

  const localStorageTheme = localStorage.getItem("theme");
  const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

  let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });


  document.querySelector("html").setAttribute("data-theme", currentThemeSetting);

  const button = document.querySelector("[data-theme-toggle]");

  if (button) {
    const updateButtonState = () => {
      const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
      const newCta = newTheme === "dark" ? "Change to light theme" : "Change to dark theme";
      button.innerText = newCta;
      button.setAttribute("aria-label", newCta);
    };

    updateButtonState();

    button.addEventListener("click", () => {
      const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

      document.querySelector("html").setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);

      currentThemeSetting = newTheme;
      updateButtonState();
    });
  }


  let inactivityTimer;
  const modal = document.getElementById("inactivty-popup");
  const closeButton = document.getElementsByClassName("close")[0];

  function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(showWarningMessage, 30000); 
  }

  function showWarningMessage() {
    modal.style.display = "block";
  }

  function hideWarningMessage() {
    modal.style.display = "none";
  }

 
  document.addEventListener("mousemove", resetInactivityTimer);
  document.addEventListener("keypress", resetInactivityTimer);


  closeButton.addEventListener("click", hideWarningMessage);


  resetInactivityTimer();



var albumDescription = [
  {
    url : "images/sable-valley-1.jpg",
    description : "Juelz - Floorspace"
  },
  {
    url : "images/sable-valley-2.jpg",
    description : "ISOxo - niteharts"
  },
  {
    url : "images/sable-valley-3.jpg",
    description : "WINK - WINK"
  },
  {
    url : "images/sable-valley-4.jpg",
    description : "Sable Valley Summer, Vol.4"
  }
]



var description = document.getElementById("albumDescription");


displayCarrousel()

function displayCarrousel() {
  var carrouselInner = document.querySelector( ".carousel-inner" );
  console.log(carrouselInner)


  for (const iterator of albumDescription) {
    console.log(iterator.description);
    
    carrouselInner.innerHTML += `
    <div class="carousel-item active">
      <img src="${iterator.url}" class="d-block w-100" alt="juelz">
      <p>${iterator.description}</p>
    </div>
    ` 
  }
}




