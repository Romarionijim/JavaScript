let currentDate = new Date();
console.log(currentDate.getMonth());
// console.log(currentDate.getFullYear());
// console.log('0' + (currentDate.getMonth() + 1).toString().slice(-2))
// let dateStr = "18-07-2023";
// console.log(currentDate);


// let arr =  [1,2,3,4]
// console.log(arr.slice(-2))

// let strDate = "18-07-2023"
// function convertDateToNumberFormat() {
//     const conv = strDate.replace(/-/g, "")
//     const convert = Number(conv)
//     const splitIt = new Date(convert)
//     const full = `${splitIt.getDay()} ${splitIt.getMonth() + 1} ${splitIt.getFullYear()}`
//     const addMonths = splitIt + 2
//     console.log(full);
// }

// convertDateToNumberFormat()



let strDate = "18-07-2023";

function convertDateToNumberFormat() {
    // Step 1: Extract day, month, and year from the original date string
    const [day, month, year] = strDate.split("-");

    // Step 2: Create a Date object from the extracted components
    const dateObject = new Date(Number(year), Number(month) , Number(day));
    console.log(dateObject);


    // Step 3: Extract day, month, and year from the Date object
    const extractedMonth =  ('0' + (dateObject.getMonth())).slice(-2); // Month is zero-based, so add 1 to get the correct value

    const fullDate = `${day}-${Number(extractedMonth) }-${year}`;
    console.log(typeof day);
    const newDate = fullDate.toString();
    console.log(typeof newDate === 'number');
    console.log(`the newwwwww ${newDate}`);
    console.log(typeof day);
    console.log(typeof year);
}

convertDateToNumberFormat();



let strDate1 = "18-07-2023";

function convertDateToNumberFormat1() {
  // Step 1: Extract day, month, and year from the original date string
  const [day, month, year] = strDate.split("-");

  // Step 2: Create a Date object from the extracted components
  const dateObject = new Date(Number(year), Number(month), Number(day));

  // Step 3: Extract day, month, and year from the Date object
  const extractedDay = ('0' + dateObject.getDate()).slice(-2); // Zero-pad day
  const extractedMonth = ('0' + (dateObject.getMonth())).slice(-2); // Zero-pad month

  const fullDate = `${extractedDay}-${extractedMonth}-${year}`;
  console.log(fullDate);
}

convertDateToNumberFormat1();

