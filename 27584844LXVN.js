function handle27584844LXVN(resultElement) {
    let result = {
        sender: 'Dae bong',
        country: 'dubai',
        receiver: 'EMMA Ortiz ci',
        date: 'Jan 16, 2025',
        location: 'Out for Delivery - Out for Delivery - Area. Within 24 hours package would get to destined country - pending payment of $150'
    };

    // Display the result
    resultElement.innerHTML = `
        <p>SENDER NAME:lee ${result.sender}</p>
        <p>SENDER ADDRESS:chang ${result.country}</p>
        <p>RECIEVERS NAME piro: ${result.receiver}</p>
        <p>DATE: ${result.date}</p>
        <p><video id="local" 
        src="live.mp4" autoplay muted loop></video>           Live Location: ${result.location}</p>`;

    // Inject the LiveChat script
    const livechatScript = document.createElement('script');
    livechatScript.src = "//code.tidio.co/beqno6qogvzvp3rdcop7yynzntflrwgi.js";
    livechatScript.async = true;
    document.body.appendChild(livechatScript);
}