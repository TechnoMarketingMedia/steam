import db from '../../../utils/db';
import { doc, getDoc,collection } from "firebase/firestore";


export default async (req, res) => {
    try {
      const entries = await db.collection('entries').get();
      if(!entries.empty)
      {
        const entriesData = entries.docs.map(entry => ({
          id: entry.id,
          ...entry.data()
        }));
        res.status(200).json({ entriesData });
      }
      else{
        res.status(404).end()
      }
     
    } catch (e) {
      res.status(400).end();
    }
  }