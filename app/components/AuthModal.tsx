import React from "react";

interface LoginModalProps {
  closeModal: () => void;
}

type AuthMode = "login" | "signup" | "forgot";

export default function AuthModal({ closeModal }: LoginModalProps): React.ReactNode {
  const [modalType, setModalType] = React.useState<AuthMode>("login");

  function toggleAuthMode(): void {
    setModalType((prev) => (prev === "login" ? "signup" : "login"));
  };

  return (
    <div 
      className="fixed inset-0 bg-black/75 flex items-center justify-center z-50"
      onClick={closeModal} 
    >
      <div 
        className="relative w-full max-w-[400px] bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)]"
        onClick={(e) => e.stopPropagation()}
      >
        {modalType === "forgot" && (
          <>
            <div className="pt-12 px-8 pb-6">
              <div className="text-center text-xl font-bold text-[#032b41] mb-6">
                Reset your password
              </div>
              
              <form className="flex flex-col gap-4">
                <input
                  className="h-10 border-2 border-[#bac8ce] rounded text-[#394547] px-3 outline-none focus:border-[#2bd97c]"
                  type="email"
                  placeholder="Email Address"
                />
                <button className="bg-[#2bd97c] text-[#032b41] w-full h-10 rounded text-base transition-colors duration-200 flex items-center justify-center min-w-[180px] hover:bg-[#20ba68]">
                  <span>Send reset password link</span>
                </button>
              </form>
            </div>
            
            <button 
              className="w-full h-10 text-center bg-[#f1f6f4] text-[#116be9] rounded-b font-light text-base hover:bg-[#e1e8e6] transition-colors duration-200"
              onClick={() => setModalType("login")}
            >
              Go to login
            </button>
          </>
        )}

        {modalType !== "forgot" && (
          <>
            <div className="pt-12 px-8 pb-6">
              <div className="text-center text-xl font-bold text-[#032b41] mb-6">
                {modalType === "signup" ? "Sign up to Summarist" : "Log in to Summarist"}
              </div>

              {modalType === "login" && (
                <>
                  <button className="relative flex items-center justify-center w-full h-10 rounded text-base text-white bg-[#3a579d] min-w-[180px] transition-colors duration-200 hover:bg-[#314a86]">
                    <figure className="absolute left-[2px] flex items-center justify-center w-9 h-9 rounded bg-transparent">
                      <svg
                        className="w-6 h-6"
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                      </svg>
                    </figure>
                    <div>Login as a Guest</div>
                  </button>

                  <div className="flex items-center my-4 before:content-[''] before:flex-1 before:h-[1px] before:bg-[#bac8ce] after:content-[''] after:flex-1 after:h-[1px] after:bg-[#bac8ce]">
                    <span className="mx-6 text-sm font-medium text-[#394547]">or</span>
                  </div>
                </>
              )}

              <button className="relative flex items-center justify-center w-full h-10 rounded text-base text-white bg-[#4285f4] min-w-[180px] transition-colors duration-200 hover:bg-[#3367d6]">
                <figure className="absolute left-[2px] flex items-center justify-center w-9 h-9 rounded bg-white">
                  <img
                    alt="google"
                    className="w-6 h-6"
                    src="google.png" 
                  />
                </figure>
                <div>{modalType === "signup" ? "Sign up with Google" : "Login with Google"}</div>
              </button>

              <div className="flex items-center my-4 before:content-[''] before:flex-1 before:h-[1px] before:bg-[#bac8ce] after:content-[''] after:flex-1 after:h-[1px] after:bg-[#bac8ce]">
                <span className="mx-6 text-sm font-medium text-[#394547]">or</span>
              </div>
              
              <form className="flex flex-col gap-4">
                <input
                  className="h-10 border-2 border-[#bac8ce] rounded text-[#394547] px-3 outline-none focus:border-[#2bd97c]"
                  type="text"
                  placeholder="Email Address"
                />
                <input
                  className="h-10 border-2 border-[#bac8ce] rounded text-[#394547] px-3 outline-none focus:border-[#2bd97c]"
                  type="password"
                  placeholder="Password"
                />
                <button className="bg-[#2bd97c] text-[#032b41] w-full h-10 rounded text-base transition-colors duration-200 flex items-center justify-center min-w-[180px] hover:bg-[#20ba68]">
                  <span>{modalType === "signup" ? "Sign up" : "Login"}</span>
                </button>
              </form>
            </div>

            {modalType === "login" && (
              <div 
                className="text-center text-[#116be9] font-light text-sm w-fit mx-auto mb-4 cursor-pointer hover:underline"
                onClick={() => setModalType("forgot")}
              >
                Forgot your password?
              </div>
            )}

            <button 
              className="w-full h-10 text-center bg-[#f1f6f4] text-[#116be9] rounded-b font-light text-base hover:bg-[#e1e8e6] transition-colors duration-200"
              onClick={toggleAuthMode}
            >
              {modalType === "signup" ? "Already have an account?" : "Don't have an account?"}
            </button>
          </>
        )}

        <div 
          className="absolute top-3 right-3 cursor-pointer group"
          onClick={closeModal}
        >
          <svg
            className="text-[#032b41] group-hover:text-gray-600 transition-colors"
            stroke="currentColor"
            fill="none"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}