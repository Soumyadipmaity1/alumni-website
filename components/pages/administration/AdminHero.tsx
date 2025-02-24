import ShimmerButton from "@/components/ui/shimmer-button"

export default function AdminHero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-grid-slate-200/60 dark:bg-grid-slate-800/60 bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              University Administration
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
              Empowering education through visionary leadership and dedicated service to our academic community.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <ShimmerButton>
              <span className="relative z-10 text-white">Meet Our Team</span>
            </ShimmerButton>
            <ShimmerButton>
              <span className="relative z-10 text-white">Contact Administration</span>
            </ShimmerButton>
          </div>
        </div>
      </div>
    </section>
  )
} 