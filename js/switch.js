document.getElementById('donation-page-btn').addEventListener('click', function(event){
    document.getElementById('donation-page-btn').classList.add('btn-bg');
    document.getElementById('history-page-btn').classList.remove('btn-bg');
    showSectionById('donation-page');
});

document.getElementById('history-page-btn').addEventListener('click', function(event){
    document.getElementById('donation-page-btn').classList.remove('btn-bg');
    document.getElementById('history-page-btn').classList.add('btn-bg');
    showSectionById('history-page');
});



