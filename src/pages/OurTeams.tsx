import { ArrowRight } from 'lucide-react'
import discuss1 from '@/assets/images/discuss1.webp'
import discuss2 from '@/assets/images/discuss2.webp'
import shoot1 from '@/assets/images/shoot1.webp'
import shoot2 from '@/assets/images/shoot2.webp'
import shoot3 from '@/assets/images/shoot3.webp'


type Member = {
  photo: string
}

const team: Member[] = [
  { photo: discuss1 },
  { photo: shoot1 },
  { photo: shoot2 },
  { photo: shoot3 },
  { photo: discuss2 },
]

  function TeamCard({ member }: { member: Member }) {
    return (
      <div className="group relative overflow-hidden rounded-xl ring-1 ring-white/10 bg-white/5 hover:ring-secondary/60 transition-all duration-300 aspect-[4/3]">
        <img src={member.photo} alt="Team member" className="h-full w-full object-cover object-center" />
      </div>
    )
  }

export default function OurTeams() {
  return (
    <main className="bg-primary text-white">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 pt-3 md:pt-4 pb-8">
        {/* Top bar like Our Work: only back button, vertically centered on the left */}
        <div className="relative flex items-center min-h-[56px]">
          <a
            href="/"
            className="absolute left-0 top-1/2 -translate-y-1/2 inline-flex items-center gap-2 text-white font-neue-montreal hover:underline text-sm md:text-base"
            aria-label="Back to Home"
          >
            <span aria-hidden className="text-lg md:text-xl">←</span>
            <span>Back to Home</span>
          </a>
        </div>

        {/* Centered ROC logo - small on mobile like Home hero */}
        <div className="mt-2 flex items-center justify-center select-none">
          <img src="/roc.webp" alt="ROC" className="h-8 md:h-10 w-auto object-contain" />
        </div>

        <h1 className="text-center text-4xl md:text-5xl font-neue-montreal font-bold tracking-tight">Our Team</h1>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto font-neue-montreal text-center">
          Meet the creators, makers, and doers behind our work. We blend strategy, storytelling, and craft to deliver content that converts.
        </p>
      </section>

      {/* Team grid */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="flex flex-col gap-6 md:gap-8">
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {team.slice(0, 3).map((m) => (
              <TeamCard key={m.photo} member={m} />
            ))}
          </div>
          
          {/* Second row - 2 centered cards */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full sm:[width:calc(66.666667%-1rem)]">
              {team.slice(3, 5).map((m) => (
                <TeamCard key={m.photo} member={m} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a href="/our-work" className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-primary font-neue-montreal font-semibold shadow-sm hover:brightness-95 transition">
            View Our Work
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  )
}
