array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i in array){
    if(i == 5) break // sai da repetição
    console.log(i)
}

for (let i in array){
    if(i == 5) continue // volta para o inicio da repetição
    console.log(i)
}