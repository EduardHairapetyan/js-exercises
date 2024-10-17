//write "ul" with 10 "li" in 3 one write "ol" wich constins 3 "ol"

document.write("<ul>");
for (var i = 0; i < 10; ++i) {
    if (i === 3) {
        document.write("<li><ol>");
        for (let j = 0; j < 3; ++j) {
            document.write(`<li>Nested item ${j}</li>`); 
        }
        document.write("</ol></li>");
    } else {
        document.write(`<li>Item ${i}</li>`); 
    }
}
document.write("</ul>");

