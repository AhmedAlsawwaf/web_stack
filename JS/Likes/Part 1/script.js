console.log("Js Loaded!");

function likeCounter(button) {
    const likesSpan = button.closest('.header-post').querySelector('h2 span');
    likesSpan.textContent = Number(likesSpan.textContent) + 1;
}