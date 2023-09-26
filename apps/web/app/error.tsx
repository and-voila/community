'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="mx-auto my-4 flex max-w-xl flex-col rounded-lg border p-8 md:p-12">
      <h2 className="font-display text-xl">Oops, a minor glitch!</h2>
      <p className="my-2">
        Seems like we hit a minor roadblock. Don&apos;t worry, even the best
        marketing strategies sometimes need a tweak or two. Try a do over?
      </p>
      <button
        className="mx-auto mt-4 flex w-full items-center justify-center rounded-xl bg-brand p-4 font-semibold tracking-wide text-white hover:opacity-90"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
