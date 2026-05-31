import './App.css'
import Card from './components/Card';
import { ODAForm } from './components/ODAForm';

function App() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl mb-10 text-center">
          Latest Stock News Updates
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <Card title="TCS signs multi-million dollar deal with SKF for AI-led manufacturing business" source="Business Line" time="16 hours 9 minutes ago" description="TCS will help SKF create connected operating model, combining centralised, AI-enabled systems and harmonised processes" url="https://www.thehindubusinessline.com/info-tech/tcs-signs-multi-million-dollar-deal-with-skf-for-ai-led-manufacturing-business/article71017877.ece" />
          <Card title="Mcap of 6 of top-10 most valued firms surges by 74,111 cr; Reliance biggest winner" source="Business Line" time="4 days 1 hour ago" description="The valuation of TCS jumped 19,338.68 crore to 8,38,401.33 crore, and that of ICICI Bank surged 14,515.93 crore to 9,06,901.32 crore" url="https://www.thehindubusinessline.com/markets/mcap-of-6-of-top-10-most-valued-firms-surges-by-74111-cr-reliance-biggest-winner/article71016962.ece" />
          <Card title="Nashik Police file first charge sheet in TCS sexual assault case" source="Business Standard" time="5 days 14 hours ago" description="Nashik police on Friday filed the first charge sheet in connection with the alleged instances of sexual harassment." url="https://www.business-standard.com/india-news/nashik-police-file-first-charge-sheet-in-tcs-sexual-assault-case-126052201878_1.html" />

        </div>

        <ODAForm />
      </div>
    </>
  )
}

export default App
