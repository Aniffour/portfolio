const bar = document.querySelector('.bar-header')
let linksOpen = false
const links = document.querySelector('.links')
bar.addEventListener('click', _=> {if (linksOpen){ 
    links.style.display = 'none'
    linksOpen = false
}
else{
    links.style.display = 'flex'
    linksOpen = true
     }
})