import React from "react";

const Header = () => {
  return <header class="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
    <div class="max-w-screen-2 w-full mx-auto">
      <h1>
        <a href="/" className="logo">
          <img src="/images/logo.svg" width={40} height={40} alt="" />
        </a>
      </h1>
    </div>
  </header>;
};

export default Header;
