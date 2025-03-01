import ShimmerButton from "@/components/ui/shimmer-button"

export default function FacultyHero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-grid-slate-200/60 dark:bg-grid-slate-800/60 bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Meet Our Faculty
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
              Discover our world-class educators and researchers who are shaping the future of education and innovation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <ShimmerButton>
              <span className="relative z-10 text-white">Browse Departments</span>
            </ShimmerButton>
            <ShimmerButton>
              <span className="relative z-10 text-white">Contact Faculty</span>
            </ShimmerButton>
          </div>
        </div>
      </div>
    </section>
  )
} 