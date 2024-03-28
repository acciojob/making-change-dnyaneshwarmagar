const makeChange = (c) => {
  // your name here
	let amount = c/100;
	
	const quarterValue = 0.25;
    const dimeValue = 0.10;
    const nickelValue = 0.05;
    const pennyValue = 0.01;

    // Calculate number of quarters
    const q = Math.floor(amount / quarterValue);
    // Calculate remaining amount after using quarters
    let remainingAmount = amount - q * quarterValue;

    // Calculate number of dimes
    const d = Math.floor(remainingAmount / dimeValue);
    // Calculate remaining amount after using dimes
    remainingAmount -= d * dimeValue;

    // Calculate number of nickels
    const n = Math.floor(remainingAmount / nickelValue);
    // Calculate remaining amount after using nickels
    remainingAmount -= n * nickelValue;

    // Calculate number of pennies
    const p = Math.round(remainingAmount / pennyValue);

    // Return an object with the breakdow
    return {
        q: q,
        d: d,
        n: n,
        p: p
    };
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
