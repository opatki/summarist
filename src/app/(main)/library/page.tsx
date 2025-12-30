"use client"

import type { Book } from '@/src/types';
import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import LoginPrompt from '@/src/components/LoginPrompt';
import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';
import { db } from '@/src/firebase';
import RecommendedBook from '@/src/components/RecommendedBook';
import SavedBook from '@/src/components/SavedBook';

export default function LibraryPage() {
    const user = useAppSelector((state) => state.user);
    const [books, setBooks] = React.useState<Book[]>([]);

    React.useEffect(() => {
        const fetchBooks = async () => {
        if (!user?.uid) {
            return;
        }

        try {
            const booksRef = collection(db, 'savedBooks');
            const q = query(booksRef, where('userId', '==', user.uid));
            const querySnapshot = await getDocs(q);
            const itemsList = querySnapshot.docs.map((doc) => {
                return doc.data() as Book;
            });

            setBooks(itemsList);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
        };

        fetchBooks();
    }, [user?.uid]);

    return (
        <>
            {!user.uid ? <LoginPrompt page="see your library."/> : (
            <div className="w-full max-w-fit container mx-auto px-4 font-sans">
            <div className="w-full py-5 mx-auto min-w-[1000px]">
                <div className="mb-3 text-[22px] font-bold text-[#032b41]">
                    Saved Books
                </div>
                <div className="mb-3 font-light text-[#394547]">
                    {books.length} items
                </div>
                
                {books.length < 1 ? <div className="mx-auto mb-[56px] flex max-w-fit flex-col items-center gap-2 rounded-[12px] bg-[#f1f6f4] p-8 text-center">
                    <div className="text-lg font-bold text-[#032b41]">
                        Save your favorite books!
                    </div>
                    <div className="text-[#394547]">
                        When you save a book, it will appear here.
                    </div>
                </div> : <SavedBook books={books} />}

                {/* Finished Section */}
                <div className="mb-4 text-[22px] font-bold text-[#032b41]">
                    Finished
                </div>
                <div className="mb-4 font-light text-[#394547]">
                    0 items
                </div>
                
                <div className="mx-auto mb-[56px] flex max-w-fit flex-col items-center gap-2 rounded-[12px] bg-[#f1f6f4] p-8 text-center">
                    <div className="text-lg font-bold text-[#032b41]">
                    Done and dusted!
                    </div>
                    <div className="text-[#394547]">
                    When you finish a book, you can find it here later.
                    </div>
                </div>
                </div> 
            </div>)}
        </>
    )
}

// // components/DisplayData.js (Example component)
// import { useEffect, useState } from 'react';
// import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';
// import { db } from '../lib/firebase'; // Adjust path as needed

// function DisplayData() {
//   const [items, setItems] = useState([]);
//   const [singleItem, setSingleItem] = useState(null);

//   // Read all documents from a collection
//   useEffect(() => {
//     const fetchItems = async () => {
//       const querySnapshot = await getDocs(collection(db, 'items'));
//       const itemsList = querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
//       setItems(itemsList);
//     };

//     fetchItems();
//   }, []);

//   // Read a single document by its ID
//   const fetchSingleItem = async (itemId) => {
//     const docRef = doc(db, 'items', itemId);
//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists()) {
//       console.log("Document data:", docSnap.data());
//       setSingleItem({ id: docSnap.id, ...docSnap.data() });
//     } else {
//       console.log("No such document!");
//       setSingleItem(null);
//     }
//   };

//   // Read documents with a query (e.g., where name equals 'New Item')
//   const fetchFilteredItems = async () => {
//     const q = query(collection(db, 'items'), where('name', '==', 'New Item'));
//     const querySnapshot = await getDocs(q);
//     const filteredItems = querySnapshot.docs.map(doc => ({
//       id: doc.id,
//       ...doc.data()
//     }));
//     console.log("Filtered items:", filteredItems);
//     // You could update state with filteredItems if needed
//   };


//   return (
//     <div>
//       <h2>All Items:</h2>
//       <ul>
//         {items.map(item => (
//           <li key={item.id}>
//             {item.name} - {item.description} (ID: {item.id})
//           </li>
//         ))}
//       </ul>

//       <button onClick={() => fetchSingleItem('my-unique-item-id')}>Fetch Specific Item</button>
//       {singleItem && (
//         <p>Specific Item: {singleItem.name} - {singleItem.description}</p>
//       )}

//       <button onClick={fetchFilteredItems}>Fetch Filtered Items</button>
//     </div>
//   );
// }

// export default DisplayData;
