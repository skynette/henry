import foodimage from "../assets/food.png"
import accessoriesImage from "../assets/accessories.png"
import cleaningImage from "../assets/cleaning.png"
import clothingImage from "../assets/clothing.png"
import hairImage from "../assets/hair.png"
import healthImage from "../assets/health.png"
import homeImage from "../assets/home.png"
import kidsImage from "../assets/kids.png"
import personalCareImage from "../assets/personal_care.png"

const imageList = [
	{ image: foodimage, title: "FOOD" },
	{ image: accessoriesImage, title: "ACCESSORIES" },
	{ image: cleaningImage, title: "CLEANING" },
	{ image: clothingImage, title: "CLOTHING" },
	{ image: hairImage, title: "HAIR" },
	{ image: healthImage, title: "HEALTH" },
	{ image: homeImage, title: "HOME" },
	{ image: kidsImage, title: "KIDS" },
	{ image: personalCareImage, title: "PERSONAL CARE" },
]

const PhotoGrid = () => {
	return (
		<div className="grid md:grid-cols-3 gap-5 px-2">
			{/* card */}
			{imageList.map((image) => (
				<div className="relative" key={image.title}>
					<img src={image.image} alt="service image" className="w-full" />
					<p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-1xl font-bold">{image.title}</p>
				</div>
			))}

		</div>
	)
}

export default PhotoGrid