import { ProblemList } from "../../constant/problemList"

export default function Problems() {
    return (
        <div>
            <div>LeetCode Top Interview Questions</div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Difficulty</th>
                </tr>
                
                {ProblemList.map(problem => 
                    <tr>
                        <td>{problem.id}</td>
                        <td>{problem.title}</td>
                        <td>{problem.difficulty}</td>
                    </tr>
                )}
                
            </table>
        </div>
    )
}