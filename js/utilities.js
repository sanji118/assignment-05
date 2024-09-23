function showSectionById(id){
    document.getElementById('donation-page').classList.add('hidden');
    document.getElementById('history-page').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

function getInputFieldValueById(id){
    const inputValue = document.getElementsById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}


function closeConfirmation(){
    document.getElementById('confirmation-card').innerHTML = "";
}

function validation(id){
    const donation = document.getElementById(id).value;

    if (donation === "" && donation !== 'number'){
        alert('Please enter a donation amount');
    }
    else{
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card bg-white shadow-black
            rounded-xl text-black w-96 text-center">
                <div class="card-body">
                <h2 class="card-title justify-center">Congrats!</h2>
                <img src="assets/coin.png" class="w-[20px] mx-auto">
                <p class="opacity-50">You have donated for Humankind <br> <span class="font-bold">Successfully</span></p>
                <div class="card-actions justify-center">
                    <button class="btn">Close Confirmation</button>
                </div>
                </div>
            </div>
        `;
        document.getElementsByClassName('confirmation-card').appendChild(div);
    }
}