import { FaInstagram, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
const FindMe = () => {
    return (
        <div>
            <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
            <div className="flex gap-4">
                <a
                    className="bannerIcon"
                    href="https://www.instagram.com/prince.rajjjjj"
                    target="_blank"
                >
                    <FaInstagram />
                </a>
                <a
                    className="bannerIcon"
                    href="https://x.com/prince_rajjjjj"
                    target="_blank"
                >
                    <FaTwitter />
                </a>
                <a
                    className="bannerIcon"
                    href="https://www.linkedin.com/in/prince-raj-b93b40265/"
                    target="_blank"
                >
                    <FaLinkedinIn />
                </a>
            </div>
        </div>
    )
};
export default FindMe; 