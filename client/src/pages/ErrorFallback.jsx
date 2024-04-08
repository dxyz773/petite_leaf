function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div
      className="hero min-h-screen opacity-90"
      style={{
        backgroundImage: `url('../element5-digital-z6i_UCBuu5Q-unsplash.jpg')`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="mb-44 mr-[10rem] max-w-md">
          <span className="tracking-wider">404</span>

          <h1
            className={"mb-5 font-serif text-5xl font-bold text-neutral-950/90"}
          >
            Oops!
          </h1>

          <p className="mb-8 font-serif uppercase tracking-wider text-neutral-900">
            {error.message}
          </p>
          <div className="flex gap-4">
            <button
              className="btn btn-primary w-28 rounded-sm bg-neutral-950 font-serif text-sm  font-normal tracking-wide text-neutral-200 hover:bg-lime-400 hover:text-neutral-950"
              onClick={resetErrorBoundary}
            >
              <span>&larr;</span>Return Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorFallback;
