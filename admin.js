import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";

import { getAuth, signInWithEmailAndPassword ,
    createUserWithEmailAndPassword,} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { doc, setDoc,
    getDocs,
    getFirestore,
    collection,
    where,
    query,

 } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyCfs-mImz4a3MaBpWbWSw0NYVq_9VKl_cc",
  authDomain: "minihackhaton.firebaseapp.com",
  projectId: "minihackhaton",
  storageBucket: "minihackhaton.appspot.com",
  messagingSenderId: "146585337253",
  appId: "1:146585337253:web:ccf10fb666c895b227fc4c",
  measurementId: "G-H6NWJCFJ86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db=getFirestore();

const attence=document.getElementById('atendaceMark');




attence.addEventListener("click", async function(){
const classTime=document.getElementById('timming');
const schedule=document.getElementById('schedule');
const teacher=document.getElementById('teacher');
const section=document.getElementById('section');
const course=document.getElementById('course');
const batch=document.getElementById('batch')

await setDoc(doc(db, "students"), {
   classTime: classTime.value,
   schedule: schedule.value,
  teacher : teacher.value,
  section:section.value,
  course :course.value,
  batch : batch.value
  })
});
const docRef = doc(db, "students", "SF");
const docSnap = await getDocs(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
 
  console.log("No such document!");
}



const adminName=document.getElementById('name');
const fName=document.getElementById('fname');
const phoneNumber=document.getElementById('contcNmbr');
const cnic=document.getElementById('cnic');
const course=document.getElementById('course')

const teacBtn=document.getElementById('addData')


teacBtn.addEventListener("click", async function () {
    const searchQuery = query(v, where("Tname", "==", sreachTeacher.value));
    console.log(sreachTeacher.value)
    const querySnapshot = await getDocs(searchQuery)
    querySnapshot.forEach((doc) => {
       


        showitemDiv.innerHTML += '<p>Name: ' + doc.data().Tname + '</p>';
        showitemDiv.innerHTML += '<p>class time: ' + doc.data().classtime + '</p>';
        

    });
})


var sreachStudent = document.getElementById("srchStd");
var sreachTeacher = document.getElementById("srchTeachr");

const q = query(collection(db, "students"));
const v = query(collection(db, "teacher"));
const searchQuery = query(q, where("Name", "==", sreachStudent.value));




var studentbtn = document.getElementById('stdBtn');
var teacher = document.getElementById('teachrBtn');
var showListDiv = document.getElementById('show-list');
var showitemDiv = document.getElementById("show-teacher");


studentbtn.addEventListener("click", async function () {
    const searchQuery = query(q, where("Name", "==", sreachStudent.value));

    const querySnapshot = await getDocs(searchQuery)
    querySnapshot.forEach((doc) => {


        showListDiv.innerHTML += '<p>Name: ' + doc.data().Name + '</p>';
        showListDiv.innerHTML += '<p>Father Name: ' + doc.data().FatherName + '</p>';
        showListDiv.innerHTML += '<p>Roll number: ' + doc.data().Rollnumber + '</p>';
        showListDiv.innerHTML += '<p>Contact Number: ' + doc.data().contactNumber + '</p>';
        showListDiv.innerHTML += '<p>Student CNIC: ' + doc.data().StudentCNIC + '</p>';
        showListDiv.innerHTML += '<p>Course Name: ' + doc.data().studentCourse + '</p>';

        console.log(doc.id, " => ", doc.data().Name);
    });
})



  





        
