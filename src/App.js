// App.js
import React, { useState } from 'react';
import FirstPage from "./components/firstpage";
import SecondPage from "./components/secondpage";
import ThirdPage from "./components/thirdpage";
import FourthPage from "./components/fourthpage";
import FifthPage from "./components/fifthpage";
import LoadingPage from "./components/loadingpage";
import FinalPage from "./components/finalpage";


function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleNextStep = () => {
    if (currentPage === 5) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setCurrentPage(currentPage + 1);
      }, 2000);
    } else {
      setCurrentPage(currentPage + 1);
      setProgress(progress + 20);
    }
  };

  const handlePrevStep = () => {
    setCurrentPage(currentPage - 1);
    setProgress(progress - 20); 
  };

  return (
    <div>
      <header>
        {currentPage === 2 && (
          <button onClick={handlePrevStep}></button>
        )}

        {currentPage === 1 && <FirstPage onNextStep={handleNextStep} />}
        {currentPage === 2 && <SecondPage onPrevStep={handlePrevStep} onNextStep={handleNextStep} />}
        {currentPage === 3 && <ThirdPage onPrevStep={handlePrevStep} onNextStep={handleNextStep} />}
        {currentPage === 4 && <FourthPage onPrevStep={handlePrevStep} onNextStep={handleNextStep} />}
        {currentPage === 5 && <FifthPage onPrevStep={handlePrevStep} onNextStep={handleNextStep} />}
      </header>
      
      {isLoading && <LoadingPage />} {/* Render loading page when isLoading is true */}
      
      {currentPage === 6 && <FinalPage />} {/* Render final page when currentPage is 6 */}
    </div>
  );
}

export default App;
