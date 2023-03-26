import * as XLSX from 'xlsx'
import { useState } from 'react';




const ReadUploadFile = (e) => {
    const [formData,setFormData]=useState();
    e.preventDefault();
    if (e.target.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = XLSX.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const json = XLSX.utils.sheet_to_json(worksheet);
            setFormData( json);
            console.log(formData)
          };
        reader.readAsArrayBuffer(e.target.files[0]);
    }
  }
  

  function Submit() {
    return (
      <div >
        
        
  
  <form style={{textAlign:"center"}}>
    
      <input
          type="file"
          name="upload"
          id="upload"
          onChange={ReadUploadFile}
      />
  <button type='submit' onClick={ReadUploadFile}>submit</button>
  </form>
  
 
      </div>
    );
  }

  export default Submit;