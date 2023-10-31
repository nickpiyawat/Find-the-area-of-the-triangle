let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const T = parseFloat(document.getElementById('T').value);
    const S = parseFloat(document.getElementById('S').value);
    const result = document.getElementById('output');
    let T_status=false, S_status=false;

    if(T === '' || isNaN(T) || (T <= 0)){
        document.getElementById('T_error').innerHTML = 'กรุณากรอกตัวเลขให้ถูกต้อง';
    }else{
        document.getElementById('T_error').innerHTML = '';
        T_status=true;
    }

    if(S === '' || isNaN(S) || (S <= 0)){
        document.getElementById('S_error').innerHTML = 'กรุณากรอกตัวเลขให้ถูกต้อง';
    }else{
        document.getElementById('S_error').innerHTML = '';
        S_status=true;
    }

    if(T_status && S_status){
        const area = (0.5*T*S).toFixed(2);
        result.innerHTML = 'พื้นที่สามเหลี่ยมคือ : ' + area;
    }else{
        alert('The form has errors');
        result.innerHTML = '';
    }
});