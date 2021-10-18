import {FC, useCallback, useState} from "react";
import Link from 'next/link'
import {FaChevronDown, FaChevronUp, FaUser} from "react-icons/all";

const MenuItem: FC<{initialShown?: boolean, title: string}> = ({initialShown, title, children}) => {
  const [isShown, setShown] = useState<boolean>(initialShown ?? false);

  // si no tiene hijos:
  //   font-normal
  // si tiene hijos:
  //   mostrar chevron
  //   font-bold
  //   text-gray cuando está abierto


  return (
    <div className="flex flex-col cursor-pointer" onClick={() => setShown(prev => !prev)}>

      <div className="flex">
        <div className={`flex-1 ${!children ? "" : "font-bold"}`}>{title}</div>
        <div className="cursor-pointer text-primary">
          {isShown ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>

      {isShown && <div className="flex-1 ml-20px">{children}</div>}
    </div>
  );
};

const OverlayMenu: FC<{
  isOpen: boolean;
  onClose?: () => void;
  onSearch?: (searchValue: string) => void;
}> = ({
  isOpen,
  onClose = () => {},
  onSearch = () => {},
}) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = useCallback((e) => {
    e.preventDefault();
    onSearch(searchValue);
  }, [searchValue]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 bottom-0 w-320px flex-col select-none">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-auto mt-18px mr-20px cursor-pointer" onClick={() => onClose()}>
        <line x1="1.10051" y1="20.8996" x2="20.8995" y2="1.10059" stroke="#E84300" strokeWidth="2"/>
        <line x1="1.10054" y1="1.10051" x2="20.8995" y2="20.8995" stroke="#E84300" strokeWidth="2"/>
      </svg>

      <form className="relative flex w-full items-stretch bg-gray-200 mt-40px" onSubmit={handleSearchSubmit}>
        <input type="text" placeholder="Search" onChange={handleSearchChange}
               className="pl-20px py-14px placeholder-gray-400 text-16px leading-24px text-gray-900 relative bg-gray-200 outline-none focus:outline-none w-full pr-10"/>
        <span
          className="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3 cursor-pointer"
          onClick={() => onSearch(searchValue)}
        >
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </span>
      </form>

      <ul>
        <li><Link href="/about-us"><a>About Us</a></Link></li>
        <li>
          <MenuItem title="Individuals">
            <ul>
              <li><Link href="/sign-up"><a>Create account or sign up</a></Link></li>
              <li><Link href="/campaigns"><a>Discover campaigns</a></Link></li>
              <li><Link href="/challenges"><a>Create or join a challenge</a></Link></li>
              <li><Link href="/match"><a>Find your match</a></Link></li>
            </ul>
          </MenuItem>
        </li>
        <li><Link href="/nonprofits"><a>Nonprofits</a></Link></li>
        <li><Link href="/corporations"><a>Corporations</a></Link></li>
        <li>
          <MenuItem title="Resources" />
        </li>
        <li>
          <Link href="/log-in"><a className="flex"><FaUser className="text-primary" />&nbsp;Log In</a></Link></li>
      </ul>
    </div>
  )
}

export default OverlayMenu;
