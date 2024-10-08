function showSectionById(id){
    document.getElementById('donation-page').classList.add('hidden');
    document.getElementById('history-page').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function validation(id){
    const donation = document.getElementById(id).value;
    const accountBalance = getTextFieldValueById('account-balance');
    if (!donation || isNaN(donation) && donation > accountBalance){
        alert('Please enter a donation amount.');
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
                    <button class="btn" id="close">Close Confirmation</button>
                </div>
                </div>
            </div>
        `;
        document.getElementById('confirmation-card').appendChild(div);
        document.body.style.overflow = "hidden";
        document.getElementById('donation-page').classList.add('card-bg');
        document.getElementById('close').addEventListener('click', function(event){
            document.getElementById('confirmation-card').innerHTML = "";
            document.body.style.overflow = "auto";
            document.getElementById('donation-page').classList.remove('card-bg');
        });
        
    }
}

function donateMoney(inputId, donateBalance){
    const accountBalance = getTextFieldValueById("account-balance");
    const donation = getInputFieldValueById(inputId);
    if(accountBalance >= donation){
        const newBalance = accountBalance - donation;
        document.getElementById('account-balance').innerText = newBalance;
        const currentBalance = getTextFieldValueById(donateBalance);
        const donationAmount = donation + currentBalance;
        document.getElementById(donateBalance).innerText = donationAmount;
    }
    else{
        alert('You have insufficient balance!!');
    }
}

