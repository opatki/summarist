import { useModal } from "../ModalProvider";

export default function LoginPrompt({}) {
    const { openModal } = useModal();

    return (
        <div className="w-full py-10">
            <div className="mx-auto flex max-w-[460px] flex-col items-center">
                <img
                alt="login"
                src="/login.png"
                className="h-full w-full"
                />
                <div className="mb-4 text-center text-2xl font-bold text-[#032b41]">
                Log in to your account to see your library.
                </div>
                <button onClick={openModal} className="flex h-10 w-[100px] min-w-[180px] cursor-pointer items-center justify-center rounded bg-[#2bd97c] text-base text-[#032b41] outline-none transition-colors duration-200">
                    Login
                </button>
            </div>
        </div>
    )
}