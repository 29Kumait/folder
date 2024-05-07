import React, { useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';
import { useAuthContext } from '../Authentication';
import { app } from '../../firebaseConfig';

interface CVData {
    personalDetails: {
        name: string;
        email: string;
    };
    education: string[];
    workExperience: string[];
    skills: string[];
}

const initialCVData: CVData = {
    personalDetails: { name: '', email: '' },
    education: [''],
    workExperience: [''],
    skills: ['']
};

const CVForm: React.FC = () => {
    const [cvData, setCvData] = useState<CVData>(initialCVData);
    const { user } = useAuthContext();
    const db = getDatabase(app);

    const handleInputChange = <T extends keyof CVData>(section: T, value: CVData[T]) => {
        setCvData(prev => ({ ...prev, [section]: value }));
    };

    const saveCV = async () => {
        if (user) {
            const cvRef = ref(db, `cvs/${user.uid}`);
            await set(cvRef, cvData);
            alert("CV saved successfully!");
        } else {
            alert("You must be logged in to save your CV.");
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Name"
                value={cvData.personalDetails.name}
                onChange={e => handleInputChange('personalDetails', { ...cvData.personalDetails, name: e.target.value })}
            />
            <input
                type="email"
                placeholder="Email"
                value={cvData.personalDetails.email}
                onChange={e => handleInputChange('personalDetails', { ...cvData.personalDetails, email: e.target.value })}
            />
            <textarea
                placeholder="Education"
                value={cvData.education.join("\n")}
                onChange={e => handleInputChange('education', e.target.value.split("\n"))}
            />
            <textarea
                placeholder="Work Experience"
                value={cvData.workExperience.join("\n")}
                onChange={e => handleInputChange('workExperience', e.target.value.split("\n"))}
            />
            <textarea
                placeholder="Skills"
                value={cvData.skills.join(", ")}
                onChange={e => handleInputChange('skills', e.target.value.split(", "))}
            />
            <button onClick={saveCV}>Save CV</button>
        </div>
    );
};

export default CVForm;