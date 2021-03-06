const { Router } =require('express');

const OwnerController =require('./controllers/OwnerController');
const Consultations = require('./controllers/ConsultationsController');
const PacientController= require('./controllers/PacientController');
const MedicController= require('./controllers/MedicController');
const ReceptionistController= require('./controllers/RecepcionistController');
const RecepController= require('./controllers/RecepController');
const MedicalRecordController= require('./controllers/MedicalRecordController');

const route = Router();

// Administrator
route.post('/owner', OwnerController.create);
route.get('/owner', OwnerController.read);
route.get('/owner/:id', OwnerController.getOne);
route.put('/owner', OwnerController.update);
route.delete('/owner', OwnerController.delete);

// Consultation Medic
route.post('/consultations', Consultations.create);
route.get('/consultations', Consultations.read);
route.get('/consultations/:id', Consultations.getOne);
route.put('/consultations/:id', Consultations.update);
route.delete('/consultations', Consultations.delete);

// Pacient

route.post('/pacient', PacientController.create);
route.get('/pacient', PacientController.read);
route.get('/pacient/:id', PacientController.getOne);
route.put('/pacient/:id', PacientController.update);
route.delete('/pacient', PacientController.remove);


// Medic
route.post('/medic', MedicController.create);
route.get('/medic', MedicController.read);
route.get('/medic/:id', MedicController.getOne);
route.put('/medic/:id', MedicController.update);
route.delete('/medic', MedicController.remove);

// Recepcionist
route.post('/receptionist', ReceptionistController.create);
route.get('/receptionist', ReceptionistController.read);
route.get('/receptionist/:id', ReceptionistController.getOne);
route.put('/receptionist/:id', ReceptionistController.update);
route.delete('/receptionist', ReceptionistController.remove);

// Recep
route.post('/recep', RecepController.create);
route.get('/recep', RecepController.read);
route.get('/recep/:id', RecepController.getOne);
route.put('/recep/:id', RecepController.update);
route.delete('/recep', RecepController.delete);


// Medical Record
route.post('/prontuario', MedicalRecordController.create);
route.get('/prontuario', MedicalRecordController.read);
route.get('/prontuario/:id', MedicalRecordController.getOne);
route.put('/prontuario/:id', MedicalRecordController.update);
route.delete('/prontuario', MedicalRecordController.delete);

module.exports =  route;