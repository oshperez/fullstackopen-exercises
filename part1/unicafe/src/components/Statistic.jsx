import { setElementClass } from "./Button";

const Statistic = ({ parameter, value }) => {
  return (
    <tr>
      <td>
        <h3 className={`badge bg-${setElementClass(parameter)}`}>
          {parameter}
        </h3>
      </td>
      <td>
        <span className="badge rounded-pill bg-secondary mx-2">
          {value}
          {parameter === "positive" && " %"}
        </span>
      </td>
    </tr>
  );
};

export default Statistic;
