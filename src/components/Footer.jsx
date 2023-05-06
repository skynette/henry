import { SocialIcon } from "react-social-icons";

function Footer() {
	return (
		<footer className="bg-footer mt-12">
			<div className="flex flex-col md:flex-row gap-4 justify-between items-start w-5/6 mx-auto">
				{/* brandname n icons */}
				<div className="mt-4">
					<h1 className="text-2xl font-bold py-4">HerBusiness Media</h1>
					<div className="flex gap-2">
						<SocialIcon network="twitter" bgColor="#000000" style={{ height: 25, width: 25 }} />
						<SocialIcon network="twitter" bgColor="#000000" style={{ height: 25, width: 25 }} />
						<SocialIcon network="twitter" bgColor="#000000" style={{ height: 25, width: 25 }} />
					</div>
				</div>

				{/* quick links */}
				<div className="mt-8">
					<p className="font-bold mb-4">Quick Links</p>
					<div className="flex gap-2">
						<div className="flex flex-col gap-2">
							<a href="">Home</a>
							<a href="">About</a>
							<a href="">Stories</a>
							<a href="">Press & Media</a>
							<a href="">Videos</a>
						</div>

					</div>
				</div>

				{/* contact info */}

				{/* join community */}

			</div>
		</footer>
	);
}
export default Footer;