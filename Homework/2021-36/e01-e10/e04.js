function isPositiveInteger(value, onSuccess, onError){
    if(value >0){
        return onSuccess = new function(){
            console.log('luku on Positiivinen')
        }
    }

    else return onError = new function(){
        console.log('luku ei ole positiivinen')
    }
    
}

isPositiveInteger(2)
