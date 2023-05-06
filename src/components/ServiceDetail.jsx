import { useState } from 'react';
import ServiceCard from './ServiceCard';

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

const ServiceDetail = () => {
	const [locationFilter, setLocationFilter] = useState('');
	const [typeFilter, setTypeFilter] = useState('');
	const [nameFilter, setNameFilter] = useState('');

	const handleLocationFilterChange = (event) => {
		setLocationFilter(event.target.value);
	};

	const handleTypeFilterChange = (event) => {
		setTypeFilter(event.target.value);
	};

	const handleNameFilterChange = (event) => {
		setNameFilter(event.target.value);
	};

	return (
		<div className="container mx-auto">
			<div className="flex justify-between items-center my-4 px-4 gap-2">
				<div className="w-1/3">
					<label htmlFor="locationFilter" className="block font-bold mb-2">Location:</label>
					<input type="text" id="locationFilter" placeholder='Location...' name="locationFilter" value={locationFilter} onChange={handleLocationFilterChange} className="w-full border border-gray-400 p-2 rounded" />
				</div>
				<div className="w-1/3">
					<label htmlFor="typeFilter" className="block font-bold mb-2">Type:</label>
					<input type="text" id="typeFilter" name="typeFilter" placeholder='type...' value={typeFilter} onChange={handleTypeFilterChange} className="w-full border border-gray-400 p-2 rounded" />
				</div>
				<div className="w-1/3">
					<label htmlFor="nameFilter" className="block font-bold mb-2">Name:</label>
					<input type="text" id="nameFilter" name="nameFilter" placeholder='Name...' value={nameFilter} onChange={handleNameFilterChange} className="w-full border border-gray-400 p-2 rounded" />
				</div>
			</div>
			<div className="flex flex-wrap mx-auto">
				{imageList.map((imageObj) => (
					<ServiceCard key={imageObj.name} name={imageObj.title} image={imageObj.image} />
				))}
			</div>
		</div>
	);
};

export default ServiceDetail;
