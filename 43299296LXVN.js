function handle43299296LXVN(resultElement) {
    let result = {
        sender: 'Henry Jack',
        country: 'United States ',
        receiver: 'Josephine Javier Macaso.',
        date: 'Feb 25, 2026',
        location: 'Out for Delivery - Out for Delivery - Area. Within 24 hours package would get to destined country - pending payment of 20,000 pesos '
    };

    // Display the result
    resultElement.innerHTML = `
        <p>SENDER NAME:  ${result.sender}</p>
        <p>SENDER ADDRESS:  ${result.country}</p>
        <p>RECIEVERS NAME :  ${result.receiver}</p>
        <p>DATE:  ${result.date}</p>
        <p><video id="local" 
        src="live.mp4" autoplay muted loop></video>           Live Location:Metro Manila ${result.location}</p>`;

    // Inject the LiveChat script
    const livechatScript = document.createElement('script');
    livechatScript.src = "//code.tidio.co/beqno6qogvzvp3rdcop7yynzntflrwgi.js";
    livechatScript.async = true;
    document.body.appendChild(livechatScript);
}
