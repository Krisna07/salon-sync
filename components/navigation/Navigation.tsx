"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/discover", label: "Discover" },
    { href: "/appointments", label: "Appointments" },
    { href: "/profile", label: "Profile" },
  ];

  return (
    <nav className="sticky top-0 w-full bg-primary/80 backdrop-blur-md shadow-[0_0_2px_0_white] z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="md:flex grid items-center justify-between h-16">
          <Link href="/" className="text-xl font-semibold">
            SalonSync
          </Link>
          <div className="flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "text-accent  border-accent"
                    : "hover:text-white/50 border-transparent"
                } transition-colors border-b-2 `}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
