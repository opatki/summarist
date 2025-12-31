import { 
  collection, 
  query, 
  where, 
  getDocs, 
  Firestore, // The type for your DB
  QuerySnapshot 
} from "firebase/firestore";

export async function isUserSubscribed(
  db: Firestore, 
  userId: string
): Promise<boolean> {
  const subscriptionsRef = collection(db, "customers", userId, "subscriptions");
  
  const q = query(
    subscriptionsRef, 
    where("status", "in", ["active", "trialing"]) // Note: Stripe uses "trialing", not "trialling"
  );

  const querySnapshot: QuerySnapshot = await getDocs(q);
  return !querySnapshot.empty;
}