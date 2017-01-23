var letter;
var i; // outer loop
var k; // inner loop

while (!letter) {
    letter = prompt("Enter a character.");
}

for(i = 0; i < 10; i += 1) {
    for(k = 0; k < i; k += 1) {
        document.write(letter); 
    }
    document.write("<br>"); 
}




