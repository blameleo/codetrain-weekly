let chooseColor = document.getElementById('chooseColor')
const selectScheme = document.getElementById('selectScheme')
const getBtn = document.getElementById('getBtn')
const display = document.querySelectorAll('.display')
const colorOne = document.getElementById('colorOne')



getBtn.addEventListener('click', () => {
    let hex =chooseColor.value.slice(1)
    let mode =selectScheme.value
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}`)
    .then(res=>res.json())
    .then(data=>{
        
        colorOne.style.backgroundColor = data.colors[0].hex.value
        document.getElementById('hexvalue1').textContent = data.colors[0].hex.value
        colorTwo.style.backgroundColor = data.colors[1].hex.value
        document.getElementById('hexvalue2').textContent = data.colors[1].hex.value
        colorThree.style.backgroundColor = data.colors[2].hex.value
        document.getElementById('hexvalue3').textContent = data.colors[2].hex.value
        colorFour.style.backgroundColor = data.colors[3].hex.value
        document.getElementById('hexvalue4').textContent = data.colors[3].hex.value
        colorFive.style.backgroundColor = data.colors[4].hex.value
        document.getElementById('hexvalue5').textContent = data.colors[4].hex.value
        
        function copyToClipboard() {
            const copyText = document.getElementById("hexvalue1").textContent;
            navigator.clipboard.writeText(copyText).then(() => {
        
                alert("Copied to clipboard");
            });
          }

          
          colorOne.addEventListener('click',copyToClipboard)
    })

   
})


display.addEventListener('click',copyToClipboard)


