powBtn.addEventListener("click", function() {
    const { a, b } = getValues();
    
    if (a === 10 && b > 3827) {
        res.textContent = "10^" + b + " (≈ 1e" + b + ")";
    } else if (b > 100) {
        const approx = (a ** Math.min(b, 10)).toExponential(3);
        res.textContent = approx + " × 10^" + (b - 10);
    } else {
        res.textContent = a ** b;
    }
});
