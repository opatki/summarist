
import { Book } from "@/src/types";
import BookPlayer from "@/src/components/BookPlayer";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PlayerPage({ params }: PageProps) {
    const { id } = await params;
    const res = await fetch(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`)
    const book: Book = await res.json();    
    
    return (
        <BookPlayer book={book} />
    )
}
