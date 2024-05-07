import React, { useState } from 'react';
import { uploadFile } from '../../firebaseConfig';

const ImageUpload: React.FC = () => {
    const [image, setImage] = useState<File | null>(null);
    const [imageURL, setImageURL] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    const handleUpload = async () => {
        if (image) {
            const url = await uploadFile(`images/${image.name}`, image);
            setImageURL(url);
            alert('Image uploaded successfully');
        }
    };

    return (
        <div>
            <input type="file" onChange={handleImageChange} />
            <button onClick={handleUpload}>Upload</button>
            {imageURL && <img src={imageURL} alt="Uploaded" />}
        </div>
    );
};

export default ImageUpload;


// style={{ position: 'fixed', bottom: 10, right: 10 }} 