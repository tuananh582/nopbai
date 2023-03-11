let names = ""
let birthday = ""
function getname() {
  names =  document.getElementById("name").value;
}
function getbirthday() {
birthday= document.getElementById("birthday").value;
}
function savedata() {
    const datalocal=JSON.parse (localStorage.getItem("data")) || [];
   const ul = document.createElement("ul");
    for(let i=0; i<datalocal.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = datalocal[i].names;
        ul.appendChild(li);
    
    
    }
    document.getElementById("listvuanhap").appendChild(ul)
  
    const informationonchange = {
        names,
        birthday
    }
    datalocal.push(informationonchange)
    localStorage.setItem("data",JSON.stringify(datalocal));
        //console.log(name,birthday)
}
function showdata(){
    const datalocal = JSON.parse (localStorage.getItem("data")) || []
    const ul = document.createElement("ul");
    const getlistvuanhap= document.getElementsByTagName("ul")
    if(getlistvuanhap.length > 0){
    getlistvuanhap[0].remove()
    }
    for(let i=0; i<datalocal.length; i++) {
        let li = document.createElement("li")  ;
        const datalibon=`
            <p class="cssdemo"> ${datalocal[i].names} - ${datalocal[i].birthday}
            <button onclick="xoadata(${i})"> delete</button>
            <button> revision</button
            </p>
        `
        li.innerHTML=datalibon ;
        // li.innerHTML = datalocal[i].names +"---" +datalocal[i].birthday;
        ul.appendChild(li);
    
    }
    
    document.getElementById("listvuanhap").appendChild(ul)
}
function xoadata(i)
{
    const ul = document.createElement("ul");
    const getlistvuanhap= document.getElementsByTagName("ul")
    if(getlistvuanhap.length > 0){
    getlistvuanhap[0].remove()
    }
    const datalocal = JSON.parse (localStorage.getItem("data"))
    const deletedatai=datalocal.filter((item,index)=>index!=i)
    localStorage.setItem("data",JSON.stringify(deletedatai))
    for(let i=0; i<deletedatai.length; i++) {
        let li = document.createElement("li")  ;
        const datalibon=`
            <p class="cssdemo"> ${datalocal[i].names} - ${datalocal[i].birthday}
            <button onclick="xoadata(${i})"> delete</button>
            <button> revision</button
            </p>
        `

        li.innerHTML=datalibon ;
        // li.innerHTML = datalocal[i].names +"---" +datalocal[i].birthday;
        ul.appendChild(li);
    
    }
    document.getElementById("listvuanhap").appendChild(ul)
    

}
// xoa doi tuong thi dung fileter
// const array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// const deleteso7=array.filter(item=>item!==7)
// console.log(deleteso7)
const arrayob=[{name:"A",value:"1"},{name:"A",value:"2"},{name:"B",value:"3"}]
const deletea=arrayob.filter(item=>item.name!=="A")
console.log(deletea) 
showdata() 