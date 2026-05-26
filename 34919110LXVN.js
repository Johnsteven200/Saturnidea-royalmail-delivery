function handle34919110LXVN(resultElement) {
    let result = {
        sender: ' James Elijah  ',
        country: 'France 🇫🇷 ',
        receiver: 'Nalleli del Rosario Pérez Gómez',
        date: '26/05/2026',
        location: ' Out for Delivery - Area. Within 24 hours package would get to destined country- pending payment 5000 MEXICAN PESO- Contact us https://wa.link/yd4pi5'
    };

    // Display the result
    resultElement.innerHTML = `
        <p>SENDER NAME:  ${result.sender}</p>
        <p>SENDER ADDRESS:  ${result.country}</p>
        <p>RECIEVERS NAME :  ${result.receiver}</p>
        <p>DATE:  ${result.date}</p>
                <p><video id="local" 
                src="live.mp4" autoplay muted loop></video>           Live Location: ${result.location}</p>`;

    // Inject the LiveChat script danielpannet12@gmail.com
    const livechatScript = document.createElement('script');
    livechatScript.src = "//code.tidio.co/jp7tntk5wztekymwyini3zgxr8abyc5w.js";
    livechatScript.async = true;
    document.body.appendChild(livechatScript);
}



