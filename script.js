"use strict"

function $(txt) { return document.querySelector(txt); };

$("form").reset();

function checkEmail() {
    let input = $("#email-input");
    let popup = $("#signup-popup");

    if (!input.checkValidity()) {
        $("#signup-popup").style.position = "static";
        input.value = "";
        input.placeholder = "Invalid email input";
    } else {
        $(".email-form").style.display = "none";
        popup.style.position = "static";
        $("#signup-popup h1").innerText = "Yay! Thank you";
        $("#signup-popup p").innerText = "We've sent a confirmation link to your inbox.";
        $("#icon-error").style.display = "none";
        $("#icon-check").style.display = "initial";
        $("#popup-icon").style.fill = "var(--color-success)";
        popup.style.borderColor = "var(--color-success)";
        popup.style.background = "var(--color-success-bg)";
        popup.style.color = "var(--color-success)";
    }
}