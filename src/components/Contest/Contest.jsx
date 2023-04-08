import React from "react";
import "./contest.css";
import Card from "../Card/Card";

const data = [
    {
      contest: {
        name: "Contest Name 1",
        author: "Author 1",
        when: "2023-04-10T14:30:00.000Z",
        start_time: "16:30:00",
        url: "https://www.google.com"
      }
    },
    {
      contest: {
        name: "Contest Name 2",
        author: "Author 2",
        when: "2023-04-15T09:00:00.000Z",
        start_time: "12:00:00",
        url: "https://www.yahoo.com"
      }
    },
    {
      contest: {
        name: "Contest Name 3",
        author: "Author 3",
        when: "2023-04-20T18:00:00.000Z",
        start_time: "20:00:00",
        url: "https://www.bing.com"
      }
    },
    {
      contest: {
        name: "Contest Name 4",
        author: "Author 4",
        when: "2023-04-25T07:30:00.000Z",
        start_time: "10:30:00",
        url: "https://www.duckduckgo.com"
      }
    }
  ];
  
const Contest = () => {
  return (
    <div className="contest-main">
      <div className="contest-main-title">
        <h1 className="contest-main-title1">All live Contest</h1>
        <h1 className="contest-main-title2">
          All live contest created by the users
        </h1>
      </div>

      <div className="contest-main-search">
        <input
          className="contest-main-search-input"
          placeholder="Search"
        ></input>
      </div>

      <div className="contest-main-contest">
        <div className="contest-main-contest">
          {data.map((contest, index) => (
            <div className="contest-main-card" key={index}>
              <Card
                name={contest.contest.name}
                author={contest.contest.author} // pass author instead of description
                when={contest.contest.when}
                startTime={contest.contest.start_time}
                url={contest.contest.url}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contest;
