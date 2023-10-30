import { Container } from '@/app/ui/container';

const SitesPage = () => {
  return (
    <Container>
      <div className="px-6 py-24 sm:py-32 lg:px-8 bg-primary-foreground rounded-2xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-mono font-semibold text-brand uppercase">
            ALMOST HERE
          </p>
          <h2 className="mt-2 text-4xl font-display tracking-tight text-foreground sm:text-5xl">
            Unlimited websites unlocked
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            The future of multi-site creation is at your fingertips. Our
            upcoming AI-assisted tools will let you roll out as many websites as
            you want, each in under 3 minutes. Plus, say hello to Juno, your
            AI-powered writing assistant. Break the chains of writer&apos;s
            block and let your creativity flow.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default SitesPage;
