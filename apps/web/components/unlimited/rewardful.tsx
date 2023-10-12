import Script from 'next/script';

export default function Rewardful() {
  return (
    <>
      <Script id="rewardful-custom-script">
        {`
          document.addEventListener('DOMContentLoaded', function(){
            setTimeout(function() {
              if (typeof Rewardful !== 'undefined') {
                document.querySelectorAll('a[href^="https://pay.bril.la/"]').forEach(function(link){
                  const oldBuyUrl = link.getAttribute("href");
                  const referralId = Rewardful.referral;
                  const newBuyUrl = oldBuyUrl + "?client_reference_id=" + referralId;
                  link.setAttribute("href", newBuyUrl);
                });
              }
            }, 2000);
          });
        `}
      </Script>
    </>
  );
}
