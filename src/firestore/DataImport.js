import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

// TEST FOR IMPORTING DATA IN DB

const DataImport = () => {
const handleImportClick = async () => {
try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Jonte",
      last: "Lovelance",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
}}
return (
    <div>
      <button onClick={handleImportClick}>Import Data</button>
    </div>
  );
}

export default DataImport;  