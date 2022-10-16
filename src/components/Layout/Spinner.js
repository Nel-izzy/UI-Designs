import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <tr className="spinner">
      <td>
        <img src={spinner} alt="Loading..." />
      </td>
    </tr>
  );
};

export default Spinner;
