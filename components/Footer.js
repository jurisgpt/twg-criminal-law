import Link from "next/link";
import Image from "next/image";
import config from "@/config";

import logo from "@/app/icon.png";
import LinkedinLogo from '@/assets/icons/linkden.png'
import TwitterLogo from '@/assets/icons/twitter.png'

const Footer = () => {
    return (
        <footer className="bg-black text-white max-sm:mt-24 border-t border-base-content/10">
            <div className="max-w-7xl mx-auto px-8 py-24">
                <div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <Link
                            href="/#"
                            aria-current="page"
                            className="flex gap-2 justify-center md:justify-start items-center"
                        >
                            <Image
                                src={logo}
                                alt={`${config.appName} logo`}
                                priority={true}
                                className="w-6 h-6"
                                width={24}
                                height={24}
                            />
                            <strong className="font-extrabold tracking-tight text-base md:text-lg">
                                {config.appName}
                            </strong>
                        </Link>

                        <p className="mt-3 text-sm text-base-content/80">
                            Tristan W. Gillespie, Esq.
                            11539 Park Woods Cir, Suite 304, Alpharetta, GA 30005
                        </p>
                    </div>
                    <div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center">
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                                Contact Us
                            </div>

                            <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                                <Link href="/#contactus" className="link link-hover">
                                    404-276-7277
                                </Link>
                                <Link href="/#email" className="link link-hover">
                                    abc@gmail.com
                                </Link>

                                <div className="flex flex-row space-x-2">

                                    <Link href=" https://www.linkedin.com/in/tristangillespie/"
                                        target="_blank" className="link link-hover">
                                        <Image src={LinkedinLogo}
                                            class="dark:!invert hover:opacity-60 transition-opacity duration-500 active:opacity-80"
                                            alt="linkedin"
                                            width={40}
                                            height={40}
                                        />
                                    </Link>
                                    <Link href="/#twitter" className="link link-hover">
                                        <Image src={TwitterLogo}
                                            class="dark:!invert hover:opacity-60 transition-opacity duration-500 active:opacity-80"
                                            alt="linkedin"
                                            width={40}
                                            height={40}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn btn-primary max-sm:mt-4 max-sm:mx-2 bg-[#ffffff] p-4 text-black cursor-pointer hover:bg-slate-200">Call Now : 404-276-7277</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
