
function Header() {
  const headerLinks = [{label: "About", url: ""}, {label: "Log in", url: ""}, {label: "Sign up", url: ""}];
  console.log(headerLinks)
  return (
    <header className="Header-container px-4 sm:px-6 md:px-8 w-full">
      <div className="px-4 sm:px-6 md:px-8 flex items-center pt-6 lg:pt-8 justify-between">
        <div className="relative flex items-center  text-slate-700 font-semibold text-sm leading-6">
          <h3 className="text-[22px] text-white font-bold tracking-wide">
            <a href="#">
              <span className="text-white">GiftMaster</span>.AI
            </a>
          </h3>
        </div>
        <div className="">
          <ul className="flex">
            {headerLinks.map(link => (
              <li className="text-white px-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-500 ">
                <a href={link.url} className="">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
