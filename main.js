// just a notification in the beginning lol
// alert("There is no saving option so any progress you make will be resetted once you reload the page or exit , so be careful !")

// front for each accordion
let accordions = document.querySelectorAll(".accordion");
let accordionHeads = document.querySelectorAll(".accordion-head");
let accordionBodies = document.querySelectorAll(".accordion-body");
for (let i = 0;i<accordionHeads.length;i++){
    accordionHeads[i].addEventListener("click",function(){
        if (accordionBodies[i].classList.contains("hidden")){
            accordionBodies[i].classList.remove("hidden");
            accordionHeads[i].classList.add("open");
        }else{
            accordionBodies[i].classList.add("hidden");
            accordionHeads[i].classList.remove("open");
        }
    })
}


// check for answers 
/*
let correct = ["operating system","linus torvalds","android","ios","microsoft","linux","n",                                     // 01
"hard disk","n","random access memory","central processing unit","graphics processing unit","mother board","n","n","y",         // 02
"process","process","program","n","n",                                                                                          // 03
"7","running state","new state","hard disk","waiting state","terminated state","running state","n",                             // 04
"multiprogramming","multitasking","multitasking","n","y",                                                                       // 05
"batch os","multiprocessing os","multiprogramming os",                                                                          // 06
"process control block","process state","context switching","registers","context swapping","7",                                 // 07
"short term scheduler","long term scheduler","n","n","medium term scheduler",                                                   // 08
"y",                                                                                                                            // 09 
""                                                                                                                              // 10
]         
*/

let correct = ["operating system","linus torvalds","android","ios","microsoft","linux","n",                                     // 01
"hard disk","n","random access memory","central processing unit","graphics processing unit","mother board","n","n","y",         // 02
"process","process","program","n","n",                                                                                          // 03
"7","running state","new state","hard disk","waiting state","terminated state","running state","n",                             // 04
"multiprogramming","multitasking","multitasking","n","y",                                                                       // 05
"batch os","multiprocessing os","multiprogramming os",                                                                          // 06
"process control block","process state","context switching","registers","context swapping","7",                                 // 07
"short term scheduler","long term scheduler","n","n","medium term scheduler",                                                   // 08
"y",                                                                                                                            // 09 
""                                                                                                                              // 10
]  

let correct1 = ["operating system","linus torvalds","android","ios","microsoft","linux","n"];
let correct2 = ["hard disk","n","random access memory","central processing unit","graphics processing unit","mother board","n","n","y"];
let correct3 = ["process","process","program","n","n"];
let correct4 = ["7","running state","new state","hard disk","waiting state","terminated state","running state","n"];
let correct5 = ["multiprogramming","multitasking","multitasking","n","y"];
let correct6 = ["batch os","multiprocessing os","multiprogramming os"];
let correct7 = ["process control block","process state","context switching","registers","context swapping","7"];
let correct8 = ["short term scheduler","long term scheduler","n","n","medium term scheduler"];
let correct9 = ["y"];
let correct10 = [];

/*
let c1 = correct1.length;
let c2 = correct2.length;
let c3 = correct3.length;
let c4 = correct4.length;
let c5 = correct5.length;
let c6 = correct6.length;
let c7 = correct7.length;
let c8 = correct8.length;
let c9 = correct9.length;
let c10 = correct10.length;
*/

let corrects = [correct1,correct2,correct3,correct4,correct5,correct6,correct7,correct8,correct9,correct10];

let btns = document.querySelectorAll("button");
let userAnswers = document.querySelectorAll("input");
for (let i = 0;i<btns.length;i++){
    btns[i].addEventListener("click",function(){
// FUCK DATA STRUXTURES 
        if((userAnswers[i].value).toLowerCase() == correct[i]){
            btns[i].disabled = true;
            userAnswers[i].disabled = true;

            /*
            let res = userAnswers[i].value.toLowerCase();
            for (x in corrects){
                for (j in corrects[x] ){
                        if (corrects[x][j].includes(res)){
                            corrects[x][j].pop(res,1);
                            break;
                        }
                    }
                }
                if (x.length == 0){
                    accordions[corrects.indexOf(j)].classList.add("completed");
                }
            */



            /*
            if (i < c1){
                correct1.splice(correct1.indexOf(userAnswers[i]),1);
            }
            else if (i < c2){
                correct2.splice(correct2.indexOf(userAnswers[i]),1);
            }
            else if (i < c3){
                correct3.splice(correct3.indexOf(userAnswers[i]),1);
            }
            else if (i < c4){
                correct4.splice(correct4.indexOf(userAnswers[i]),1);
            }
            else if (i < c5){
                correct5.splice(correct5.indexOf(userAnswers[i]),1);
            }
            else if (i < c6){
                correct6.splice(correct6.indexOf(userAnswers[i]),1);
            }
            else if (i < c7){
                correct7.splice(correct7.indexOf(userAnswers[i]),1);
            }
            else if (i < c8){
                correct8.splice(correct8.indexOf(userAnswers[i]),1);
            }
            else if (i < c9){
                correct9.splice(correct9.indexOf(userAnswers[i]),1);
            }
            else{
                correct10.splice(correct10.indexOf(userAnswers[i]),1);
            }

            if (correct1.length == 0){accordions[0].classList.add("completed");}
            if (correct2.length == 0){accordions[1].classList.add("completed");}
            if (correct3.length == 0){accordions[2].classList.add("completed");}
            if (correct4.length == 0){accordions[3].classList.add("completed");}
            if (correct5.length == 0){accordions[4].classList.add("completed");}
            if (correct6.length == 0){accordions[5].classList.add("completed");}
            if (correct7.length == 0){accordions[6].classList.add("completed");}
            if (correct8.length == 0){accordions[7].classList.add("completed");}
            if (correct9.length == 0){accordions[8].classList.add("completed");}
            if (correct10.length == 0){accordions[9].classList.add("completed");}

            */
        }
        

    })
}
