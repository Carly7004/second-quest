import React from "react";

function FilterChoice() {
  const [showFailedOnly, setShowFailedOnly] = React.useState(false);
  const [studentList, setStudentList] = React.useState([
    {
      note: 18,
      name: "Young Allen",
      gender: "female",
    },
    {
      note: 15,
      name: "Weaver Yates",
      gender: "male",
    },
    {
      note: 4,
      name: "Patrica Reilly",
      gender: "female",
    },
    {
      note: 12,
      name: "Schroeder Hewitt",
      gender: "male",
    },
    {
      note: 10,
      name: "Holmes Kennedy",
      gender: "male",
    },
    {
      note: 19,
      name: "Holt Smith",
      gender: "male",
    },
    {
      note: 9,
      name: "Reyna Rollins",
      gender: "female",
    },
    {
      note: 5,
      name: "Craig Golden",
      gender: "male",
    },
    {
      note: 4,
      name: "Bentley Owens",
      gender: "male",
    },
    {
      note: 16,
      name: "Mia Hall",
      gender: "female",
    },
  ]);

  function handleShowFailedOnlyClick() {
    setShowFailedOnly(!showFailedOnly);
  }

  return (
    <div>
      <h2>Exam results</h2>
      <button onClick={handleShowFailedOnlyClick}>
        Show only failed results: {showFailedOnly ? "ON" : "OFF"}
      </button>
      <ul>
        {studentList
          .filter((student) => showFailedOnly || student.note >= 10)
          .map((student, index) => (
            <li key={index}>
              Name: {student.name} Note: {student.note}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default FilterChoice;
