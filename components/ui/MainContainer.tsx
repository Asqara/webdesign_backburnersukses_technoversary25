export default function MainContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        min-h-screen
        bg-primary-50
        rounded-b-4xl pb-5
        ${className}
      `}
    >
      {children}
    </div>
  );
}
