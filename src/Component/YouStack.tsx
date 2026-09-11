import type { stackType } from "../Type/type";

interface YouStackProps {
  addedStack: stackType[];
  handleRemove: (id: string | number) => void;
  handleClearAll: () => void;
}

const YouStack = ({
  addedStack,
  handleRemove,
  handleClearAll,
}: YouStackProps) => {
  return (
    <div className="max-w-xs mx-auto my-8 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm font-sans">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
          Your Stack
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          {addedStack.length}{" "}
          {addedStack.length === 1 ? "Technology" : "Technologies"} Selected
        </p>
      </div>

      <div className="space-y-3 mb-8">
        {addedStack.map((yourStack) => (
          <div
            key={yourStack.id}
            className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-slate-300 transition-colors"
          >
            <div className="flex items-center gap-3">
              <img
                src={yourStack.image || yourStack.icon}
                alt={yourStack.name}
                className="w-7 h-7 object-contain"
              />
              <div>
                <p className="text-xs font-bold text-slate-900 leading-tight">
                  {yourStack.name}
                </p>
                <span className="text-[10px] text-slate-400 font-medium">
                  {yourStack.category}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleRemove(yourStack.id);
              }}
              className="text-slate-400 hover:text-slate-600 transition-colors p-1"
              aria-label={`Remove ${yourStack.name}`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          handleClearAll();
        }}
        className="w-full py-2.5 px-4 rounded-xl border border-red-200 text-red-500 font-bold text-sm hover:bg-red-50 transition-colors text-center"
      >
        Remove All
      </button>
    </div>
  );
};

export default YouStack;
