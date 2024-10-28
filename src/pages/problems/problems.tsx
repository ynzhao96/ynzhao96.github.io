import { ProblemList } from "../../constants/problemList";

export default function Problems() {
  return (
    <div>
      <div>LeetCode Top Interview Questions</div>
      <table>
        <div>
          <th>ID</th>
          <th>Title</th>
          <th>Difficulty</th>
        </div>

        {ProblemList.map((problem, index) => (
          <div key={index}>
            <td>{problem.id}</td>
            <td>{problem.title}</td>
            <td>{problem.difficulty}</td>
          </div>
        ))}
      </table>
    </div>
  );
}
