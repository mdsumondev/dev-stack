import type { stackType } from "../Type/type";
import Stack from "./Stack";

interface dataType {
  stacksData: stackType[];
}

const Stacks = ({ stacksData }: dataType) => {
  return (
    <div className="grid grid-cols-3">
      {stacksData.map((stack) => (
        <Stack stack={stack} key={stack.id} />
      ))}
    </div>
  );
};

export default Stacks;
