import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      isActive(path) ? "text-primary" : "text-text-secondary"
    }`;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-7xl">
          <Link to="/" className="text-xl font-bold text-primary">
            Portfólio
          </Link>
          <nav className="flex gap-8">
            <Link to="/" className={navLinkClass("/")}>
              Home
            </Link>
            <Link to="/skills" className={navLinkClass("/skills")}>
              Skills
            </Link>
            <Link to="/projects" className={navLinkClass("/projects")}>
              Projetos
            </Link>
            <Link to="/contact" className={navLinkClass("/contact")}>
              Contato
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;
