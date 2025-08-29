const callHistory = [];
function getTotal(id, value){
    const total = document.getElementById(id).innerText = value;
    return total;
}
function getNumber(id){
     const heartCountNumber = parseInt(document.getElementById(id).innerText);
     return heartCountNumber;
}
function getText(index){
     const texts = document.getElementsByClassName('copy-text');
     return texts[index].innerText;
}
 const heartBtns = document.getElementsByClassName('heart-btn');

  for (let btn of heartBtns) {
    btn.addEventListener('click', function() {
         const heartCount = getNumber('heartCount');

          const totalHeart = heartCount + 1;
          getTotal('heartCount', totalHeart);


    });
  }


 document.getElementById('emergency-call').addEventListener('click', function(){
    const coinCount = getNumber('coinCount');

    const totalCoin = coinCount - 20;
    
    if(coinCount <= 0 || coinCount < 20){
        alert("You don't have sufficient 'Coin'");
        return;
    }
    else{
        alert('📞 Calling National Emergency 999...')
    }
    
        getTotal('coinCount', totalCoin);

        const data = {
            name: 'National Emergency',
            number: '999',
            date: new Date().toLocaleTimeString()

        }
        callHistory.push(data);
})

  document.getElementById('call-police').addEventListener('click', function(){
    const coinCount = getNumber('coinCount');
    const totalCoin = coinCount - 20;
    if(coinCount <= 0 || coinCount < 20){
        alert("You don't have sufficient 'Coin'");
        return;
    }
    else{
        alert('📞 Calling Police Helpline 999...')
    }
        getTotal('coinCount', totalCoin);
        const data = {
            name: 'police Helpline',
            number: '999',
            date: new Date().toLocaleTimeString()

        }
        callHistory.push(data);

})

document.getElementById('fireService-call').addEventListener('click', function(){
    const coinCount = getNumber('coinCount');
    const totalCoin = coinCount - 20;
    if(coinCount <= 0 || coinCount < 20){
        alert("You don't have sufficient 'Coin'");
        return;
    }
    else{
        alert('📞...  Calling Fire Service 999')
    }
        getTotal('coinCount', totalCoin);
        const data = {
            name: 'Fire Service',
            number: '999',
            date: new Date().toLocaleTimeString()

        }
        callHistory.push(data);
        
})

 document.getElementById('call-ambulance').addEventListener('click', function(){
    const coinCount = getNumber('coinCount');
    const totalCoin = coinCount - 20;
    if(coinCount <= 0 || coinCount < 20){
        alert("You don't have sufficient 'Coin'");
        return;
    }
    else{
        alert('📞...  Calling Ambulance Service 1994-999999')
    }
        getTotal('coinCount', totalCoin);
        const data = {
            name: 'Ambulance Service',
            number: '1994-999999',
            date: new Date().toLocaleTimeString()

        }
        callHistory.push(data);
        
})

 document.getElementById('helpline-call').addEventListener('click', function(){
    const coinCount = getNumber('coinCount');
    const totalCoin = coinCount - 20;
    if(coinCount <= 0 || coinCount < 20){
        alert("You don't have sufficient 'Coin'");
        return;
    }
    else{
        alert("📞...  Calling Women and Child Helpline 109")
    }
        getTotal('coinCount', totalCoin);
        const data = {
            name: 'Women and Child Helpline',
            number: '109',
            date: new Date().toLocaleTimeString()

        }
        callHistory.push(data);
        
})

 document.getElementById('antiCor-call').addEventListener('click', function(){
    const coinCount = getNumber('coinCount');
    const totalCoin = coinCount - 20;
    if(coinCount <= 0 || coinCount < 20){
        alert("You don't have sufficient 'Coin'");
        return;
    }
    else{
        alert('📞...  Calling Anti-Corruption Helpline 106')
    }
        getTotal('coinCount', totalCoin);
        const data = {
            name: 'Anti-Corruption Helpline',
            number: '106',
            date: new Date().toLocaleTimeString()

        }
        callHistory.push(data);
        
})

 document.getElementById('electricity-cal').addEventListener('click', function(){
    const coinCount = getNumber('coinCount');
    const totalCoin = coinCount - 20;
    if(coinCount <= 0 || coinCount < 20){
        alert("You don't have sufficient 'Coin'");
        return;
    }
    else{
        alert('📞...  Calling Electricity Helpline 16216')
    }
        getTotal('coinCount', totalCoin);
        const data = {
            name: 'Electricity Helpline',
            number: '16216',
            date: new Date().toLocaleTimeString()

        }
        callHistory.push(data);
        
})

 document.getElementById('brac-call').addEventListener('click', function(){
    const coinCount = getNumber('coinCount');
    const totalCoin = coinCount - 20;
    if(coinCount <= 0 || coinCount < 20){
        alert("You don't have sufficient 'Coin'");
        return;
    }
    else{
        alert('📞...  Calling BRAC Helpline 16445')
    }
        getTotal('coinCount', totalCoin);
        const data = {
            name: 'BRAC Helpline',
            number: '16445',
            date: new Date().toLocaleTimeString()

        }
        callHistory.push(data);
        
})

 document.getElementById('train-call').addEventListener('click', function(){
    const coinCount = getNumber('coinCount');
    const totalCoin = coinCount - 20;
    if(coinCount <= 0 || coinCount < 20){
        alert("You don't have sufficient 'Coin'");
        return;
    }
    else{
        alert('📞...  Calling Bangladesh Railway Helpline 163')
    }
        getTotal('coinCount', totalCoin);
        const data = {
            name: 'Bangladesh Railway Helpline',
            number: '163',
            date: new Date().toLocaleTimeString()

        }
        callHistory.push(data);
        
})

const btns = document.querySelectorAll('.copy-btn');

for(const btn of btns){
    btn.addEventListener('click', async function () {
        const index = btn.getAttribute('data-copy-target');
        const text = getText(index);

        await navigator.clipboard.writeText(text);
        alert('Copied: ' + text)
        
    })
}
 const copyBtns = document.getElementsByClassName('copy-btn');//heart 

  for (let btn of copyBtns) {
    btn.addEventListener('click', function() {
         const  copyCount = getNumber('copyCount');
          const totalCopy =  copyCount + 1;
          getTotal('copyCount', totalCopy);
    });
  }

