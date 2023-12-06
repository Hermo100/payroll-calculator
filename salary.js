let my_form = document.getElementById("myform");
my_form.addEventListener("submit", function (e) {
  //Prevent the webpage from refreshing
  e.preventDefault();
  //Check if inputs have values
  let basic_salary = Number(document.getElementById("basic_salary").value);
 // console.log(basic_salary);
  let benefits = Number(document.getElementById("benefits").value);
 // console.log(benefits);
  if (basic_salary && benefits) {
    let gross_salary = calc_gross(basic_salary ,benefits);
    //console.log(gross_salary);
    document.getElementById("gross_salary").innerText = gross_salary;
    let nhif = calc_nhif(gross_salary);
    document.getElementById("nhif").innerText = nhif;
    let nssf=calc_nssf(gross_salary, rate = 0.06);
    document.getElementById("nssf").innerText=nssf
    let nhdf=calc_nhdf(gross_salary, rate = 0.015);
    document.getElementById("nhdf").innerText=nhdf
    let taxableincome=calc_taxableincome(gross_salary, nssf, nhdf);
    document.getElementById("taxableincome").innerText=taxableincome
    let payee=calc_payee(taxableincome);
    document.getElementById("payee").innerText=payee
    let netsalary=calc_netsalary(gross_salary,nhif, nhdf, nssf, payee);
    document.getElementById("netsalary").innerText=netsalary
  } else {
    alert("insert all fields");
  }
});

function calc_gross(a, b) {
  let gross_salary = a + b;
  return gross_salary;
}

function calc_nhif(gross_salary) {
  let nhif_contribution = 0;
  if (gross_salary <= 5999) {
    nhif_contribution = 150;
  } else if (gross_salary >= 6000 && gross_salary <= 7999) {
    nhif_contribution = 300;
  } else if (gross_salary >= 8000 && gross_salary <= 11999) {
    nhif_contribution = 400;
  } else if (gross_salary >= 12000 && gross_salary <= 14999) {
    nhif_contribution = 500;
  } else if (gross_salary >= 15000 && gross_salary <= 19999) {
    nhif_contribution = 600;
  } else if (gross_salary >= 20000 && gross_salary <= 24999) {
    nhif_contribution = 750;
  } else if (gross_salary >= 25000 && gross_salary <= 29999) {
    nhif_contribution = 850;
  } else if (gross_salary >= 30000 && gross_salary <= 34999) {
    nhif_contribution = 900;
  } else if (gross_salary >= 35000 && gross_salary <= 39999) {
    nhif_contribution = 950;
  } else if (gross_salary >= 40000 && gross_salary <= 44999) {
    nhif_contribution = 1000;
  } else if (gross_salary >= 45000 && gross_salary <= 49999) {
    nhif_contribution = 1100;
  } else if (gross_salary >= 50000 && gross_salary <= 59999) {
    nhif_contribution = 1200;
  } else if (gross_salary >= 60000 && gross_salary <= 69999) {
    nhif_contribution = 1300;
  } else if (gross_salary >= 70000 && gross_salary <= 79999) {
    nhif_contribution = 1400;
  } else if (gross_salary >= 80000 && gross_salary <= 89999) {
    nhif_contribution = 1500;
  } else if (gross_salary >= 90000 && gross_salary <= 99999) {
    nhif_contribution = 1600;
  } else {
    nhif_contribution = 1700;
  }
  return nhif_contribution;
}
function calc_nssf(gross_salary, rate = 0.06) {
  if (gross_salary < 18000 && gross_salary > 0) {
    nssf = gross_salary * rate;
  } else {
    nssf = 18000 * rate;
  }
  return nssf;
}

function calc_nhdf(gross_salary, rate = 0.015) {
  let nhdf = gross_salary * rate;

  return nhdf;
}

function calc_taxableincome(gross_salary, nssf, nhdf) {
  let taxableincome = gross_salary - (nssf + nhdf);

  return taxableincome;
}

function calc_payee(taxableincome) {
  if (taxableincome > 0 && taxableincome <= 24000) {
     grosspayee = 0;
    
  } else if (taxableincome > 24000 && taxableincome <= 32333) {
    payee = (taxableincome - 24000) * 0.25;
    grosspayee = 24000 * 0.1 + payee - 2400;
  }  else if (taxableincome > 24000 && taxableincome <= 32333) {
    payee = (taxableincome - 24000) * 0.25;
    grosspayee = 24000 * 0.1 + payee - 2400;
  } 
  else {
    payee = (taxableincome - 32333) * 0.3;
    grosspayee = 2400 + 8333 * 0.25 + payee - 2400;
  }
  return grosspayee;
}

function calc_netsalary(a, b, c, d,e) {
  let netsalary = a - (b + c + d + e);

  return netsalary;
}