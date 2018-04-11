import StudentController from './controller/students';


const Route = (app) => {

  app.post('/api/students',  StudentController.create);
  app.get('/api/students', StudentController.getAllStudents);
  app.get('/api/students/:id',  StudentController.getOneStudent);
  app.put('/api/students/:id',  StudentController.updateStudent);
  app.delete('/api/students/:id', StudentController.deletestudent);

};
export default Route;
