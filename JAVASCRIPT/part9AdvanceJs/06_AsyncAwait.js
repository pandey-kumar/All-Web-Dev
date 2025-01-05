function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({name:"shubham",age:34,url:"https://spd.com"});
            // reject({name:"shubham",age:34,url:"https://spd.com"});
        },5000);
    });
}

// Either you can hold it using .then or .catch or you can use promises as well

async function getUserData(){
    try{
        console.log(`Fetching the user data .....`);
        const userdata=await fetchData();
        console.log(`User data fetched succesfully`);
        console.log(`USer details`,userdata);
    }
    catch(error){
        console.log(`Error in fetching the data`,error);
    }

}

getUserData();