import React, { useEffect, useState }  from "react";
import './styles/form.css';

export default function CreateFormWithSelect ({ onSensorChange }) {

  const [typeSensor, setTypeSensor] = useState('Тип сенсора')

  const handleClick = (typeSensor) => {
    setTypeSensor(typeSensor);    // Обновляем локальное состояние
    onSensorChange(typeSensor);   // Передаём значение в родительский компонент
  };

  return (
  
    <div class="dropdown">
    <button className="dropbtn">{typeSensor}</button>
    <div className="dropdown-content">
      <a onClick={()=>handleClick('Medium format')}>Medium format</a>
      <a onClick={()=>handleClick('Full frame')}>Full frame</a>
      <a onClick={()=>handleClick('APC')}>APC</a>
      <a onClick={()=>handleClick('APC (Cannon)')}>APC (Cannon)</a>
      <a onClick={()=>handleClick('3/4')}>3/4</a>
      <a onClick={()=>handleClick('1 inch')}>1 inch</a>  
     </div>
  </div>

  );
};


