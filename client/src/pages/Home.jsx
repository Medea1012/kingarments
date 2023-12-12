import React from "react";

export default function Home() {
  return (
    <main>
      <link href="src/assets/Home.css" type="text/css" rel="stylesheet"></link>
      <div className="py-20 px-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-white">Who Are We</h1>
        <p className="mb-4 text-white">The words from General Manager:</p>
        <p className="mb-4 text-white">
          Food, clothing, housing and travelling are four basic necessities of
          people's life. Clothing leads human towards civilization. The British
          Industrial Revolution in the 18th century began with the textile
          industry. China's reform and opening up in the last century also began
          with the textile and clothing industry.
        </p>
        <p className="mb-4 text-white">
          I am fortunate to grow up with this era. My company, WUHAN SWITCH CO
          LTD founded in 2018. I have been engaged in the clothing production
          and export industry for more than 30 years. With 30 years of
          experience in clothing export, our company exports all types of work
          wear and casual wear. Our main markets are Europe and North America.
          Superior quality and excellent service are our advantages. Welcome
          friends from all over the world to discuss cooperation.
        </p>
        <div className="mb-2">
          <p className="text-white">Sincerely yours,</p>
          <p className="text-white">General Manager,</p>
          <p className="text-white">Gary</p>
        </div>
      </div>
    </main>
  );
}
