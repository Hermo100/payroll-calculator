function calc_gross(basic_salary, benefits) {
    let gross_salary = basic_salary + benefits;
    return gross_salary;
  }
  let gross_salary = calc_gross();
  console.log(gross_salary);

  let my_form = document.getElementById("gross");
  let table=document.getElementById("table");
  my_form.addEventListener("submit", function (e) {
    //Prevent the webpage from refreshing
    e.preventDefault();
    //Check if inputs have values
    let basic_salary = document.getElementById("basic salary").value;
    let benefits = document.getElementById("benefits").value;
    if (basic_salary.length === 0 || benefits.length === 0) {
      alert("Ensure all Fields are set")
      table.reset();
        
    } else {
      let final_gross = calc_gross(Number(basic_salary), Number(benefits));
      document.getElementById("subs").innerText = final_gross+' '+'Ksh';
      my_form.reset();
    }
    function calc_nhif(gr) {
      let final_gross = calc_gross(Number(basic_salary), Number(benefits));
      
      if (final_gross <= 5999) {
        nhifContribution = 150;
      } else if (final_gross >= 6000 && final_gross <= 7999) {
        nhifContribution = 300;
      } else if (final_gross >= 8000 && final_gross <= 11999) {
        nhifContribution = 400;
      } else if (final_gross >= 12000 && final_gross <= 14999) {
        nhifContribution = 500;
      } else if (final_gross >= 15000 && final_gross <= 19999) {
        nhifContribution = 600;
      } else if (final_gross >= 20000 && final_gross <= 24999) {
        nhifContribution = 750;
      } else if (final_gross >= 25000 && final_gross <= 29999) {
        nhifContribution = 850;
      } else if (final_gross >= 30000 && final_gross <= 34999) {
        nhifContribution = 900;
      } else if (final_gross >= 35000 && final_gross <= 39999) {
        nhifContribution = 950;
      } else if (final_gross >= 40000 && final_gross <= 44999) {
        nhifContribution = 1000;
      } else if (final_gross >= 45000 && final_gross <= 49999) {
        nhifContribution = 1100;
      } else if (final_gross >= 50000 && final_gross <= 59999) {
        nhifContribution = 1200;
      } else if (final_gross >= 60000 && final_gross <= 69999) {
        nhifContribution = 1300;
      } else if (final_gross >= 70000 && final_gross <= 79999) {
        nhifContribution = 1400;
      } else if (final_gross >= 80000 && final_gross <= 89999) {
        nhifContribution = 1500;
      } else if (final_gross >= 90000 && final_gross <= 99999) {
        nhifContribution = 1600;
      } else {
        nhifContribution = 1700;
      }
      return nhifContribution;
    }
    calc_nhif();
    let nhif = calc_nhif();
  
    
    let final_gross = calc_gross(Number(basic_salary), Number(benefits));
    let nssfRate = 0.06;
    let maxContribution = 18000;
    let nssfContribution = final_gross * nssfRate;
    if(final_gross>18000){nssfContribution=maxContribution*0.06}
   else{nssfContribution=final_gross*0.06}

    let nhdfRate = 0.015;
    let nhdfContribution = final_gross * nhdfRate;
    let taxable_income=final_gross-(nssfContribution+nhdfContribution);
    
    
    let payee=0;
    let relief=2400;
if (taxable_income <=24000) {
    payee = 0;
} else if (taxable_income>24000&&taxable_income <= 32333) {
    payee = ((24000*0.1)+((taxable_income - 24000) * 0.25))-relief;
} 
else {
    payee =((24000*0.1)+(8333*0.25)+((taxable_income - 32333) * 0.3))-2400;
}
let netSalary = final_gross - (nhifContribution + nssfContribution + nhdfContribution + payee);


      document.getElementById("subs").innerText = final_gross+' '+'Ksh';
    document.getElementById("nhif").innerText = nhif+' '+'Ksh';
    document.getElementById("nhdf").innerText =
      Number(nhdfContribution)+' '+'Ksh';
      document.getElementById("nssf").innerText =
       nssfContribution+' '+'Ksh';
      document.getElementById("tax").innerText =
      taxable_income+' '+'Ksh';
      document.getElementById("payee").innerText =
      Math.round(payee)+' '+'Ksh';
      document.getElementById("net salary").innerText =
       netSalary+'  '+'Ksh';
      
      
  });