const linkItems = document.querySelectorAll(".link-item");

linkItems.forEach((linkItem, index) => {
   linkItem.addEventListener("click", () => {
      document.querySelector(".active").classList.remove("active");
      linkItem.classList.add("active");

      const indicator = document.querySelector(".indicator");

      indicator.style.left = `${index * 100 + 50}px`;
   })
})