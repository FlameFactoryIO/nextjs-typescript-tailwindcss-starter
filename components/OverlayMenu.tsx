import {FC, useCallback, useState} from "react";
import Link from 'next/link'
import {FaUser} from "react-icons/all";

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
    <div className="fixed top-0 right-0 bottom-0 w-320px flex-col">
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

          {/* todo: position svg from figma */}
          {/*<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
          {/*  <path fillRule="evenodd" clipRule="evenodd" d="M11.9579 10.9565L16.7923 15.7909C17.0692 16.0678 17.0692 16.5155 16.7923 16.7924C16.6542 16.9306 16.4729 17 16.2915 17C16.1101 17 15.9288 16.9306 15.7907 16.7924L10.9564 11.9581C9.7997 12.8945 8.32991 13.4583 6.7291 13.4583C3.01889 13.4583 0 10.4394 0 6.72914C0 3.01889 3.01886 0 6.72907 0C10.4393 0 13.4582 3.01893 13.4582 6.72918C13.4582 8.33 12.8944 9.7998 11.9579 10.9565ZM1.41668 6.72912C1.41668 9.6588 3.79951 12.0416 6.72918 12.0416C9.65883 12.0416 12.0417 9.6588 12.0417 6.72912C12.0417 3.79944 9.65886 1.41662 6.72918 1.41662C3.79951 1.41662 1.41668 3.79944 1.41668 6.72912Z" fill="black"/>*/}
          {/*</svg>*/}
        </span>
      </form>

      <ul>
        <li><Link href="/about-us"><a>About Us</a></Link></li>
        <li>
          Individuals
          <ul>
            <li><Link href="/sign-up"><a>Create account or sign up</a></Link></li>
            <li><Link href="/campaigns"><a>Discover campaigns</a></Link></li>
            <li><Link href="/challenges"><a>Create or join a challenge</a></Link></li>
            <li><Link href="/match"><a>Find you match</a></Link></li>
          </ul>
        </li>
        <li><Link href="/nonprofits"><a>Nonprofits</a></Link></li>
        <li><Link href="/corporations"><a>Corporations</a></Link></li>
        <li>
          Resources
          <ul>
          </ul>
        </li>
        <li>
          <Link href="/log-in"><a className="flex"><FaUser className="text-primary" />&nbsp;Log In</a></Link></li>
      </ul>
    </div>
  )
}

export default OverlayMenu;
