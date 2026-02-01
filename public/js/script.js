const answers_no = {
    english: [
      "No, Shrija 😔",
  "Are you sure, Shrija?",
  "Really sure, Shrija? 🥺",
  "Like… super duper sure, Shrija?",
  "Think once more, Shrija 💭",
  "Shrija believes in second chances, you know ✨",
  "Why so cold, Shrija ❄️",
  "Can we talk it out, Shrija? 💬",
  "I won’t ask again, Shrija… maybe 🙈",
  "Oof, that hurt a little, Shrija 💔",
  "Okay now you’re being mean, Shrija 😤",
  "Why are you doing this to me, Shrija 😢",
  "Please give me a chance, Shrija 🫶",
  "I’m begging you, Shrija 😭",
  "Please stop, Shrija 🥹",
  "Okay… let’s start over, Shrija 💖"
    ]
};

answers_yes = {
    "english": "Yes 💖"
}

let language = "english"; // Default language is English
const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "public/images/no.gif";
        refreshBanner();
    }
    clicks++;
    // increase button height and width gradually to 250px
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    yes_button.style.fontSize = `${size * 0.3}px`;
    let total = answers_no[language].length;
    // change button text
    if (i < total - 1) {
        no_button.innerHTML = answers_no[language][i];
        i++;
    } else if (i === total - 1) {
        alert(answers_no[language][i]);
        i = 1;
        no_button.innerHTML = answers_no[language][0];
        yes_button.innerHTML = answers_yes[language];
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        yes_button.style.fontSize = "1.2rem";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "public/images/yes.gif";
    refreshBanner();
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}