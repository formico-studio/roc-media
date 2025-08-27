import { useState } from 'react'
import Upper from '../components/ourWork/upper'
import Portfolio, { type PortfolioCategory } from '../components/ourWork/Portfolio'
import CTASection from '../components/common/CTASection'

export default function OurWork () {
    const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('carinfo')

    function handleCategoryChange (label: string) {
        const key = label.toLowerCase() as PortfolioCategory
        setActiveCategory(key)
    }
	return (
		<>
			<Upper onCategoryChange={handleCategoryChange} />
			<Portfolio activeCategory={activeCategory} />
			<CTASection />
		</>
	)
}


