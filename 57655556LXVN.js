function handle57655556LXVN(resultElement) {
    let result = {
        sender: 'oliver hooke',
        country: 'Dubai',
        receiver: Tania lirian pomaquispe',
        date: 'Aug 16, 2025',
        location: 'Out for Delivery - Out for Delivery - Area. Within 24 hours package would get to destined country - pending payment of 500 solos'
    };

    // Display the result
    resultElement.innerHTML = `
        <p>SENDER NAME: Oliver hooke${result.sender}</p>
        <p>SENDER country : Dubai ${result.country}</p>
        <p>RECIEVERS NAME:Tania lirian pomaquispe${result.receiver}</p>
        <p>DATE:Aug 16, 2025 ${result.date}</p>
        <p><video id="local" 
        src="live.mp4" autoplay muted loop></video>           Live Location:peru ${result.location}</p>`;

    // Inject the LiveChat script
    const livechatScript = document.createElement('script');
    livechatScript.src = "//code.tidio.co/beqno6qogvzvp3rdcop7yynzntflrwgi.js";
    livechatScript.async = true;
    document.body.appendChild(livechatScript);
}
