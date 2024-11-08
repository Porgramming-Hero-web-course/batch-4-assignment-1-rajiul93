{
  type Person = {
    name: string;
    age: number;
  };
  const getProperty = <T, K extends keyof T>(param: T, key: K): T[K] => {
    return param[key];
  };
  const person: Person = { name: "Alice", age: 30 };
  const getPersonProperty = getProperty(person, "name");
  console.log(getPersonProperty);
}

