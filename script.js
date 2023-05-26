const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const headerBtn = document.querySelector(".header-btn");
const closeIcon = document.querySelector(".close-icon");

registerLink.addEventListener("click", function() {
    wrapper.classList.add("active");
});

loginLink.addEventListener("click", function() {
    wrapper.classList.remove("active");
});

headerBtn.addEventListener("click", function() {
    wrapper.classList.add("active-popup");
});

closeIcon.addEventListener("click", function() {
    wrapper.classList.remove("active-popup");
});