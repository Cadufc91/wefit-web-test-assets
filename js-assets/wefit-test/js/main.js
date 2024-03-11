window.onload = function() {
    var btnGroup = document.querySelector('.btn-group-vertical');
    if (btnGroup) {
        btnGroup.style.flexDirection = 'row';
    }

    var btns = document.querySelectorAll('.btn-secondary');
    btns.forEach(function(btn) {
        btn.style.marginRight = '10px'; 
        btn.style.whiteSpace = 'nowrap'; 
        btn.style.borderRadius = '5px';
    });

    var jumbotron = document.querySelector('.jumbotron');
    if (jumbotron) {
        jumbotron.style.backgroundColor = '#5c5c5c'; 
        jumbotron.style.color = 'white';
        jumbotron.style.textAlign = 'right'; 
    }

    var btnLg = document.querySelectorAll('.btn-lg');
    btnLg.forEach(function(btn) {
        btn.style.backgroundColor = '#32a852'; 
        btn.style.border = '#32a852';
    });

    var cards = Array.from(document.querySelectorAll('.col-lg-3'));
    if (cards.length > 0) {
        cards.forEach((card, index) => {
            card.style.order = index + 2; 
        });

        cards[cards.length - 1].style.order = '1';

        var temp = cards[1].style.order;
        cards[1].style.order = cards[cards.length - 2].style.order;
        cards[cards.length - 2].style.order = temp;
        
        var secondCardButton = document.querySelectorAll('.card .btn-primary')[0];
    
        secondCardButton.style.backgroundColor = '#32a852';
        secondCardButton.style.border = '#32a852';
    }

    var listGroup = document.querySelector('.list-group');

    var newLi1 = document.createElement('li');
    var newLi2 = document.createElement('li');

    newLi1.classList.add('list-group-item');
    newLi2.classList.add('list-group-item');

    newLi1.textContent = 'Quarto item';
    newLi2.textContent = 'Quinto item';

    listGroup.appendChild(newLi1);
    listGroup.appendChild(newLi2);

    var listItems = listGroup.querySelectorAll('.list-group-item');

    listItems[0].classList.remove('active');

    listItems[listItems.length - 2].classList.add('active');
}