import Image from "next/image";
import img from '@/app/twitter-image.png'

const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
            <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
                <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
                    Get started With Our Services
                </h1>
                <p className="text-lg opacity-80 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

            </div>
            <div className="lg:w-full">
                <Image
                    src={img}
                    alt="Product Demo"
                    className="w-ful"
                    priority={true}
                    width={600}
                    height={600}
                />
            </div>
        </section>
    );
};

export default Hero;
