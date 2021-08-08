import NavbarComponent from "../components/Navbar";
import HeaderComponent from "../components/Header";

export interface LayoutProps {
  children: React.ReactNode;
}
const LayoutComponent: React.FC<LayoutProps> = (props: LayoutProps) => {
  return (
    <>
      <HeaderComponent />
      <NavbarComponent />
      {props.children}
    </>
  );
};

export default LayoutComponent;
