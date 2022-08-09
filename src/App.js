import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchMockData } from './control/action';

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.mockData.mockData);
  useEffect(() => {
    dispatch(FetchMockData([]));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            return (
              <tr key={index}>
                <td style={{ fontSize: "15px" }}>{row.userId}</td>
                <td style={{ fontSize: "15px" }}>{row.id}</td>
                <td style={{ fontSize: "15px" }}>{row.title}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
