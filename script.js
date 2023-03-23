
var data;
var currentPage=1;
var countsPerPage=5;

function gotoPage(pageNumber){
    currentPage=pageNumber;
    let end=(currentPage*5);
    let start=end - 5;

    let tabledata="";
    for(let i=start;i<end;i++){
        tabledata += `<tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].email}</td>
        </tr>`;
        
    }
    console.log(data);
    document.getElementById("table-body").innerHTML=tabledata;
}

var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
request.send();
request.onload=function(){
    data=JSON.parse(request.response);
    console.log(data);

    gotoPage(1);
    
   
    
}




function previous(){
    currentPage--;
    let end=(currentPage*5);
    let start=end - 5;

    let tabledata="";
    for(let i=start;i<end ;i++){
        tabledata += `<tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].email}</td>
        </tr>`;
    }
    document.getElementById("table-body").innerHTML=tabledata;
}


function next(){
    currentPage++;
    let end=(currentPage*5);
    let start=end - 5;
    
    
    let tabledata="";
    for(let i=start;i<end;i++){
        tabledata += `<tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].email}</td>
        </tr>`;
        
    }
    console.log(data);
    document.getElementById("table-body").innerHTML=tabledata;
}



function gotoPage(pageNumber){
    currentPage=pageNumber;
    let end=(currentPage*5);
    let start=end - 5;

    let tabledata="";
    for(let i=start;i<end;i++){
        tabledata += `<tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].email}</td>
        </tr>`;
        
    }
    console.log(data);
    document.getElementById("table-body").innerHTML=tabledata;
}





document.querySelector("#prevButton").addEventListener("click", previous, false);
document.querySelector("#nextButton").addEventListener("click", next, false);

document.querySelector("#pg1").addEventListener("click", () => gotoPage(1), false);
document.querySelector("#pg2").addEventListener("click", () => gotoPage(2), false);
document.querySelector("#pg3").addEventListener("click", () => gotoPage(3), false);
document.querySelector("#pg4").addEventListener("click", () => gotoPage(4), false);
document.querySelector("#pg5").addEventListener("click", () => gotoPage(5), false);
document.querySelector("#pg6").addEventListener("click", () => gotoPage(6), false);
document.querySelector("#pg7").addEventListener("click", () => gotoPage(7), false);
document.querySelector("#pg8").addEventListener("click", () => gotoPage(8), false);
document.querySelector("#pg9").addEventListener("click", () => gotoPage(9), false);
document.querySelector("#pg10").addEventListener("click", () => gotoPage(10), false);

document.querySelector("#pg11").addEventListener("click", () => gotoPage(11), false);
document.querySelector("#pg12").addEventListener("click", () => gotoPage(12), false);
document.querySelector("#pg13").addEventListener("click", () => gotoPage(13), false);
document.querySelector("#pg14").addEventListener("click", () => gotoPage(14), false);
document.querySelector("#pg15").addEventListener("click", () => gotoPage(15), false);
document.querySelector("#pg16").addEventListener("click", () => gotoPage(16), false);
document.querySelector("#pg17").addEventListener("click", () => gotoPage(17), false);
document.querySelector("#pg18").addEventListener("click", () => gotoPage(18), false);
document.querySelector("#pg19").addEventListener("click", () => gotoPage(19), false);
document.querySelector("#pg20").addEventListener("click", () => gotoPage(20), false);


