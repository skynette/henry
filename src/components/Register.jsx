import googleImage from '../assets/google.png';

function Register() {
	return (
		<div className="flex flex-col md:flex-row min-h-screen bg-registerBg">
			{/* Left section */}
			<div className="register-left-section md:w-2/3 flex justify-center items-center">
				<div className="text-center">
					<h1 className="text-4xl font-bold text-white mb-4">Brand Name</h1>
					<p className="text-lg text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div>
			</div>

			{/* Right section */}
			<div className="md:w-1/2 flex flex-col justify-center m-auto mt-32 items-center">
				<form className="w-full max-w-md px-14">
					<h2 className="text-3xl text-center text-gray-800 mb-8 py-6">Create Account</h2>
					<div className="mb-4">
						<label htmlFor="Name" className="block text-gray-700 font-bold mb-2">Name</label>
						<input
							className="bg-transparent border-b border-black my-2 py-1 w-full focus:outline-none tracking-wide"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
						<input
							className="bg-transparent border-b border-black my-2 py-1 w-full focus:outline-none tracking-wide"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
						<input
							className="bg-transparent border-b border-black my-2 py-1 w-full focus:outline-none tracking-wide"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="password2" className="block text-gray-700 font-bold mb-2">Confirm Password</label>
						<input
							className="bg-transparent border-b border-black my-2 py-1 w-full focus:outline-none tracking-wide"
						/>
					</div>
				</form>
				<button className="bg-black hover:bg-gray-700 text-white font-bold py-1 px-8 rounded focus:outline-none focus:shadow-outline mt-14 text-center" type="submit">
					SIGN UP
				</button>
				<button className="flex gap-1 my-14 py-1 px-4 rounded-sm font-bold bg-white border border-gray-200">
					<img src={googleImage} alt="" />
					Login with Google
				</button>

			</div>
		</div>
	);
}

export default Register;
