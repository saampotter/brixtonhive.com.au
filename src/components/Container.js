const Container = ({ className, children, ...rest }) => (
  <div
    className={`flex items-center justify-center overflow-hidden relative z-0 min-h-screen px-4 py-24 ${className}`}
    {...rest}
  >
    {children}
  </div>
);

export default Container;
