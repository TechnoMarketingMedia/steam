import db from "../../../utils/db";

export default async(req,res) => {
    const { id } = req.query
    try {

        const parentDocRef =  db.collection('entries').doc(id);
        const subcollectionSnapshot = await parentDocRef.collection('pparts').get()

        if(!subcollectionSnapshot.empty){
            var subcollectionData = []
            subcollectionSnapshot.forEach(doc => {
                subcollectionData.push({id : doc.id , date : doc.data()})
            })

            res.status(200).json(subcollectionData)
        }
        else {
            res.status(404).end()
        }

    } catch(error) {
        console.log(error)
        res.status(404).end()
    }
}