const cover = document.getElementById("cover");

document.addEventListener("DOMContentLoaded", () => {
    const styleToAdd = {
        left : '0%',
        borderTopRightRadius : '20%',
        borderBottomRightRadius : '20%'
    };
    Object.assign(cover.style, styleToAdd);
});

function showLoginPanel() {
    const styleToAdd = {
        left : '0%',
        borderTopRightRadius : '20%',
        borderBottomRightRadius : '20%',
        transform: 'rotateZ(0deg)'
    };
    Object.assign(cover.style, styleToAdd);
    
    document.getElementById('register-content').style.display = 'none';
    document.getElementById('login-content').style.display = 'block';
};

function showRegisterPanel() {
    const styleToAdd = {
        left : '50%',
        borderTopRightRadius : '20%',
        borderBottomRightRadius : '20%',
        transform: 'rotateZ(180deg)'
    };
    Object.assign(cover.style, styleToAdd);
    
    document.getElementById('login-content').style.display = 'none';
    document.getElementById('register-content').style.display = 'inherit';
}

// document.getElementById('login-btn').addEventListener("click", () => {
// });

