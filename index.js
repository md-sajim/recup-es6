document.getElementById('bg-color').addEventListener("click",function(){
    const frinds = document.getElementsByClassName('frind')
    for(const frind of frinds ){
        frind.style.background = "red"
        frind.style.padding = "20px"
        frind.style.marginTop = "50px"
    }
})
document.getElementById('aling-center').addEventListener('click',function(){
    const itemFoure = document.getElementById('items-four');
    itemFoure.style.textAlign ="center"
})
document.getElementById('add-Eliment').addEventListener('click',function(){
    const createElemet = document.createElement('div')
    createElemet.innerHTML= `
    <h3 class="frind-name">New frind</h3>
    <p>something new added</p>
    `
    createElemet.classList.add("frind")
    const getElement = document.getElementById('frind');
    getElement.appendChild(createElemet)
})