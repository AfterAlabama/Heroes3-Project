import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { FirebaseConfig } from './firebaseConfig';

const app = initializeApp(FirebaseConfig)

export const storage = getStorage(app)
