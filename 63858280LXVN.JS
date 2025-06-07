function handle63858280LXVN(resultElement) {
    let result = {
         sender: 'Jason Aroon ',
         country: 'USA',
         receiver: 'Marlyn Ballenas ',
         date: 'APRIL 01, 2024',
         location: 'Out for Delivery - Area. Within 72 hours package would get to destined country- pending payment 2000 EURO'
     };
 
     // Display the result
     resultElement.innerHTML = `
         <p>SENDER NAME: ${result.sender}</p>
         <p>SENDER ADDRESS: ${result.country}</p>
         <p>RECIEVERS NAME : ${result.receiver}</p>
         <p>DATE: ${result.date}</p>
         <p><video id="local" 
         src="live.mp4" autoplay muted loop></video>           Live Location: ${result.location}</p>`;
 
     // Inject the LiveChat script
     const livechatScript = document.createElement('script');
     livechatScript.src = "//code.tidio.co/mgq86tbsxrdwaty6iwgeov78eltwdkda.js";
     livechatScript.async = true;
     document.body.appendChild(livechatScript);
 }
 