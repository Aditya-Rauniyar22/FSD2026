const div=document.getElementById('container');
const btn=document.getElementById('btn');
console.log(div);
const h2=document.createElement('h2');
  async function display(){
    //div.innerHTML="<h2>Hello using dom</h2>";
    const serverData= await fetch("https://fakestoreapi.com/products ");
    console.log(serverData);
}
btn.addEventListener('click', display);
