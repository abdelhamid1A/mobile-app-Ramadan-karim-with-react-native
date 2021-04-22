// @ts-ignore
import firebase from '../../../environments/firebase';

const db = firebase.firestore();
export class BreakFastService {
    constructor(){ }

    addBreakFast(assistance : any) {


        if (db) {
            db.collection('BreakFast').add({
                nbPlaces: assistance.nbPlaces,
                city: assistance.city,
                description: assistance.description,
                latitude: assistance.latitude,
                longitude: assistance.longitude,
            })
        }

    }
    async getAllBreakFast() {

            

        const BreakFast = firebase.firestore().collection('BreakFast')
        const querySnapshot = await BreakFast.get()
        const tempDoc = querySnapshot.docs.map((doc:any) => {
          return { id: doc.id, ...doc.data() }
        })
        const allBreakFast = tempDoc;
        return allBreakFast;
    }
}