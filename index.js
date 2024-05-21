let nameUser = "Aleksandar";

console.log(typeof nameUser);

const pi = 3.14;

console.log(typeof pi);

let colorPicker = ["Red", "Blue", "Green"];

console.log(typeof colorPicker);
console.log(colorPicker[0]);
console.log(colorPicker[0], colorPicker[1], colorPicker[2]);

let personInfo = {
  personName: "Aleksandar",
  personPhone: 78524931,
  personAdress: "Solunska br.62",
  personEMBG: 406000494506,
};

console.log(typeof personInfo.personAdress);

{
  let numberOne = 2;
 

  {
    let numberTwo = 3;
    let proizvod;
    {
      let numberThree = 10;
      resultt = numberOne * numberTwo * numberThree;
    }
    
    console.log(resultt);
  }
}
