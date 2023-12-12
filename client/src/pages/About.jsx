import { Link } from "react-router-dom";

export default function About() {
  return (
    <body>
      <div className="py-20 px-6 max-w-6xl max-auto">
        <h1 className="text-3xl mb-4 font-bold text-slate-800">What We Do</h1>
        <p className="font-bold mb-4 text-slate-600">
          Our business scope mainly consists of two parts:
        </p>
        <p className="mb-4 text-slate-700">Part I: Export of textiles</p>
        <p className="mb-4 text-slate-700">
          The main products of clothing are workwear and casual wear. Workwear
          includes jumpsuits, work overalls, and work jackets. Casual wear
          includes jackets, winter padded jackets, and casual trousers, shorts,
          and jeans.
        </p>
        <p className="mb-4 text-slate-700">
          Part II: Non-woven clothing and Non-woven fabric series products
        </p>
        <p className="mb-4 text-slate-700">
          This type of product includes protective clothing, surgical gowns,
          aprons, sleeves, collaborative clothing, and disposable medical
          supplies.
        </p>
        <p className="mb-4 text-slate-700">We have our own production base.</p>
        <p className="mb-4 text-slate-700">
          Please{" "}
          <Link to="/contact-us" className="text-blue-500 hover:underline">
            contact us
          </Link>{" "}
          if you need these kinds of products,thank you very much!
        </p>
      </div>
    </body>
  );
}
