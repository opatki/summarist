"use client"

interface NavProps {
  open: () => void;
}

export default function Nav({ open }: NavProps): React.ReactNode {
  return (
    <nav className="h-20">
      <div className="flex justify-between items-center max-w-[1070px] w-full h-full mx-auto px-6">
        <figure className="max-w-[200px]">
          <img className="w-full h-full" src="logo.png" alt="logo" />
        </figure>
        <ul className="flex gap-6">
          <li className="cursor-pointer text-[#032b41] transition-colors duration-100 hover:text-[#2bd97c]"
          onClick={open}>
            Login
          </li>
          <li className="hidden sm:block cursor-not-allowed text-[#032b41] transition-colors duration-100 hover:text-[#2bd97c]">
            About
          </li>
          <li className="hidden sm:block cursor-not-allowed text-[#032b41] transition-colors duration-100 hover:text-[#2bd97c]">
            Contact
          </li>
          <li className="hidden sm:block cursor-not-allowed text-[#032b41] transition-colors duration-100 hover:text-[#2bd97c]">
            Help
          </li>
        </ul>
      </div>
    </nav>
  )
}