function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
        let success = true;
        if (success) {
          resolve("Data Fetched SuccessFully");
        } else {
          reject("Data Not Found Sorry");
        }

    },3000);
  });
}


// you can chain up as much as then you want:-
// promises can be consumed using the .then .catch or async or await as well

fetchData()
    .then((data)=>{
        console.log(data);
        return `Shubham`
    })
    .then((name)=>{
        console.log(`Hello ${name}`);
    })
    .catch((error)=>{
        console.error(error);
    })