import Teacher from './teacher';
import { countItems, Gender } from '../services/utils';

const teacherLists = [
  {
    firstName: 'Dusan',
    lastName: 'Bobicic',
    age: 21,
    gender: 'Muski',
    subject: 'JavaScript'
  },
  {
    firstName: 'Cvijan',
    lastName: 'Peranovic',
    age: 20,
    gender: 'Muski',
    subject: 'JavaScript'
  }
];

export default class Teachers {
  // constructor() {}{
  //   teachers.forEach(teacher => {
  //     new Teacher(teacher.firstName, teacher.lastName, teacher.age, teacher.age, teacher.gender, teacher.subject);
  //   });
  //   console.log('Init teachers', countItems(teachers));
  // }
  getTeachers() {
    let html = '<ul>';
    teacherLists.forEach(teacher => {
      let item = new Teacher(teacher.firstName, teacher.lastName, teacher.age, Gender[teacher.gender], teacher.yearsOfStudy);
      html += item.getTeacher();
    });
    html += '</ul>';
    console.log('Init teachers', countItems(teacherLists));
    return html;
  }
}