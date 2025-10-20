
const menuToggle = document.getElementById('menu-icon');
const menu = document.querySelector('.menu');


menuToggle.addEventListener('change',()=>{
    if(menuToggle.checked){
        menu.classList.add('active')
    }
    else{
        menu.classList.remove('active')
    }
})


