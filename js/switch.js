document.getElementById('donation-page-btn').addEventListener('click', function(event){
    event.preventDefault();
    showSectionById('donation-page');
});

document.getElementById('history-page-btn').addEventListener('click', function(event){
    event.preventDefault();
    showSectionById('history-page');
})