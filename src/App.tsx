import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import DetailsResult from './components/DetailsResult';
import InputForm from './components/InputForm';
import MainResult from './components/MainResult';
import './styles/App.css'
import { IData, ILoan } from './types/types';
import { countLoan, totalPercentPaymentCount } from './utils/calculations';

function App() {

  const [credit, setCredit] = useState<number>(10000); // сумма кредита
  const [term, setTerm] = useState<number>(12) // срок кредита в месяцах 
  const [interestRate, setInterestRate] = useState<number>(0) // процентная ставка
  const [details, setDetails] = useState<boolean>(false);

  const loanArray: ILoan[] = useMemo<ILoan[]>(() => {
    return countLoan(credit, term, interestRate); // расчёт кредита
  }, [credit, term, interestRate]); 

  // Расёт общей суммы переплаты по кредиту
  const totalPercentPayment: number = useMemo<number>(() => {
    return totalPercentPaymentCount(loanArray) // функция totalPercentPaymentCount импортирован из ./utils/calculations
  }, [loanArray]);

  useEffect( () => {
    let now = new Date();
    fetchData([now.getFullYear(),now.getMonth() + 1, now.getDate()].join('-'));
  }, []);

  //функция для получение ставки рефинансирования
  async function fetchData(date: string) {
    try {
      const response = await axios.get<IData[]>('https://www.nbrb.by/api/refinancingrate', {
        params: {
            onDate: date
        }
      });
      setInterestRate(response.data[0].Value + 5);
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div className="App">
      <h1 className="logo">Кредитный калькулятор</h1>
      {/* форма ввода параметров кредита */}
      <InputForm 
        credit={credit}
        setCredit={setCredit}
        term={term}
        setTerm={setTerm}
        interestRate={interestRate}
        setInterestRate={setInterestRate} 
      />

      {/* блок с основными результатами расчёта */}
      <MainResult 
        credit={credit}
        mainPayment={loanArray[0].mainPayment}
        totalPercentPayment={totalPercentPayment}
        setIsDetails={setDetails}
      />

      {/* блок с деталями расчёта */}
      <DetailsResult loanArray={loanArray} details={details} />
    </div>
  );
}

export default App;
