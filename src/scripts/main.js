document.addEventListener('DOMContentLoaded', function(){
    const buttonDropPlans = document.getElementById('drop-plans');
    const menuPlans = document.querySelector('#menu_plans');

    buttonDropPlans.addEventListener('mouseenter', function(){
        menuPlans.classList.add('header__mp--open')
    })
    
    buttonDropPlans.addEventListener('mouseleave', function(){
        menuPlans.classList.remove('header__mp--open')
    })

    menuPlans.addEventListener('mouseenter', function(){
        menuPlans.classList.add('header__mp--open')
    })

    menuPlans.addEventListener('mouseleave', function(){
        menuPlans.classList.remove('header__mp--open')
    })
})