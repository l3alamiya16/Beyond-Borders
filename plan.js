const btn = document.getElementById('btn');
const div = document.getElementById('div');
const sub = document.getElementById('submit');


sub.addEventListener('click', function() {
    div.style.visibility = 'visible';
})


btn.addEventListener('click', function() {
    div.style.visibility = 'hidden';
    window.location.href = 'mainpage.html'
})

