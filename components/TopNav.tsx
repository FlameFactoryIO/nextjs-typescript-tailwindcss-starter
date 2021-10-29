import {FC, ReactNode, useCallback, useState} from "react";
import {useRouter} from "next/router";
import Link from 'next/link'
import {FaChevronDown, FaChevronUp, FaUser} from "react-icons/fa";

const TopNavItem: FC<{ title: string, path: string, href: string }> = ({title, path, href}) => {
  return (
    <Link href={href}><a className={path === href ? "border-b-2 border-primary-500" : ""}>{title}</a></Link>
  );
}

const SideNavItem: FC<{ initialOpen?: boolean, title: ReactNode, isSelected?: boolean, className?: string }> = ({
  initialOpen,
  title,
  isSelected = false,
  className,
  children
}) => {
  const [isOpen, setOpen] = useState<boolean>(initialOpen ?? false);
  return (
    <div className={`flex flex-col cursor-pointer p-20px border-b ${isSelected ? "bg-primary-500 text-white" : ""} ${className ?? ""}`}>

      <div className="flex" onClick={children && (() => setOpen(prev => !prev))}>
        <div className={`flex-1 ${isOpen ? "opacity-60" : ""}`}>{title}</div>
        {children ? (
          <div className="cursor-pointer text-primary flex items-center">
            {isOpen ? <FaChevronUp/> : <FaChevronDown/>}
          </div>
        ) : null}
      </div>

      {isOpen && <div className="flex-1 pt-10px">{children}</div>}
    </div>
  );
};

