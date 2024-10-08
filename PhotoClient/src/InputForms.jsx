import React from 'react';

export default function CreateFormBlock() {

    const [form1, setForm1] = useState('');
    const [form2, setForm2] = useState('');
    const [form3, setForm3] = useState('');
    const [form4, setForm4] = useState('');
    const [form5, setForm5] = useState('');
    const [form6, setForm6] = useState('');



      // Обработчик для первой кнопки
  const handleCalculate1 = () => {
    axios.post('http://localhost:8080/calculate', {
      form1: parseFloat(form1),
      form2: parseFloat(form2),
    })
    .then(response => {
      setResult(response.data.result);
    })
    .catch(error => {
      console.error('Error calculating:', error);
    });
  };

    return (
      <div>
      <input
        type="number"
        placeholder="Form 1"
        value={form1}
        onChange={(e) => setForm1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Form 2"
        value={form2}
        onChange={(e) => setForm2(e.target.value)}
      />
      <button onClick={handleCalculate1}>Рассчитать</button>
    </div>

);

}