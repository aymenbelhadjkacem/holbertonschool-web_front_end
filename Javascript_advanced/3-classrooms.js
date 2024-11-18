function createClassRoom (numbersOfStudents) {
  function studentSeat (seat) {
    return () => { return seat; };
  }
  const students = [];
  for (let i = 0; i <= numbersOfStudents; i++) {
    students.push(studentSeat(i + 1));
            // Using a loop from 0 to numbersOfStudents, pass the number of iteration + 1 to studentSeat and add its return value to the students array

  }
  return students;
}

const classRoom = createClassRoom(10);

