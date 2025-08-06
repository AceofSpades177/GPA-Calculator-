function calcGPA(){

            let score=0;
            let creds=0;

            let courses = document.querySelectorAll('.course');

            for(let x = 0; x < courses.length; x++) {
                let course = courses[x];

                let grade = parseFloat(courses[x].querySelectorAll('.grade')[0].value);
                let level = parseFloat(courses[x].querySelectorAll('.grade')[1].value);
                let credits = parseFloat(courses[x].querySelector('.credits').value);

                    if (!isNaN(grade) && !isNaN(level) && !isNaN(credits)) {
                        let fgrade = grade + level;
                        score += fgrade * credits;
                        creds += credits;
                    }
                }
        //Calculate GPA
        let gpa = (creds > 0) ? (score / creds).toFixed(2) : "N/A";
        //Show GPA
        document.getElementById('result').textContent = "Your GPA: " + gpa;
    }