const checkDuplicates = (arr, name) => {
  let flag = false;
  arr.forEach((person) => {
    if (person.name === name) {
      flag = true;
    }
  });
  return flag;
};

const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  setPersonsToShow,
}) => {
  return (
    <form
      onSubmit={(event) => {
        // prevent user from add names that already exist in the phonebook
        event.preventDefault();
        !checkDuplicates(persons, newName)
          ? setPersons(
              persons.concat({
                id: persons.length + 1,
                name: newName,
                phoneNumber: newNumber,
              })
            ) ||
            setPersonsToShow(
              persons.concat({
                id: persons.length + 1,
                name: newName,
                phoneNumber: newNumber,
              })
            )
          : alert(`${newName} is already added to the phonebook`);
        setNewName("");
        setNewNumber(NaN);
      }}
    >
      <div>
        name:{" "}
        <input
          value={newName}
          onChange={(event) => {
            setNewName(event.target.value);
          }}
        />
        number:{" "}
        <input
          value={newNumber || ""}
          onChange={(event) => {
            setNewNumber(event.target.value);
          }}
        />
      </div>
      <button type="submit">add</button>
    </form>
  );
};
export default PersonForm;
