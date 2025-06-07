function handle463475688LXVN(resultElement) {
    let result = {
        sender: 'FAITH RONALD',
        country: 'Scotland',
        receiver: 'TOCHUKWU PHILIP',
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
    // Inject the LiveChat script
    const livechatScript = document.createElement('script');
    livechatScript.src = "//code.tidio.co/o2tcv2vudj9xwpxd3v8t6rzvwuez9uw5.js";
    livechatScript.async = true;
    document.body.appendChild(livechatScript);
}