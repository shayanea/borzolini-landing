import Link from "next/link";

interface MobileNavigationProps {
  setIsOpen: (isOpen: boolean) => void;
  navItems: { label: string; href: string }[];
}

export const MobileNavigation = ({
  setIsOpen,
  navItems,
}: MobileNavigationProps) => {
  return (
    <div className="border-t border-gray-800 py-4 md:hidden">
      <div className="flex flex-col gap-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm text-gray-300 transition-colors duration-200 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <div className="border-t border-gray-800 pt-4">
          <div className="flex flex-col gap-2">
            <button className="flex items-center justify-center gap-2 rounded-lg border border-white px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-white hover:text-gray-900">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 13.5c-.91 0-1.64.7-1.7 1.6h3.4c-.06-.9-.79-1.6-1.7-1.6m-4.5 0c-.9 0-1.65.7-1.7 1.6h3.4c-.05-.9-.8-1.6-1.7-1.6M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 15.1h-3v-5.6h3v5.6zm6-7c-.5 1.6-2 2.7-3.7 2.7s-3.2-1.1-3.7-2.7H7V6h10v5.1z" />
              </svg>
              iOS
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors duration-200 hover:bg-gray-100">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.23-.86-.28-.17-.66-.04-.82.27l-1.96 3.46c-2.92-.92-7.26-.92-10.18 0L4.59 5.65c-.16-.31-.54-.44-.82-.27-.27.17-.39.55-.23.86L6.4 9.48C3.3 11.74 1.7 15.42 1.7 19.2h20.6c0-3.78-1.6-7.46-4.7-9.72zM7 16.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm10 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
              </svg>
              Android
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
