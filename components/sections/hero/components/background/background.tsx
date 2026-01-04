const Background = () => {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="bg-primary-600/10 absolute -top-40 -left-40 h-80 w-80 rounded-full blur-3xl" />
      <div className="bg-primary-600/10 absolute -right-40 -bottom-40 h-80 w-80 rounded-full blur-3xl" />
    </div>
  );
};

export { Background };
