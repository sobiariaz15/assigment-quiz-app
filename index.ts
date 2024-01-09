import inquirer   from "inquirer";  
async function askquestion() {


    const answer = await inquirer.prompt([{
      type : "list", 
      name:"questionno1",
      choices:["run time" ,"compile time ","load time", "none of theabove"], 
      message:"typescript provide type checking at ?",
    },
 {
        type : "list", 
      name:"questionno2",
      choices:["tsc",".ts", "tsc.js","none of obove"], 
      message:"which of the following is right command to compile typescript file ?", 
 },
    
    ]);
    if (answer.questionno1 === "compile time") {
    console.log("answer is correct");
    
} else () => {
    console.log("answer is not correct");

 }  
 if (answer.questionno2 === "tsc") {
        console.log("answer is correct");
 }  else () => {
    console.log("answer is not correct");
    
 }
}
askquestion();  
