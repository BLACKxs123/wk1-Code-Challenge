function calculateNetSalary(basicSalary, benefits) {
    // Tax brackets and rates
    const TAX_BRACKETS = [
        { min: 0, max: 24000, rate: 0.1 },
        { min: 24001, max: 40000, rate: 0.15 },
        { min: 40001, max: 60000, rate: 0.20 },
        { min: 60001, max: Infinity, rate: 0.25 }
    ];

    // NHIF and NSSF rates
    const NHIF_RATE = 0.025;  // 2.5% of basic salary
    const NSSF_RATE_EMPLOYEE = 0.06;  // 6% of basic salary
    const NSSF_RATE_EMPLOYER = 0.06;  // 6% of basic salary

    // Calculate gross salary
    let grossSalary = basicSalary + benefits;

    // Calculate NHIF deduction
    let nhifDeduction = basicSalary * NHIF_RATE;

    // Calculate NSSF deduction (both employee and employer)
    let nssfDeductionEmployee = basicSalary * NSSF_RATE_EMPLOYEE;
    let nssfDeductionEmployer = basicSalary * NSSF_RATE_EMPLOYER;

    // Calculate taxable income (gross salary minus NHIF and NSSF deductions)
    let taxableIncome = grossSalary - nhifDeduction - nssfDeductionEmployee;

    // Calculate payee (tax)
    let tax = 0;
    for (let bracket of TAX_BRACKETS) {
        if (taxableIncome > bracket.max) {
            tax += (bracket.max - bracket.min) * bracket.rate;
        } else {
            tax += (taxableIncome - bracket.min) * bracket.rate;
            break;
        }
    }

    // Calculate net salary
    let netSalary = grossSalary - nhifDeduction - nssfDeductionEmployee - tax;

    // Prepare and return results
    let results = {
        grossSalary: grossSalary,
        nhifDeduction: nhifDeduction,
        nssfDeductionEmployee: nssfDeductionEmployee,
        nssfDeductionEmployer: nssfDeductionEmployer,
        tax: tax,
        netSalary: netSalary
    };

    return results;
}

// Example
let basicSalary = 60000;
let benefits = 10000;

let salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log("Salary Details:");
console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("NHIF Deduction:", salaryDetails.nhifDeduction);
console.log("NSSF Deduction (Employee):", salaryDetails.nssfDeductionEmployee);
console.log("NSSF Deduction (Employer):", salaryDetails.nssfDeductionEmployer);
console.log("Tax (Payee):", salaryDetails.tax);
console.log("Net Salary:", salaryDetails.netSalary);
