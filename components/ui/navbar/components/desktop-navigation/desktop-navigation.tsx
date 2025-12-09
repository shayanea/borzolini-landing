import Link from "next/link";

interface DesktopNavigationProps {
  navItems: { label: string; href: string }[];
}

export const DesktopNavigation = ({ navItems }: DesktopNavigationProps) => {
  return (
    <div className="hidden items-center gap-8 md:flex">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm text-gray-300 transition-colors duration-200 hover:text-white"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};
