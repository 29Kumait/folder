import { getDatabase, ref, set, push, get } from "firebase/database";
import { app } from './firebaseConfig';

const db = getDatabase(app);

interface CVData {
    name: string;
    description: string;
    uid: string;
}

export const addCV = async (cvData: CVData) => {
    const newCvRef = push(ref(db, `cvs/${cvData.uid}`));
    await set(newCvRef, cvData);
};

export const fetchUserCV = async (uid: string): Promise<CVData[]> => {
    const cvRef = ref(db, `cvs/${uid}`);
    const snapshot = await get(cvRef);
    if (snapshot.exists()) {
        return Object.values(snapshot.val() || {}) as CVData[];
    } else {
        console.log("No CV data available");
        return [];
    }
};
