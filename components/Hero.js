
const Hero = () => {
    return (
        <section className="border-t my-4">

            <div className="my-10 mx-40 flex justify-between max-md:mx-10 max-sm:flex-col max-sm:w-56 max-sm:ml-28">
                <button className="py-3 px-12 bg-[#7e7b7b] rounded-md m-4">New</button>
                <button className="py-3 px-12 bg-[#7e7b7b] rounded-md m-4">PR1</button>
            </div>

            <div className="flex flex-row justify-center">
                <label htmlFor="industry" className="mb-2 flex items-center text-sm font-medium text-gray-900 dark:text-white">
                    Your Industry:
                </label>
                <input
                    type="text"
                    id="industry"
                    className="bg-gray-50 border ml-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your Industry"
                />
            </div>

            <div className="flex flex-row justify-center">
                <button className="flex justify-between my-5 w-56 py-3 px-10 rounded-md bg-[#74a8ca]">Upload .pptx</button>
            </div>

            <div className="flex flex-row justify-center">
                <button className="flex justify-between my-5 w-40 py-2 px-8 rounded-md bg-[#74a8ca]">Generate</button>
            </div>
        </section>
    );
};

export default Hero;
