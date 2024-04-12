function countStudents(students: number[], sandwiches: number[]): number {
    let counter: number = 0;
    while (counter <= students.length) {
        if (students[0] !== sandwiches[0]) {
            students.push(students[0]);
        } else {
            sandwiches.shift();
            counter = 0;
        }
        students.shift();
        counter++;
    }
    return students.length;
};