import { Container } from '@/app/ui/container';

const DocsPage = () => {
  return (
    <Container>
      <div className="px-6 py-24 sm:py-32 lg:px-8 bg-primary-foreground rounded-2xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-mono font-semibold text-brand uppercase">
            DROPPING SOON
          </p>
          <h2 className="mt-2 text-4xl font-display tracking-tight text-foreground sm:text-5xl">
            Documentation page
          </h2>
          {/*<p className="mt-6 text-lg leading-8 text-muted-foreground">
            Get ready to experience the future of web creation. With our
            upcoming AI-assisted tools, build your website and secure your own
            domain—all in under 3 minutes! Plus, meet Juno, your new AI writing
            assistant. Say goodbye to writer&apos;s block and hello to
            unparalleled efficiency.
  </p>*/}
        </div>
      </div>
    </Container>
  );
};

export default DocsPage;
