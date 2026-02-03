document.addEventListener("DOMContentLoaded", function () {
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");
  const responseMessage = document.getElementById("responseMessage");

  const questions = [
    "Are you sure? (˘･_･˘)",
    "Are you really sure?? ::>_<::",
    "Are you really really sure??? /(ㄒoㄒ)/~~",
    "Think again? (◕‿◕)",
    "Don't you believe in second chances? (；′⌒`)",
    "I'll be sad 😢",
    "I'll be more sad 😢",
    "I'll be very sad 😢",
    "I'll be very very sad 😢",
    "Maybe we can talk about it? (；⌣̀_⌣́)",
    "I am not going to ask again! 😡",
    "Ok now this is hurting my feelings! 😭",
    "You are now just being mean! 😭",
    "Why are you doing this to me? 😭",
    "Please give me a chance! 🙏",
    "I am begging you to stop! 🙏",
    "I'll be Sad Forever! 😭",
    "Please don't do this ＞︿＜",
    "I won't let go this easily! 😤",
    "Please say yes! 🙏",
    "I promise I'll make you happy! 😊",
    "You won't regret it! 😇",
    "Please say you'll be mine! 🙏",
    "Tch, fine! you'll stuck in this loop forever! 😤",
  ];

  let questionIndex = 0;

  yesButton.addEventListener("click", function () {
    responseMessage.innerText = "Yepppie, I Love youuuuu ❤️";
    noButton.style.display = "none";
  });

  noButton.addEventListener("click", function () {
    noButton.innerText = questions[questionIndex];
    questionIndex = (questionIndex + 1) % questions.length;
  });
});
