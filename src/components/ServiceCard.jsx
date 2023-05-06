
// eslint-disable-next-line react/prop-types
const ServiceCard = ({ name, image }) => {
	return (
		<div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
			<div className="bg-white rounded-lg shadow-lg overflow-hidden">
				<img className="w-full h-48 object-cover" src={image} alt="Service" />
				<div className="p-4">
					<h2 className="text-xl font-bold mb-2">{name}</h2>
					<p className="text-gray-700 text-base mb-4">Service Description</p>
					<div className="flex items-center mb-2">
						<svg className="w-4 h-4 fill-current text-gray-500 mr-2" viewBox="0 0 20 20">
							<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
							<path fillRule="evenodd" clipRule="evenodd" d="M10 0a10 10 0 100 20 10 10 0 000-20zM1 10a9 9 0 1118 0 9 9 0 01-18 0z" />
						</svg>
						<p className="text-gray-700 text-sm">Location</p>
					</div>
					<div className="flex items-center mb-2">
						<svg className="w-4 h-4 fill-current text-gray-500 mr-2" viewBox="0 0 20 20">
							<path fillRule="evenodd" clipRule="evenodd" d="M10 0a10 10 0 100 20 10 10 0 000-20zM1 10a9 9 0 1118 0 9 9 0 01-18 0z" />
							<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
						</svg>
						<p className="text-gray-700 text-sm">Service Type</p>
					</div>
					<div className="flex items-center">
						<svg className="w-4 h-4 fill-current text-gray-500 mr-2" viewBox="0 0 20 20">
							<path fillRule="evenodd" clipRule="evenodd" d="M10 0a10 10 0 100 20 10 10 0 000-20zM1 10a9 9 0 1118 0 9 9 0 01-18 0z" />
							<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
						</svg>
						<p className="text-gray-700 text-sm">Price</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
