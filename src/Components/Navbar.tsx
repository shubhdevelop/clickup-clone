import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import {
  AlarmClock,
  BellDot,
  CheckCircle2,
  DownloadIcon,
  File,
  HelpCircle,
  Keyboard,
  LogOut,
  LucideLayoutGrid,
  Notebook,
  PaintRoller,
  PlusCircle,
  Search,
  Settings,
  Share2Icon,
  Sparkles,
  Trash2,
  User2,
  Video,
} from 'lucide-react';

function Navbar() {
  return (
    <nav className="w-full h-10 px-4 bg-[#323452] flex flex-row text-sm justify-between items-center py-1">
      <img
        src="https://app-cdn.clickup.com/clickup-symbol_color.6c3fc778987344003164b4b4c9826eb8.svg"
        alt="logo"
        width={15}
        height={15}
      />
      <div className="sm:flex justify-between items-start hidden lg:w-[500px] w-[300px] relative  leg:left-[100px] bg-white/[.1] rounded-md  text-white cursor-pointer">
        <div className="flex justify-start items-center w-full px-2 py-[2px] gap-2 hover:bg-white/[.2] rounded-l-md">
          <Search width={15} strokeWidth={2} /> Search....{' '}
        </div>
        <div className="flex justify-start items-center w-16 px-2 py-[2px] gap-2 border-l-[.5px] border-white/[.2] hover:bg-white/[.2] rounded-r-md">
          <Sparkles width={15} strokeWidth={2} /> AI
        </div>
      </div>
      <div className="flex justify-normal items-center gap-1">
        <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 py-1 rounded-sm  cursor-pointer text-white">
          Upgrade
        </button>
        <div className="flex justify-center items-center py-1 px-2 gap-1 hover:bg-white/[.2]  cursor-pointer opacity-1 rounded-sm text-white">
          <PlusCircle stroke="white" strokeWidth={2} width={15} />
          New
        </div>
        <div className="text-white/[.2]"> | </div>
        <div className="py-1 p-2 hidden sm:block rounded-sm hover:bg-white cursor-pointer hover:bg-white/[.2] ">
          <CheckCircle2 stroke="white" strokeWidth={2} width={15} />
        </div>
        <div className="py-1 p-2 hidden md:block rounded-sm hover:bg-white cursor-pointer hover:bg-white/[.2] ">
          <Notebook stroke="white" strokeWidth={2} width={15} />
        </div>
        <div className="py-1 p-2 hidden md:block rounded-sm hover:bg-white cursor-pointer hover:bg-white/[.2] ">
          <Video stroke="white" strokeWidth={2} width={15} />
        </div>
        <div className="py-1 p-2 hidden md:block rounded-sm hover:bg-white cursor-pointer hover:bg-white/[.2] ">
          <AlarmClock stroke="white" strokeWidth={2} width={15} />
        </div>
        <div className="py-1 p-2 hidden md:block rounded-sm hover:bg-white cursor-pointer hover:bg-white/[.2] ">
          <File stroke="white" strokeWidth={2} width={15} />
        </div>
        <div className="py-1 p-2 hidden md:block rounded-sm hover:bg-white cursor-pointer hover:bg-white/[.2] ">
          <LucideLayoutGrid stroke="white" strokeWidth={2} width={15} />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="px-1 py-1 bg-white/[.2] flex justify-between items-center rounded-full cursor-pointer gap-1">
              <div className="p-[.5] h-6 w-6  rounded-full flex justify-center items-start bg-blue-500 text-white font-bold ">
                <p>S</p>
              </div>
              <CaretDownIcon color="white" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="relative right-5 top-2 w-72 text-xs">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-sm">
              <User2 size={20} strokeWidth={1} className="mr-2" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="text-sm">
              <PaintRoller size={20} strokeWidth={1} className="mr-2" /> Themes
            </DropdownMenuItem>
            <DropdownMenuItem className="text-sm">
              <Settings size={20} strokeWidth={1} className="mr-2" /> Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="text-sm">
              <BellDot size={20} strokeWidth={1} className="mr-2" /> Notification Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-sm">
              <Keyboard size={20} strokeWidth={1} className="mr-2" /> keyboard shortcuts
            </DropdownMenuItem>
            <DropdownMenuItem className="text-sm">
              <DownloadIcon size={20} strokeWidth={1} className="mr-2" /> Download apps
            </DropdownMenuItem>
            <DropdownMenuItem className="text-sm">
              <Share2Icon size={20} strokeWidth={1} className="mr-2" /> Referrals
            </DropdownMenuItem>

            <DropdownMenuItem className="text-sm">
              <HelpCircle size={20} strokeWidth={1} className="mr-2" /> Help
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-sm">
              <Trash2 size={20} strokeWidth={1} className="mr-2" /> Trash
            </DropdownMenuItem>
            <DropdownMenuItem className="text-sm">
              <LogOut size={20} strokeWidth={1} className="mr-2" /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

export default Navbar;
