{
  type Circle = {
    shape: "circle";
    radius: number;
  };
  type Rectangle = {
    shape: "rectangle";
    height: number;
    width: number;
  };
  type Shape = Circle | Rectangle;
  const calculateShapeArea = (param: Shape): number => {
    if (param.shape === "circle") {
      return Math.PI * param.radius * param.radius;
    } else if (param.shape === "rectangle") {
      return param.height * param.width;
    }
    throw new Error("Unknown Type");
  };

  const circle1: Circle = {
    shape: "circle",
    radius: 5,
  };
  const rectangle: Rectangle = {
    shape: "rectangle",
    height: 6,
    width: 4,
  };
  const getRectangle :number = calculateShapeArea(rectangle);
  const getCircle :number = calculateShapeArea(circle1) ;
}
