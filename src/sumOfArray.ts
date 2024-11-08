{
  const sumArray = (num: number[]): number => {
    const sum: number = num.reduce(
      (accumulator: number, current: number) => accumulator + current,
      0
    );

    return sum;
  };

  const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result: number = sumArray(array);
  console.log(result);
}
