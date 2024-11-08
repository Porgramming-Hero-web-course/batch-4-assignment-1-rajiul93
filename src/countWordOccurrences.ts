{
  const countWordOccurrences = (sentence: string, key: string): number => {
    const sentenceToArray = sentence.split(" ");
    let count: number = 0;
    for (let i = 0; i < sentenceToArray.length; i++) {
      const element = sentenceToArray[i];
      if (element.toLocaleLowerCase() === key.toLocaleLowerCase()) {
        count = count + 1;
      }
    }
    return count;
  };
  const sentence: string = "I love typescript Typescript typescript";
  const result: number = countWordOccurrences(sentence, "typescRipt");
  console.log(result);
}
