import Image from "next/image";

const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-col items-center justify-center gap-16 lg:gap-20 px-8 py-8 w-1/2 max-sm:w-4/5 lg:py-20">
            <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
                Tristan W. Gillespie
            </h1>
            <div className="lg:w-full">
                <Image
                    src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
                    alt="Product Demo"
                    className="w-full rounded-2xl"
                    priority={true}
                    width={500}
                    height={500}
                />
            </div>
            <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">



                <p className="text-lg opacity-80 leading-relaxed text-left">
                    Tristan Gillespie is a proven battle-tested Plaintiffs litigator with 17 years of courtroom experience and he thrives on holding large corporations accountable to consumers.
                </p>
                <p className="text-lg opacity-80 leading-relaxed text-left">
                    Tristan Gillespie grew up in the Northeast and has lived in Georgia since
                    2016. Tristan has his BA from SUNY Binghamton, a masters degree in public
                    policy from Rutgers University, and his law degree from Rutgers University.
                    Tristan is a tireless litigator and has personally handled over a thousand civil,
                    commercial and criminal cases. Tristan and his wife Carese have been
                    married for 25 years and have three beautiful children (ages 19, 17 and 12).
                </p>
                <p className="text-lg opacity-80 leading-relaxed text-left">
                    Tristan is a member of the bars of Georgia, Maryland, Washington DC, New
                    Jersey, Texas and New York State. Mr. Gillespie is also licensed to practice law in the
                    US Supreme Court and 27 different US District Courts and Circuit Courts of
                    Appeal.

                </p>
            </div>
        </section>
    );
};

export default Hero;