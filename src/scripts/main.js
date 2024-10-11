document.addEventListener('DOMContentLoaded', function(){
    const buttonDropPlans = document.getElementById('drop-plans');
    const menuPlans = document.getElementById('menu_plans');

    const buttonDropMenuProfile = document.getElementById('drop-menu-profile')
    const menuProfile = document.querySelector('#menu-profile');
    const iconeAnimateProfile = document.querySelector('#icone-profile-animate')

    const buttonDropMenuMobile = document.getElementById('drop-menu-mobile')
    const closeIcone = document.querySelectorAll('.hm__drop__icon')
    const backgroundMenuMobile = document.querySelector('.hm__background ')
    const menuMobile = document.querySelector('.mb__menu')
    const itensMenuMobile = document.querySelectorAll('.mb__menu__link')
    const menuLogo = document.querySelector('.mb__menu__home')
    
    const buttonOthersPayments = document.getElementById('drop-payments-type')
    const cardOthersPayments = document.getElementById('drop-others-payments')

    const body = document.querySelector('body')

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

    buttonDropMenuMobile.onclick = () => {
        dropMenuMobile()
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

    function dropMenuMobile(){
        for( icone of closeIcone){
            if(icone.classList.contains('hm__drop__icon--open')){
                icone.classList.remove('hm__drop__icon--open')
            } else{
                icone.classList.add('hm__drop__icon--open')
            }
        }
        
        for(links of itensMenuMobile){
            if (links.classList.contains('mb__menu__link--open')) {
                links.classList.remove('mb__menu__link--open')
            } else if (!links.classList.contains('mb__menu__link--open')) {
                links.classList.add('mb__menu__link--open')
            }
        }

        if (menuMobile.classList.contains('mb__menu--open')) {
            menuMobile.classList.remove('mb__menu--open')
            body.classList.remove('scroll--none')
        } else {
            menuMobile.classList.add('mb__menu--open')
            body.classList.add('scroll--none')
        }

        if(!menuLogo.classList.contains('mb__menu__home--open')){
            console.log(true)
        }else if(menuLogo.classList.contains('mb__menu__home--open')){
            console.log(false)
        }
    }

    const buttonsDropCard = document.querySelectorAll('.card-aside__button-drop')

    buttonsDropCard.forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.card')
            const icone = button.querySelector('i')

            if (card.classList.contains('open')) {
                card.classList.remove('open')
                icone.classList.replace('fa-angle-up', 'fa-angle-down')
                return
            }
            card.classList.add('open')
            icone.classList.replace('fa-angle-down', 'fa-angle-up')
        })
    })

    // --> function drops others cards in hover <--
    let isClick = false
    buttonOthersPayments.addEventListener('mouseenter', () => {
        if (!isClick) cardOthersPayments.style.display = 'grid'
    })
    buttonOthersPayments.addEventListener('mouseleave', () => {
        if (!isClick) cardOthersPayments.style.display = 'none'
    })

    buttonOthersPayments.addEventListener('click', () => {
        isClick = !isClick
        cardOthersPayments.style.display = 'grid'
        console.log(isClick)
    })
})
