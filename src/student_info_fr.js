import './css/spinner.css';
import './css/student_info.css';

const template = require('./js/student_info_fr.hbs')

// You need to comment out one of the following lines to switch between real data and test data
/* Real data */ 
const dataSource = `./json/student_info.json?dothisfor=${reportconfig.dothisfor}`

/* Test data */
//const dataSource = `./json/test_data.json` //Tesst data

const fadeOutEffect = () => {
   let fadeTarget = document.getElementById("overlay");
   let fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
         fadeTarget.style.opacity = .8;
      }
      if (fadeTarget.style.opacity > 0) {
         fadeTarget.style.opacity -= 0.1;
      } else {
         clearInterval(fadeEffect);
      }
   }, 200);
}

const process = (students) => {

   students.forEach((student) => {
      if (student.alert_medical.length > 300) {
         student.extended_alert_medical = student.alert_medical;
         student.alert_medical =
           "Limite de caractères dépassée. Voir la dernière page pour le texte complet.";
         student.supplemental_required = true;
       }
       if (student.medical_considerations.length > 300) {
         student.extended_medical_considerations =
           student.medical_considerations;
         student.medical_considerations =
           "Limite de caractères dépassée. Voir la dernière page pour le texte complet.";
         student.supplemental_required = true;
       }
    
       student.contacts.pop();
       student.phone_numbers.pop();
    
       for (const contact of student.contacts) {
         const filteredNumbers = student.phone_numbers.filter(
           (x) => x.person_id == contact.id
         );
         filteredNumbers.forEach((y) => contact.phone_numbers.push(y));
       }
    
       if (student.contacts.length > 4) {
         student.supplemental_required = true;
       }
   });
 
    return students;
 };

const populate = async (url) => {

   const response = await fetch(url)
   const results = await response.json()
   const students = process(results)
   const outputData = {students: students}
   const container = document.getElementById('output')
   container.innerHTML = template(outputData)
   const overlay = document.getElementById('overlay') 
   fadeOutEffect()
   overlay.remove()
}

populate(dataSource)