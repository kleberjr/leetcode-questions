var countWords = function(words1, words2) {
    // Criar um objeto cuja chave será uma palavra da lista e o valor será o número de ocorrências.
    // Depois compararemos cada chave em ambos os dicionários e verificaremos se elas tem valor 1.    
    const firstMap = {};
    const secondMap = {};
    let count = 0;

    // O operador of permite acessarmos os elementos do array, enquanto o 'in' permite acessar o index.
    for (const word of words1) {
        // Se a palavra já estiver no objeto, então acrescente 1.
        // Caso contrário, adicione-a.
        firstMap[word] = (word in firstMap) ? (firstMap[word] + 1) : (1);
    }

    for (const word of words2) {
        secondMap[word] = (word in secondMap) ? (secondMap[word] + 1) : (1);
    }

    for (const key in firstMap) {
        // Se a palavra estiver em ambos os objetos e possuir 1 ocorrência...
        // Apesar de estarmos apenas comparando se o valor da chave é 1, caso a chave não exista, o resultado será false.
        if (firstMap[key] === 1 && secondMap[key] === 1) {
            count++;
        }
    }

    return count;
}


const words1 = ["leetcode", "is", "amazing", "as", "is"];
const words2 = ["amazing", "leetcode", "is"];

const words3 = ["b", "bb", "bbb"];
const words4 = ["a", "aa", "aaa"];

const words5 = ["a", "ab"];
const words6 = ["a", "a", "a", "ab"];

countWords(words1, words2);
countWords(words3, words4);
countWords(words5, words6);