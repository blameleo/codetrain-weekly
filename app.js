// javascript
let count = prompt("Please enter a figure to convert!!")
let disp = document.getElementById("num")
disp.textContent = count
let mtrConv = document.getElementById("mtr-conv")
let ltrpnds = document.getElementById("ltr-gall")
let kgPnds = document.getElementById("kg-pnds")

function convert() {
    let metr = (count * 3.28084).toFixed(3)
        
    let feet = (count * 0.3048).toFixed(3)
    mtrConv.textContent = disp.textContent + " meters " + " = " + metr +" feet"+ " || "+ disp.textContent + " feet" + " = "+ feet + " meters"

    let gallons = (count * 0.264172).toFixed(3)
    let ltrs = (count * 3.785411784).toFixed(3)
    ltrpnds.textContent = disp.textContent + " litres " + " = " + gallons +" gallons"+ " || "+ disp.textContent + " gallons" + " = "+ ltrs + " litres"


    let kg = (count * 2.20462).toFixed(3)
    let pnds = (count * 0.453592).toFixed(3)
    kgPnds.textContent = disp.textContent + " kilograms " + " = " + kg +" pounds"+ " || "+ disp.textContent + " pounds" + " = "+ pnds + " kilogram"



}
