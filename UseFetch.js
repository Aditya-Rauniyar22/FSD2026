const div=document.getElementById('container')
const button=document.getElementById('btn')
console.log(div);
const h2=document.createElement('h2');
h2.innerText="Data is loading.....";
// div.appendChild(h2);
console.log(h2);
function cart(ele){
   alert("cart is calling"+ele)
}

async function display(){
    try{
        div.appendChild(h2);
// div.innerHTML='<h2>Welcome to the page</h2>';
const serverdata= await fetch('https://fakestoreapi.com/products');
const jsonData= await serverdata.json();
// console.log(jsonData)
// console.log(jsonData[1].title)
// div.innerHTML=`<h2>${jsonData[1].title}</h2>`;
// div.innerHTML=`<h2 style=color:blue>${JSON.stringify(jsonData)}</h2>`;

let table=`<table border=4px>
<tr> <th>Id</th> <th>Title</th> <th>Price</th> <th>Description</th> <th`
+`>Category</th> <th>Image</th> </tr>
${
   jsonData.map((ele)=>{
       return `<tr>
      <td>${ele.id}</td>
      <td>${ele.title}</td>
      <td>${ele.price}</td>
      <td>${ele.description}</td>
      <td>${ele.category}</td>
      <td><button onclick="addToCart(${ele.id})">Add to Cart</button></td>
      <td><img src=${ele.image} width=100px height=100px></td>
      </tr>`
   })
}
</table>`;
div.innerHTML=table;
}catch(e){
    console.log("error is:"+e);
}
finally{
    div.removeChild(h2);
}
}
button.addEventListener('click',display);