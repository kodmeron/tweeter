import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const DataExport = () => {
  const [exportedData, setExportedData] = useState('');

  const handleExportClick = async () => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    let data = '';

    querySnapshot.forEach((doc) => {
      data += `${doc.id} => ${JSON.stringify(doc.data())}\n`;
    });

    setExportedData(data);
  };

  return (
    <div>
      <button onClick={handleExportClick}>Export Data</button>
      <pre>{exportedData}</pre>
    </div>
  );
};

export default DataExport;
