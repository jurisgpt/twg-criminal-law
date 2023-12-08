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
                    Thayer was born and raised in Orlando, Florida. He attended college at the University of South Florida in Tampa, where he obtained a degree in Political Science. After graduation, he attended the University of Georgia, when he acquired his Juris Doctor. While attending the University of Georgia, Thayer interned continuously for various public defender offices, starting with his 1L summer until graduation. During that time, he interned for the DeKalb County, Athens-Clarke County, and Jackson County Public Defenders offices. It was during this time that Thayer secured his first acquittal, for a misdemeanor.
                </p>
                <p className="text-lg opacity-80 leading-relaxed text-left">
                    Following graduation, Thayer worked for the Barrow County Public Defenders Office for over 3 years, handling felonies and misdemeanors in Superior Court. During that time, he was involved with over one thousand cases, mostly felonies, ranging from drug and theft crimes to child sexual abuse and violent crimes. At trial, Thayers clients were acquitted on charge of drugs, child molestation, and cruelty to children. Additionally, he secured dismissals and reductions for clients involving theft, aggravated assault, drugs, fraud, domestic violence, DUI, and many other charges.
                </p>
                <p className="text-lg opacity-80 leading-relaxed text-left">
                    Thayer approach to handling a case is one that focuses on the adversarial nature of the process. You do not win cases by begging prosecutors or trying to focus on collaborating; you win cases by being prepared, knowing the law, and presenting a strong defense.

                </p>
                <p className="text-lg opacity-80 leading-relaxed text-left">
                    Thayer will be dedicated to getting you the best outcome on your case. He will be prepared for trial, know the law, and tell your story.
                </p>
            </div>
        </section>
    );
};

export default Hero;