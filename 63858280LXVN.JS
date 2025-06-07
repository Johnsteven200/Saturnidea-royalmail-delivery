
import Intercom from '@intercom/messenger-js-sdk';

Intercom({
  app_id: 'i5pvvojp',
  user_id: user.id, // IMPORTANT: Replace "user.id" with the variable you use to capture the user's ID
  name: user.name, // IMPORTANT: Replace "user.name" with the variable you use to capture the user's name
  email: user.email, // IMPORTANT: Replace "user.email" with the variable you use to capture the user's email
  created_at: user.createdAt, // IMPORTANT: Replace "user.createdAt" with the variable you use to capture the user's sign-up date in a Unix timestamp (in seconds) e.g. 1704067200
});

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
 
    

 }
 