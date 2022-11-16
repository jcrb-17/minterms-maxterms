let alpha = "ABCDEFGHIJKLMNOPQRSTUV";
let createBtn = document.getElementById("enter");
let mintermsBtn = document.getElementById("minterms");
let maxtermsBtn = document.getElementById("maxterms");

let input1 = document.getElementById("input1");
let body = document.querySelector("body");
let rows = document.querySelectorAll(".row");

let mintermP = document.querySelector("#mintermP");
let maxtermP = document.querySelector("#maxtermP");

//Create table
createBtn.addEventListener("click",function(){
    let tables = document.querySelector("table");
    //delete tables
    if(tables != undefined){
     tables.remove();
    }
    if(input1.value >1 && input1.value < 15){ //15 numero max de variables
        let size = Math.pow(2,input1.value)
        let table = document.createElement("table");
        let tr = document.createElement("tr");
        //Create the header of the table
        for(let i = 0;i<input1.value;i++){
            let th = document.createElement("th");
            th.textContent = alpha[i];
            tr.appendChild(th);
        }
        let th = document.createElement("th");
        th.textContent = "X";
        tr.appendChild(th);
        table.appendChild(tr);
        //Add rows
        for(let i = 0; i<size;i++){
            tr = document.createElement("tr");
            tr.setAttribute("class","row");
            for(let j = n[0].length - input1.value; j< n[0].length;j++){
                let td = document.createElement("td");
                td.textContent = n[i][j];
                tr.appendChild(td);
            }
            //Add inputs to input column
            let td = document.createElement("td");
            td.innerHTML = "<input class='inputTable' type='number' min='0' max='1' >";
            tr.appendChild(td);
            table.appendChild(tr);
        }
        body.appendChild(table);
        rows = document.querySelectorAll(".row");
    }else{
        alert("Ingrese variables, desde 2 hasta 15");
    }

});

mintermsBtn.addEventListener("click",function(){
    let expr = "";
    for(let i = 0; i<rows.length;i++){
          if(rows[i].childNodes[input1.value].childNodes[0].value == "1"){//value of column, when user enters 0 or 1
            for(let j = 0; j<input1.value;j++){
                //console.log(rows[i].childNodes[j].textContent);
                if(rows[i].childNodes[j].textContent == "0"){
                    expr += "!"+alpha[j];
                }else{
                    expr += alpha[j];
                }
                expr += " ";
            }
            expr += " + " ;
          }
    }
    let temp = ""; //remove thelast +
    for(let i = 0; i < expr.length-2;i++){
        temp += expr[i];
    }
    //console.log(temp);
    mintermP.textContent = "Minterms: " + temp;
});

maxtermsBtn.addEventListener("click",function(){
    let expr = "";
    for(let i = 0; i<rows.length;i++){
          if(rows[i].childNodes[input1.value].childNodes[0].value == "0"){//value of column, when user enters 0 or 1
            for(let j = 0; j<input1.value;j++){
                if(j== input1.value-1){
                    //console.log(rows[i].childNodes[j].textContent);
                    if(rows[i].childNodes[j].textContent == "0"){
                        expr += alpha[j];
                    }else{
                        expr += "!"+alpha[j];
                    }
                    expr += "";
                }else{
                    //console.log(rows[i].childNodes[j].textContent);
                    if(rows[i].childNodes[j].textContent == "0"){
                        expr += alpha[j] +"+";
                    }else{
                        expr += "!"+alpha[j]+"+";
                    }
                    expr += "";
                }

            }
            expr += " * " ;
          }
    }
    let temp = ""; //remove thelast +
    for(let i = 0; i < expr.length-2;i++){
        temp += expr[i];
    }
    //console.log(temp);
    maxtermP.textContent = "Maxterms: " + temp;
}); 
