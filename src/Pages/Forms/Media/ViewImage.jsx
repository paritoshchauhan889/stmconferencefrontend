import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { URL } from '../../../api/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Viewimage.css'

const ViewImage = () => {
  const [data, setData] = useState([]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success('Url copied to clipboard');
      })
      .catch((err) => {
        toast.error('Error copying text to clipboard');
      });
  };

  const getUserData = async () => {
    const res = await axios.get(`${URL}/image/getfile`, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (res.status === 200) {
      setData(res.data);
    } else {
      alert("Error");
    }
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <div className="container">
       <p>Total Rows: {data.length}</p>
      <ToastContainer />
      <div className="row  overflow-auto" style={{height:'800px'}}>
        {data.map((file) => (
          <div className="col-md-3" key={file._name}>
            <div className="image-container" >
              <img src={file.imgpath}  alt={file._name}  style={{width:'300px',height:'200px'}}/>
              <div className="image-name">{file.name}</div>
            </div>
            <div style={{margin:"20px"}}>
              <button className='btn btn-outline-primary' onClick={() => copyToClipboard(file.imgpath)}>Copy to Clipboard</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewImage;
