type ContainerProps = {
  children: React.ReactNode;
};
export function Container({ children }: ContainerProps) {
  return <div className="max-w-app mx-auto px-4"> {children}</div>;
}
