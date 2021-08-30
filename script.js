function changeGradient(){
    let hex_values=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    let hex_code1='';
    let hex_code2='';
    for(let i=0;i<6;i++){
        let index=Math.floor(Math.random()*hex_values.length);
        hex_code1+=hex_values[index];
    }
    for(let i=0;i<6;i++){
        let index1=Math.floor(Math.random()*hex_values.length);
        hex_code2+=hex_values[index1];
    }
    document.getElementsByTagName('body')[0].style.background=`linear-gradient(to right,#${hex_code1},#${hex_code2})`;
    document.getElementById("hex-code1").innerHTML=`${hex_code1}`;
    document.getElementById("hex-code2").innerHTML=`${hex_code2}`;

}