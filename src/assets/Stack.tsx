import { FaStar } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import type { stackType } from "../Type/type";

interface StackProps {
  stack: stackType;
}

const Stack = ({ stack }: StackProps) => {
  const { name, badge, description, category, level, rating } = stack;

  return (
    <div className="w-80 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm flex flex-col justify-between space-y-4">
      {/* Icon & Badge */}
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-sky-500">
          <SiMysql className="h-8 w-8" />
        </div>

        <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-500 border border-sky-100">
          {badge}
        </span>
      </div>

      {/* Title & Description */}
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-slate-900">{name}</h3>

        <p className="text-sm text-slate-500 leading-relaxed min-h-[4rem]">
          {description}
        </p>
      </div>

      {/* Category, Level & Rating */}
      <div className="flex items-center justify-between text-xs font-medium text-slate-600 pt-2 border-t border-gray-50">
        <span className="rounded-md bg-slate-100 px-2.5 py-1 text-slate-600">
          {category}
        </span>

        <span>{level}</span>

        <div className="flex items-center space-x-1">
          <FaStar className="text-amber-400 text-sm" />

          <span className="font-semibold text-slate-800">{rating}</span>
        </div>
      </div>

      {/* Action Button */}
      <button className="w-full rounded-xl bg-[#090D16] py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 active:scale-[0.98]">
        Add to Stack
      </button>
    </div>
  );
};

export default Stack;
