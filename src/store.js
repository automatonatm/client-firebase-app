/*REDUX*/

import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import firebase from 'firebase'
import 'firebase/firestore'
import {reactReduxFirebase, firebaseReducer} from 'react-redux-firebase'
import {reduxFirestore, firestoreReducer} from 'redux-firestore'
import ReduxThunk from 'redux-thunk';


/*REDUX ENDS*/

const composeEnhancers = process.env.NODE_ENV === 'development' ? (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) : null || compose;

const firebaseConfig = {
    apiKey: "AIzaSyCq5sKOkM3lgBgGdC57qNBznY4HLF2SbG8",
    authDomain: "client-app-2f22e.firebaseapp.com",
    databaseURL: "https://client-app-2f22e.firebaseio.com",
    projectId: "client-app-2f22e",
    storageBucket: "client-app-2f22e.appspot.com",
    messagingSenderId: "853626620360",
    appId: "1:853626620360:web:a2fd588281a3cf696758fd"
};



// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
firebase.firestore();

// Add firebase to reducers

//Add All Reducers here
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
})


// Create store with reducers and initial state
const initialState = {}

const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(ReduxThunk)
))

export default store

