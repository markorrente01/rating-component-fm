const ratingIndex = document.querySelectorAll('.rating-index');
const selectedInfo = document.querySelector('.selected-info');
const submit = document.querySelector('.submit-btn');
ratingIndex.forEach(element=>{
    const data = element.dataset.index;
    element.addEventListener('click', ()=>{
        ratingIndex.forEach(otherElement=>{
            if(otherElement.classList.contains('clicked')){
                otherElement.classList.remove('clicked');
            }
        })
        element.classList.add('clicked');
        selectedInfo.textContent = `You selected ${data} out of 5`;
    })
})
submit.addEventListener('click', ()=>{
    const thanks = document.querySelector('.thanks-container');
    thanks.classList.add('thanks-container-active')
})
