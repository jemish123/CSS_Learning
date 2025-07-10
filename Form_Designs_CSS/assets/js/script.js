const cover = document.getElementById("cover");

document.addEventListener("DOMContentLoaded", () => {
    const styleToAdd = {
        left : '0%',
        borderTopRightRadius : '20%',
        borderBottomRightRadius : '20%'
    };
    Object.assign(cover.style, styleToAdd);


    document.getElementById("login-content").classList.toggle("active");
    document.getElementById("login-form").style.visibility = "hidden";
});

function showLoginPanel() {
    const styleToAdd = {
        left : '50%',
        borderTopRightRadius : '0%',
        borderBottomRightRadius : '0%',

        borderTopLeftRadius : '20%',
        borderBottomLeftRadius : '20%',
    };
    Object.assign(cover.style, styleToAdd);
    
    document.getElementById("login-content").classList.toggle("active");
    document.getElementById("register-content").classList.toggle("active");

    document.getElementById("login-form").style.visibility = "visible";
    document.getElementById("register-form").style.visibility = "hidden";

    
    // document.getElementById('register-content').style.zIndex = '3';
    // document.getElementById('login-content').style.zIndex = '-10';
};

function showRegisterPanel() {
    const styleToAdd = {
        left : '0%',

        borderTopLeftRadius : '0%',
        borderBottomLeftRadius : '0%',

        borderTopRightRadius : '20%',
        borderBottomRightRadius : '20%',
    };
    Object.assign(cover.style, styleToAdd);

    document.getElementById("register-content").classList.toggle("active");
    document.getElementById("login-content").classList.toggle("active");
    
    document.getElementById("register-form").style.visibility = "visible";
    document.getElementById("login-form").style.visibility = "hidden";
}

// document.getElementById('login-btn').addEventListener("click", () => {
// });

