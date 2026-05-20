function PrimaryButton({
  children,
  size = "md",
  className = "",
  type = "button",
  ...rest
}) {
  return (
    <button
      type={type}
      className={`btn btn-${size} ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
