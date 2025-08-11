function doubleCalc(){
    calcWGPA();
    calcGPA(); 
}
function calcWGPA(){

            let score=0;
            let creds=0;

            let courses = document.querySelectorAll('.course');

            for(let x = 0; x < courses.length; x++) {
                let course = courses[x];

                let grade = parseFloat(courses[x].querySelector('.grade').value);
                let level = parseFloat(courses[x].querySelector('.level').value);
                let credits = parseFloat(courses[x].querySelector('.credits').value);

                    if (!isNaN(grade) && !isNaN(level) && !isNaN(credits)) {
                        let fgrade = grade + level;
                        score += fgrade * credits;
                        creds += credits;
                    }
                     if (isNaN(grade) || isNaN(level) || isNaN(credits)) {
                        alert("Please enter valid values for the grade, level, and credits.");
                        return
                    }
                }
        //Calculate GPA
        let gpa = (creds > 0) ? (score / creds).toFixed(2) : "N/A";
        //Show GPA
        document.getElementById('Weighted').textContent = "Weighted GPA: " + gpa;
            }
function calcGPA(){

            let score=0;
            let creds=0;

            let courses = document.querySelectorAll('.course');

            for(let x = 0; x < courses.length; x++) {
                let course = courses[x];

                let grade = parseFloat(courses[x].querySelector('.grade').value);
                let credits = parseFloat(courses[x].querySelector('.credits').value);

                    if (!isNaN(grade) && !isNaN(credits)) {
                        let fgrade = grade;
                        score += fgrade * credits;
                        creds += credits;
                    }
                    if (isNaN(grade) || isNaN(credits)) {
                        alert("Please enter valid values for the grade and credits.");
                        return;
                    }
                }
        //Calculate GPA
        let gpa = (creds > 0) ? (score / creds).toFixed(2) : "N/A";
        //Show GPA
        document.getElementById('Unweighted').textContent = "Unweighted GPA: " + gpa;
    }

            