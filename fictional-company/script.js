// Image Slider
let images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"
];
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("slide-image").src = images[currentIndex];
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("slide-image").src = images[currentIndex];
}

// Form Validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("form-message");

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "All fields are required!";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = "green";
        document.getElementById("contact-form").reset();
    }
});