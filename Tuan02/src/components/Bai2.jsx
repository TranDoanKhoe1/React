import { useState } from 'react'
export default Bai2
function Bai2(){
    var [a, setA] = useState(0);
    var [b, setB] = useState(0);
    var [result, setResult] = useState(0);

    function handleChangeA(e){
        setA(parseInt(e.target.value));
        console.log(a);
    }
    function handleChangeB(e){
        setB(parseInt(e.target.value));
    }
    function handleClick(){
        setResult(a + b);
    }
    return (
        <>
        <input type="text" onChange={handleChangeA} placeholder='Nhập số A'/>
        <br />
        <input type="text" onChange={handleChangeB} placeholder='Nhập số B'/>
        <br />
        <button onClick={handleClick}>Tính cộng</button>
        <br />
        <span>Kết quả: {result}</span>
        </>
    );
}

