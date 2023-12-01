if (window.innerWidth < 771){let linksOpen = false
const links = document.querySelector('.links')
console.log(bar.id);
document.addEventListener('click', (e)=>{

    if(e.target.id == 'bar'){
        linksOpen ? links.style.display ='none' :links.style.display = 'flex'
        linksOpen = !linksOpen
    }
    else{
        links.style.display = 'none'
        linksOpen =false 
    }
})}