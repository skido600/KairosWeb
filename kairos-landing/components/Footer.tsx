import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-black text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:h-24 md:flex-row md:py-0 lg:px-8">
        {/* Company Text */}
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>

        {/* Page Links + Social Icons */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          {/* Page Links */}
          <nav className="flex gap-4 md:gap-6">
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              About
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Contact
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Terms
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Privacy
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-400 hover:text-white">
              <FaFacebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <FaTwitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <FaInstagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
