import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
export default function Header() {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-3">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        {/* Left */}
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid items-center">
          <img
            src="http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
            onClick={() => router.push("/")}
          />
        </div>
        <div className="cursor-pointer h-24 w-10 relative lg:hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"
            onClick={() => router.push("/")}
          />
        </div>
        {/* Middle */}

        <div className="relative mt-1">
          <div className="absolute top-2 left-2">
            <SearchIcon className="h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
          />
        </div>
        <div className="flex space-x-4 items-center">
          <HomeIcon className=" hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
          <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
          <img
            src="https://lh3.googleusercontent.com/a/AEdFTp7FSGsYBPQMIVo6zGoG3CfV6VKSSb9Q9-5HN6J-cDY=s288-p-rw-no"
            alt=""
            className="h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
