import Link from "next/link";
import StarryBackground from "@/components/StarryBackground";

export default function StoriesPage() {
  return (
    <>
      <StarryBackground />

      <main className="relative mx-auto w-full max-w-4xl px-6 py-24">
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
              Not everything worth remembering made it into a photograph.
            </p>

            <p className="mt-4 max-w-xl text-base text-muted-foreground/70">
              Some moments only make sense when you look back at everything
              that happened along the way.
            </p>
          </div>
        </section>

        {/* FIRST STORY */}
        <section className="min-h-screen flex items-center">
          <div className="w-full">
          
            {/* CHAPTER MARKER */}
            <p className="text-sm font-medium tracking-[0.2em] text-muted-foreground">
              01 — SOMEWHERE FAR FROM HOME
            </p>
          
            {/* INTENTIONAL SPACE */}
            <div className="h-72 sm:h-80" />
          
            {/* STORY CARD */}
            <Link
              href="/stories/Travel/Hong-Kong"
              className="group block"
            >
              <div className="rounded-3xl border bg-background/60 p-8 backdrop-blur-md transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-lg sm:p-10">
          
                <p className="text-sm text-muted-foreground">
                  January 2026 · 26 min read
                </p>
          
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  🇭🇰 Hong Kong & Macau
                </h2>
          
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  My first international conference. Three days, two countries,
                  one research paper, and far more memories than I expected.
                </p>
          
                <p className="mt-8 text-sm font-medium">
                  Read the story{" "}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </p>
          
              </div>
            </Link>
          
          </div>
        </section>
        {/* MORE TO COME */}
        <section className="min-h-[60vh] flex items-center justify-center">
          <p className="text-center text-lg text-muted-foreground">
            More stories are waiting to be written...
          </p>
        </section>
      </main>
    </>
  );
}