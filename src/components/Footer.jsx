import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-4 opacity-75">
      <div className="text-center items-center justify-center flex flex-col">
        <Link
          className="flex flex-col justify-between items-center text-sm font-bold"
          href="https://tools.sandri.my.id"
          target="_blank"
        >
          <Image
            src="/eltoolnobg.webp"
            alt="elvxk tool"
            width={23}
            height={23}
          />
          ELVXK TOOL
        </Link>
        <p className="text-sm">
          Made with love © {new Date().getFullYear()} sandri.my.id.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
