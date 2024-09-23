document.getElementById('noakhali-donate-btn').addEventListener('click', function(event){
    donateMoney('noakhali-donation-amount', 'noakhali-donate');
    const donation = getInputFieldValueById('noakhali-donation-amount');
    console.log(donation)
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="border-[1px] border-[#1111111A] rounded-xl p-5 mb-5"><h4 class="font-bold">${donation} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h4>
    <p class="opacity-50">Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)</p></div>
    `
    document.getElementById('history-page').appendChild(div);
});

document.getElementById('feni-donate-btn').addEventListener('click', function(event){
    donateMoney('feni-donation-amount');
    const currentBalance = getTextFieldValueById('feni-donate');
    const donation = getInputFieldValueById('feni-donation-amount');
    const donationAmount = donation + currentBalance;
    document.getElementById('feni-donate').innerText = donationAmount;

    const div = document.createElement('div');
    div.innerHTML = `
    <div class="border-[1px] border-[#1111111A] rounded-xl p-5 mb-5"><h4 class="font-bold">${donation} Taka is Donated for Flood Relief in Feni,Bangladesh</h4>
    <p class="opacity-50">Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)</p></div>
    `
    document.getElementById('history-page').appendChild(div);
});

document.getElementById('qouta-donate-btn').addEventListener('click', function(event){
    donateMoney('quota-donation-amount');
    const currentBalance = getTextFieldValueById('quota-donate');
    const donation = getInputFieldValueById('quota-donation-amount');
    const donationAmount = donation + currentBalance;
    document.getElementById('quota-donate').innerText = donationAmount;

    const div = document.createElement('div');
    div.innerHTML = `
    <div class="border-[1px] border-[#1111111A] rounded-xl p-5 mb-5"><h4 class="font-bold">${donation} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h4>
    <p class="opacity-50">Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)</p></div>
    `
    document.getElementById('history-page').appendChild(div);
});