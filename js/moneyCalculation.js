document.getElementById('noakhali-donate-btn').addEventListener('click', function(event){
    donateMoney('noakhali-donation-amount');
    const currentBalance = getTextFieldValueById('noakhali-donate');
    const donation = getInputFieldValueById('noakhali-donation-amount');
    const donationAmount = donation + currentBalance;
    document.getElementById('noakhali-donate').innerText = donationAmount;
});

document.getElementById('feni-donate-btn').addEventListener('click', function(event){
    donateMoney('feni-donation-amount');
    const currentBalance = getTextFieldValueById('feni-donate');
    const donation = getInputFieldValueById('feni-donation-amount');
    const donationAmount = donation + currentBalance;
    document.getElementById('feni-donate').innerText = donationAmount;
});

document.getElementById('qouta-donate-btn').addEventListener('click', function(event){
    donateMoney('quota-donation-amount');
    const currentBalance = getTextFieldValueById('quota-donate');
    const donation = getInputFieldValueById('quota-donation-amount');
    const donationAmount = donation + currentBalance;
    document.getElementById('quota-donate').innerText = donationAmount;
});