document.getElementById('noakhali-donate-btn').addEventListener('click', function(event){
    event.preventDefault();
    donateMoney('noakhali-donation-amount', 'noakhali-donate');
    const donation = getInputFieldValueById('noakhali-donation-amount');
    //history
    const time = new Date();
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="border-[1px] border-[#1111111A] rounded-xl p-5 mb-5"><h4 class="font-bold">${donation} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h4>
    <p class="opacity-50">Date : ${time}</p></div>
    `
    document.getElementById('history-page').appendChild(div);
});

document.getElementById('feni-donate-btn').addEventListener('click', function(event){
    event.preventDefault();
    donateMoney('feni-donation-amount', 'feni-donate');
    const donation = getInputFieldValueById('feni-donation-amount');
    //history
    const time = new Date();
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="border-[1px] border-[#1111111A] rounded-xl p-5 mb-5"><h4 class="font-bold">${donation} Taka is Donated for Flood Relief in Feni,Bangladesh</h4>
    <p class="opacity-50">Date : ${time}</p></div>
    `
    document.getElementById('history-page').appendChild(div);
});

document.getElementById('qouta-donate-btn').addEventListener('click', function(event){
    event.preventDefault();
    donateMoney('quota-donation-amount', 'quota-donate');
    const donation = getInputFieldValueById('quota-donation-amount');
    
    const time = new Date();
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="border-[1px] border-[#1111111A] rounded-xl p-5 mb-5"><h4 class="font-bold">${donation} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h4>
    <p class="opacity-50">Date : ${time}</p></div>
    `
    document.getElementById('history-page').appendChild(div);
});