import { useState } from "react";
import NameQuestion from "./components/NameQuestion";
import WheelsQuestion from "./components/WheelsQuestion";
import VehicleTypeQuestion from "./components/VehicleTypeQuestion";
import VehicleModelQuestion from "./components/VehicleModelQuestion";
import DateRangeQuestion from "./components/DateRangeQuestion";
import { useEffect } from "react";

const questions = [
  { id: 1, component: NameQuestion },
  { id: 2, component: WheelsQuestion },
  { id: 3, component: VehicleTypeQuestion },
  { id: 4, component: VehicleModelQuestion },
  { id: 5, component: DateRangeQuestion },

];

export default function App() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const nextStep = (data) => {
    setFormData({ ...formData, ...data });
    setStep((prev) => prev + 1);
  };

  const CurrentQuestion = questions[step]?.component;

  useEffect(() => {
    console.log("formData", formData);
  }, [formData]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      {step < questions.length ? (
        <CurrentQuestion nextStep={nextStep} />
      ) : (
        <div>Form submission completed!</div>
      )}
    </div>
  );
}

