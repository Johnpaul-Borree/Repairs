
function showNav(){
    const nav = document.querySelectorAll('.navMenu');
    nav.forEach(navg => navg.style.cssText = 'transition: all 1s ease-in-out; display:flex;');
    
}

function hideNav(){
    const nav = document.querySelectorAll('.navMenu');
    nav.forEach(navg => navg.style.cssText = 'transition: all 1s ease-in-out; display:none;');
    
}

window.addEventListener('resize', function(){ 
    location.reload(); 
});
document.querySelector('.nav-wrap').addEventListener('mouseover', showNav);
document.querySelector('.nav-wrap').addEventListener('mouseout', hideNav);

function expandNav() {

    document.getElementById('expand').style.display = "block";
    document.querySelector('#login-form').style.cssText = 'width:55%; transition:all 1s ease-in-out;';
    document.getElementById('expand').style.display = "none";
    document.getElementById('collapse').style.display = "block";
}

function collapseNav() {

    document.querySelector('#login-form').style.cssText = 'width:100%; transition:all 1s ease-in-out;';
    document.getElementById('collapse').style.display = "none";
    document.getElementById('expand').style.display = "block";

}

function clearEvents() {

    if(size.matches){
        document.getElementById('expand').style.display = "block";
        document.querySelector('.nav-wrap').removeEventListener('mouseover', showNav);
        document.querySelector('.nav-wrap').removeEventListener('mouseout', hideNav);

        const nav = document.querySelectorAll('.navMenu');
        nav.forEach(navg => navg.style.display = 'flex');
        
        document.getElementById('expand').addEventListener('click', expandNav);
        document.getElementById('collapse').addEventListener('click', collapseNav);
    }else{
        document.querySelector('.nav-wrap').addEventListener('mouseover', showNav);
        document.querySelector('.nav-wrap').addEventListener('mouseout', hideNav);

        document.getElementById('expand').removeEventListener('click', expandNav);
        document.getElementById('collapse').removeEventListener('click', collapseNav);

        document.getElementById('collapse').style.display = "none";
        document.getElementById('expand').style.display = "none";

    }
}


var size = window.matchMedia("(max-width: 920px)");
clearEvents(size);
size.addListener(clearEvents);
