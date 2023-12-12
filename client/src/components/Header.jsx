import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl max-auto p-6">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-lg flex flex-wrap">
            <span className="text-blue-600">Kingarments</span>
          </h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/about">
            <li className="text-blue-600 text-sm sm:text-lg">About us</li>
          </Link>
          <Link to="/product">
            <li className="text-blue-600 text-sm sm:text-lg">Our Product</li>
          </Link>
          <Link to="/contact-us">
            <li className="text-blue-600 text-sm sm:text-lg">Contact us</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
