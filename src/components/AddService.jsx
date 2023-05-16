
const AddService = () => {
	return (
		<section className='container mx-auto'>
			<form className='p-10'>
				<div className="space-y-12">
					<div className="border-b border-gray-900/10 pb-12">
						<h2 className="text-2xl font-semibold leading-7 text-gray-900">Add a service</h2>
						<p className="mt-1 text-sm leading-6 text-gray-600">
							This information will be displayed publicly
						</p>

						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							<div className="sm:col-span-4">
								<label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
									Name
								</label>
								<div className="mt-2">
									<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 sm:max-w-md">
										<input
											type="text"
											name="name"
											id="name"
											autoComplete="name"
											className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
											placeholder="Name"
										/>
									</div>
								</div>
							</div>

							<div className="sm:col-span-4">
								<label htmlFor="zipcode" className="block text-sm font-medium leading-6 text-gray-900">
									Zipcode
								</label>
								<div className="mt-2">
									<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 sm:max-w-md">
										<input
											type="text"
											name="zipcode"
											id="zipcode"
											autoComplete="zipcode"
											className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
											placeholder="Zipcode"
										/>
									</div>
								</div>
							</div>

							<div className="sm:col-span-4">
								<label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">
									Website
								</label>
								<div className="mt-2">
									<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 sm:max-w-md">
										<input
											type="text"
											name="website"
											id="website"
											autoComplete="website"
											className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
											placeholder="Website"
										/>
									</div>
								</div>
							</div>

							<div className="sm:col-span-4">
								<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
									Email
								</label>
								<div className="mt-2">
									<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 sm:max-w-md">
										<input
											type="email"
											name="email"
											id="email"
											autoComplete="email"
											className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
											placeholder="Email"
										/>
									</div>
								</div>
							</div>

							<div className="sm:col-span-4">
								<label htmlFor="relationship" className="block text-sm font-medium leading-6 text-gray-900">
									Relationship
								</label>
								<div className="mt-2">
									<div className="relative">
										<select
											id="relationship"
											name="relationship"
											className="block appearance-none w-1/2 bg-transparent py-1.5 pl-2 pr-8 text-gray-900 border-0 border-b-2 border-gray-300 focus:outline-none focus:border-gray-700 sm:text-sm sm:leading-6"
										>
											<option value="customer">Customer</option>
											<option value="supplier">Supplier</option>
											<option value="partner">Partner</option>
											<option value="other">Other</option>
										</select>
										<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
											<svg className="w-4 h-4 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
												<path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
												<path
													fillRule="evenodd"
													d="M10 3a7 7 0 100 14 7 7 0 000-14zM3 10a7 7 0 1114 0 7 7 0 01-14 0z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
									</div>
								</div>
							</div>

							<div className="col-span-full">
								<label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
									Description
								</label>
								<div className="mt-2">
									<textarea
										id="description"
										name="description"
										cols={20}
										rows={3}
										className="block w-full md:w-1/2 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 px-4 py-2"
										defaultValue={''}
									/>
								</div>
								<p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about service.</p>
							</div>

						</div>
					</div>


				</div>

				<div className="mt-6 flex items-center justify-end gap-x-6">
					<button type="button" className="text-sm font-semibold leading-6 text-gray-900">
						Cancel
					</button>
					<button
						type="submit"
						className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/70"
					>
						Save
					</button>
				</div>
			</form>
		</section>
	)
}

export default AddService