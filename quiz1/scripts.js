document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('pie-chart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Correct', 'Wrong'],
            datasets: [{
                data: [score, questions.length - score],
                backgroundColor: ['green', 'red'],
            }]
        }
    });
});
