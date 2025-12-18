import { React } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import Loading from "../../Loading/Loading";

const Footer = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  if (loading) return <Loading></Loading>;
  const GoDashbord = () => {
    if (user.role === "hr") {
      navigate("/hr_dashbord");
    } else {
      navigate("/employee_dashbord");
    }
  };
  const GoProfile = () => {
    if (user.role === "hr") {
      navigate("/hr_dashbord/profile");
    } else {
      navigate("/employee_dashbord/emprofile");
    }
  };
  return (
    <>
      <footer className="bg-[#F5F5F5] text-base-content p-10 mt-20">
        <div className="footer sm:footer-horizontal mb-5">
          <aside className="max-w-[250px]">
            <Link className="text-primary text-2xl font-bold" to="/">
              AssetFlow
            </Link>
            <p className="text-secondary text-[14px] md:text-[16px]">
              AssetFlow is a smart and secure asset management solution designed
              to simplify tracking, monitoring, and managing your business
              resources in one platform
            </p>
          </aside>

          <nav className="text-secondary text-[14px] md:text-[16px]">
            <h6 className="text-[16px] md:text-[18px] text-primary font-semibold">
              Quick Links
            </h6>
            <Link to="/">Home</Link>
            <button
              onClick={GoDashbord}
              type="button"
              className="cursor-pointer"
            >
              Dashbord
            </button>
            <button
              onClick={GoProfile}
              type="button"
              className="cursor-pointer"
            >
              Profile
            </button>
          </nav>
          <nav className="text-secondary text-[14px] md:text-[16px]">
            <h6 className="text-[16px] md:text-[18px] text-primary font-semibold">
              Stay In Touch
            </h6>
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              className="hover:underline"
            >
              <span className="mr-1 inline-block">
                <FaFacebook />
              </span>{" "}
              Facebook
            </Link>
            <Link
              to="https://www.linkedin.com"
              target="_blank"
              className="hover:underline"
            >
              <span className="mr-1 inline-block">
                <FaLinkedin />
              </span>
              Linkedin
            </Link>
            <Link
              to="https://x.com/home"
              target="_blank"
              className="hover:underline"
            >
              <span className="mr-1 inline-block">
                <FaSquareXTwitter />
              </span>
              X(Twitter)
            </Link>
          </nav>
        </div>

        <div className="text-primary  text-[14px] font-semibold md:text-[18px] md:font-bold  p-4 text-center">
          <p>Copyright &copy; 2025 AssetFlow. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
