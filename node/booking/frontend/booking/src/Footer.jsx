import React from 'react';
import logo from "./images/logo.png"
import flogo from "./images/flogo.png"
import flogo2 from "./images/flogo2.png"
import flogo3 from "./images/f3logo.png"
import flogo4 from "./images/flogo4.png"

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="flex flex-col mx-3 bg-gradient-to-r from-blue-100 to-red-100 rounded-lg shadow-lg p-6"> {/* Adjusted padding */}
                <div className="container mx-auto">
                    <div className="flex flex-col items-center my-4"> {/* Adjusted margin */}
                        <img
                            className="object-cover h-12 w-auto rounded-lg shadow-lg sm:h-16 sm:w-auto xl:h-20 xl:w-auto bg-white mb-4" // Adjusted size
                            src={logo}
                            alt=""
                        />
                        <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-6 text-dark-grey-900"> {/* Adjusted gap */}
                            <a href="javascript:void(0)" className="text-gray-600 hover:text-gray-900">About</a>
                            <a href="javascript:void(0)" className="text-gray-600 hover:text-gray-900">Partners</a>
                            <a href="javascript:void(0)" className="text-gray-600 hover:text-gray-900">Help</a>
                            <a href="javascript:void(0)" className="text-gray-600 hover:text-gray-900">Terms</a>
                        </div>
                        <div className="flex items-center gap-4 mt-4"> {/* Adjusted margin and gap */}
                            <a href="javascript:void(0)" className="text-grey-700 hover:text-grey-900">
                                <img
                                    className="object-cover h-8 w-auto rounded-lg sm:h-10 sm:w-auto xl:h-12 xl:w-auto"
                                    src={flogo}
                                    alt=""
                                />
                            </a>
                            <a href="javascript:void(0)" className="text-grey-700 hover:text-grey-900">
                                <img
                                    className="object-cover h-8 w-auto rounded-lg sm:h-10 sm:w-auto xl:h-12 xl:w-auto"
                                    src={flogo2}
                                    alt=""
                                />
                            </a>
                            <a href="javascript:void(0)" className="text-grey-700 hover:text-grey-900">
                                <img
                                    className="object-cover h-8 w-auto rounded-lg sm:h-10 sm:w-auto xl:h-12 xl:w-auto bg-black"
                                    src={flogo3}
                                    alt=""
                                />
                            </a>
                            <a href="javascript:void(0)" className="text-grey-700 hover:text-grey-900">
                                <img
                                    className="object-cover h-8 w-auto rounded-lg sm:h-10 sm:w-auto xl:h-12 xl:w-auto"
                                    src={flogo4}
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="flex items-center mt-4">
                            <p className="text-sm leading-6 text-center text-grey-700">
                                2024 Motion . All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
