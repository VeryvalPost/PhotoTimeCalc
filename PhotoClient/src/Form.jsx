import React, { useState, useRef } from "react";

export default function CreateForm({onChange, text, type}) {
    const [form1, setForm1] = useState(text);


    const handleChange = (text) => {
        setForm1(text);    // Обновляем локальное состояние
        onChange (text);
      };

      console.log(type);

    return (
    
        <input 
        className="inputform"
        type={type}
        placeholder={form1}
        value={form1}
        onChange={(e) => handleChange(e.target.value)}
      />

    );
};