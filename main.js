let simbol = "X";
let temp = 1;
let count = 0;
document.getElementById("keterangan").innerHTML=`Giliran ${simbol} untuk bermain`;

function nomer(num) {
    document.getElementById(`tmbl${num}D`).style.transform="perspective(600px)rotateX(-180deg)";
    document.getElementById(`tmbl${num}B`).style.transform="perspective(600px)rotateX(0deg)";

    document.getElementById(`tmbl${num}B`).innerHTML = simbol;
    document.getElementById(`tmbl${num}B`).value = simbol;

    document.getElementById(`tmbl${num}B`).disabled = "disabled";
    if (simbol == "X") {
        document.getElementById("keterangan").innerHTML=`Giliran "O" untuk bermain`;
        pembanding();
        simbol = "O";
    } else {
        document.getElementById("keterangan").innerHTML=`Giliran "X" untuk bermain`;
        pembanding();
        simbol = "X";
    }
}

function pembanding() {
    for (let i = 1; i < 10; i++) {
        if (document.getElementById(`tmbl${i}B`).value === "X" || document.getElementById(`tmbl${i}B`).value === "O") {
            count++
        }        
    }
    if (document.getElementById("tmbl1B").value === simbol && document.getElementById("tmbl2B").value === simbol && document.getElementById("tmbl3B").value === simbol) {
        result(1,2,3);
    } else if (document.getElementById("tmbl4B").value === simbol && document.getElementById("tmbl5B").value === simbol && document.getElementById("tmbl6B").value === simbol) {
        result(4,5,6);
    } else if (document.getElementById("tmbl7B").value === simbol && document.getElementById("tmbl8B").value === simbol && document.getElementById("tmbl9B").value === simbol) {
        result(7,8,9);
    } else if (document.getElementById("tmbl2B").value === simbol && document.getElementById("tmbl5B").value === simbol && document.getElementById("tmbl8B").value === simbol) {
        result(2,5,8);
    } else if (document.getElementById("tmbl3B").value === simbol && document.getElementById("tmbl6B").value === simbol && document.getElementById("tmbl9B").value === simbol) {
        result(3,6,9);
    } else if (document.getElementById("tmbl1B").value === simbol && document.getElementById("tmbl5B").value === simbol && document.getElementById("tmbl9B").value === simbol) {
        result(1,5,9);
    } else if (document.getElementById("tmbl3B").value === simbol && document.getElementById("tmbl5B").value === simbol && document.getElementById("tmbl7B").value === simbol) {
        result(3,5,7);
    } else if (document.getElementById("tmbl1B").value === simbol && document.getElementById("tmbl4B").value === simbol && document.getElementById("tmbl7B").value === simbol) {
        result(1,4,7);
    } else if (count === 45) {
        document.getElementById("keterangan").innerHTML = `Permainan Seri !!!`;
        for (let i = 1; i < 10; i++) {
            document.getElementById(`tmbl${i}D`).disabled = "disabled";        
        }
    }
}

function result(num1,num2,num3) {
    document.getElementById("keterangan").innerHTML = `"${simbol}" WIN!!!`;

    for (let i = 1; i < 10; i++) {
        document.getElementById(`tmbl${i}D`).disabled = "disabled";        
    }
    function tampilan() {
        if (temp === 1){
            document.getElementById(`tmbl${num1}B`).style.background="#ccc";
            document.getElementById(`tmbl${num2}B`).style.background="#999";
            document.getElementById(`tmbl${num3}B`).style.background="#666";
            temp++;
        } else if (temp === 2) {
            document.getElementById(`tmbl${num3}B`).style.background="#ccc";
            document.getElementById(`tmbl${num1}B`).style.background="#999";
            document.getElementById(`tmbl${num2}B`).style.background="#666";
            temp++
        } else if (temp === 3) {
            document.getElementById(`tmbl${num2}B`).style.background="#ccc";
            document.getElementById(`tmbl${num3}B`).style.background="#999";
            document.getElementById(`tmbl${num1}B`).style.background="#666";
            temp = 1;
        }
    }
    setInterval(tampilan,150)
}