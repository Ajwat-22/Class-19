function show_result(){
    let oddeven =document.querySelector('#oddeven').value;
    
    if((oddeven % 2) === 0){
        document.querySelector('.result h3'
        ).innerHTML = 'The number is Even';
    }
    else{
        document.querySelector('.result h3').innerHTML = "The number is Odd";
    }
}
