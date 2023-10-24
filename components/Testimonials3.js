// The list of your testimonials. It needs 3 items to fill the row.
const list = [
    {
        head: '1. Change project directory ',
        text: "cd app",
    },
    {
        head: '2. Install all dependencies ',
        text: `npm install`,
    },
    {
        head: '3. Remove the remote origin',
        text: "git remote remove origin",
    },
];
const list2 = [
    {
        head: '4. start your application as',
        text: "npm run dev",
    },
    {
        head: '5. Rename .env.example as',
        text: "cp .env.example .env.local",
    },
    {
        head: '6. Remove .env.example',
        text: 'rm .env.example',
    },
];

// A single testimonial, to be rendered in  a list
const Testimonial = ({ i }) => {
    const testimonial = list[i];

    if (!testimonial) return null;

    return (
        <li key={i}>
            <figure className="relative max-w-lg h-full p-6 md:p-10 bg-base-200 rounded-2xl max-md:text-sm flex flex-col">
                <blockquote className="relative flex-1">
                    <h1 className="font-bold text-xl">{testimonial.head}</h1>
                    <p className="text-base-content/80 leading-relaxed">
                        {testimonial.text}
                    </p>
                </blockquote>
            </figure>
        </li>
    );
};
const Testimonial2 = ({ i }) => {
    const testimonial = list2[i];

    if (!testimonial) return null;

    return (
        <li key={i}>
            <figure className="relative max-w-lg h-full p-6 md:p-10 bg-base-200 rounded-2xl max-md:text-sm flex flex-col">
                <blockquote className="relative flex-1">
                    <h1 className="font-bold text-xl">{testimonial.head}</h1>
                    <p className="text-base-content/80 leading-relaxed">
                        {testimonial.text}
                    </p>
                </blockquote>
            </figure>
        </li>
    );
};

const Testimonials3 = () => {
    return (
        <section id="testimonials">
            <div className="pt-4 pb-4 px-8 max-w-7xl mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <div className="mb-8">
                        <h2 className="sm:text-5xl text-4xl font-extrabold text-base-content">
                            Get started here!
                        </h2>
                    </div>
                    <p>Here's a quick overview of the boilerplate. Follow along to get your app up and running.</p>
                </div>
                <div className="ml-6 sm:ml-10">
                    <h2 className="text-3xl font-bold mb-6">Clone the repositries</h2>
                    <div className="mt-4">
                        <span className="font-bold">
                            git clone https://github.com/Nouman159/ship-fast-main  &nbsp;&nbsp;&nbsp;&nbsp;(JS version)&nbsp;
                        </span>
                        <div>
                            or&nbsp;
                        </div>
                        <span className="font-bold">
                            git clone https://github.com/Nouman159/ship-fast-ts-main &nbsp;&nbsp;&nbsp;&nbsp;(TSX version)
                        </span>
                    </div>
                </div>
                <div className="ml-6 mt-8 sm:ml-10">
                    <h2 className="text-3xl font-bold">Starting the local server</h2>
                </div>
                <ul
                    role="list"
                    className="flex flex-col items-center lg:flex-row lg:items-stretch gap-6 lg:gap-8"
                >
                    {[...Array(3)].map((e, i) => (
                        <Testimonial key={i} i={i} />
                    ))}
                </ul>
                <ul
                    role="list"
                    className="flex flex-col items-center lg:flex-row lg:items-stretch gap-6 lg:gap-8"
                >
                    {[...Array(3)].map((e, i) => (
                        <Testimonial2 key={i} i={i} />
                    ))}
                </ul>

            </div>
        </section>
    );
};

export default Testimonials3;
