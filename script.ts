function combination(text: (string | number)[]):string{
    return text.join(" ");
}

console.log(combination([1, "data", "3", "result"]));
console.log(combination(["Bejo", "has", "4", "sport", "car"]));