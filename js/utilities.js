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

function confimationSelectionById(id){
    const section = document.createElement('section');
    section.innerHTML = `
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
    `
    return section;
}