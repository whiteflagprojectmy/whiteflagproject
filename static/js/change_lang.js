function toggleDropdown() {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let dropdown of dropdowns) {
        dropdown.classList.toggle("show");
    }
}

function onChangeLanguage(language) {
    setLang(language);

    // replaces buttons with corresponding language
    const buttons = document.getElementsByClassName("translatable-img");
    for (let button of buttons) {
        const old_src = button.src;
        // this feels very hacky lol feel free to edit
        button.src = old_src.slice(0, -6) + language + ".svg";
    }
}
