import { supabase } from "../lib/supabase-client";
import { useState, useEffect } from "react";
import useSession from "../hooks/useSession";
function Header() {
  const headerLinks = [{ label: "About", url: "/about" }];
const {isAuthenticated} = useSession();
  const login = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "localhost:3000",
      },
    });
  };
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
      throw error;
    }
  };
  return (
    <header className="Header-container px-4 sm:px-6 md:px-8 w-full">
      <div className="px-4 sm:px-6 md:px-8 flex items-center pt-6 lg:pt-8 justify-between">
        <div className="relative flex items-center  text-slate-700 font-semibold text-sm leading-6">
          <h3 className="text-[22px] text-primary font-bold tracking-wide">
            <a href="/">
              <span className="text-brand-primary">GiftMaster</span>.AI
            </a>
          </h3>
        </div>
        <div className="">
          <ul className="flex">
            {headerLinks.map((link, i) => (
              <li
                key={i}
                className="text-brand-primary px-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-500 "
              >
                <a href={link.url} className="">
                  {link.label}
                </a>
              </li>
            ))}

            <li className="text-brand-primary px-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-500 ">
              {isAuthenticated ? (
                <a className="" onClick={() => signOut()}>
                  Log Out
                </a>
              ) : (
                <a className="" onClick={() => login()}>
                  Log In
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
