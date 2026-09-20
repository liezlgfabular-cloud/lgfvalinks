/* =========================================
   LGF LINK HUB
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".link-card");

  cards.forEach((card, index) => {

    card.style.opacity = "0";

    card.style.transform = "translateY(15px)";

    setTimeout(() => {

      card.style.transition =
        "opacity 0.5s ease, transform 0.5s ease";

      card.style.opacity = "1";

      card.style.transform = "translateY(0)";

    }, 150 + (index * 90));

  });


  /*
    Adds a subtle click effect.
  */

  cards.forEach(card => {

    card.addEventListener("click", () => {

      card.classList.add("clicked");

      setTimeout(() => {

        card.classList.remove("clicked");

      }, 300);

    });

  });

});
