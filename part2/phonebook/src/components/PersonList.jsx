import { useEffect, useRef } from "react";
import Person from "./Person";

const PersonList = ({ persons, filter, handleClick }) => {
  //regex for matching filter entries
  const filterMatch = new RegExp(`${filter}`, "i");

  //reference to ul DOM node
  const phonebookList = useRef(null);

  //Changes the font color of every match
  useEffect(() => {
    const spanMatch = /<span style="color: red">||<\/span>/g;
    const phonebookItems = phonebookList.current.childNodes;

    //Removes span tags from previous filter match
    for (const item of phonebookItems) {
      if (spanMatch.test(item.innerHTML)) {
        item.innerHTML = item.innerHTML.replace(spanMatch, "");
      }
    }

    if (filter) {
      //Encloses the current match in a span tag to modify its font-color
      for (const item of phonebookItems) {
        item.innerHTML = item.innerHTML.replace(
          filterMatch,
          `<span style="color: red">${item.innerHTML.match(filterMatch)}</span>`
        );
      }
    }
  }, [filter]);

  return (
    <ul ref={phonebookList}>
      {persons
        .filter((person) => filterMatch.test(person.name))
        .map((person) => (
          <Person
            key={person.id}
            name={person.name}
            number={person.number}
            id={person.id}
            handleClick={handleClick}
          />
        ))}
    </ul>
  );
};

export default PersonList;
