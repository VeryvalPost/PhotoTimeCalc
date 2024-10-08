import React, { Fragment, useState } from 'react';
import axios from 'axios';
import Header from './Header.jsx'
import CreateForm from './Form.jsx'
import CreateFormWithSelect from './FormWithSelect.jsx'




function App() {

  const [selectedSensor, setSelectedSensor] = useState('Тип сенсора');
  const [aperture, setApertureChange] = useState('1.8');
  const [focus, setFocusChange] = useState('50');
  const [pixel, setPixelChange] = useState('7');
  const [result, setResult] = useState(null);

  const handleSensorChange = (sensorType) => {
    setSelectedSensor(sensorType);
  };

  const handleApertureChange = (aperture) => {
    setApertureChange(aperture);
  };

    const handleFocusChange = (focus) => {
    setFocusChange(focus);
  };

  
  const handlePixelChange = (pixel) => {
    setPixelChange(pixel);
  };

  function sendRequest(selectedSensor, aperture, focus, pixel){
    console.log(selectedSensor, aperture, focus, pixel);
    axios.post('http://localhost:8080/calculate', {
      sensor : selectedSensor,
      aperture: aperture,
      focus: focus,
      pixel: pixel,
    })
    .then(response => {
      setResult(response.data.result);
    })
    .catch(error => {
      console.error('Error calculating:', error);
    });


    console.log(result);
  }


  return (
    <Fragment >
      <Header />

    <h1 style={{marginLeft: '2%', fontSize: 'large'}}>Выберите тип сенсора</h1>
      <CreateFormWithSelect onSensorChange={handleSensorChange}/>
    <p style={{marginLeft: '2%'}}>  Выбранный сенсор {selectedSensor}  </p>

    <h1 style={{marginLeft: '2%', fontSize: 'large'}}>Выберите апертуру линз</h1>
      <CreateForm onChange={handleApertureChange} text={aperture} type="float"/>
    <p style={{marginLeft: '2%'}}>  Выбранная апертура {aperture}  </p>

    <h1 style={{marginLeft: '2%', fontSize: 'large'}}>Выберите фокусное расстояние</h1>
      <CreateForm onChange={handleFocusChange} text={focus} type="number"/>
    <p style={{marginLeft: '2%'}}>  Выбранное фокусное расстояние {focus}  </p>

    <h1 style={{marginLeft: '2%', fontSize: 'large'}}>Выберите размер пикселя</h1>
      <CreateForm onChange={handlePixelChange} text={pixel} type="float"/>
    <p style={{marginLeft: '2%'}}>  Размер пикселя {pixel}  </p>
   
    <button className="buttonMain" onClick={()=> sendRequest(selectedSensor, aperture, focus, pixel)}>Calculate</button>

    <h1 style={{marginLeft: '2%', fontSize: 'large'}}>Результат вычислений:{result !== null && <div><h2>{result}</h2></div>} </h1>

    </Fragment>
      
  );  
}

export default App;