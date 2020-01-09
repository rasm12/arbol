

function isOnlyNumber(evt){
    let charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
    return false;

    return true;
}

let btn = document.getElementById('btn')
btn.addEventListener('click', (e) => {
    let inputValue = document.getElementById('base')
    if(inputValue){
        let impar = (inputValue.value % 2 == 0) ? false : true
        if(!impar) alert('El numero debe ser impar')
        buildThree()
        inputValue.focus()

    }
})


function buildThree(){
    console.log('init scripts...')

    let stringNav = ``;
    let base = document.getElementById('base').value;
    let times = Math.round(base / 2)
    
    let posini = times;
    let max = 1;
    let counter = 0;
    for(let x = 1; x <= times; x++){
        for(let y = 1; y <= base; y++){
            if( y >= posini && counter < max){
                stringNav += "*";
                counter++;
            } else {
                stringNav += " ";
            }
        }
        max += 2;
        counter = 0;
        posini--;
        stringNav += '\n';
    }

    let divs = document.getElementsByTagName('div')
    divs[0].innerHTML = stringNav
    
    //console.log(stringNav)
}


