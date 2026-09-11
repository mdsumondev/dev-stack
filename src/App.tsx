import { useEffect, useState } from "react";
import "./App.css";
import Stacks from "./assets/Stacks";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import type { stackType } from "./Type/type";

function App() {
  const [stacks, setStacks] = useState<stackType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadStackData = async () => {
      try {
        const res = await fetch("/Stack.json");

        if (!res.ok) {
          throw new Error(`Unable to load stack data (${res.status})`);
        }

        const data: stackType[] = await res.json();
        setStacks(data);
      } catch (loadError) {
        setError(
          loadError instanceof Error
            ? loadError.message
            : "Unable to load stack data",
        );
      } finally {
        setIsLoading(false);
      }
    };

    void loadStackData();
  }, []);

  return (
    <>
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
        <div className="flex">
          {isLoading && <p>Loading technologies...</p>}
          {error && <p className="text-red-600">{error}</p>}
          {!isLoading && !error && <Stacks stacksData={stacks} />}
        </div>
      </div>
    </>
  );
}

export default App;
