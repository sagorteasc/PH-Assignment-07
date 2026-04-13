import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-[#244D3F]">
            <footer className="footer footer-horizontal footer-center text-primary-content py-10">
                <div>
                    <Image
                        src={"/assets/logo-xl.png"}
                        alt="Footer logo"
                        width={200}
                        height={200}
                    />
                    <p className="opacity-80">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

                    <nav>
                        <h3 className="font-medium text-xl mb-2">Social Links</h3>
                        <div className="grid grid-flow-col gap-4">
                            <div className="bg-white w-fit rounded-full p-2">
                                <Image
                                    className="w-fit"
                                    src="/assets/instagram.png"
                                    alt="Facebook Logo"
                                    width={30}
                                    height={30}
                                />
                            </div>
                            <div className="bg-white w-fit rounded-full p-2">
                                <Image
                                    className="w-fit"
                                    src="/assets/facebook.png"
                                    alt="Facebook Logo"
                                    width={30}
                                    height={30}
                                />
                            </div>
                            <div className="bg-white w-fit rounded-full p-2">
                                <Image
                                    className="w-fit"
                                    src="/assets/twitter.png"
                                    alt="Facebook Logo"
                                    width={30}
                                    height={30}
                                />
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="border-t border-[#E9E9E9]">
                    <div className="pt-6 flex flex-col md:flex-row gap-4 md:gap-32 justify-between">
                        <p className="opacity-50">© {new Date().getFullYear()} KeenKeeper. All right reserved</p>

                        <div>
                            <ul className="opacity-50 flex gap-4 items-center">
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                                <li>Cookies</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    );
};

export default Footer;