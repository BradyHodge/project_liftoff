function applyStyle(combinator) {
    const combinatorDisplay = document.getElementById('active-combinator');
    resetStyles();
    switch (combinator) {
        case 'descendant':
            document.querySelectorAll('#box1 .box').forEach(element => {
                element.classList.add('highlight1');
            });
            document.querySelector('#descendant-button').classList.add('highlight1');
            combinatorDisplay.textContent = '#box1 .box';
            break;
        case 'child':
            document.querySelectorAll('#box1 > .box').forEach(element => {
                element.classList.add('highlight2');
            });
            document.querySelector('#child-button').classList.add('highlight2');
            combinatorDisplay.textContent = '#box1 > .box';
            break;
        case 'adjacent':
            document.querySelectorAll('#box2 + .box').forEach(element => {
                element.classList.add('highlight3');
            });
            document.querySelector('#adjacent-button').classList.add('highlight3');
            combinatorDisplay.textContent = '#box2 + .box';
            break;
        case 'general':
            document.querySelectorAll('#box1 ~ .box').forEach(element => {
                element.classList.add('highlight4');
            });
            document.querySelector('#general-button').classList.add('highlight4');
            combinatorDisplay.textContent = '#box1 ~ .box';
            break;
        
    }
    
}

function resetStyles() {
    document.querySelectorAll('.box').forEach(box => {
        box.classList.forEach(className => {
            if (className.startsWith('highlight')) {
                box.classList.remove(className);
            }
        });
    });
    document.querySelectorAll('button').forEach(button => {
        button.classList.forEach(className => {
            if (className.startsWith('highlight')) {
                button.classList.remove(className);
            }
        });
    });
}
