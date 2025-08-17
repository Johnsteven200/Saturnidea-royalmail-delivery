function handle34919110LXVN(resultElement) {
    let result = {
        sender: 'oliver hooke',
        country: 'Dubai',
        receiver: 'Tania lirian',
        date: 'Aug 16, 2025',
        location: 'On transit - waiting for payment to deliver package to home address- pending payment 500 sol'
    };

    // Display the result
    resultElement.innerHTML = `
        <p>SENDER NAME:  ${result.sender}</p>
        <p>SENDER ADDRESS:  ${result.country}</p>
        <p>RECIEVERS NAME :  ${result.receiver}</p>
        <p>DATE:  ${result.date}</p>
                <p><video id="local" 
                src="live.mp4" autoplay muted loop></video>           Live Location:Mexico ${result.location}</p>`;

    // Inject the LiveChat script danielpannet12@gmail.com
    const livechatScript = document.createElement('script');
    livechatScript.src = "//code.tidio.co/db9qna6kduweptrewltxrvcsgs5osquu.js";
    livechatScript.async = true;
    document.body.appendChild(livechatScript);
}



