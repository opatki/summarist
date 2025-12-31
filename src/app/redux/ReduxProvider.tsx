"use client";

import { Provider, useDispatch } from "react-redux";
import { store } from "./store"; 
import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initFirebase } from "@/src/firebase";
import { setUser, removeUser } from "./userSlice";
import { getFirestore } from "firebase/firestore";
import { isUserSubscribed } from "@/src/stripe/stripe";

function AuthStateSync({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const app = initFirebase();
  const auth = getAuth(app);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (user) {
      const db = getFirestore(app);
      
      const subscribedStatus = await isUserSubscribed(db, user.uid);

      dispatch(setUser({
        email: user.email,
        uid: user.uid,
        isSubscribed: subscribedStatus
      }));
    } else {
      dispatch(removeUser());
    }
  });

  return () => unsubscribe();
}, [dispatch, auth, app]);


  return <>{children}</>;
}

// 2. Export the main Provider
export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AuthStateSync>
        {children}
      </AuthStateSync>
    </Provider>
  );
}