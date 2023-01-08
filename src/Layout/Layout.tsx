const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="border-b-1 border-dark-50 w-full flex items-center py-40px">
      {children}
    </div>
  );
};

export default Layout;
