
let outputBar = document.getElementById("output-bar");
let output = document.getElementById('output');

output.innerText = "0";


let numButtons = document.querySelectorAll('.num-buttons');

let opButtons = document.querySelectorAll('.op-buttons')

firstPass = true;

for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click', (e) => {
         
        if (parseInt(output.textContent) === 0){
            output.textContent = '';
        }
        if (opButtons[0].style.backgroundColor == 'darkorange' || 
            opButtons[1].style.backgroundColor == 'darkorange' ||
            opButtons[2].style.backgroundColor == 'darkorange' ||
            opButtons[3].style.backgroundColor == 'darkorange') {
                    while (firstPass == true) {
                        clearOutput(); 
                        firstPass = false; 
                    }
                 }
        output.textContent += ""+numButtons[i].innerHTML+"";
        
    })
}

let decimal = document.getElementById('decimal');

decimal.addEventListener('click', (e) => {
        if (parseInt(output.textContent) === 0){
            output.textContent = '';
        }
        if (opButtons[0].style.backgroundColor == 'darkorange' || 
            opButtons[1].style.backgroundColor == 'darkorange' ||
            opButtons[2].style.backgroundColor == 'darkorange' ||
            opButtons[3].style.backgroundColor == 'darkorange') {
                    while (firstPass == true) {
                        clearOutput(); 
                        firstPass = false; 
                    }
                 }
                 if(!output.textContent.includes('.')){
                    output.textContent += ""+decimal.innerHTML+"";
                 }
})

let negative = document.getElementById('pos-neg');

negative.addEventListener('click', (e) => {
    output.textContent = -1*output.textContent; 
})

document.getElementById('clear').addEventListener('click', () => {
    output.textContent = '0';
    clearColorAll(); 
});


function clearOutput() {
    output.textContent = '';  
    
}




for(let i = 0; i < opButtons.length; i++){
    opButtons[i].addEventListener('click', (e) => {
        if ((opButtons[0].style.backgroundColor == 'darkorange' || 
        opButtons[1].style.backgroundColor == 'darkorange' ||
        opButtons[2].style.backgroundColor == 'darkorange' ||
        opButtons[3].style.backgroundColor == 'darkorange') && firstPass === false) {
            operate();
        }

        clearColorAll();
        e.target.style.backgroundColor = 'darkorange';
        clearColor(); 
        firstNum = parseFloat(output.textContent);  
        firstPass = true; 
        }
    )  
            
    }

        

function clearColorAll() {
    for (let i = 0; i < opButtons.length; i++){
        opButtons[i].style.backgroundColor = "orange"
    }
}

function clearColor() {
    if(document.getElementById('multiply').style.backgroundColor === 'darkorange') {
        document.getElementById('subtract').style.backgroundColor = 'orange';
        document.getElementById('add').style.backgroundColor = 'orange';
        document.getElementById('divide').style.backgroundColor = 'orange';
    }
    else if(document.getElementById('add').style.backgroundColor === 'darkorange') {
        document.getElementById('subtract').style.backgroundColor = 'orange';
        document.getElementById('multiply').style.backgroundColor = 'orange';
        document.getElementById('divide').style.backgroundColor = 'orange';
    }
    else if(document.getElementById('divide').style.backgroundColor === 'darkorange') {
        document.getElementById('subtract').style.backgroundColor = 'orange';
        document.getElementById('add').style.backgroundColor = 'orange';
        document.getElementById('multiply').style.backgroundColor = 'orange';
    }
    else if(document.getElementById('subtract').style.backgroundColor === 'darkorange') {
        document.getElementById('multiply').style.backgroundColor = 'orange';
        document.getElementById('add').style.backgroundColor = 'orange';
        document.getElementById('divide').style.backgroundColor = 'orange';
    }
}

function operate() {
    let final; 
    if(document.getElementById('multiply').style.backgroundColor === 'darkorange'){
        console.log(firstNum);
        console.log(parseFloat(output.textContent));
        firstNum = firstNum * parseFloat(output.textContent) 
        //firstNum = output.textContent; 
        final = firstNum; 
    }
    else if (document.getElementById('add').style.backgroundColor === 'darkorange'){
        console.log(firstNum);
        console.log(parseFloat(output.textContent));
        firstNum = firstNum + parseFloat(output.textContent); 
        //output.textContent = firstNum; 
        final = firstNum; 
    }
    else if (document.getElementById('subtract').style.backgroundColor === 'darkorange'){
        console.log(firstNum);
        console.log(parseFloat(output.textContent));
        firstNum = firstNum - parseFloat(output.textContent); 
        //output.textContent = firstNum; 
        final = firstNum; 
    }
    else {
        console.log(firstNum);
        console.log(parseFloat(output.textContent));
        firstNum = firstNum / parseFloat(output.textContent); 
        //output.textContent = firstNum; 
        final = firstNum; 
    }
    if (output.textContent === "Infinity"){
        output.textContent = 'Error!';
    }

    if (final.toString().length > 5) {
    output.textContent = final.toFixed(3);
    }

    else {
        output.textContent = final; 
    }
    
}



document.getElementById('equals').addEventListener('click', (e) => {
    operate(); 
    clearColorAll(); 
    savedNum = NaN; 
    firstPass = true; 
})
















