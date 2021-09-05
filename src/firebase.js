import Firebase from "firebase/app"
let
  resolve,
  firebaseInstance,
  firestoreInstance

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.SNOWPACK_PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.SNOWPACK_PUBLIC_AUTH_DOMAIN,
  projectId: import.meta.env.SNOWPACK_PUBLIC_PROJECT_ID,
  storageBucket: import.meta.env.SNOWPACK_PUBLIC_STORAGE_BUCKET,
  appId: import.meta.env.SNOWPACK_PUBLIC_APP_ID,
}

const promise = new Promise(res => resolve = res)

export async function initialize () {
  if (import.meta.env.SSR) return undefined
  if (firebaseInstance) return firebaseInstance

  firebaseInstance = Firebase.initializeApp(firebaseConfig)
  resolve(firebaseInstance)
  return firebaseInstance
}

export async function getInstance () {
  if (import.meta.env.SSR) return undefined
  if (firebaseInstance) return firebaseInstance
  return promise
}

export async function getFirestore () {
  if (firestoreInstance) return firestoreInstance

  await import('firebase/firestore')
  const firebase = await getInstance()
  firestoreInstance = firebase.firestore()
  return firestoreInstance
}

export default {
  initialize,
  getInstance,
  getFirestore,
  Firebase,
}
