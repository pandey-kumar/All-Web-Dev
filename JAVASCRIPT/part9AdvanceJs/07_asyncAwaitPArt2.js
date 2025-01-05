// Lets fetch multiple promises using Promise.all


function UserData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("User data credentails got");
        },3000);
    })
}
function UserComments(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("User Comments got it");
        },4000);
    });
}

// Fetching both

async function fetchAllData(){
    try{

        console.log(` data is beign fetched......`);
        // way 1
        // const userdata=await UserData();
        // const userComments=await UserComments();

        //way 2
        const [userdata,userComments]=await Promise.all([UserData(),UserComments()]);

        console.log(`Recieved userdata:- `,userdata);
        console.log(`Recieved comments:- `,userComments);
        console.log(`Data fetched Successdully`);
    }
    catch(error){
        console.error("Error occured",error);
    }
}


fetchAllData();
