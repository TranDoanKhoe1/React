import { useState } from "react";

export function LoadApp() {
    const [tienGui, setTienGui] = useState(0);
    const [laiSuat, setLaiSuat] = useState(0);
    const [mucTieu, setMucTieu] = useState(0);
    const [result, setResult] = useState([]);

    const calculateInterest = () => {
        let tienGuiFloat = parseFloat(tienGui);
        let laiSuatFloat = parseFloat(laiSuat) / 100;
        let mucTieuFloat = parseFloat(mucTieu);
        let year = new Date().getFullYear();
        let data = [];

        while (tienGuiFloat < mucTieuFloat) {
            let interest = tienGuiFloat * laiSuatFloat;
            let newAmount = tienGuiFloat + interest;
            data.push({ year, tienGui: tienGuiFloat.toFixed(2), laiSuat: (laiSuatFloat * 100).toFixed(2), newAmount: newAmount.toFixed(2) });
            tienGuiFloat = newAmount;
            year++;
        }
        setResult(data);
    }
    function handleChangeTienGui(e) {
        setTienGui(e.target.value);
    };
    function handleChangeLaiSuat(e) {
        setLaiSuat(e.target.value);
    }
    function handleChangeMucTieu(e) {
        setMucTieu(e.target.value);
    }
    return (
        <>
            <h2>Tính Lãi Suất Tích Lũy</h2>
            <label>Số tiền gửi ban đầu:</label>
            <input type="number"  onChange={handleChangeTienGui} placeholder="Nhập số tiền gửi"/>
            <label>Lãi suất hàng năm (%):</label>
            <input type="number"  onChange={handleChangeLaiSuat} placeholder="Nhập lãi suất"/>
            
            <label>Số tiền mục tiêu:</label>
            <input type="number"  onChange={handleChangeMucTieu} placeholder="Nhập số tiền mục tiêu"/>
            
            <button onClick={calculateInterest}>Tính</button>
            
            <table>
                <thead>
                    <tr>
                        <th>Năm</th>
                        <th>Số tiền hiện tại</th>
                        <th>Lãi suất</th>
                        <th>Kết quả</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((row, index) => (
                        <tr key={index}>
                            <td>{row.year}</td>
                            <td>{row.tienGui}</td>
                            <td>{row.laiSuat}%</td>
                            <td>{row.newAmount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}