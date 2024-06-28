document.addEventListener('DOMContentLoaded', function(){
    const buttonDropPlans = document.getElementById('drop-plans');
    const menuPlans = document.querySelector('#menu_plans');
    const buttonDropMenuProfile = document.getElementById('drop-menu-profile')
    const menuProfile = document.querySelector('#menu-profile');
    const iconeAnimateProfile = document.querySelector('#icone-profile-animate')


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

    buttonDropMenuProfile.onclick = () =>{
        dropMenuProfile()
    }

    function dropMenuProfile(){
        if(menuProfile.classList.contains('menu__profile--open')){
            menuProfile.classList.remove('menu__profile--open')
            iconeAnimateProfile.classList.remove('profile__angle--open')
        } else{
            menuProfile.classList.add('menu__profile--open')
            iconeAnimateProfile.classList.add('profile__angle--open')
        }
    }
})