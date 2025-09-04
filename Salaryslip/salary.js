let ename = document.getElementById('ename');
let bsalary = document.getElementById('bsalary');
let hra = document.getElementById('hra');
let da = document.getElementById('da');
let ta = document.getElementById('ta');
let ma = document.getElementById('ma');
let pf = document.getElementById('pf');
let tds = document.getElementById('tds');
let pt = document.getElementById('pt');

const display = () => {
    let employeen = ename.value;
    let basicsalary = parseInt(bsalary.value);
    let hrallowance = parseInt(hra.value);
    let dallowance = parseInt(da.value);
    let tallowance = parseInt(ta.value);
    let mallowance = parseInt(ma.value);
    let pfund = parseInt(pf.value);
    let tdsource = parseInt(tds.value);
    let ptax = parseInt(pt.value);

    let hra1 = basicsalary * hrallowance / 100;
    let da1 = basicsalary * dallowance / 100;
    let ta1 = basicsalary * tallowance / 100;
    let ma1 = basicsalary * mallowance / 100;
    let pf1 = basicsalary * pfund / 100;
    let tds1 = basicsalary * tdsource / 100;

    let gross = basicsalary + hra1 + da1 + ta1 + ma1;
    let deduction = pf1 + tds1 + ptax;
    let net = gross - deduction;


    let empname = document.getElementById('empname').innerText = employeen;
    let basics = document.getElementById('basics').innerText = '₹ ' + basicsalary;
    let housea = document.getElementById('housea').innerText = '₹ ' + hra1;
    let dearnessa = document.getElementById('dearnessa').innerText = '₹ ' + da1;
    let travela = document.getElementById('travela').innerText = '₹ ' + ta1;
    let medicala = document.getElementById('medicala').innerText = '₹ ' + ma1;
    let providentf = document.getElementById('providentf').innerText = '₹ ' + pf1;
    let taxs = document.getElementById('taxs').innerText = '₹ ' + tds1;
    let professionalt = document.getElementById('professionalt').innerText = '₹ ' + ptax;
    let gsalary = document.getElementById('gsalary').innerText = '₹ ' + gross;
    let deduct = document.getElementById('deduct').innerText = '₹ ' + deduction;
    let nsalary = document.getElementById('nsalary').innerText = '₹ ' + net;

    ename.value = '';
    bsalary.value = '';
    hra.value = '';
    da.value = '';
    ta.value = '';
    ma.value = '';
    pf.value = '';
    tds.value = '';
    pt.value = '';

    document.getElementById("result").classList.remove("d-none");
}

