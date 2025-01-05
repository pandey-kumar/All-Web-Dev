// Example 1:-

const btn= document.getElementById("changeTextButton");
btn.addEventListener("click",function(){
    const para=document.getElementById("myParagraph");
    para.textContent="This has been changed now";
});

// example 2:-



const btn2 = document.getElementById("highlightFirstCity");
btn2.addEventListener("click",function(){
    const list = document.getElementById("citiesList");
    list.firstElementChild.classList.add("highlight");
});

// try to toggle it as well

// example 3:-

const btn3 = document.getElementById("changeOrder");
btn3.addEventListener("click",function(){
    let coffetype=document.getElementById("coffeeType");
    coffetype.textContent="Expresso";
    coffetype.style.backgroundColor="green";
    coffetype.style.padding="2px";
    coffetype.style.border="2px solid white";
    coffetype.style.borderRadius="10%";

});


// example 4:-

document.getElementById("addNewItem").addEventListener("click",function(){
    // add yourself element
    const myNewlist=document.createElement("li");
    myNewlist.textContent="Eggs";

    const spl=document.getElementById("shoppingList");
    spl.appendChild(myNewlist);

});

// example 5:-


document.getElementById("removeLastTask").addEventListener("click",function(){
    const mylist=document.getElementById("taskList");
    // way 1
    // mylist.removeChild(mylist.lastElementChild);
    // way 2
    mylist.lastElementChild.remove();

})

// example 6:-

document.getElementById("clickMeButton").addEventListener("dblclick",function(){
    alert("Shubham");
})

// example 7:-

document.getElementById("teaList").addEventListener("click",function(event){

    if(event.target && event.target.matches(".teaItem")){
        alert("You Selected:- "+event.target.textContent);
    }
})

// example 8:- 


document.getElementById("feedbackForm").addEventListener("submit",function(event){
    event.preventDefault();
    const feedback = document.getElementById("feedbackInput").value;
    const para=document.getElementById("feedbackDisplay");
    para.textContent = `Fedback is :- ${feedback}`;
});


// example 9

document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("domStatus").textContent="Dom FULLY Loaded";
});

// example 10

document.getElementById("toggleHighlight").addEventListener("click",function(){
    const para = document.getElementById("descriptionText");
    // to add highlight:-
    // para.classList.add("highlight");
    // to toggle we can use .toggle
    para.classList.toggle("highlight");

});


