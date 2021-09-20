var isPositiveinteger = (value, onSuccess, onError)=>{
(value >0) ? onSuccess = new function(){console.log('luku on Positiivinen')} : onError =new function(){console.log('luku ei ole positiivinen')}}

isPositiveinteger(45)
