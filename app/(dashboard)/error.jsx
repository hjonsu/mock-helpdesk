"use client";

export default function error({ error, reset }) {
  return (
    <main className="text-center">
      <h2 className="text-5xl">There was an error:</h2>
      <p className="text-2xl">{error.message}</p>
      <button onClick={reset} className="btn-primary mx-auto my-4">
        Retry?
      </button>
    </main>
  );
}
