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

  let copyCount = 0;
const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const index = btn.getAttribute("data-copy-target");
    const number = getText(index);

    navigator.clipboard.writeText(number);
    copyCount++;
    document.getElementById("copyCount").innerText = copyCount;

    alert("Hotline number " + number + " copied!");
  });
});

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
            name: 'National Emergency Number',
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
            name: 'Police Helpline Number',
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
            name: 'Fire Service Number',
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

 document.getElementById('electricity-call').addEventListener('click', function(){
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
const callBtns = document.getElementsByClassName('history-btn');

for(const btn of callBtns){
    btn.addEventListener('click', function () {
      const historyContainer = document.getElementById('history-container');
     
      historyContainer.innerHTML = '';

    for(const data of callHistory){
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="flex justify-between items-center bg-[#FAFAFA] mb-[8px] mt-[16px] p-4 rounded-[8px]">
                <div>
                    <h3 class="font-bold">${data.name}</h3>
                    <p>${data.number}</p>
                </div>
                <p class="text-[#111111ff]">${data.date}</p>
             </div>
        `;

        historyContainer.appendChild(div);
    }
    
})
}

document.getElementById("clr-history-btn").addEventListener("click", function () {
  const clearHistory= document.getElementById('history-container');
    clearHistory.innerHTML = "";
  callHistory.length = 0;
});
