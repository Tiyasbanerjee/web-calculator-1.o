

function append_oppo(x){
    let val = document.getElementById("out").value; 
    if (val.length > 0 && !isNaN(val[val.length - 1])) {
        document.getElementById("out").value += x; 
    }  
    }

function append_num(x){
    document.getElementById("out").value += x; 
}



function clear_val(){
    document.getElementById("out").value = "";
}


function calculate(){
    let val = document.getElementById("out").value;
    try {     
        let y = eval(val);  
        if(y != undefined){
            document.getElementById("out").value = y;
        }else{
            document.getElementById("out").value = "";
        }
    } catch(err) {
        document.getElementById("out").value = ""; 
    }
}