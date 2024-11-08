{
  const removeDuplicates = (num: number[]): number[] => {
    let commonNumber: number[] = [];
    for (let i: number = 0; i < num.length; i++) {
      const element: number = num[i];
      if (!commonNumber.includes(element)) {
        commonNumber.push(element);
      }
    }
    return commonNumber;
  };
  const numberArray: number[] = [1, 2, 2, 3, 4, 4, 5];
  const result :number[] = removeDuplicates(numberArray);
  console.log(result);
}
