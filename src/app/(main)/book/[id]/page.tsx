import { Book } from "@/src/types";
import BookDetails from "@/src/components/BookDetails";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BookDetailsPage({ params }: PageProps) {
    const { id } = await params;
    const res = await fetch(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`)
    const book: Book = await res.json();    

    return (
        <BookDetails book={book} />
    )
}