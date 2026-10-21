/*
  File: components/StatsPanel.tsx
  Author:Minyan Liu
  Date: October 21, 2026

  This component shows three numbers about the full student list.
  Inputs: studentCount, honourRollCount and gradeTwelveCount as props.
  Processing: it does not keep its own state. Parent already counted the list.
  Output: three cards for Students, Honour roll and Graduating.
*/interface StatsPanelProps {
    studentCount: number;
    honourRollCount: number;
    gradeTwelveCount: number;
}

const StatsPanel = ({ studentCount, honourRollCount, gradeTwelveCount }: StatsPanelProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <div className=" rounded-xl bg-white shadow p-4 ">
                <h2 className="text-lg font-bold text-slate-800 mb-4">Students</h2>
                <p className="text-3xl font-bold text-slate-800">{studentCount}</p>
            </div>   
            <div className=" rounded-xl bg-white shadow p-4">
                <h2 className="text-lg font-bold text-slate-800 mb-4">Honour Roll</h2>
                <p className="text-3xl font-bold text-slate-800">{honourRollCount}</p>
            </div>
            <div className=" rounded-xl bg-white shadow p-4">
                <h2 className="text-lg font-bold text-slate-800 mb-4">Graduating</h2>
                <p className="text-3xl font-bold text-slate-800">{gradeTwelveCount}</p>
            </div>
        </div>  
    )
};

export default StatsPanel;