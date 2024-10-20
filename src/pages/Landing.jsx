import landing from '../assets/landing.jpeg';
export default function Landing() {
    return (
        <div className="relative">

            <section className="bg-background overflow-hidden">
                <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
                    <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
                        <div className="absolute bottom-0 right-0 hidden lg:block">
                            <img className="object-contain w-auto h-48" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png" alt="" />
                        </div>

                        <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
                            <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-8xl">
                                Empower.<br />
                                Elevate, Thrive.
                            </h1>
                            <p className="mt-8 mb-6 text-xl text-black">We help you to make your remote work life easier. Build a distruction free working experience.</p>

                            <button className="inline-flex bg-secondary items-center justify-center w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-full sm:w-auto sm:ml-4 sm:mt-0 hover:bg-orange-600 focus:bg-orange-600">
                                Get Started
                            </button>
                            <p className="mt-5 text-base text-black">Instant access . No credit card required</p>
                        </div>

                        <div className="absolute right-0 z-10 -bottom-16 lg:top-24 lg:-left-20">
                            <img className="w-32 h-32 md:w-40 md:h-40" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/circular-text.png" alt="" />
                        </div>
                    </div>

                    <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
                        <div className="absolute inset-0">
                            <img className="object-cover w-full h-full scale-100" src={landing} alt="" />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                        <div className="absolute bottom-0 left-0">
                            <div className="p-4 sm:p-6 lg:p-8">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -1 24 24" width={55} height={55} color={"#fab600"} fill={"none"}>
                                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C7.52232 2 3.77426 4.94289 2.5 9H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2 12C2 12.3373 2.0152 12.6709 2.04494 13M9 22C8.6584 21.8876 8.32471 21.7564 8 21.6078M3.20939 17C3.01655 16.6284 2.84453 16.2433 2.69497 15.8462M4.83122 19.3065C5.1369 19.6358 5.46306 19.9441 5.80755 20.2292" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <h2 className="font-bold text-white text-7xl ml-2.5">24/7</h2>
                                </div>
                                <p className="max-w-xs mt-1.5 text-xl text-white">Professionals Help Available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}