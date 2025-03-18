// Coding Challenge 1, 2
chiSo_Mark ={
    canNang : 78,
    chieuCao: 1.95
}
chiSo_John = {
    canNang : 95,
    chieuCao : 1.76
}

function tinhBMI(canNang,chieuCao){
    return canNang / (chieuCao**2)
}
BMI_Mark = tinhBMI(chiSo_Mark.canNang, chiSo_Mark.chieuCao);
BMI_John = tinhBMI(chiSo_John.canNang, chiSo_John.chieuCao);


if(BMI_Mark > BMI_John){
    console.log("Chỉ số BMI của Mark (", BMI_Mark, ") cao hơn của John", BMI_John,"!" )
}else if (BMI_Mark < BMI_John){
    console.log("Chỉ số BMI của John (", BMI_John, ") cao hơn của Mark", BMI_Mark,"!" )
}else {
    console.log("John và Mark có chỉ số BMI bằng nhau", BMI_John,"!")
}
//Coding challenge 3

data1 = {
    dolphins:[96, 108, 89],
    koalas:[88, 91, 110]
}
data2 = {
    dolphins:[97, 112, 101],
    koalas:[109, 95, 123]
}
//Hàm tính trung bình điểm
function tinhTrungBinh(mang) {
    let tong = mang.reduce((acc, giaTriHienTai) => acc + giaTriHienTai, 0);
    let trungBinh = tong / mang.length;
    
    return trungBinh;
  }

diemDoi1 = tinhTrungBinh(data1.dolphins);
diemDoi2 = tinhTrungBinh(data1.koalas);

if(diemDoi1 > diemDoi2 && diemDoi1 >= 100){
    console.log("Đội dolphins chiến thắng với đố điểm: ", diemDoi1, "!")
}else if(diemDoi1 < diemDoi2 && diemDoi2 >= 100){
    console.log("Đội koalas chiến thắng với đố điểm: ", diemDoi2, "!")
}else if (diemDoi1 >= 100 && diemDoi2 >= 100){
    console.log("Cả hai đội hòa nhau với số điểm: ", diemDoi1, "!")
}else{
    console.log("Không có đội nào dành được cúp!")
}

//----------------------------------------------------------------------
//Coding Challenge #4
