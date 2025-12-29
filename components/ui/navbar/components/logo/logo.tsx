import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  brandInitial: string;
  brandName: string;
}

export const Logo = ({ brandName }: LogoProps) => {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/10">
        <Image
          src="/icon.png"
          alt={brandName}
          fill
          className="object-cover"
          sizes="40px"
        />
      </div>
      <span className="text-lg font-semibold">{brandName}</span>
    </Link>
  );
};
