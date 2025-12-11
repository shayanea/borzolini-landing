interface DesktopNavigationProps {
  navItems: { label: string; href: string }[];
}

export const DesktopNavigation = ({ navItems }: DesktopNavigationProps) => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="hidden items-center gap-8 md:flex">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={(e) => handleClick(e, item.href)}
          className="cursor-pointer text-sm text-gray-300 transition-colors duration-200 hover:text-white"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};
