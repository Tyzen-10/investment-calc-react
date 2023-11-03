import { calculateInvestmentResults } from "../util/investment.js";
import { formatter } from "../util/investment.js";
export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  console.log(resultsData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((part)=>{
            const totalInterest = part.valueEndOfYear - part.annualInvestment*part.year - initialInvestment;
            const totalInvestment = part.valueEndOfYear - totalInterest;
            return (
                <tr key={part.year}>
                    <td>{part.year}</td>
                    <td>{formatter.format(part.valueEndOfYear)}</td>
                    <td>{formatter.format(part.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalInvestment)}</td>
                </tr>
            )
        })}
      </tbody>
    </table>
  );
}

//investment value - current value of investment.