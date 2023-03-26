import Form from 'react-bootstrap/Form';

function FForm() {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Employee Details</Form.Label>
        <Form.Select disabled>
          <option>Select Employee name</option>
        </Form.Select>


      <div style={{textAlign:'center', marginTop:"20px" }}>
      
       <input placeholder='Emp Id' type='text' disabled/>
       <input placeholder='Name' type='text' disabled/>
       <input placeholder='DOJ' type='text' disabled/>
       <input placeholder='Email' type='text' disabled/>
       <input placeholder='Phone' type='text' disabled/>
       <input placeholder='PAN Number' type='text' disabled/>
       <input placeholder='Aadhar Number' type='text' disabled/>
       <input placeholder='Bank Name' type='text' disabled/>
       <input placeholder='AC' type='text' disabled/>
       <input placeholder='IFS Code' type='text' disabled/>
       <input placeholder='Date Of Birth' type='text' disabled/>
       <input placeholder='Address' type='text' disabled/>


      </div>



      </Form.Group>
    </>
  );
}

export default FForm;