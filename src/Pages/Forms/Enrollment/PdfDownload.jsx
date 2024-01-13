// PDFDownload.js
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const PDFDownload = ({ rowData }) => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <button onClick={handlePrint}>Download PDF</button>
      <div style={{ display: 'none' }}>
        <div ref={componentRef}>
          <h2>Row Data</h2>
          <p>First Name: {rowData.firstname}</p>
          <p>Last Name: {rowData.lastname}</p>
          <p>Email: {rowData.email}</p>
          <p>Contact Number: {rowData.contactnumber}</p>
        </div>
      </div>
    </div>
  );
};

export default PDFDownload;
