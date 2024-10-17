//crates collor range serach or url depending on what is written in variable

var inputType = "color";  

document.write(
    `<input type="${inputType === 'color' ? 'color' : inputType === 'range' ? 'range' : inputType === 'search' ? 'search' : 'url'}">`
);
