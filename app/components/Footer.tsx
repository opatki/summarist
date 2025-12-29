export default function Footer(): React.ReactNode {
    return (
      <section id="footer" className="bg-[#f1f6f4]">
        <div className="py-10 w-full">
          <div className="max-w-[1070px] w-full mx-auto px-6">
            <div className="relative flex flex-col md:flex-row justify-between text-sm mt-8 mb-16 gap-8 md:gap-0">
              <div className="z-10">
                <div className="font-semibold mb-4 text-lg text-[#032b41]">
                  Actions
                </div>
                <div>
                  <div className="mb-3 leading-none">
                    <a className="text-[#394547] text-sm cursor-not-allowed">Summarist Magazine</a>
                  </div>
                  <div className="mb-3 leading-none">
                    <a className="text-[#394547] text-sm cursor-not-allowed">Cancel Subscription</a>
                  </div>
                  <div className="mb-3 leading-none">
                    <a className="text-[#394547] text-sm cursor-not-allowed">Help</a>
                  </div>
                  <div className="mb-3 leading-none">
                    <a className="text-[#394547] text-sm cursor-not-allowed">Contact us</a>
                  </div>
                </div>
              </div>
              <div className="z-10">
                <div className="font-semibold mb-4 text-lg text-[#032b41]">
                  Useful Links
                </div>
                <div>
                  <div className="mb-3 leading-none">
                    <a className="text-[#394547] text-sm cursor-not-allowed">Pricing</a>
                  </div>
                  <div className="mb-3 leading-none">
                    <a className="text-[#394547] text-sm cursor-not-allowed">Summarist Business</a>
                  </div>
                  <div className="mb-3 leading-none">
                    <a className="text-[#394547] text-sm cursor-not-allowed">Gift Cards</a>
                  </div>
                  <div className="mb-3 leading-none">
                    <a className="text-[#394547] text-sm cursor-not-allowed">Authors & Publishers</a>
                  </div>
                </div>
              </div>
              <div className="z-10">
                <div className="font-semibold mb-4 text-lg text-[#032b41]">
                  Company
                </div>
                <div>
                  <div className="mb-3 leading-none">
                    <a className="text-[#394547] text-sm cursor-not-allowed">About</a>
                  </div>
                  <div className="mb-3 leading-none">
                    <a className="text-[#394547] text-sm cursor-not-allowed">Careers</a>
                  </div>
                  <div className="mb-3 leading-none">
                    <a className="text-[#394547] text-sm cursor-not-allowed">Partners</a>
                  </div>
                  <div className="mb-3 leading-none">
                    <a className="text-[#394547] text-sm cursor-not-allowed">Code of Conduct</a>
                  </div>
                </div>
              </div>
              <div className="z-10">
                <div className="font-semibold mb-4 text-lg text-[#032b41]">
                  Other
                </div>
                <div>
                  <div className="mb-3 leading-none">
                    <a className="text-[#394547] text-sm cursor-not-allowed">Sitemap</a>
                  </div>
                  <div className="mb-3 leading-none">
                    <a className="text-[#394547] text-sm cursor-not-allowed">Legal Notice</a>
                  </div>
                  <div className="mb-3 leading-none">
                    <a className="text-[#394547] text-sm cursor-not-allowed">Terms of Service</a>
                  </div>
                  <div className="mb-3 leading-none">
                    <a className="text-[#394547] text-sm cursor-not-allowed">Privacy Policies</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="text-[#032b41] font-medium">
                Copyright &copy; 2023 Summarist.
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}