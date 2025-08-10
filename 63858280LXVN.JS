function handle63878280LXVN(resultElement) {
    let result = {  
        
        
Sender details 

    
         Shipper Name:phong chang
        
         Phone Number:+66037373737
        
         country:    Thailand 
        
         address:c/o Henry Roth50 Oakland Ave,#206A City, Florida, 32104United States of America
        
 Receiver details         
        
         Receiver Name: mary jane
        
         phone number : +528337494833
        
         country:      Mexico 
        
         address:• Super Manzana 3 - 403Puerto Juarez77520 CANCUN, Q. ROO MEXICO

         Shipment date:August 09, 2025,
        
         arrived date:August  10 2025
         
         clearance fee:Out for Delivery - Area. Within 24 hours pending payment 2000 EURO'
     };  
         
        
    location: Santiago de Querétaro 
 
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
 