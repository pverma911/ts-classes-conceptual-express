import { app } from "./app";
import { Encaps } from "./testFiles/encapsulation";
import super2 from "./testFiles/multilevel-inheritence";

app.listen("8000", () => {
  console.log("express app listening on port 8000");
  // console.log(new super2(2, 4).sum());

  // console.log("\n");

  // const instance = new Encaps();

  // instance.setMember(10);

  // console.log("Encapsulation check =======>", instance.getMember());
});
