import { FadeIn, FadeInStagger } from '@/components/fade-in';
import Highlighter, { HighlighterItem } from '@/components/highlighter';
import AdobeLogo from '@/components/roasts/clients/adobe-logo';
import AirbnbLogo from '@/components/roasts/clients/airbnb-logo';
import AmazonLogo from '@/components/roasts/clients/amazon-logo';
import AnimotoLogo from '@/components/roasts/clients/animoto-logo';
import BetterHomesLogo from '@/components/roasts/clients/better-homes-logo';
import CanvaLogo from '@/components/roasts/clients/canva-logo';
import FacebookLogo from '@/components/roasts/clients/facebook-logo';
import HootsuiteLogo from '@/components/roasts/clients/hootsuite-logo';
import MotorolaLogo from '@/components/roasts/clients/motorola-logo';
import SectionIntro from '@/components/section-intro';

const clientLogos = [
  { Logo: AdobeLogo, ariaLabel: 'Adobe' },
  { Logo: AirbnbLogo, ariaLabel: 'Airbnb' },
  { Logo: AmazonLogo, ariaLabel: 'Amazon' },
  { Logo: AnimotoLogo, ariaLabel: 'Animoto' },
  { Logo: BetterHomesLogo, ariaLabel: 'Better Homes' },
  { Logo: CanvaLogo, ariaLabel: 'Canva' },
  { Logo: FacebookLogo, ariaLabel: 'Facebook' },
  { Logo: HootsuiteLogo, ariaLabel: 'Hootsuite' },
  { Logo: MotorolaLogo, ariaLabel: 'Motorola' },
];

const LandingClients = () => {
  return (
    <section className="py-24 sm:py-32">
      <SectionIntro
        centered={true}
        eyebrow="Battle-tested roasts"
        heading="Grilled by the best"
        level="h2"
        description="We've been roasted harder than chestnuts on an open fire by industry heavyweights. Now we're passing our battle-tested
            insights to you. Get marketing advice that can take the heat."
      />
      <Highlighter className="group mt-10 grid grid-cols-1 gap-2 overflow-hidden sm:mx-0 md:grid-cols-3">
        {clientLogos.map(({ Logo, ariaLabel }, index) => (
          <FadeInStagger key={index}>
            <FadeIn>
              <HighlighterItem>
                <div className="relative z-20 overflow-hidden rounded-[inherit] bg-primary-foreground p-8 md:p-10">
                  <Logo
                    className="mx-auto"
                    aria-label={`A logo for ${ariaLabel}, a former client of Rebekah Radice and or the BRIL.LA team.`}
                  />
                </div>
              </HighlighterItem>
            </FadeIn>
          </FadeInStagger>
        ))}
      </Highlighter>
    </section>
  );
};

export default LandingClients;
