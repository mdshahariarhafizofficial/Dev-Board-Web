// Theme Change Js
document.getElementById('theme-btn').addEventListener('click', function(){

    // Theme Button Rotate
    let deg = Math.floor(Math.random() * 380)+90+"deg";
    document.getElementById('theme-btn').style.transform = `rotate(${deg})`;

    // Random Background Change
    const hexCode = "#"+ Math.floor(Math.random() * 1000);    
    document.getElementById('body').style.background = hexCode;
});