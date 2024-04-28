import { ref, set } from 'firebase/database';
import { Database } from 'firebase/database'; // Importing Database type fo typescript
import { User } from 'firebase/auth';

export const useStoreUserInDatabase = (db: Database) => {
    return async (user: User) => {
        const userRef = ref(db, 'users/' + user.uid);
        try {
            await set(userRef, {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                providerData: user.providerData.map(data => ({
                    providerId: data.providerId,
                    uid: data.uid,
                    displayName: data.displayName,
                    email: data.email,
                    photoURL: data.photoURL
                })),
                lastLogin: new Date().toISOString()
            });
        } catch (error) {
            throw error;
        }
    };
};
