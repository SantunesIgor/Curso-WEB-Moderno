function area(l, a){
    const area = l* a
    if (area > 20) {
        return `Valor acima do permitido: ${area}m²`
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2, 20))