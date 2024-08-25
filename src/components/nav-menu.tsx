import NavLink from "./nav-link";

export default function NavMenu() {
  return (
    <nav className="flex items-center gap-8 ">
      <NavLink href="/" className="">
        Home
      </NavLink>
      <NavLink href="#" className="">
        Collections
      </NavLink>
      <span className="text-3xl px-4 italic">speedy shop</span>
      <NavLink href="#" className="">
        Summer
      </NavLink>
      <NavLink href="#" className="">
        Sale
      </NavLink>
    </nav>
  );
}
