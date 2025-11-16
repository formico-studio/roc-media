import HeroSection from '../components/home/HeroSection'
import BrandMarquee from '../components/home/BrandMarquee'
import OurTeam from '../components/home/OurTeam'
import OurExpertise from '../components/home/OurExpertise'
import TestimonialsSection from '../components/home/Testimonials'
import CTASection from '../components/common/CTASection'

export default function Home() {
	return (
		<>
			<HeroSection />
			<BrandMarquee />
			<OurTeam />
			<OurExpertise />
			<TestimonialsSection />
			<CTASection />
		</>
	)
}


