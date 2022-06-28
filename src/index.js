// Modules
import { initializeApp } from "firebase/app";
import 
{ 
  getFirestore, setDoc, doc,
  query, collection, where,
  getDocs, getDoc, updateDoc
} from "firebase/firestore";
import { format } from "date-fns";
import { calendar } from "./script.js";

const dateAdd = (function () {

  // Firebase and firestore setup
  const firebaseConfig = {
    apiKey: "AIzaSyDhTYgx_6UXmqNUKHQqkV9l26DN1Yj0x7k",
    authDomain: "date-tracker-52275.firebaseapp.com",
    projectId: "date-tracker-52275",
    storageBucket: "date-tracker-52275.appspot.com",
    messagingSenderId: "824748547184",
    appId: "1:824748547184:web:7dc4b54bbfd82986bb68b5"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  

  // queryDom
  const daysContainer = document.querySelector('.days');
  const monthHeader = document.querySelector('.month');
  const addDateWdw = document.querySelector('.l-add-date');
  const formAddDate = document.querySelector('.m-add-date');
  
  // bind events
  daysContainer.addEventListener('click', function(e) {
    toggleAddDate(e);
    editSubmission();
  });
  monthHeader.addEventListener('click', function(e) {
    calendar.switchMonth(e);
    markDate();
  });
  formAddDate.addEventListener('submit', addDateDB);

  // Greater scope variables
  let day;


  // Show or hide add-date wdw
  const toggleAddDate = e => {    
    const isInsideDayCont = e.target.classList.contains('c-cal__day'); // Checks for c-cal__day class which means is a day of the month
    const isNotDisplayed = addDateWdw.classList.contains('l-add-date--hidden'); // Checks if add-date wdw is not displayed    
    // show
    if (isInsideDayCont && isNotDisplayed) {      
      addDateWdw.classList.remove('l-add-date--hidden');
      day = parseInt(e.target.textContent);   // sets day value to the clicked day textContent          
    }    
  }  
  async function addDateDB(e) {    
    e.preventDefault();
    const asunto = formAddDate.asunto.value;
    const highlights = formAddDate.txtname.value;
    const year = calendar.date.getFullYear();
    const month = calendar.date.getMonth();

    
    const dateString = format(new Date(year, month, day), 'ddMMyyyy');    
    const docRef = doc(db, 'dates', dateString);
    const docSnap = await getDoc(docRef);
    if (asunto.length > 0 && highlights.length > 0) {
      if (docSnap.exists()) {
        await updateDoc(docRef, {
          asunto: asunto,
          highlights: highlights
        });     
      } else {
        await setDoc(docRef, {
          "asunto": asunto,
          "highlights": highlights,
          "day": day,
          "month": month,
          "year": year
        });
        markDate();        
      }
      addDateWdw.classList.add('l-add-date--hidden');
      formAddDate.reset();      
    } else {
      alert('Pon algo :|');
    }    
  }

  async function markDate() {
    const year = calendar.date.getFullYear();
    const month = calendar.date.getMonth();
    const datesColRef = collection(db, "dates");
    const q = query(datesColRef, where("month", "==", month), where("year", "==", year));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {      
      const day = doc.data().day;
      // day - 1 because is 0 based
      calendar.days[day - 1].classList.add('salida');
    });    
  }
  async function editSubmission() {
    const year = calendar.date.getFullYear();
    const month = calendar.date.getMonth();
    const dateString = format(new Date(year, month, day), 'ddMMyyyy');    
    const docRef = doc(db, 'dates', dateString);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      const asunto = data.asunto;
      const highlights = data.highlights;
      formAddDate.asunto.value = asunto;
      formAddDate.txtname.value = highlights;            
    }    
  }
  
  // init
  markDate();


})();
