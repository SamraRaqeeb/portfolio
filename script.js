// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ================================
// Google Sheet Contact Form
// ================================

const scriptURL = "https://script.google.com/macros/s/AKfycbzqGPx-sZUKIxb0g2yjXpdBeEPanoCisl9zDJpd6MKYUiypfwwZqNPoPZXJvui8TM0U/exec";

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    fetch(scriptURL,{
        method:"POST",
        body:new FormData(form)
    })

    .then(response=>{

        alert("✅ Message Sent Successfully!");

        form.reset();

    })

    .catch(error=>{

        alert("❌ Something went wrong.");

        console.log(error);

    });

});