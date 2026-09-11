import { use } from "react";
import type { stackType } from "../Type/type";
import Stack from "./Stack";

interface dataType {
  stacksDatas: Promise<stackType[]>;
  handleYourStact: (stack: stackType) => void;
}

const Stacks = ({ stacksDatas, handleYourStact }: dataType) => {
  const allStack = use(stacksDatas);

  return (
    <div className="grid grid-cols-3 gap-4 grow">
      {allStack.map((stack) => (
        <Stack stack={stack} key={stack.id} handleYourStact={handleYourStact} />
      ))}
    </div>
  );
};

export default Stacks;
