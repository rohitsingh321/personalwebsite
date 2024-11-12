// Select all h3 elements in the syllabus section
document.querySelectorAll('.semester-syllabus h3').forEach(heading => {
    heading.addEventListener('click', () => {
        // Find the associated course list (ul) right after the clicked h3
        const courseList = heading.nextElementSibling;

        // Toggle the display of the course list
        if (courseList.style.display === 'none' || courseList.style.display === '') {
            courseList.style.display = 'block';
        } else {
            courseList.style.display = 'none';
        }
    });
});
