import Statistic from "./Statistic";

const Statistics = ({ statistics }) => {
  let content;
  if (statistics.all > 0) {
    content = (
      <table className="w-auto">
        <tbody>
          <Statistic parameter="good" value={statistics.good} />
          <Statistic parameter="neutral" value={statistics.neutral} />
          <Statistic parameter="bad" value={statistics.bad} />
          <Statistic parameter="all" value={statistics.all} />
          <Statistic parameter="average" value={statistics.average} />
          <Statistic parameter="positive" value={statistics.positive} />
        </tbody>
      </table>
    );
  } else {
    content = <p className="fs-4">No feedback given</p>;
  }

  return (
    <div className="row gy-3 py-5">
      <h1 className="display-6 bg-secondary text-light py-1 ">Statistics</h1>
      {content}
    </div>
  );
};

export default Statistics;
