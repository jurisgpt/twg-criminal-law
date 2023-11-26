import React from 'react'

const Account = () => {
    return (
        <section className='flex flex-row mt-10 max-sm:flex-col h-72'>
            <div className='flex flex-col w-1/2 max-sm:w-full'>
                <div className='m-auto max-sm:my-5 items-center'>

                    <div>Account</div>
                    <div>Billing</div>
                    <div>Logout</div>
                    <div>Support</div>
                </div>
            </div>
            <div className='w-1/2 max-sm:w-full max-sm:my-6 max-sm:min-h-[95%] '>

                <div className="flex flex-row mt-5 justify-center">
                    <label htmlFor="name" className="mb-2 flex items-center text-sm font-medium text-gray-900 dark:text-white">
                        Name :
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="bg-gray-50 border ml-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter name"
                    />
                </div>

                <div className="flex flex-row mt-5 justify-center">
                    <label htmlFor="email" className="mb-2 flex items-center text-sm font-medium text-gray-900 dark:text-white">
                        Email :
                    </label>
                    <input
                        type="text"
                        id="email"
                        className="bg-gray-50 border ml-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your email"
                    />
                </div>

                <div className="flex flex-row mt-5 justify-center">
                    <label htmlFor="phone" className="mb-2 flex items-center text-sm font-medium text-gray-900 dark:text-white">
                        Phone :
                    </label>
                    <input
                        type="text"
                        id="phone"
                        className="bg-gray-50 border ml-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your phone"
                    />
                </div>

                <div className="flex flex-row mt-5 justify-center">
                    <label htmlFor="password" className="mb-2 flex items-center text-sm font-medium text-gray-900 dark:text-white">
                        Password :
                    </label>
                    <input
                        type="text"
                        id="password"
                        className="bg-gray-50 border ml-8 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your password"
                    />
                </div>
            </div>
        </section>
    )
}

export default Account