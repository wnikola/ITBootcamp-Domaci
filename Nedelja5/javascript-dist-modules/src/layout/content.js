import Students from '../components/students';
import Teachers from '../components/teachers';

class Content {
  constructor() {
    const students = new Students();
    const teachers = new Teachers();
  }
  getHtml(){
    const students = new Students();
    const teachers = new Teachers();
    let html = '<div>';
    html += students.getStudents();
    html += teachers.getTeachers();
    html += '</div>';
    console.log('Init content');
    return html;
  }
}

export default Content;