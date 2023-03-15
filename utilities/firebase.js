import { initializeApp } from "firebase/app";
import { useCallback, useEffect, useState } from "react";
import { getDatabase, onValue, ref, update } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDgVg3iVvgnV3iAWlKvfdvDsUEmjcfUtMs",
  authDomain: "coralclient-59585.firebaseapp.com",
  databaseURL: "https://coralclient-59585-default-rtdb.firebaseio.com",
  projectId: "coralclient-59585",
  storageBucket: "coralclient-59585.appspot.com",
  messagingSenderId: "708701666248",
  appId: "1:708701666248:web:9fae4b5776c967259c1efd",
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);
const storage = getStorage();

// Initialize Firebase

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(
    () =>
      onValue(
        ref(database, path),
        (snapshot) => {
          setData(snapshot.val());
        },
        (error) => {
          setError(error);
        }
      ),
    [path]
  );

  return [data, error];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message =
    error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback(
    (value) => {
      update(ref(database, path), value)
        .then(() => setResult(makeResult()))
        .catch((error) => setResult(makeResult(error)));
    },
    [database, path]
  );

  return [updateData, result];
};

export default storage;
