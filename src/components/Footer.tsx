import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted">
      <div className="flex items-center justify-between px-8 md:px-10 py-8 md:py-10 gap-6 md:gap-8">
        <p className="font-heading text-xs md:text-sm tracking-widest uppercase text-muted-foreground">
          © {currentYear} Modena Kendo Club
        </p>
        <div className="flex gap-6 md:gap-8">
          <a
            href="https://instagram.com/modenakendo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="Instagram"
          >
            <FaInstagram className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            href="https://www.facebook.com/ModenaKendoClub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="Facebook"
          >
            <FaFacebook className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            href="https://tiktok.com/@modenakendo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="TikTok"
          >
            <FaTiktok className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
