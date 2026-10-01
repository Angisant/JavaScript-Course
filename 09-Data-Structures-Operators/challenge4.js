"use strict";

const txtArea = document.createElement('textarea');
const btn = document.createElement('button')

document.body.append(txtArea);
document.body.append(btn);

btn.addEventListener("click", function () {
    const input = txtArea.value;
    let arr = input.split('\n');

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i].trim().toLowerCase();
        let underScoreIdx = str.indexOf('_');
        let cc = str.slice(0, underScoreIdx) + str[underScoreIdx + 1].toUpperCase() + str.slice(underScoreIdx + 2);
        console.log(cc.padEnd(20) + "✅".repeat(i + 1));
    }

    txtArea.value = "";     // Clear text area
});