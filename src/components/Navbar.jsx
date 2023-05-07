import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { SocialIcon } from 'react-social-icons';
import useMediaQuery from '../hooks/useMediaQuery'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { useState } from 'react';

function Navbar() {
	const isTabletAbove = useMediaQuery("(max-width: 1350px)")
	const [isMenuToggled, setIsMenuToggled] = useState(false)

	return (
		<header className="w-full">
			{/* top bar */}
			<div className="flex justify-between items-center gap-4 md:gap-0 px-6 md:py-4 md:px-8 h-[92px] mx-auto">
				{/* left side */}
				<div className="flex gap-2">
					<SocialIcon network="twitter" bgColor="#000000" style={{ height: 25, width: 25 }} />
					<SocialIcon network="twitter" bgColor="#000000" style={{ height: 25, width: 25 }} />
					<SocialIcon network="twitter" bgColor="#000000" style={{ height: 25, width: 25 }} />
				</div>

				{/* right side */}
				<div className=''>
					{/* search bar */}
					<div className="">
						<div className="relative">
							<MagnifyingGlassIcon className="h-5 w-5 absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400" />
							<input
								type="text"
								placeholder="Search"
								className="pl-8 pr-3 py-2 rounded-md bg-white border border-gray-300 focus:outline-none w-full"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* nav section */}
			<nav className={`bg-primary h-[76px] ${!isTabletAbove && 'mr-8'}`}>
				<div className='flex justify-between items-center mx-auto py-4 px-8'>

					{/* name */}
					<div>
						<h1 className="text-2xl font-bold">HerBusiness Media</h1>
					</div>

					{isTabletAbove ? (
						<button
							className="rounded-full p-2 bg-secondary-500"
							onClick={() => setIsMenuToggled(!isMenuToggled)}
						>
							<Bars3Icon className="h-6 w-6" />
						</button>
					) : (
						<>
							<div className='hidden md:flex justify-between items-center gap-4'>
								<a href="#" className='text-base'>HOME</a>
								<a href="#">ABOUT</a>
								<a href="#">STORIES</a>
								<a href="#">PRESS & MEDIA</a>
								<a href="#">VIDEOS</a>
								<a href="#">PODCAST</a>
								<a href="#">EVENT</a>
								<a href="#">BUSINESS</a>
								<a href="#">COLLABORATION</a>
								<a href="#">CONTACT</a>

							</div>

							<div className='flex justify-between items-center gap-2'>
								<a href="/login">
									<button className='bg-transparent border border-black rounded-full px-4 py-2'>
										LOGIN
									</button>
								</a>
								<a href="/register" className='bg-black text-white rounded-full px-4 py-2'>SIGN UP</a>
							</div>
						</>
					)}

					{/* menu toggle */}
					{isTabletAbove && isMenuToggled && (
						<div className="fixed right-0 bottom-0 z-40 h-full w-3/4 md:w-[300px] overflow-auto bg-primary drop-shadow-xl">
							{/* CLOSE ICON */}
							<div className="flex justify-end p-12">
								<button onClick={() => setIsMenuToggled(!isMenuToggled)}>
									<XMarkIcon className="h-6 w-6" />
								</button>
							</div>

							{/* menu items */}
							<div className="ml-[25%] mb-[25%] flex flex-col gap-10 text-2xl">
								<a href="#">HOME</a>
								<a href="#">ABOUT</a>
								<a href="#">STORIES</a>
								<a href="#">PRESS & MEDIA</a>
								<a href="#">VIDEOS</a>
								<a href="#">PODCAST</a>
								<a href="#">EVENT</a>
								<a href="#">BUSINESS</a>
								<a href="#">COLLABORATION</a>
								<a href="#">CONTACT</a>
								<a href="/login">LOGIN</a>
								<a href="/register">REGISTER</a>
							</div>
						</div>
					)}
				</div>
			</nav>
		</header >
	);
}
export default Navbar;