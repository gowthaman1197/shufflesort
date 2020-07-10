// Shuffle Functionality
var list;
function shuffleFun(){
    list = document.querySelector('#shufflesort');
    for (var i = list.children.length; i >= 0; i--) {
        list.appendChild(list.children[Math.random() * i | 0]);
    }
}
// Sort Functionality
function sortList(){
    list = document.querySelector('#shufflesort');
    [...list.children].sort((a,b)=>a.innerText>b.innerText?1:-1).forEach(node=>list.appendChild(node));
}