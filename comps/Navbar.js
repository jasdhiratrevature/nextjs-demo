import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
      <nav>
        <div className="logo">
          <Image src="/friends.png" width={128} height={77} alt="Site logo"/>
        </div>
        <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/friends/">Friends Listing</Link>
      </nav>
  );
  }
   
  export default Navbar;