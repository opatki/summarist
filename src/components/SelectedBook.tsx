import Link from "next/link"

export default async function SelectedBook() {

    const res = await fetch('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected');
    const data = await res.json();
    const selectedBook = data[0];

    return (
        <Link
        className="flex flex-col md:flex-row justify-between w-full xl:w-2/3 bg-[#fbefd6] rounded p-4 md:p-6 mb-6 gap-6 hover:opacity-95 transition-opacity duration-200"
        href={`/book/${selectedBook.id}`}
        >
        <div className="text-[#032b41] w-full md:w-[40%] text-sm md:text-base font-medium">
            {selectedBook.subTitle}
        </div>

        <div className="hidden md:block w-[1px] bg-[#bac8ce] shrink-0" />

        <div className="flex gap-4 w-full md:w-[60%]">
            <figure className="relative h-[140px] w-[140px] min-w-[140px] shrink-0">
                <div className="absolute inset-0 bg-[#e0e0e0] rounded" />
                <img
                    className="relative w-full h-full block object-cover"
                    src={selectedBook.imageLink}
                    alt="book"
                />
            </figure>

            <div className="flex flex-col justify-center">
            <div className="font-bold text-[#032b41] mb-2 text-base">
                {selectedBook.title}
            </div>
            <div className="text-sm text-[#6b757b] font-light mb-2">
                {selectedBook.author}
            </div>
            <div className="flex items-center gap-2 text-[#032b41] text-sm">
                <div className="flex items-center justify-center">
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                </svg>
                </div>
                <div>3 mins 23 secs</div>
            </div>
            </div>
        </div>
        </Link>
    )
}