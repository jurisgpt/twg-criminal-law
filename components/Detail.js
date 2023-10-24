import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import React from 'react'

const Detail = () => {
    return (
        <section id="detail">
            <div className="py-4 px-8 max-w-7xl mx-auto">

                <div className="ml-6 sm:ml-10">
                    <h2 className="text-1xlmb-6">Open&nbsp;
                        <span className="bg-neutral-400 font-bold ">
                            &nbsp;http://localhost:3000&nbsp;&nbsp;
                        </span>
                        to see your site. And voila!</h2>
                </div>
                <div className="ml-6 sm:ml-10 mt-12">
                    <h2 className="text-3xl mb-6 font-bold">
                        NextJS project structure
                    </h2>
                    <div className="bg-[#6e6b6b] rounded-md max-w-2xl p-6">
                        <div><FolderOutlinedIcon /> <span className="font-bold">/app </span>→ Pages (1 folder + page.js = 1 page)</div>
                        <div><FolderOutlinedIcon /> <span className="font-bold">/app/api </span>→ API calls (1 file = 1 API endpoint)</div>
                        <div><FolderOutlinedIcon /> <span className="font-bold">/components </span>→ React components</div>
                        <div><FolderOutlinedIcon /> <span className="font-bold">/libs </span>→ Libraries helper functions (Stripe & Mailgun, auth etc.)</div>
                        <div><FolderOutlinedIcon /> <span className="font-bold">/models </span>→ Database models</div>
                    </div>
                </div>
                <div className="ml-6 sm:ml-10 mt-12">
                    <h2 className="text-3xl mb-6 font-bold">
                        config.js file
                    </h2>
                    <p className="max-w-2xl">
                        It is where you configure your app. Each key is documented to know how and why it&apos;s used. Have a thorough look at it:
                        <span className="font-bold">
                            &nbsp;it is the backbone of the app.
                        </span>
                    </p>
                </div>
                <div className="ml-6 sm:ml-10 mt-12">
                    <h2 className="text-3xl mb-6 font-bold">
                        .env file
                    </h2>
                    <p className="max-w-2xl">
                        Rename the <span className="bg-neutral-400">.env.example</span> file to <span className="bg-neutral-400">.env.local.</span> Change <span className="bg-neutral-400">NEXTAUTH_SECRET</span> to anything else.
                        <span className="font-bold">
                            &nbsp;it is the backbone of the app.
                        </span>
                    </p>
                </div>
                <div className="ml-6 sm:ml-10 mt-12">
                    <h2 className="text-3xl mb-6 font-bold">
                        How to use?
                    </h2>
                    <p className="max-w-2xl">
                        ShipFast comes with many components to help you build SEO-optimized pages (like a landing page) in no time.
                        <div className="mt-6">
                            The <span className="bg-neutral-400">/components</span> folder contains all you need (hero  pricing FAQ sections). Here&apos;s the list of <a className="underline underline-offset-2 text-yellow-500 font-bold" href="https://shipfa.st/docs/components" target='_blank'>all the components</a> & themes.
                        </div>
                        <div className="mt-6">
                            The <span className="bg-neutral-400">/libs/seo.js</span> file helps you set SEO tags to better rank on Google. Make sure to <a className="underline underline-offset-2 text-yellow-500 font-bold" href="https://shipfa.st/docs/features/seo" target='_blank'>customize SEO tags</a>.
                        </div>
                    </p>
                </div>



                <div className="ml-6 sm:ml-10 mt-12">
                    <h2 className="text-3xl mb-6 font-bold">
                        Error Handling
                    </h2>
                    <p className="max-w-2xl">
                        Javascript errors are handled gracefully in the <span className="bg-neutral-400">/app/error.js</span> high-level component. Error 404 (not found) is handled gracefully in the <span className="bg-neutral-400">/app/not-found.js</span> high-level component.
                        <div className="mt-6">
                            When an error occurs, a beautiful page is shown and users can reach out support through the <span className="bg-neutral-400">ButtonSupport</span> component.
                        </div>
                        <div className="mt-6">
                            By default it will open the Crisp customer chat (if crisp.id is present in config.js). Here's the <a className="underline underline-offset-2 text-yellow-500 font-bold" href="https://shipfa.st/docs/features/customer-support" target='_blank'>tutorial to set up Crisp</a>.

                            If crisp.id is not set up in the config.js file, it will open the user mail client (mailto:) and let them them an email to your email support (mailgun.supportEmail in config.js)
                        </div>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Detail