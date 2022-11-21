//console.dir(document)
//select element using get element by ID

// const mainHeading= document.getElementById("main-heading");
// console.log(mainHeading);

// //Query selector

// const mainQueryHeading= document.querySelector("#main-heading");

// const header = document.querySelector(".header");
// console.log(header);
// console.log(mainQueryHeading);


//Events  3 types

//  const btn = document.querySelector(".btn-headline");
// console.log(btn);
// btn.onclick = function(){
//     console.log("YOU CLICKED ME!!!");
// }


// 3rd Method : Add addEventListener 
// const btn = document.querySelector(".btn-headline");
// // function clickMe() {
// //     console.log("YOU CLICKEDD MEEEE");
// // }

// btn.addEventListener("click",()=>{
//     console.log("YOU CLICKEDD MEEEE");
// })


// this keyword


//eveng bubbling / event propogation and capturing  


const todo = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type = 'text']");
// console.log(todoInput);
const todonewList = document.querySelector(".todo-list");
todo.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newTodotext  = todoInput.value;
    const newli = document.createElement("li");
    const newliInnerhtml =  `
        <span class="text">${newTodotext}</span>
        <div class="todo-buttons">
            <button class = "todo-btn done">Done</button>
            <button class = "todo-btn remove">Remove</button>
        </div>`;
    newli.innerHTML= newliInnerhtml;
    console.log(newli);
    todonewList.append(newli);
    todoInput.value = "";

});
todonewList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("done")){
        const sib = e.target.parentNode.previousElementSibling;
        sib.style.textDecoration = "line-through";

        console.log("DONE");
    }
    if(e.target.classList.contains("remove")){
       e.target.parentNode.parentNode.remove();

        console.log("RMEOVE");
    }
})












