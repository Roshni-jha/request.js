const axios = require('axios');
const fs=require('fs')
const redline=require("readline-sync")
const saral_API=axios.get('https://api.merakilearn.org/courses ')
    .then(  Response=>{
        let saral_data=(Response.data)
        let json_file=JSON.stringify(saral_data,null,5)
        fs.writeFileSync("Merakileran_Data3.json",json_file)
        serial_number=1
        for (i of saral_data){
            console.log(serial_number,i["name"],i["id"])
            serial_number+=1
        } 
    course=redline.questionInt("Which course do you want:-")-1
    console.log("Your corse:-",saral_data[course].name)
    let ID=saral_data[course].id
    const course_data = axios.get("https://api.merakilearn.org/courses/"+ID+"/exercises")
        .then(Response=>{
        let DATA=Response.data
        let myJson=JSON.stringify(DATA,null,5)
        fs.writeFileSync("Question_Data.json",myJson)
        course_ques=DATA.course.exercises
        serial1=1
        for(k=0;k<course_ques.length;k++){
            console.log(serial1+".",course_ques[k].name)
            serial1++
        }
        var n=require("readline-sync")
        const content_user=redline.question('Which Qestion Do You Wnat:-')-1
        console.log("-"+course_ques[content_user].content)
        const saralQuestion=course_ques[content_user].content[0].value
        console.log("-"+saralQuestion)
    }).catch(error=>{
        console.log("none")
    })
}).catch(error=>{
    console.log("none")
})