const TopNav: FC<{
  onSearch?: (searchValue: string) => void,
  className?: string,
}> = ({
  onSearch,
  className,
}) => {
  const router = useRouter();

  const [isOpen, setOpen] = useState<boolean>(false);

  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = useCallback((e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchValue);
    }
  }, [searchValue]);

  return (
    <>
      <div
        className={`z-50 hidden d:flex fixed w-full select-none bg-white px-50px py-20px items-center ${className ?? ""}`}>
        <Link href="/">
          <a className="flex">
            <svg width="41" height="37" viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg"
                 className="min-w-42px">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M6.61065 11.1378L11.0069 18.5955C11.4314 19.222 11.492 20.0871 11.0676 20.6539V20.7434C10.2793 22.6227 7.6415 22.7122 6.61065 20.982L2.21437 13.5242C0.27395 10.3025 0.607461 6.27529 3.00267 3.38167C5.39788 0.398565 9.64256 -0.794678 13.3112 0.547721C15.3122 1.32333 17.0708 2.72539 18.1016 4.54509L18.8293 5.79799C19.1628 6.27529 19.1628 6.90174 18.8293 7.37904L16.8282 10.8096C16.7688 10.9071 16.7223 10.9408 16.6718 10.9775C16.6451 10.997 16.6172 11.0172 16.5856 11.0483C16.3431 11.1378 16.0096 11.0483 15.858 10.8096L13.7963 7.28955C12.6745 5.46985 10.2793 4.54509 8.2782 5.55934C8.2782 5.55934 8.21756 5.64884 8.12661 5.64884C6.12554 6.75259 5.48884 9.2584 6.61065 11.1378ZM22.8476 4.97667C23.9019 3.09759 25.7004 1.69573 27.747 0.979888C31.499 -0.362316 35.8402 0.741274 38.0728 4.02222C40.5225 6.85576 40.8326 10.942 38.879 14.1633L34.3828 21.62C33.3285 23.35 30.6308 23.2008 29.8245 21.3814V21.2919C29.4834 20.5164 29.5765 19.7409 29.9796 19.0251L34.3208 11.807C35.4681 9.92791 35.003 7.39264 33.1114 6.2294C33.1114 6.2294 33.0494 6.2294 32.9564 6.13992C30.9098 5.03633 28.3982 5.75217 27.2508 7.63125L16.708 25.1396C15.5606 27.1081 16.3048 29.5241 18.2584 30.6277C19.5917 31.4032 21.2972 31.3137 22.5996 30.5382C24.5531 29.2557 24.9562 26.7502 23.8089 24.8711L22.0104 21.8884C21.6693 21.4112 21.6693 20.7849 22.0104 20.3076L24.057 16.8477C24.1177 16.7503 24.1653 16.7165 24.2169 16.6798C24.2443 16.6604 24.2728 16.6401 24.305 16.6091C24.5531 16.5196 24.8942 16.6091 25.0492 16.8477L28.5222 22.5446C29.4214 23.8868 29.8245 25.4378 29.8245 27.0186C29.8245 31.9699 25.6694 36.0562 20.522 36.0562H20.429C18.7855 35.9667 17.1731 35.5789 15.7777 34.8034C11.2815 32.298 9.73104 26.8099 12.3358 22.485L22.8476 4.97667Z"
                    fill="#E84300"/>
            </svg>
            <div className="ml-8px font-bold text-20px leading-30px">
              Move the Chain
            </div>
          </a>
        </Link>

        <div className="flex-1 flex gap-20px items-center justify-center text-14px leading-21px">
          <TopNavItem title="About us" path={router?.asPath} href="/about-us"/>
          <TopNavItem title="Individuals" path={router?.asPath} href="/individuals"/>
          <TopNavItem title="Nonprofits" path={router?.asPath} href="/nonprofits"/>
          <TopNavItem title="Corporations" path={router?.asPath} href="/corporations"/>
          <TopNavItem title="Resources" path={router?.asPath} href="/resources"/>
        </div>

        <div className="mr-40px">
          <Link href="/search">
            <a>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M11.9579 10.9565L16.7923 15.7909C17.0692 16.0678 17.0692 16.5155 16.7923 16.7924C16.6542 16.9306 16.4729 17 16.2915 17C16.1101 17 15.9288 16.9306 15.7907 16.7924L10.9564 11.9581C9.7997 12.8945 8.32991 13.4583 6.7291 13.4583C3.01889 13.4583 0 10.4394 0 6.72914C0 3.01889 3.01886 0 6.72907 0C10.4393 0 13.4582 3.01893 13.4582 6.72918C13.4582 8.33 12.8944 9.7998 11.9579 10.9565ZM1.41663 6.72912C1.41663 9.6588 3.79945 12.0416 6.72913 12.0416C9.65877 12.0416 12.0416 9.6588 12.0416 6.72912C12.0416 3.79944 9.6588 1.41662 6.72913 1.41662C3.79945 1.41662 1.41663 3.79944 1.41663 6.72912Z"
                      fill="black"/>
              </svg>
            </a>
          </Link>
        </div>

        <Link href="/log-in">
          <a className="flex items-center">
            <FaUser className="text-primary"/>&nbsp;Log In
          </a>
        </Link>
      </div>

      <div
        className={`z-50 flex d:hidden fixed w-full select-none bg-white rounded-b-10pxi px-20px pt-12px pb-10px items-center ${className ?? ""}`}>
        <Link href="/">
          <a className="flex">
            <svg width="30.09" height="28" viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg"
                 className="min-w-42px">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M6.61065 11.1378L11.0069 18.5955C11.4314 19.222 11.492 20.0871 11.0676 20.6539V20.7434C10.2793 22.6227 7.6415 22.7122 6.61065 20.982L2.21437 13.5242C0.27395 10.3025 0.607461 6.27529 3.00267 3.38167C5.39788 0.398565 9.64256 -0.794678 13.3112 0.547721C15.3122 1.32333 17.0708 2.72539 18.1016 4.54509L18.8293 5.79799C19.1628 6.27529 19.1628 6.90174 18.8293 7.37904L16.8282 10.8096C16.7688 10.9071 16.7223 10.9408 16.6718 10.9775C16.6451 10.997 16.6172 11.0172 16.5856 11.0483C16.3431 11.1378 16.0096 11.0483 15.858 10.8096L13.7963 7.28955C12.6745 5.46985 10.2793 4.54509 8.2782 5.55934C8.2782 5.55934 8.21756 5.64884 8.12661 5.64884C6.12554 6.75259 5.48884 9.2584 6.61065 11.1378ZM22.8476 4.97667C23.9019 3.09759 25.7004 1.69573 27.747 0.979888C31.499 -0.362316 35.8402 0.741274 38.0728 4.02222C40.5225 6.85576 40.8326 10.942 38.879 14.1633L34.3828 21.62C33.3285 23.35 30.6308 23.2008 29.8245 21.3814V21.2919C29.4834 20.5164 29.5765 19.7409 29.9796 19.0251L34.3208 11.807C35.4681 9.92791 35.003 7.39264 33.1114 6.2294C33.1114 6.2294 33.0494 6.2294 32.9564 6.13992C30.9098 5.03633 28.3982 5.75217 27.2508 7.63125L16.708 25.1396C15.5606 27.1081 16.3048 29.5241 18.2584 30.6277C19.5917 31.4032 21.2972 31.3137 22.5996 30.5382C24.5531 29.2557 24.9562 26.7502 23.8089 24.8711L22.0104 21.8884C21.6693 21.4112 21.6693 20.7849 22.0104 20.3076L24.057 16.8477C24.1177 16.7503 24.1653 16.7165 24.2169 16.6798C24.2443 16.6604 24.2728 16.6401 24.305 16.6091C24.5531 16.5196 24.8942 16.6091 25.0492 16.8477L28.5222 22.5446C29.4214 23.8868 29.8245 25.4378 29.8245 27.0186C29.8245 31.9699 25.6694 36.0562 20.522 36.0562H20.429C18.7855 35.9667 17.1731 35.5789 15.7777 34.8034C11.2815 32.298 9.73104 26.8099 12.3358 22.485L22.8476 4.97667Z"
                    fill="#E84300"/>
            </svg>
            <div className="ml-6px font-bold text-10px">
              Move the Chain
            </div>
          </a>
        </Link>

        <div className="ml-auto mr-20px cursor-pointer flex h-28px items-center" onClick={() => setOpen(true)}>
          <svg width="28" height="12" viewBox="0 0 28 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1" x2="28" y2="1" stroke="black" strokeWidth="2"/>
            <line y1="11" x2="28" y2="11" stroke="black" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      {isOpen && (
        <div
          className={`z-50 d:hidden fixed top-0 right-0 bottom-0 w-full max-w-320px bg-white flex-col select-none text-14px leading-18-2px font-medium pb-55px ${className ?? ""}`}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
               className="ml-auto mt-18px mr-20px cursor-pointer" onClick={() => setOpen(false)}>
            <line x1="1.10051" y1="20.8996" x2="20.8995" y2="1.10059" stroke="#E84300" strokeWidth="2"/>
            <line x1="1.10054" y1="1.10051" x2="20.8995" y2="20.8995" stroke="#E84300" strokeWidth="2"/>
          </svg>

          <form className="relative flex w-full items-stretch bg-gray-200 mt-40px" onSubmit={handleSearchSubmit}>
            <input type="text" placeholder="Search" onChange={handleSearchChange}
                   className="pl-20px py-14px placeholder-gray-400 text-16px leading-24px text-gray-900 relative bg-gray-200 outline-none focus:outline-none w-full pr-10"/>
            <span
              className="z-10 h-full leading-snug font-normal absolute text-gray-400 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3 cursor-pointer"
              onClick={handleSearchSubmit}
            >
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
             viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        </span>
          </form>

          <SideNavItem title={<Link href="/about-us"><a>About us</a></Link>}
                       isSelected={router?.asPath === "/about-us"}
                       className="mt-14px" />
          <SideNavItem title="Individuals">
            <SideNavItem title={<Link href="/sign-up"><a className="font-light" >Create account or sign up</a></Link>}
                         isSelected={router?.asPath === "/sign-up"}
                         className="border-none py-8px"/>
            <SideNavItem title={<Link href="/campaigns/search"><a className="font-light">Discover campaigns</a></Link>}
                         isSelected={router?.asPath === "/campaigns/search"}
                         className="border-none py-8px"/>
            <SideNavItem title={<Link href="/challenges"><a className="font-light">Create or join a challenge</a></Link>}
                         isSelected={router?.asPath === "/challenges"}
                         className="border-none py-8px"/>
            <SideNavItem title={<Link href="/nonprofits/search"><a className="font-light">Find your match</a></Link>}
                         isSelected={router?.asPath === "/nonprofits/search"}
                         className="border-none py-8px"/>
          </SideNavItem>
          <SideNavItem title={<Link href="/nonprofits"><a>Nonprofits</a></Link>}
                       isSelected={router?.asPath === "/nonprofits"} />
          <SideNavItem title={<Link href="/corporations"><a>Corporations</a></Link>}
                       isSelected={router?.asPath === "/corporations"} />
          <SideNavItem title="Resources"/>
          <SideNavItem
            title={<Link href="/log-in"><a className="flex items-center">
              <FaUser className="text-primary"/>
              &nbsp;Log In
            </a></Link>}
            isSelected={router?.asPath === "/log-in"}
            className="border-none"/>
        </div>
      )}
    </>
  )
}

export default TopNav;
