import { Suspense, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import Stacks from "./Component/Stacks";
import YouStack from "./Component/YouStack";
import type { stackType } from "./Type/type";

function App() {
  const [addedStack, setAddedStack] = useState<stackType[]>([]);

  const handleRemove = (id: number | string) => {
    const itemToRemove = addedStack.find((item) => item.id === id);
    setAddedStack((prev) => prev.filter((item) => item.id !== id));

    if (itemToRemove) {
      toast.error(`${itemToRemove.name} removed from your stack!`);
    }
  };

  const handleClearAll = () => {
    if (addedStack.length > 0) {
      setAddedStack([]);
      toast.warn("All technologies removed from your stack!");
    }
  };

  const stacksData = async (): Promise<stackType[]> => {
    const res = await fetch("/Stack.json");
    const data = await res.json();
    return data;
  };

  const handleYourStact = (stack: stackType) => {
    const alreadyExit = addedStack.some((exit) => exit.id === stack.id);

    if (!alreadyExit) {
      setAddedStack((prev) => [...prev, stack]);
      toast.success(`${stack.name} added to your stack!`);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
      />

      <Header />
      <Hero />

      <div className="container mx-auto">
        <div>
          <h2 className="text-[36px] font-extrabold">
            Explore the
            <span className="bg-[linear-gradient(90deg,#FF5722_0%,#D81B7E_50%,#7C3AED_100%)] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p>Pick one technology per category to build your ideal stack.</p>
        </div>

        <div className="flex pb-[100px]">
          <Suspense fallback={<h3>Loading....</h3>}>
            <Stacks
              stacksDatas={stacksData()}
              handleYourStact={handleYourStact}
              addedStack={addedStack}
            />
          </Suspense>

          <div className="w-[30%] p-5">
            {addedStack.length > 0 ? (
              <YouStack
                addedStack={addedStack}
                handleRemove={handleRemove}
                handleClearAll={handleClearAll}
              />
            ) : (
              <div className="w-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>

                <p className="mt-1 text-sm text-slate-400">
                  No technologies selected yet.
                </p>

                <div className="mt-6 flex h-24 items-center justify-center rounded-2xl border border-dashed border-slate-200">
                  <span className="text-sm font-medium text-slate-400">
                    Your stack is empty.
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
