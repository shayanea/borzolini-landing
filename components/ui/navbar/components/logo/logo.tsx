import Link from "next/link";

interface LogoProps {
  brandInitial: string;
  brandName: string;
}

export const Logo = ({ brandInitial, brandName }: LogoProps) => {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="bg-primary-500 flex h-10 w-10 items-center justify-center rounded-lg font-bold text-white">
        {brandInitial}
      </div>
      <span className="text-lg font-semibold">{brandName}</span>
    </Link>
  );
};
