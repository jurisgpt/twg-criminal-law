import Image from "next/image";
import img from '@/app/Tristan-Gillespie.jpeg'

const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
            <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
                <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
                    Get started Lee Legal Services
                </h1>
                <p className="text-lg opacity-80 leading-relaxed">
                    When dealing with auto dealer fraud you should be on the lookout for prior wreck damage, no title or no emissions test. As well as odometer fraud or hiding title information such as ‘salvage’, ‘rebuilt’, ‘flood’ or hiding that the dealer bought it at an auction as a total loss insurance auto.
                    404.288.4444 autofraud@leelegal.com                </p>

            </div>
            <div className="lg:w-full">
                <Image
                    src={img}
                    alt="Product Demo"
                    className="w-ful"
                    priority={true}
                    width={300}
                    height={300}
                />
            </div>
        </section>
    );
};

export default Hero;
