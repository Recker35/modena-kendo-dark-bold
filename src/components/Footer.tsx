import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6 bg-muted">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading text-sm tracking-widest uppercase text-muted-foreground">
          © 2026 Modena Kendo Club
        </p>
        <a
          href="https://instagram.com/modenakendo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Instagram className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}
