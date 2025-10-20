
function append_val(x){
    document.getElementById("out").value += x; 
}


function clear_val(){
    document.getElementById("out").value = "";
}


function calculate(){
    try {
        let x = document.getElementById("out").value;
        let y = eval(x);  
        document.getElementById("out").value = y; 
    } catch(err) {
        document.getElementById("out").value = "Error"; 
    }
}