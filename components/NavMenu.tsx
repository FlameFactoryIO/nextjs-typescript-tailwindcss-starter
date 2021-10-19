import {FC, useCallback, useState} from "react";
import Link from 'next/link'
import {FaChevronDown, FaChevronUp, FaUser} from "react-icons/all";

const MenuItem: FC<{initialOpen?: boolean, title: string, className?: string}> = ({initialOpen, title, className, children}) => {
  const [isOpen, setOpen] = useState<boolean>(initialOpen ?? false);
  return (
    <div className={`flex flex-col cursor-pointer p-20px border-b border-primary-100 ${className ?? ""}`}>

      <div className="flex" onClick={children && (() => setOpen(prev => !prev))}>
        <div className={`flex-1 ${isOpen ? "opacity-60" : ""}`}>{title}</div>
        {children ? (
          <div className="cursor-pointer text-primary flex items-center">
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        ): null }
      </div>

      {isOpen && <div className="flex-1 pt-10px">{children}</div>}
    </div>
  );
};

const NavMenu: FC<{
  isOpen: boolean,
  onClose?: () => void,
  onSearch?: (searchValue: string) => void,
  className?: string,
}> = ({
  isOpen,
  onClose = () => {},
  onSearch = () => {},
  className,
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
    <div className={`fixed top-0 right-0 bottom-0 flex-col select-none text-14px leading-18-2px font-medium pb-55px ${className ?? ""}`}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-auto mt-18px mr-20px cursor-pointer" onClick={() => onClose()}>
        <line x1="1.10051" y1="20.8996" x2="20.8995" y2="1.10059" stroke="#E84300" strokeWidth="2"/>
        <line x1="1.10054" y1="1.10051" x2="20.8995" y2="20.8995" stroke="#E84300" strokeWidth="2"/>
      </svg>

      <form className="relative flex w-full items-stretch bg-gray-200 mt-40px" onSubmit={handleSearchSubmit}>
        <input type="text" placeholder="Search" onChange={handleSearchChange}
               className="pl-20px py-14px placeholder-gray-400 text-16px leading-24px text-gray-900 relative bg-gray-200 outline-none focus:outline-none w-full pr-10"/>
        <span
          className="z-10 h-full leading-snug font-normal absolute text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3 cursor-pointer"
          onClick={() => onSearch(searchValue)}
        >
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </span>
      </form>

      <MenuItem title={<Link href="/about-us"><a>About us</a></Link>} className="mt-14px" />
      <MenuItem title="Individuals">
        <MenuItem title={<Link href="/sign-up"><a className="font-light">Create account or sign up</a></Link>} className="border-none py-8px" />
        <MenuItem title={<Link href="/campaigns"><a className="font-light">Discover campaigns</a></Link>} className="border-none py-8px" />
        <MenuItem title={<Link href="/challenges"><a className="font-light">Create or join a challenge</a></Link>} className="border-none py-8px" />
        <MenuItem title={<Link href="/match"><a className="font-light">Find your match</a></Link>} className="border-none py-8px" />
      </MenuItem>
      <MenuItem title={<Link href="/nonprofits"><a>Nonprofits</a></Link>} />
      <MenuItem title={<Link href="/corporations"><a>Corporations</a></Link>} />
      <MenuItem title="Resources" />
      <MenuItem title={<Link href="/log-in"><a className="flex items-center"><FaUser className="text-primary" />&nbsp;Log In</a></Link>} className="border-none" />
    </div>
  )
}

export default NavMenu;
