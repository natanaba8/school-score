export const initialUsers = [
  {
    id: 1,
    name: 'natan',
    username: "Admin",
    passoword: "abc123",
    role: "admin"
  },
  {
    id: 2,
    name: 'Epherem',
    username: "Teacher",
    passoword: "abc123",
    role: "Teacher",
    subjects: ["Physics", "Chemistry"],
  },
  {
    id: 3,
    name: 'Bona',
    username: "bona",
    passoword: "abc123",
    role: "Student",
    teacherId: 2,
  },
];

export const initialResults = [
  {
    id: 1,
    studentId: 3,
    subject: "Physics",
    classwork: 10,
    attendance: 9,
    midexam: 20,
    finalexam: 45,
  },
  {
    id: 2,
    studentId: 3,
    subject: "Chemistry",
    classwork: 8,
    attendance: 8,
    midexam: 15,
    finalexam: 30,
  }
];