import React, { useState, useEffect } from 'react';
import { storage } from '../../firebaseConfig';
import { ref, getDownloadURL } from 'firebase/storage';

interface ImageProps {
    path: string;
}

const Image: React.FC<ImageProps> = ({ path }) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        const fetchImage = async () => {
            const storageRef = ref(storage, path);
            const url = await getDownloadURL(storageRef);
            setImageUrl(url);
        };

        fetchImage();
    }, [path]);

    return imageUrl ? <img src={imageUrl} alt="Uploaded" /> : <p>Loading...</p>;
};

export default Image;
