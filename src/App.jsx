import { useState } from "react";
import SurveyForm from "@/components/SurveyForm";
import ResultForm from "@/components/ResultForm";

function App() {
  const [formData, setFormData] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setShowResult(true);
  };

  const handleBackToForm = () => {
    setShowResult(false);
    setFormData(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md">
        {!showResult ? (
          <SurveyForm onSubmit={handleFormSubmit} />
        ) : (
          <ResultForm data={formData} onBack={handleBackToForm} />
        )}
      </div>
    </div>
  );
}

export default App;
