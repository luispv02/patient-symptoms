import { Symptoms } from "./components/Symptoms";

export const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-orange-300 to-orange-300 px-4 pb-20">
      <div className="w-full mx-auto pt-7">
        <Symptoms />
      </div>
    </div>
  );
};
