import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto py-[20px]">
        <h1 className="font-bold text-[18px] flex-[2]">SolHire</h1>
        <ul className="flex items-center flex-1 justify-between font-semibold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/jobs">Jobs</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
