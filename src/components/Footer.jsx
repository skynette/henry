import { SocialIcon } from "react-social-icons";

function Footer() {
	return (
		<footer className="bg-footer mt-12 h-[60vh]">
			<div className="flex flex-col md:flex-row gap-4 justify-between items-start w-5/6 mx-auto pt-10">
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
					<div className="flex gap-16">
						<div className="flex flex-col gap-2">
							<a href="">Home</a>
							<a href="">About</a>
							<a href="">Stories</a>
							<a href="">Press & Media</a>
							<a href="">Videos</a>
						</div>
						<div className="flex flex-col gap-2">
							<a href="">Podcast</a>
							<a href="">Events</a>
							<a href="">Business</a>
							<a href="">Collaboration</a>
							<a href="">Contact</a>
						</div>

					</div>
				</div>

				{/* contact info */}
				<div className="mt-8">
					<p className="font-bold mb-4">Contact Info</p>
					<p className="" >story@herbusinessmedia.com</p>
				</div>

				{/* join community */}
				<div className="mt-8">
					<p className="font-bold mb-4">Join our Community</p>
					<p className="" >story@herbusinessmedia.com</p>
					<input placeholder="Email Address" className="bg-transparent border-b border-black my-2 py-1 w-full"/>
					<button className="bg-black text-white px-6 py-2 w-full">
						SIGN UP
					</button>
				</div>

			</div>
		</footer>
	);
}
export default Footer;