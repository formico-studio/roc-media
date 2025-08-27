import { Marquee } from '../magicui/marquee'
import logo1 from '@logos/1.png'
import logo2 from '@logos/2.png'
import logo3 from '@logos/3.png'
import logo4 from '@logos/4.png'
import logo5 from '@logos/5.png'

export default function BrandMarquee() {
    const brands = [
        { name: 'Fiverr', logo: logo1 },
        { name: 'Myntra', logo: logo2 },
        { name: 'Car Info', logo: logo3 },
        { name: 'Find My Kid', logo: logo4 },
        { name: 'Policy Bazaar', logo: logo5 },
    ]

    return (
        <section className="bg-primary py-16 lg:py-20">
            <div className="max-w-[80rem] mx-auto px-4">
                {/* Title */}
                <h2 className="text-center text-white font-neue-montreal font-bold tracking-tight text-3xl md:text-4xl mb-6 md:mb-10">
                    More than 100+ completed projects
                </h2>

                {/* Brand Marquee with subtle side fades */}
                <div className="relative overflow-hidden">
                    {/* Left fade */}
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-36 sm:w-44 md:w-56 bg-gradient-to-r from-primary/95 via-primary/60 to-transparent z-10" />
                    {/* Right fade */}
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-36 sm:w-44 md:w-56 bg-gradient-to-l from-primary/95 via-primary/60 to-transparent z-10" />

                    <Marquee className="py-6 md:py-10 [--gap:2rem] [--duration:55s]" pauseOnHover repeat={8}>
                        {brands.map((brand) => (
                            <div key={brand.name} className="mx-2 sm:mx-4 flex items-center">
                                {/* Colorful logo */}
                                <img
                                    src={brand.logo}
                                    alt={`${brand.name} logo`}
                                    className="h-16 sm:h-20 md:h-24 w-auto object-contain select-none drop-shadow-sm"
                                    aria-label={brand.name}
                                />
                                {/* Brand name */}
                                <span className="ml-3 text-gray-200/95 text-lg sm:text-xl md:text-2xl font-neue-montreal-bold font-medium">
                                    {brand.name}
                                </span>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    )
}
