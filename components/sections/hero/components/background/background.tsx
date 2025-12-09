const Background = () => {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />
      <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />
    </div>
  );
};

export { Background };
