import React from "react";

export const Header = () => {
  return (
    <main className="text-center banner-gradient">
      <div className="container">
        <p>
          <span className="hidden sm:inline">
            Introducing 30days challenge with vickjay ➡{" "}
          </span>
          <a href="#" className="underline underline-offset-4 font-medium">
            Explore the 30days
          </a>
        </p>
      </div>
    </main>
  );
};