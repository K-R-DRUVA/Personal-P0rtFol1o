import Link from "next/link";

export default function StoriesPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-24">

      {/* INTRO */}
      <section className="min-h-screen flex items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            Stories
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-7xl">
            A collection of moments.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Some things are easier to understand when you look back at
            everything that happened along the way.
          </p>
        </div>
      </section>

      {/* HONG KONG */}
      <section className="min-h-screen flex items-center">
        <Link
          href="/stories/Travel/Hong-Kong"
          className="group block w-full"
        >
          <div className="rounded-3xl border bg-background/70 p-8 backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
            <p className="text-sm text-muted-foreground">
              January 2026
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              🇭🇰 Hong Kong & Macau
            </h2>

            <p className="mt-4 max-w-2xl text-muted-foreground">
              My first international conference. Three days, two countries,
              one research paper, and far more memories than I expected.
            </p>

            <p className="mt-6 text-sm font-medium">
              Read the story →
            </p>
          </div>
        </Link>
      </section>

      {/* MORE TO COME */}
      <section className="min-h-[60vh] flex items-center justify-center">
        <p className="text-center text-xl text-muted-foreground">
          More stories are waiting to be written...
        </p>
      </section>

    </main>
  );
}