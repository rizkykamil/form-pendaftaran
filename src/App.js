import React, {useState} from 'react';
import './App.css';


function App() {
  const [fields, setFields] = useState([{ nama: '', Kelas: '' }]);

  const handleChangeNama = (i, e) => {
    const _nama = [...fields];
    _nama[i].nama = e.target.value;
    setFields(_nama);
  }
  const handleChangeKelas = (i, e) => {
    const _fields = [...fields];
    _fields[i].Kelas = e.target.value;
    setFields(_fields);
  }

  const handleAdd = () => {
    const _fields = [...fields];
    _fields.push({ nama: '', Kelas: '' });
    setFields(_fields);
  }

  const handleRemove = (i) => {
    const _fields = [...fields];
    _fields.splice(i, 1);
    setFields(_fields);
  }

  const handleSubmit = (event) => {
    alert ('sudah bisa');
    event.preventDefault()
  }

  return (
    <div className="app">
      <div className="form-wrapper">
        <h2>Pendaftaran Kelompok</h2>
        {fields.map((field, i) => {
          return (
            <div className="form-input-wrapper" key={i}>
              <input
                type="text"
                value={field.nama}
                className="form-input"
                placeholder="Nama"
                label={field.nama}
                onChange={e => handleChangeNama(i, e)}
                autoFocus={true}
              />
              <input
                value={field.Kelas}
                className="form-input"
                type="text"
                placeholder="Kelas"
                label={field.Kelas}
                onChange={e => handleChangeKelas(i, e)}
              />
              <button type="button" onClick={() => handleRemove(i)} className="btn-remove">x</button>
            </div>
          )
        })}
        <div className="btn-wrapper">
          <button type="button" onClick={handleAdd} className="btn-add">+</button>
          <button onClick={handleSubmit} className="btn-register">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
