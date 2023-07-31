import React, { useState } from 'react';

const Query = () => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    organization: '',
    officeAddress: '',
    city: '',
    email: '',
    telephone: '',
    mobile: '',
    yesNo: 'yes', // Default value for the radio button
    querySubject: '',
    query: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, you can access the form data from the formData state
    console.log(formData);
    // Perform any actions like sending data to a server, etc.
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="bg-white flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <h2 className="text-4xl font-bold mb-4 text-black text-center">INQUERY</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4 text-black">
          <input type="text" name="name" placeholder="Name*" value={formData.name} onChange={handleChange} required />
          <input type="text" name="designation" placeholder="Designation" value={formData.designation} onChange={handleChange} />
          <input type="text" name="organization" placeholder="Organization" value={formData.organization} onChange={handleChange} />
          <input type="text" name="officeAddress" placeholder="Office Address" value={formData.officeAddress} onChange={handleChange} />
          <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
          <input type="email" name="email" placeholder="E-mail address*" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="telephone" placeholder="Telephone No." value={formData.telephone} onChange={handleChange} />
          <input type="tel" name="mobile" placeholder="Mobile*" value={formData.mobile} onChange={handleChange} required />
          <div>
            <label>Yes</label>
            <input type="radio" name="yesNo" value="yes" checked={formData.yesNo === 'yes'} onChange={handleChange} />
            <label>No</label>
            <input type="radio" name="yesNo" value="no" checked={formData.yesNo === 'no'} onChange={handleChange} />
          </div>
          <input type="text" name="querySubject" placeholder="Subject of Query*" value={formData.querySubject} onChange={handleChange} required />
          <textarea name="query" placeholder="Query" rows="4" value={formData.query} onChange={handleChange}></textarea>
          <button type="submit" className="bg-[#00df9a] text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Query;
