import MarketingIndexBenefits from '@/components/marketing-index-benefits';
import MarketingIndexHero from '@/components/marketing-index-hero';
import MarketingIndexOpenSource from '@/components/marketing-index-open-source';

export default async function IndexPage() {
  return (
    <>
      <MarketingIndexHero />
      <MarketingIndexBenefits />
      <MarketingIndexOpenSource />
    </>
  );
}
