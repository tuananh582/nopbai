// const a1=[2,3,4,5,6,7]
// const a2=[2,9,5,6,7,8]
// const array=[]
// const concat=a1.concat(a2)
// for(let i=0; i<concat.length; i++)
// {
//     if(!array.includes(concat[i]))
//     {
//         array.push(concat[i])
//     }

// }
// console.log(array)
// function sapxep(data)
// {
//     data.sort();
// }
// sapxep(a1)
// console.log(a1)
// function sortgiamdan(data) // sort giam dan
// {
//     data.sort(function(a, b){
//         return b-a;
//     })
    
// }
// sortgiamdan(a1)
// console.log(a1)


 //dom
let input1=0
let input2=0
let pheptinh = '+'
let result=0
 const el = document.getElementById("so1").value;
 console.log(el)
 function onChangeGetValueInput1() {
    input1 =Number(document.getElementById("so1").value);
    console.log(input1)
 }
 function onChangeGetValueInput2()
 {
    input2=Number(document.getElementById("so2").value)
    console.log(input2)
 }
 function clickgetvalue(data)
 {
    // console.log(data)
    // result=input
    if(data==="+")
    {
        result=input1+input2
    }
    else if (data==="-")
    {
        result=input1-input2
    }
    else if(data=="*")
    {
        result=input1*input2
    }
    else
    {
        result=input1/input2
    }
}
function viewresult()
{
    // document.getElementById("result").innerHTML=result;
   document.getElementsByClassName("result")[0].innerHTML=result
}
