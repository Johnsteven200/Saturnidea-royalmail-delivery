function handle111792851LXVN(resultElement) {
    let result = {
        sender: 'Melvin Hoon',
        country: 'South korea ',
        receiver: ' Dharani Annadurai',
        date: '30/03/2024',
        location: 'Out for Delivery - Area. Within 24 hours package would get to destined country- pending payment  ₹35,000 Indian Rupee'
    };

    // Display the result
    resultElement.innerHTML = `
        <p>SENDER NAME: ${result.sender}</p>
        <p>SENDER ADDRESS: ${result.country}</p>
        <p>RECIEVERS NAME : ${result.receiver}</p>
        <p>DATE: ${result.date}</p>
                <p><video id="local" 
                src="live.mp4" autoplay muted loop></video>           Live Location: ${result.location}</p>`;

    // Inject the LiveChat script saturnidea001@gmail.com
    const livechatScript = document.createElement('script');
    livechatScript.src ="//code.tidio.co/ucowgqty9hgl8iyve5i3weph0nqpdiep.js" ;
    livechatScript.async = true;
    document.body.appendChild(livechatScript);
}



