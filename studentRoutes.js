const express = require("express");
const router = express.Router();

// Temporary data (acts like database)
let students = [
    { id: 1, name: "Arun", dept: "CSE", age: 23 },
    { id: 2, name: "Aravind", dept: "ECE", age: 21 }
];

// 1️⃣ GET – Get all students
router.get("/", (req, res) => {
    res.json(students);
});

// 2️⃣ POST – Add new student
router.post("/", (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);

    res.json({
        message: "Student added successfully",
        students
    });
});

// 3️⃣ PUT – Update student
router.put("/", (req, res) => {
    const updatedStudent = req.body;

    students = students.map(student =>
        student.id === updatedStudent.id ? updatedStudent : student
    );

    res.json({
        message: "Student updated successfully",
        students
    });
});

// 4️⃣ DELETE – Delete multiple students
router.delete("/", (req, res) => {
    const idsToDelete = req.body; // array of IDs

    students = students.filter(
        student => !idsToDelete.includes(student.id)
    );

    res.json({
        message: "Students deleted successfully",
        students
    });
});

module.exports = router;