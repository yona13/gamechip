/**
 * Get Header Method
 * 
 * Generates Header DOM Element.
 * 
 * @callback resetCallback Reset Event Listener
 * @returns Header DOM Element
 */
const getHeader = function (resetCallback) {
    // Create Nav-Bar DOM Element
    const nav = document.createElement("div");
    nav.classList.add("nav-bar");

    // Create Title DOM Element
    const title = document.createElement("h1");
    title.textContent = "Knight Travails";

    // Create Reset Button DOM Element
    const reset = document.createElement("button");
    reset.textContent = "Reset";
    reset.addEventListener("click", (e) => { 
        resetCallback();
    });

    // Add Elements to Nav-Bar
    nav.appendChild(title);
    nav.appendChild(reset);

    return nav;
}

/**
 * Get Footer Method
 * 
 * Generates Footer DOM Element.
 * 
 * @returns Footer DOM element
 */
const getFooter = function () {
    // Create Footer DOM Element
    const footer = document.createElement("div");
    footer.classList.add("footer");
    footer.textContent = "Yona \u00A9 2024";
    
    return footer;
}

export { getHeader, getFooter };