function handle34919110LXVN(resultElement) {
    let result = {
        sender: 'Arezki Ben ',
        country: 'United Kindom 🇬🇧',
        receiver: 'Gloria gevarra',
        date: 'Oct 31, 2025',
        location: ' Philipine On transit - waiting for payment to deliver package to home address- pending payment 5000 Peso'
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



