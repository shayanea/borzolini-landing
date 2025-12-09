interface LogoProps {
  brandInitial: string;
  brandName: string;
}

export const Logo = ({ brandInitial, brandName }: LogoProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600 font-bold text-white">
        {brandInitial}
      </div>
      <span className="text-lg font-semibold">{brandName}</span>
    </div>
  );
};
