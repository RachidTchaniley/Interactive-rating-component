const submit = document.querySelector('.submit')
const selected = document.querySelectorAll('.selection');
const num = document.querySelector('.number');

submit.addEventListener('click', function(){
        document.body.classList.toggle('active')
    
})

selected.forEach(function(item){
    item.addEventListener('click',function(e){
        num.textContent = e.currentTarget.dataset.id;
    })
})



