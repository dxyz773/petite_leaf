function PageHeader({ title, src, className }) {
  return (
    <div
      className="hero min-h-[35rem] opacity-90"
      style={{
        backgroundImage: `url('./${src}')`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content">
        <h1 className={className}>{title}</h1>
        <div className="max-w-md"></div>
      </div>
    </div>
  );
}

export default PageHeader;
