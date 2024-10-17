//make a table 3X5

var rowPrefix = "row";

for(var i=0;i<5;i++){
    document.write('<table border='+1+'><tr>');
    for (var j = 0; j < 3; ++j) {
        document.write(`<th style="padding: 10px;">${rowPrefix}${i}${j}</th>`);
    }
    document.write("</tr>");
}

document.write("</table>");