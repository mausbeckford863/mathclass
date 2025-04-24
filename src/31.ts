function solveQuadraticEquation(a: number, b: number, c: number): [number, number] | null {
    const discriminant = Math.pow(b, 2) - (4 * a * c);
    
    if (discriminant < 0) {
        return null;
    } else if (discriminant === 0) {
        return [c / (2 * a), undefined];
    } else {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        
        if (!root1 || !root2) {
            return null;
        }
        
        return [Math.min(root1, root2), Math.max(root1, root2)];
    }
}

// Example usage
console.log(solveQuadraticEquation(1, -3, 2)); // Output: [1.0, -2.0]
