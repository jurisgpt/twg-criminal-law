import Image from "next/image";
import config from "@/config";

// The list of your testimonials. It needs 3 items to fill the row.
const list = [
    {
        head: 'Run the following command in terminal',
        text: "Really easy to use. The tutorials are really useful and explains how everything works. Hope to ship my next project really fast!",
    },
    {
        head: 'Run the following command in terminal',
        text: "Setting up everything from the ground up is a really hard, and time consuming process. What you pay for will save your time for sure.",
    },
    {
        head: 'Run the following command in terminal',
        text: `Easily saves 15+ hrs for me setting up trivial stuff. <b>Now,</b> I can directly focus on shipping features rather than hours of setting up the same technologies from scratch. Feels like a super power! :D`,
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

const Testimonials3 = () => {
    return (
        <section id="testimonials">
            <div className="py-24 px-8 max-w-7xl mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <div className="mb-8">
                        <h2 className="sm:text-5xl text-4xl font-extrabold text-base-content">
                            Get started here!
                        </h2>
                    </div>
                    {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-base-content/80">
                        Don&apos;t take our word for it. Here&apos;s what they have to say
                        about ShipFast.
                    </p> */}
                    <p>Here's a quick overview of the boilerplate. Follow along to get your app up and running.</p>
                </div>

                <ul
                    role="list"
                    className="flex flex-col items-center lg:flex-row lg:items-stretch gap-6 lg:gap-8"
                >
                    {[...Array(3)].map((e, i) => (
                        <Testimonial key={i} i={i} />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Testimonials3;
