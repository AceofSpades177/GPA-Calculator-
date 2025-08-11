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
                }
        //Calculate GPA
        let gpa = (creds > 0) ? (score / creds).toFixed(2) : "N/A";
        //Show GPA
        document.getElementById('Unweighted').textContent = "Your GPA: " + gpa;
    }