const container = document.getElementById("container");
const homeForm = document.getElementById("HomeForm");

const img = {
    previous: document.getElementById("img-previous"),
    next: document.getElementById("img-next"),
    homeImgs: Array.from(document.getElementById("home-imgs").children)
}

// const user = {
//     email: document.getElementById("email-user"),
//     name: document.getElementById("user-name"),
//     phone: {
//         country: document.getElementById("phone-country"),
//         number: document.getElementById("phone-number")
//     },
//     address: document.getElementById("user-address"),
//     city: document.getElementById("user-city"),
//     state: document.getElementById("user-state")
// }


const emailDomain = {
    select: document.getElementById("email-domain-select"),
    customInput: document.getElementById("custom-email-domain-input")
};

Array.from(emailDomain.select.children).forEach(opt =>
    emailDomain[opt.innerHTML.substring(1, opt.innerHTML.indexOf("."))] = opt
);

const nav = {
    Home: document.getElementById("Home"),
    About: document.getElementById("About"),
    Services: document.getElementById("Services"),
    Contact: document.getElementById("Contact"),
    DoneProject: document.getElementById("DoneProject"),
    CurrentProject: document.getElementById("CurrentProject"),
    FutureProject: document.getElementById("FutureProject")
};

const contents = {
    Home: document.getElementById("HomeContent"),
    About: document.getElementById("AboutContent"),
    Services: document.getElementById("ServicesContent"),
    Contact: document.getElementById("ContactContent"),
    DoneProject: document.getElementById("DoneProjectContent"),
    CurrentProject: document.getElementById("CurrentProjectContent"),
    FutureProject: document.getElementById("FutureProjectContent")
};

for (const key in nav) {
    nav[key].addEventListener("click", () => {
        for (const contentKey in contents) {
            nav[contentKey].classList.remove("active");
            contents[contentKey].style.display = "none";
        }
        nav[key].classList.add("active");
        contents[key].style.display = "block";
    });
}

homeForm.addEventListener("submit", e => {
    e.preventDefault();
})

// 1. Grouped Selectors
const user = {
    email: document.getElementById("email-user"),
    phoneCountry: document.getElementById("phone-country"),
    phoneNumber: document.getElementById("phone-number"),
    address: document.getElementById("user-address"),
    city: document.getElementById("user-city"),
    state: document.getElementById("user-state"),
    customDomain: document.getElementById("custom-email-domain-input"),
    domainSelect: document.getElementById("email-domain-select")
};

// 2. The Helper: This replaces all the repetitive classList code
const toggleValidation = (el, isValid) => {
    el.classList.toggle("is-valid", isValid);
    el.classList.toggle("is-invalid", !isValid);
};

// 3. Validation Logic Map (Clean & Centralized)
const validators = {
    "email-user": (val) => /^[a-z0-9]([a-z0-9._-]*[a-z0-9])?$/i.test(val) && val.length >= 3,
    "phone-country": (val) => /^\d{2}$/.test(val),
    "phone-number": (val) => /^\d{10}$/.test(val),
    "custom-email-domain-input": (val) => /^[a-z0-9.-]+\.[a-z]{2,}$/i.test(val),
    "user-address": (val) => /^[a-z0-9\s,.\-/#]*[a-z0-9]$/i.test(val) && val.length >= 10,
    "user-city": (val) => /^[a-z\s\-']*[a-z]$/i.test(val) && val.length >= 4,
    "user-state": (val) => /^[a-z\s\-']*[a-z]$/i.test(val) && val.length >= 4
};

// 4. Single Event Listener for all inputs (Event Delegation / Loop)
Object.keys(validators).forEach(id => {
    const input = document.getElementById(id);
    if (input) {
        input.addEventListener("input", () => {
            const isValid = validators[id](input.value);
            toggleValidation(input, isValid);
        });
    }
});

// 5. Domain Select Logic (Simplified)
user.domainSelect.addEventListener("change", (e) => {
    // Check if the selected option text contains "custom"
    const isCustom = e.target.value.includes("custom");
    user.customDomain.style.display = isCustom ? "block" : "none";
});

img.next.addEventListener("click", showNextImage);

img.previous.addEventListener("click", showPreviousImage);

let imageTransitionInterval = setInterval(showNextImage, 2000);

function showNextImage(e) {
    e?.preventDefault();

    for (let i = 0; i < img.homeImgs.length; i++)
        if (img.homeImgs[i].style.display != "none") {
            img.homeImgs[i].style.display = "none";
            (img.homeImgs[i + 1] ?? img.homeImgs[0]).style.display = "block";

            clearInterval(imageTransitionInterval);
            imageTransitionInterval = setInterval(showNextImage, 2000);

            return (img.homeImgs[i + 1] ?? img.homeImgs[0]);
        }
}

function showPreviousImage(e) {
    e?.preventDefault();

    for (let i = img.homeImgs.length - 1; i >= 0; i--)
        if (img.homeImgs[i].style.display != "none") {
            img.homeImgs[i].style.display = "none";
            img.homeImgs.at(i - 1).style.display = "block";

            clearInterval(imageTransitionInterval);
            imageTransitionInterval = setInterval(showNextImage, 2000);

            return img.homeImgs.at(i - 1);
        }
}