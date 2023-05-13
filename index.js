//loan.html
document.getElementById('submit').onclick = function(){
    let a = document.getElementById('det').value
    a= Number(a)
    
    let b =document.getElementById('pro').value
    b= Number(b)
    let c= document.getElementById('day').value
    c= Number(c)
   let  d = (a/10000)*(b*100)*c/360
   d = d.toLocaleString('lak',{style: 'currency', currency: 'LAK'});
    document.getElementById('outcome').innerHTML = d +  ' / ເດືອນ'

}
// loan.html
document.getElementById('button').onclick = function(){
    var luts = document.getElementById('choice').value;
    if(luts.value == 'lut'){
       
        let a = document.getElementById('gov').value
        let lut = a * (8  / 100)
       
        document.getElementById('goverment').innerHTML = 'ເງິນທີ່ພະນັກງານລັດຕ້ອງຈ່າຍ : '+ lut /1000 + 'ກີບ'
      
    }
    else{
        let aek =  a * (5.5 / 100)
        let compa = a * (6/100)
        
        let a = document.getElementById('gov').value
        document.getElementById('single').innerHTML =  'ເງິນທີ່ພະນັກງານ(ອກຊ)ຕ້ອງຈ່າຍ : '+ aek /1000 + 'ກີບ'
        document.getElementById('company').innerHTML = 'ເງິນທີ່ບໍລິສັດຕ້ອງຈ່າຍ : '+compa /1000 + 'ກີບ '

    }

}
document.getElementById('submit').onclick = function(){
    let input = document.getElementById('amount').value;
    input = Number(input)
    if(input <=1300000){
        document.getElementById('outcome').innerHTML = '0 ກີບ'
    }
    else if(input <= 5000000){
        document.getElementById('outcome').innerHTML = input * (5/100)
    }
    else{
        document.getElementById('outcome').innerHTML = 'nothing'
    }
    
}
document.getElementById('submit').onclick = function(){
    let process = document.getElementById('weight').value
    let me = document.getElementById('height').value
    let result = document.getElementById('outcome')
  
}
