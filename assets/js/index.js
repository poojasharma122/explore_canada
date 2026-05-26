// Toggle Menu Functionaliy Start
$(document).ready(function () {
  $(".menu-toggle-btn").click(function () {
    $("body").addClass("menuToggle");
  });
  $(".menu-close-btn").click(function () {
    $("body").removeClass("menuToggle");
  });
});
// Toggle Menu Functionaliy End

// Scroll to next section Start

(function () {
  'use strict';

  var btnScrollDown = document.querySelector('#scroll_down');

  function scrollDown() {
    const nextSection = window.innerHeight;

    window.scrollTo({
      top: nextSection,
      behavior: "smooth"
    });
  }

  if (btnScrollDown) {
    btnScrollDown.addEventListener('click', scrollDown);
  }
})();

// Scroll to next section End


// Header Scroll JS Start
$(document).ready(function () {
  $(window).scroll(function () {
    var header = $("header");
    header.toggleClass("fixed_header", $(window).scrollTop() > 0);
  });
});
// Header Scroll JS End

// AOS JS Start
AOS.init({
  duration: 1200,
});
// AOS JS End


// Slick Slider JS Start
$('.home_featured_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  arrows: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});

// Slick Slider JS End


// FAQ JS Start
document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".modern-faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {

      const faqItem = this.parentElement;
      const faqAnswer = faqItem.querySelector(".modern-faq-answer");
      const faqIcon = faqItem.querySelector(".faq-icon");

      document.querySelectorAll(".modern-faq-item").forEach((item) => {

        if (item !== faqItem) {
          item.classList.remove("active");

          const otherAnswer = item.querySelector(".modern-faq-answer");
          const otherIcon = item.querySelector(".faq-icon");

          otherAnswer.style.maxHeight = null;
          otherIcon.innerHTML = "+";
        }
      });

       faqItem.classList.toggle("active");

      if (faqItem.classList.contains("active")) {
        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
        faqIcon.innerHTML = "−";
      } else {
        faqAnswer.style.maxHeight = null;
        faqIcon.innerHTML = "+";
      }
    });
  });
});
// FAQ JS End

// Go To Top JS Start
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// Go To Top JS End

// Newsletter JS Start
document.addEventListener("DOMContentLoaded", function () {
  const newsletterForm = document.querySelector("#newsletterForm");
  if (!newsletterForm) return;
  const nameInput = newsletterForm.querySelector("#name");
  const emailInput = newsletterForm.querySelector("#email");
  const nameError = newsletterForm.querySelector("#nameError");
  const emailError = newsletterForm.querySelector("#emailError");
  const successMessage = document.getElementById("successMessage");
  newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      nameError.innerText = "";
      emailError.innerText = "";
      successMessage.innerText = "";
      let isValid = true;
      const nameValue = nameInput.value.trim();
      if (nameValue === "") {
          nameError.innerText = "Name field cannot be empty.";
          isValid = false;
      }
      else if (nameValue.length < 3) {
          nameError.innerText = "Name must be at least 3 characters.";
          isValid = false;
      }

      else if (!/^[A-Za-z\s]+$/.test(nameValue)) {

          nameError.innerText = "Name should contain only letters.";
          isValid = false;

      }

      else if (/\s{2,}/.test(nameValue)) {

          nameError.innerText = "Multiple spaces are not allowed.";
          isValid = false;

      }
      const emailValue = emailInput.value.trim();
      const emailPattern =
          /^(?!.*\.\.)(?!.*\.$)[^\W][A-Za-z0-9._%+-]{0,63}@[A-Za-z0-9-]+(\.[A-Za-z]{2,})+$/;

      if (emailValue === "") {

          emailError.innerText = "Email field cannot be empty.";
          isValid = false;

      }
      else if (!emailPattern.test(emailValue)) {

          emailError.innerText = "Please enter a valid email address.";
          isValid = false;

      }
      else {
          const blockedDomains = [
              "tempmail.com",
              "mailinator.com",
              "10minutemail.com",
              "guerrillamail.com",
              "yopmail.com"
          ];
          const emailDomain = emailValue.split("@")[1].toLowerCase();
          if (blockedDomains.includes(emailDomain)) {
              emailError.innerText =
                  "Temporary email addresses are not allowed.";
              isValid = false;
          }
      }
      if (isValid) {

          successMessage.innerText =
              "Thank you! You have subscribed successfully.";
          newsletterForm.reset();
          setTimeout(() => {
              successMessage.innerText = "";
          }, 3000);
      }
  });

});
// Newsletter JS End