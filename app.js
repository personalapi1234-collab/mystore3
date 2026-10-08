const STORE="YOURSTORE",CUR="₹"; // 1) Change your store name here
// 2) Sample products. Later these will come from Firebase.
// To use a real photo, add img:"your-cloudinary-link" to a product.
const P=[
{id:1,n:"Checked flannel shirt",c:"shirts",p:1999,k:"#7a1f2b"},
{id:2,n:"Striped oxford shirt",c:"shirts",p:1799,k:"#1f3a66"},
{id:3,n:"Linen resort shirt",c:"shirts",p:1599,k:"#c9b79c"},
{id:4,n:"Wide-leg jeans",c:"jeans",p:2999,k:"#2c3a4a"},
{id:5,n:"Relaxed straight jeans",c:"jeans",p:2499,k:"#4b5d73"},
{id:6,n:"Black loose jeans",c:"jeans",p:2699,k:"#1c1c1c"},
{id:7,n:"Pique polo shirt",c:"polos",p:1299,k:"#e8e2d4"},
{id:8,n:"Knit zip polo",c:"polos",p:1899,k:"#3d4a3a"},
{id:9,n:"Classic polo",c:"polos",p:1199,k:"#8fb4d9"},
{id:10,n:"Oversized t-shirt",c:"tshirts",p:899,k:"#8a6e5c"},
{id:11,n:"Plain white t-shirt",c:"tshirts",p:699,k:"#f1efe9"},
{id:12,n:"Long sleeve tee",c:"tshirts",p:999,k:"#2a2f3a"}];
const C={shirts:"Shirts",jeans:"Jeans",polos:"Polos",tshirts:"T-shirts"};
const $=s=>document.querySelector(s);
const rd=()=>{try{return JSON.parse(localStorage.getItem("cart"))||[]}catch(e){return[]}};
const wr=c=>{try{localStorage.setItem("cart",JSON.stringify(c))}catch(e){}};
const cnt=()=>rd().reduce((a,i)=>a+i.q,0);
const money=n=>CUR+n.toLocaleString("en-IN");
const img=p=>p.img?`<img class="ph" src="${p.img}" alt="${p.n}">`:`<div class="ph" style="background:${p.k}"></div>`;
const card=p=>`<a class="card" href="product.html?id=${p.id}">${img(p)}<h3>${p.n}</h3><p>${money(p.p)}</p></a>`;
function add(id,s){const c=rd(),f=c.find(i=>i.id==id&&i.s==s);f?f.q++:c.push({id:+id,s:s,q:1});wr(c);head()}
function head(){const cur=new URLSearchParams(location.search).get("c");
$("#hd").innerHTML=`<div class="promo">Free delivery on orders over ${money(1999)}</div><header><div class="bar"><a class="logo" href="index.html">${STORE}</a><nav>${[["all","New in"],...Object.entries(C)].map(([k,v])=>`<a href="collection.html?c=${k}" class="${cur==k?"on":""}">${v}</a>`).join("")}</nav><a class="bag" href="cart.html">Bag (${cnt()})</a></div></header>`}
function foot(){$("#ft").innerHTML=`<footer>© ${new Date().getFullYear()} ${STORE}</footer>`}
head();foot();document.title=STORE+" – "+document.title;
