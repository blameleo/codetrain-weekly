const input = document.getElementById('usernameInput')






input.addEventListener('keyup', (event) => {
    let searchQuery = event.target.value.toLowerCase() 
    let allNamesDOMCollection =document.getElementsByClassName('name')
    
    
    for(let i = 0; i < allNamesDOMCollection.length; i++) {
        //console.log(allNamesDOMCollection[i].textContent)
        let name = allNamesDOMCollection[i].textContent.toLocaleLowerCase()
        
        if ( name.includes(searchQuery)){
            allNamesDOMCollection[i].style.display = 'block';
        } else {
            allNamesDOMCollection[i].style.display = 'none';
        }
        
    }
    
}) 