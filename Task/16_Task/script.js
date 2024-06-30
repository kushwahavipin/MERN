document.addEventListener('DOMContentLoaded', function () {
    const students = [
        { name: 'John Doe', marks: 85, class: '10th', address: '123 Main St' },
        { name: 'Jane Smith', marks: 90, class: '11th', address: '456 Elm St' },
        { name: 'Alex Johnson', marks: 75, class: '9th', address: '789 Oak St' },
        { name: 'Sarah Williams', marks: 88, class: '12th', address: '101 Pine St' },
    ];

    const studentCardsContainer = document.getElementById('studentCards');
    const searchInput = document.getElementById('searchInput');

    // Function to render student records dynamically
    function renderStudents(studentsData) {
        const studentCardsHTML = studentsData.map(student => `
            <div class="card">
                <h2>${student.name}</h2>
                <p>Marks: ${student.marks}</p>
                <p>Class: ${student.class}</p>
                <p>Address: ${student.address}</p>
            </div>
        `).join('');
        studentCardsContainer.innerHTML = studentCardsHTML;
    }

    // Initial rendering
    renderStudents(students);

    // Function to filter students by name
    function filterStudents(searchText) {
        return students.filter(student => student.name.toLowerCase().includes(searchText.toLowerCase()));
    }

    // Event listener for search input
    searchInput.addEventListener('input', function (event) {
        const searchText = event.target.value;
        const filteredStudents = filterStudents(searchText);
        renderStudents(filteredStudents);
    });
});