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
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-neutral-200 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
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
                    ? "text-black"
                    : "text-neutral-500 hover:text-black"
                } transition-colors`}
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
