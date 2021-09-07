import Methods from "./modules/methods.js";

const methods = new Methods();
const start = document.querySelector(".start-btn");

start.addEventListener("click", async () => {
    const validated = await methods.validateUrl();
    if (validated) methods.getAnswers();
    else methods.error();
});
