import Caretaker from "./Caretaker";
import Originator from "./Originator";
import IExample from "../../../models/IExample";

class MementoExample implements IExample {

  public start(): void {
    console.log("\nSTART TEST MEMENTO PATTER \n");

    const caretaker = new Caretaker();
    const originator = new Originator();
    originator.setState("state1");
    originator.setState("state2");
    caretaker.addMemento(originator.save());
    originator.setState("state3");
    caretaker.addMemento(originator.save());
    originator.setState("state4");
    originator.restore(caretaker.getMemento());

    console.log("\nEND TEST MEMENTO PATTER \n");
  }

}

export default MementoExample;
