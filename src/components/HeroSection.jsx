import useMediaQuery from '../hooks/useMediaQuery'
import heroImage from "../assets/hero.png"
import PhotoGrid from './PhotoGrid'


const HeroSection = () => {
	const isMobile = useMediaQuery("(max-width: 600px)")
	const isTabletAbove = useMediaQuery("(min-width: 1000px)")
	return (
		<section className='bg-background'>
			<div className='container mx-auto'>
				<div className={`flex ${isMobile && "flex-col-reverse"} justify-between items-center gap-10 mx-auto w-5/6 ${!isMobile && "h-5/6"}`}>
					{/* left side */}
					<div className={` ${!isMobile && "basis-[40%] mt-6"}`}>
						<h2 className='text-4xl mt-20 mb-4'>Share Services </h2>
						<p className='text-xl'>
							LLorem ipsum dolor sit amet, consectetur adipiscing elit. Non lacus cursus ut nec non id aliquam nibh libero. Tortor quam pharetra neque.
						</p>
					</div>

					{/* right side */}
					<div className={`flex ${!isMobile && "basis-[60%]"}  mt-16`}>
						<img src={heroImage} alt="Hero Image" className='w-full' />
					</div>
				</div>
				{/* services text */}

				{isTabletAbove ? (
					<h1 className="text-[250px] font-[600] text-right text-accent mb-4 mr-4" >services</h1>
				) :
					(
						<h1 className="text-right text-7xl text-accent mb-4 mr-4" >services</h1>
					)
				}

				{/* photogrid */}
				<PhotoGrid />
			</div>
		</section>
	)
}

export default HeroSection