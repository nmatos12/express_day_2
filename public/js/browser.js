const getBtn = document.querySelector('#get-btn');

function getFruits() {
    fetch('/api/fruits')
        .then(res => res.json())
        .then(data => {
            data.forEach(fruit =>{
                ul.insertAdjacentHTML('beforehand', `<li>${fruit}</li>`);
            })
        });
}

getBtn.addEventListener('click', getFruits);