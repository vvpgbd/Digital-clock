function errordisp(){

       
    let password1 = document.querySelector('#pwd').value
    let passwordformat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/

    let emailId = document.querySelector('#email').value
    let emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if(!emailId.match(emailFormat)){
        document.querySelector('.redflag').innerText = 'This is not valid email id'

    }else if(!password1.match(passwordformat)){
        document.querySelector('.redflag').innerText = 'Enter password accurately '
        
    }else{
        console.log('not matching...')
        document.querySelector('.redflag').innerText = ''
        document.querySelector('.greenflag').innerText = 'Created Successfully'
    }

}

