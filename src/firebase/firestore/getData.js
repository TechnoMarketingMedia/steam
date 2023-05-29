import { initializeApp } from "firebase/app";
import { getFirestore , doc , getDoc} from "firebase/firestore";

import { db } from "../config";

export default async function getDocument(collection , id) {

    let docRef = doc(db,collection,id)

    let result = null
    let error = null

    try{
        result = await getDoc(docRef)
    }catch(e){
        error = e
    }

    return{ result, error}

}