import { useState, useEffect } from 'react';
import { store } from '../config/firebase'

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unSub = store.collection(collection)
            .onSnapshot((snap) => {
                console.log(snap);
                let documents = [];
                snap.forEach((doc) =>{
                    documents.push({...doc.data(), id: doc.id});
                });
                setDocs(documents)
            })
            return () => unSub();
    }, [collection])

    return { docs };
}

export default useFirestore;