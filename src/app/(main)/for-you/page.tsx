import Link from "next/link"
import SelectedBook from "@/src/components/SelectedBook"
import RecommendedBook from "@/src/components/RecommendedBook"

export default function ForYouPage() {
  return (
    <>
      <div className="w-full max-w-fit py-10 container mx-auto px-4 font-sans">
        <div className="for-you__wrapper">
          <div className="text-[22px] font-bold text-[#032b41] mb-3">
            Selected just for you
          </div>
            <SelectedBook />
        </div>
        <div>
          <div className="text-[22px] font-bold text-[#032b41] mb-3">
            Recommended For You
          </div>
          <div className="text-[#394547] font-light mb-3">
            We think you’ll like these
          </div>

          <RecommendedBook type="recommended" />
        </div>

        <div>
          <div className="text-[22px] font-bold text-[#032b41] mb-3">
            Suggested Books
          </div>
          <div className="text-[#394547] font-light mb-3">
            Browse those books
          </div>

          <RecommendedBook type="suggested" />
        </div>
        </div>
    </>
  )
}
