"use client";

import { Provider, useDispatch } from "react-redux";
import { store } from "./store"; // Adjust path if needed
import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initFirebase } from "@/src/firebase";
import { setUser, removeUser } from "./userSlice"; // Import your actions

// 1. Create a wrapper component to handle the Auth Listener
// We need this internal component because `useDispatch` only works INSIDE <Provider>
function AuthStateSync({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const app = initFirebase();
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in: Dispatch to Redux
        dispatch(setUser({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
        }));
      } else {
        // User is logged out: Clear Redux
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch, auth]);

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