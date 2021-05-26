import React, { useState, useEffect } from "react";
import personServices from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";
import Notification from "./components/Notification";
import createMessage from "./services/notification";

const App = () => {
  //States
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [notification, setNotification] = useState(null);

  //Side effects
  useEffect(() => {
    personServices.getPersons().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  //Event handlers
  const addPerson = (e) => {
    e.preventDefault();
    const newPerson = { name: newName, number: newNumber };
    const isDuplicated = persons.some(
      (person) => person.name === newPerson.name
    );

    if (isDuplicated) {
      const updateConfirmed = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );
      if (updateConfirmed) {
        const personId = persons.find(
          (person) => person.name === newPerson.name
        ).id;

        personServices
          .updatePerson(personId, newPerson)
          .then((updatedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id === updatedPerson.id ? updatedPerson : person
              )
            );
            notify("person updated", "success", updatedPerson.name);
          })
          .catch(() => notify("unexpected error", "err", null));
      }
    } else {
      personServices
        .addPerson(newPerson)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          notify("person added", "success", returnedPerson.name);
        })
        .catch(() => notify("unexpected error", "err", null));
    }

    setNewName("");
    setNewNumber("");
  };

  const deleteContact = (id) => {
    const target = persons.find((person) => person.id === id);
    const deleteConfirmed = window.confirm(`Delete ${target.name}?`);
    if (deleteConfirmed) {
      personServices
        .deletePerson(id)
        .then((res) => {
          if (res.status === 200) {
            notify("person deleted", "success", target.name);
          }
        })
        .catch((err) => {
          notify("delete error", "err", target.name);
        });

      setPersons(persons.filter((person) => person.id !== id));
    }
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  //Helper function
  const notify = (category, type, info) => {
    const messgage = createMessage(category, info);
    const newNotification = { content: messgage, type: type, active: true };
    setNotification(newNotification);

    setTimeout(() => {
      setNotification({ ...newNotification, active: false });
    }, 5 * 1000);
  };

  return (
    <div>
      <div className="header">
        <h2>Phonebook</h2>
        {notification && <Notification notification={notification} />}
      </div>

      <Filter filter={filter} handleChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
        name={newName}
        number={newNumber}
        handleSubmit={addPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <PersonList
        persons={persons}
        filter={filter}
        handleClick={deleteContact}
      />
    </div>
  );
};

export default App;
