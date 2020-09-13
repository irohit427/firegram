import {useState, useEffect} from 'react';
import { storage, store, timestamp } from '../config/firebase';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = storage.ref(file.name);
        const collectionRef = store.collection('images');
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
            console.log(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ url: url, createdAt})
            setUrl(url);
        })
    }, [file])

    return { progress, url, error };
}

export default useStorage;