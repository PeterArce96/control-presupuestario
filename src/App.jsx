import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import BudgetForm from './components/BudgetForm';
import BudgetSummary from './components/BudgetSummary';

function App() {
  const company = {
    name: '💸Control Presupuestario💸',
    slogan: 'Tu dinero es nuestra preocupacion'
  };

  const currentDateYear = new Date().getFullYear();
  const author = 'ELGS';

  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [budgetForm, setBudgetForm] = useState(true);

  return (
    <>
      <Header
        company={company}
      />
      <main className="main">
        <section className="budget">
          <div className="budget__container">
            <div className="budget__budget">
              {
                budgetForm ?
                  (
                    <>
                      <h2 className="budget__title">💰 Presupuesto 💰</h2>
                      <BudgetForm
                        setBudget={setBudget}
                        setRemaining={setRemaining}
                        setBudgetForm={setBudgetForm}
                      />
                    </>
                  )
                  :
                  (
                    <BudgetSummary
                      budget={budget}
                      remaining={remaining}
                    />
                  )
              }
            </div>
          </div>
        </section>
      </main>
      <Footer
        currentDateYear={currentDateYear}
        author={author}
      />
    </>
  );
}

export default App;