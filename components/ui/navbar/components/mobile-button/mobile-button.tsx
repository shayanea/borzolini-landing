interface MobileButtonProps {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

export const MobileButton = ({ setIsOpen, isOpen }: MobileButtonProps) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="rounded-lg p-2 text-gray-300 transition-colors duration-200 hover:bg-gray-800 hover:text-white md:hidden"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
    >
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  );
};
