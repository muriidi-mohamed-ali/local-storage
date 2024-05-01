function StoreDataLocally(){
    const inputEl = document.getElementById('inputField').value
    // Check
    if(inputEl.trim() !==''){
        localStorage.setItem("username", inputEl)
        alert("username stored Sucessfully")
    }else if(inputEl.trim()===''){
        alert("please Enter A Username")
    }else{
        alert("Ente a valid username");
    }
}

function retrieveDataLocaly(){
    const storedUsername = localStorage.getItem("username")
    document.getElementById('localStorageDate').textContent = storedUsername || 'Data Not Found'
}

window.addEventListener('load', retrieveDataLocaly)