import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <div className="footer">
      <div className="social-media">
        <p>&copy; burgerq</p>
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
      </div>
    </div>
  );
}

export default Footer;
