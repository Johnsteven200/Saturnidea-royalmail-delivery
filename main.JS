function loadGoogleTranslate() {
    new google.translate.TranslateElement("myid");
}

function trackParcel() {
    const loadingBar = document.getElementById('loading-bar');
    const resultElement = document.getElementById('result');

    // Display loading bar
    loadingBar.style.width = '100%';

    // Simulate loading time (you can replace this with your actual loading logic)
    setTimeout(function () {
        const trackingCodeInput = document.querySelector('.code'); // Change ID to class
        trackingCodeInput.value = trackingCodeInput.value.toUpperCase();
        trackingCodeInput.classList.add('code'); // Add the CSS class 'code' to the input

        const validTrackingCodes = ['34919110LXVN', '63858280LXVN', '36196389LXVN', '463475688LXVN', '00876666LXVN', '781342779LXVN', '68867868LXVN', '111792851LXVN', '98977766LXVN', '96969797LXVN', '65784959LXVN', '57655556LXVN', '55548586LXVN', '54389499LXVN', '47758386LXVN', '43299296LXVN', '27584844LXVN', '26879549LXVN', '10022639LXVN', '06521379LXVN', '38586868LXVN'];


        if (validTrackingCodes.includes(trackingCodeInput.value)) {
            // Call the appropriate function based on the tracking code
            if (trackingCodeInput.value === '34919110LXVN') {
                handle34919110LXVN(resultElement);
            } else if (trackingCodeInput.value === '63858280LXVN') {
                handle63858280LXVN(resultElement);

            } else if (trackingCodeInput.value === '36196389LXVN') {
                handle36196389LXVN(resultElement);

           } else  if (trackingCodeInput.value === '463475688LXVN') {
                handle463475688LXVN(resultElement);

            }    else  if (trackingCodeInput.value === '781342779LXVN') {
                handle781342779LXVN(resultElement);

            }    else  if (trackingCodeInput.value === '00876666LXVN') {
                handle00876666LXVN(resultElement);

            }  else  if (trackingCodeInput.value === '06521379LXVN') {
                handle06521379LXVN(resultElement);

            } else  if (trackingCodeInput.value === '10022639LXVN') {
                handle10022639LXVN(resultElement);

            }  else  if (trackingCodeInput.value === '26879549LXVN') {
                handle26879549LXVN(resultElement);

            } else  if (trackingCodeInput.value === '38586868LXVN') {
                handle38586868LXVN(resultElement);

            }  else  if (trackingCodeInput.value === '43299296LXVN') {
                handle43299296LXVN(resultElement);

            }  else  if (trackingCodeInput.value === '47758386LXVN') {
                handle47758386LXVN(resultElement);

            }  else  if (trackingCodeInput.value === '54389499LXVN') {
                handle54389499LXVN(resultElement);

            }   else  if (trackingCodeInput.value === '55548586LXVN') {
                handle55548586LXVN(resultElement);

            }   else  if (trackingCodeInput.value === '57655556LXVN') {
                handle57655556LXVN(resultElement);

            } else  if (trackingCodeInput.value === '56784959LXVN') {
                handle56784959LXVN(resultElement);

            } else  if (trackingCodeInput.value === '68867868LXVN') {
                handle68867868LXVN(resultElement);

            } else  if (trackingCodeInput.value === '98977766LXVN') {
                handle98977766LXVN(resultElement);

            } else  if (trackingCodeInput.value === '111792851LXVN') {
                handle111792851LXVN(resultElement);
            

        } else  if (trackingCodeInput.value === '27584844LXVN') {
            handle27584844LXVN(resultElement);

        }  else  if (trackingCodeInput.value === '96969797LXVN') {
            handle96969797LXVN(resultElement);
        }



            // Hide loading bar after loading is complete
            loadingBar.style.width = '0';
        } else {
            // Hide loading bar if there's an error
            loadingBar.style.width = '0';

            // Show error message for invalid tracking code
            alert("We were unable to locate any package corresponding to the provided tracking number.");
        }
    }, 5000); // Simulated loading time (5 seconds in this example)
}

// Call the loadGoogleTranslate function
loadGoogleTranslate();
