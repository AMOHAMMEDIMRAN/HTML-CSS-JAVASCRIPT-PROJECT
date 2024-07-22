const inputForm = document.querySelector
("#input-form");
const inputField = document.querySelector
("#input-field");
const outputScreen = document.querySelector
(".input-view");

inputForm.addEventListener("submit" , function(e){

    e.preventDefault();

    if(inputField.value === ""){
        alert("Please Enter the Field....");
    }
    else{
        outputScreen.innerHTML = `
        
        <p>${inputField.value}</p>

        `;

        inputField.value = "";
    }
})
