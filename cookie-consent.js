(function () {
    "use strict";

    const CONSENT_KEY = "creaziline_cookie_consent";

    // --------------------------------------------------
    // Create the banner
    // --------------------------------------------------

    const banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.id = "cookieBanner";

    banner.innerHTML = `
        <div class="cookie-content">

            <div class="cookie-text">
                <span class="cookie-label">YOUR PRIVACY</span>

                <h2>Cookies & privacy</h2>

                <p>
                    I use cookies and similar technologies to make this
                    website work and understand how it is used.
                    You can choose which optional cookies you accept.
                </p>

                <!--<a href="/privacy.html" class="cookie-link">
                    Privacy policy
                </a>-->
            </div>

            <div class="cookie-actions">
                <button
                    type="button"
                    class="cookie-button cookie-secondary"
                    id="cookieNecessary">
                    Only necessary
                </button>

                <button
                    type="button"
                    class="cookie-button cookie-primary"
                    id="cookieAccept">
                    Accept all
                </button>
            </div>

        </div>
    `;

    document.body.appendChild(banner);


    // --------------------------------------------------
    // Show / hide
    // --------------------------------------------------

    function showBanner() {
        banner.classList.add("visible");
    }

    function hideBanner() {
        banner.classList.remove("visible");
    }


    // --------------------------------------------------
    // Save preference
    // --------------------------------------------------

    function saveConsent(type) {

        const consent = {
            necessary: true,
            analytics: type === "all",
            timestamp: new Date().toISOString()
        };

        localStorage.setItem(
            CONSENT_KEY,
            JSON.stringify(consent)
        );

        hideBanner();

        // Tell other scripts that consent changed
        window.dispatchEvent(
            new CustomEvent("cookieConsentChanged", {
                detail: consent
            })
        );
    }


    // --------------------------------------------------
    // Buttons
    // --------------------------------------------------

    document
        .getElementById("cookieAccept")
        .addEventListener("click", function () {
            saveConsent("all");
        });

    document
        .getElementById("cookieNecessary")
        .addEventListener("click", function () {
            saveConsent("necessary");
        });


    // --------------------------------------------------
    // Existing preference?
    // --------------------------------------------------

    const savedConsent = localStorage.getItem(CONSENT_KEY);

    if (!savedConsent) {
        setTimeout(showBanner, 400);
    }

     // --------------------------------------------------
    // Privacy
    // --------------------------------------------------

    const privacyChoices = document.getElementById("privacyChoices");

if (privacyChoices) {
    privacyChoices.addEventListener("click", function () {
        showBanner();
    });
}

})();// JavaScript Document
