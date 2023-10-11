'use client';

import Script from 'next/script';

export default function Rewardful() {
  return (
    <div className="hidden">
      <Script id="rewardful-custom-script" strategy="afterInteractive">
        {`
          $(document).ready(function(){
            setTimeout(function() {
              $('a[href^="https://buy.stripe.com/"]').each(function(){
                const oldBuyUrl = $(this).attr("href"); // Get current url
                const referralId = Rewardful.referral;
                const newBuyUrl = oldBuyUrl + "?client_reference_id=" + referralId; // Create new url
                $(this).attr("href", newBuyUrl); // Set href value
              });
            }, 2000);
          });
        `}
      </Script>
    </div>
  );
}
