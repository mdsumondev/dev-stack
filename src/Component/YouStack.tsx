import type { stackType } from "../Type/type";

const YouStack = ({ addedStack }: stackType[]) => {
  return (
    <div>
      {addedStack.map((yourStack) => {
        <div className="max-w-xs mx-auto my-8 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm font-sans">
          <div className="mb-5">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Your Stack
            </h2>
            <p className="text-sm text-slate-400 mt-1">2 Technology Selected</p>
          </div>

          <div className="space-y-3 mb-8">
            <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
                  alt="Svelte"
                  className="w-7 h-7 object-contain"
                />
                <div>
                  <p className="text-xs font-bold text-slate-900 leading-tight">
                    Svelte
                  </p>
                  <span className="text-[10px] text-slate-400 font-medium">
                    Frontend
                  </span>
                </div>
              </div>
              <button
                className="text-slate-400 hover:text-slate-600 transition-colors p-1"
                aria-label="Remove Svelte"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-3">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-redis-logo-icon-download-in-svg-png-gif-file-formats--programming-language-pack-logos-icons-1175103.png"
                  alt="Redis"
                  className="w-7 h-7 object-contain"
                />
                <div>
                  <p className="text-xs font-bold text-slate-900 leading-tight">
                    Redis
                  </p>
                  <span className="text-[10px] text-slate-400 font-medium">
                    Database
                  </span>
                </div>
              </div>
              <button
                className="text-slate-400 hover:text-slate-600 transition-colors p-1"
                aria-label="Remove Redis"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <button className="w-full py-2.5 px-4 rounded-xl border border-red-200 text-red-500 font-bold text-sm hover:bg-red-50 transition-colors text-center">
            Remove All
          </button>
        </div>;
      })}
    </div>
  );
};

export default YouStack;
