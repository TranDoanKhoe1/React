import {useState} from 'react';
export default Bai3
function Bai3() {
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [operation, setOperation] = useState("");
    const [result, setResult] = useState("");
    
    const tinhToan = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if(isNaN(numA) || isNaN(numB)) {
        setResult("Vui lòng nhập số hợp lệ");
        return;
    }
    switch(operation) {
        case "+":
            setResult(numA + numB);
            break;
        case "-":
            setResult(numA - numB);
            break;
        case "*":
            setResult(numA * numB);
            break;
        case "/":
            setResult(numA / numB);
            break;
        default:
            setResult("Vui lòng chọn phép tính");
            break;
    }
    };
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <input 
        type="text" 
        placeholder="Nhập số a" 
        value={a} 
        onChange={(e) => setA(e.target.value)} 
      />
      <br />
      <input 
        type="text" 
        placeholder="Nhập số b" 
        value={b} 
        onChange={(e) => setB(e.target.value)} 
      />
      <br />
      <input onChange={(e) => setOperation(e.target.value)} type="radio" name="group" value="+"/> <span>+</span>
      <input onChange={(e) => setOperation(e.target.value)} type="radio" name="group" value="-"/> <span>-</span>
      <input onChange={(e) => setOperation(e.target.value)} type="radio" name="group" value="*"/> <span>*</span>
      <input onChange={(e) => setOperation(e.target.value)} type="radio" name="group" value="/"/> <span>/</span>
      <br />
      <button onClick={tinhToan}>Tính</button>
      <p>Kết quả: {result !== null ? result : "Chưa có kết quả"}</p>
    </div>
  );
}