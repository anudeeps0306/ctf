import React, { useState } from "react";
import "./leaderboard.css";

const data = [
  {
    username: "user1",
    rank: 1,
    penalty: 0,
    score: 100,
  },
  {
    username: "user2",
    rank: 2,
    penalty: 5,
    score: 90,
  },
  {
    username: "user3",
    rank: 3,
    penalty: 10,
    score: 80,
  },
  {
    username: "user4",
    rank: 4,
    penalty: 15,
    score: 70,
  },
  {
    username: "user6",
    rank: 6,
    penalty: 25,
    score: 50,
  },
  {
    username: "user7",
    rank: 7,
    penalty: 30,
    score: 40,
  },
  {
    username: "user8",
    rank: 8,
    penalty: 35,
    score: 30,
  },
  {
    username: "user9",
    rank: 9,
    penalty: 40,
    score: 20,
  },
  {
    username: "user10",
    rank: 10,
    penalty: 45,
    score: 10,
  },
  {
    username: "user11",
    rank: 11,
    penalty: 50,
    score: 0,
  },
  {
    username: "user12",
    rank: 12,
    penalty: 55,
    score: -10,
  },
  {
    username: "user13",
    rank: 13,
    penalty: 60,
    score: -20,
  },
  {
    username: "user14",
    rank: 14,
    penalty: 65,
    score: -30,
  },
  {
    username: "user15",
    rank: 15,
    penalty: 70,
    score: -40,
  },
  {
    username: "user16",
    rank: 16,
    penalty: 75,
    score: -50,
  },
  {
    username: "user17",
    rank: 17,
    penalty: 80,
    score: -60,
  },
  {
    username: "user18",
    rank: 18,
    penalty: 85,
    score: -70,
  },
  {
    username: "user19",
    rank: 19,
    penalty: 90,
    score: -80,
  },
  {
    username: "user20",
    rank: 20,
    penalty: 95,
    score: -90,
  },
  {
    username: "user5",
    rank: 5,
    penalty: 20,
    score: 60,
  },
];

const Table = ({ data, limit }) => {
  const [page, setPage] = useState(1);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const currentData = data.slice(startIndex, endIndex);

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (endIndex < data.length) {
      setPage(page + 1);
    }
  };

  return (
    <div className="table-container">
      <table className="contest-main-table">
        <thead>
          <tr>
            <th className="rank">Rank</th>
            <th className="username">Username</th>
            <th className="penalty">Penalty</th>
            <th className="score">Score</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.username}>
              <td className="rank">{item.rank}</td>
              <td className="username">{item.username}</td>
              <td className="penalty">{item.penalty}</td>
              <td className="score">{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table-buttons">
        <button
          onClick={handlePrevious}
          disabled={page === 1}
          className="main-button"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={endIndex >= data.length}
          className="main-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <Table data={data} limit={4} />
    </div>
  );
};

export default App;
