import Cart from "../cart";
import MegaMenu from "../mega-menu";
import NavMenu from "../nav-menu";

export default function Navbar() {
  return (
    <header className="flex backdrop-blur bg-brand-beige/80 md:bg-brand-beige/80 sticky top-0 z-20 items-center mb-6  border-b border-brand-green/20 justify-between">
      <MegaMenu />
      <NavMenu />
      <Cart />
    </header>
  );
}
