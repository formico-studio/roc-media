import {
	FaClapperboard,
	FaBullseye,
	FaScissors,
	FaDesktop,
	FaShareNodes
} from 'react-icons/fa6'

const expertiseItems = [
	{
		title: "Content Creation",
		icon: FaClapperboard,
		items: ["Story-Driven Scripting", "Professional Recording", "Seamless Post-Production"],
		className: "lg:col-span-1"
	},
	{
		title: "Content Strategy",
		icon: FaBullseye,
		items: ["Market-Informed Planning", "Thematic Blueprint & Budgeting", "Actionable Growth Roadmap"],
		className: "lg:col-span-1"
	},
	{
		title: "Video Editing",
		icon: FaScissors,
		items: ["Professional Editing", "Masterful Pacing & Flow", "Color Grading & Sound Design"],
		className: "lg:col-span-1"
	},
	{
		title: "Motion Graphics",
		icon: FaDesktop,
		items: ["Visually Engaging 2D Animation", "Clear SaaS & Explainer Videos", "Impactful Kinetic Typography"],
		className: "lg:col-span-1 lg:col-start-1 lg:translate-x-1/2"
	},
	{
		title: "Social Media Management",
		icon: FaShareNodes,
		items: ["Platform-Specific Content Research", "Strategic Content Calendar", "High-Volume Content Production"],
		className: "lg:col-span-1 lg:col-start-2 lg:translate-x-1/2"
	}
]

export default function OurExpertise() {
	return (
		<section className="bg-primary py-24 lg:py-32 relative overflow-hidden">
			{/* Background Elements */}
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
				<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[100px]" />
				<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[100px]" />
			</div>

			<div className="container mx-auto px-4 relative z-10">
				{/* Section Title */}
				<h2 className="text-3xl lg:text-4xl font-neue-montreal-bold text-white text-center mb-16 lg:mb-20 tracking-wide">
					Our Expertise
				</h2>

				{/* Bento Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
					{/* Top Row: 3 Cards */}
					{expertiseItems.slice(0, 3).map((item, index) => (
						<div
							key={index}
							className={`
								group relative p-8 rounded-3xl 
								bg-gradient-to-b from-white/10 to-white/5 
								border border-white/30 hover:border-secondary/30 
								backdrop-blur-md transition-all duration-500 ease-out
								hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/10
								${item.className}
							`}
						>
							<div className="h-full flex flex-col">
								<div className="mb-8">
									<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
										<item.icon className="w-8 h-8 text-secondary" />
									</div>
								</div>

								<h3 className="text-2xl font-neue-montreal-bold text-white mb-6 group-hover:text-secondary transition-colors duration-300">
									{item.title}
								</h3>

								<ul className="space-y-3 mt-auto">
									{item.items.map((subItem, idx) => (
										<li key={idx} className="flex items-start gap-3 text-gray-300 font-neue-montreal-regular text-lg group-hover:text-white transition-colors duration-300">
											<span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
											<span className="leading-relaxed">{subItem}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}

					{/* Bottom Row: 2 Cards Centered */}
					<div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-8">
						{expertiseItems.slice(3, 5).map((item, index) => (
							<div
								key={index + 3}
								className={`
									group relative p-8 rounded-3xl 
									bg-gradient-to-b from-white/10 to-white/5 
									border border-white/30 hover:border-secondary/30 
									backdrop-blur-md transition-all duration-500 ease-out
									hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/10
								`}
							>
								<div className="h-full flex flex-col">
									<div className="mb-8">
										<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
											<item.icon className="w-8 h-8 text-secondary" />
										</div>
									</div>

									<h3 className="text-2xl font-neue-montreal-bold text-white mb-6 group-hover:text-secondary transition-colors duration-300">
										{item.title}
									</h3>

									<ul className="space-y-3 mt-auto">
										{item.items.map((subItem, idx) => (
											<li key={idx} className="flex items-start gap-3 text-gray-300 font-neue-montreal-regular text-lg group-hover:text-white transition-colors duration-300">
												<span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
												<span className="leading-relaxed">{subItem}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
