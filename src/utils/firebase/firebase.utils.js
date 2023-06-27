import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth"
import {
    getFirestore,
    getDoc,
    setDoc,
    doc,
    collection,
    writeBatch,
    query,
    getDocs,
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}

/**
 * initialise the app
 */
const app = initializeApp(firebaseConfig)
/**
 * for analytics from firebase
 */
const analytics = getAnalytics(app)

/**
 * setting up different providers
 */
const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
    prompt: "select_account",
})

/**
 * to get the authentication token from firebase
 */
export const auth = getAuth()

/**
 * to trigger the google popup screen for google authentication
 */
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
/**
 * sign in with google redirect
 */
export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, googleProvider)

/**
 * initialize firestore
 */
export const db = getFirestore()

/**
 * add to firestore db
 */
export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
) => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)

    objectsToAdd.forEach((obj) => {
        const docRef = doc(collectionRef, obj.title.toLowerCase())
        batch.set(docRef, obj)
    })

    await batch.commit()
    console.log("done")
}

/**
 * retreive data from firebase
 */
export const getCategoriesAndDocument = async () => {
    const collectionRef = collection(db, 'categories')
    const q = query(collectionRef)

    const querySnapShot = await getDocs(q)
    const categoryMap = querySnapShot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data()
        acc[title.toLowerCase()] = items
        return acc
    }, {})

    return categoryMap
}

/**
 * set authenticated user inside firestore db
 */
export const createUserDocumentFromAuth = async (
    userAuth,
    extraInformation = {}
) => {
    if (!userAuth) return
    /**
     * creating a pointer inside the firebase db with the unique id from prop (userAuth)
     */
    const userDocRef = doc(db, "users", userAuth.uid)
    /**
     * trying to fetch the user details with the pointer
     */
    const userSnapShot = await getDoc(userDocRef)
    /**
     * if user doesn't exists a new user is created
     */
    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...extraInformation,
            })
        } catch (err) {
            console.log("error:", err)
        }
    }

    return userDocRef
}

/**
 * create user with email and password
 */
export const createAuthUserEmailPassword = async (email, password) => {
    if (!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password)
}

/**
 * sign in with email and password
 */
export const signInWithEmailPass = async (email, password) => {
    if (!email || !password) return

    return await signInWithEmailAndPassword(auth, email, password)
}

/**
 * sign out user
 */
export const signOutUser = async () => {
    await signOut(auth)
}

/**
 * listener for auth changes happening throughout the app
 */
export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback)

/**
 * create wishlist for a user
 */
export const createWishlist = async (userAuth, itemToAdd) => {
    if(!userAuth) {
        console.log('Log in first')
        return
    }

    try {
        const wishListRef = doc(db, 'wishlist', userAuth.uuid)
        const wishListSnapShot = await getDoc(wishListRef)

        console.log('wishListSnapShot', wishListSnapShot)
    } catch (err) {
        console.log('Error while creating wishlist')
    }   
}