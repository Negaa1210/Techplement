


searchForm=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');
}


let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick=()=>{
    loginForm.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick=()=>{
    loginForm.classList.remove('active');
}


window.onscroll=()=>{
    searchForm.classList.remove('active');

    if(window.scrollY>80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload=()=>{
    if(window.scrollY>80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
var swiper = new Swiper(".course-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        540: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


var swiper=new Swiper(".reviews-slider",{
    spaceBetween:20,
    grabCursor:true,
    loop:true,
    
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },

breakpoints:{
    540: {
        slidesPerView: 1,
        
    },
    768: {
        slidesPerView: 2,
      
    },
    1024: {
        slidesPerView: 3,
       
    },
},

});
// // Get the add to cart button element
// const addToCartBtn = document.querySelector('.add-to-cart-btn');

// // Handle click event on the add to cart button
// addToCartBtn.onclick = () => {
//     // Perform actions when the button is clicked
//     // For example, you can update the cart total or display a confirmation message
//     alert('Product added to cart!');
// }


