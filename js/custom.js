//[Custom Javascript]

//Project:	Law Firm - Onepage Html Responsive Template
//Version:	1.1
//Primary use:	Law Firm - Onepage Html Responsive Template 

//add your script here
const loadmore = document.querySelector('#loadmore');
const readless = document.querySelector('#readless');

    let currentItems = 2;
    loadmore.addEventListener('click', (e) => {
        const elementList = [...document.querySelectorAll('.list .list-element')];
        for (let i = currentItems; i < currentItems + 2; i++) {
            if (elementList[i]) {
        elementList[i].style.display = 'block';
            }
        }
        currentItems += 2;

        // Load more button will be hidden after list fully loaded
        if (currentItems >= elementList.length) {
            loadmore.style.display = 'none';
            

        }
    })
