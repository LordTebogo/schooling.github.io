
let a1;
let a2;
let c1;
let c2;
let e1 = "";
let root1, root2;
let count2 = 0
let options;
// find a,b and c for quadratic eq.

let a = a1*a2
let c = c1*c2
let b = a1*c2 + a2*c1

 // for generating equation
 let topics = document.getElementById("topics");
 let count = 0

function equations(){
    topics = document.getElementById("topics");
    let board = document.getElementById("board");
    let El = document.createElement("ol")
    board.append(El)
    while (count<8){
    count ++
    a1 = Math.floor(Math.random()*8)-4
    a2 = Math.floor(Math.random()*6)-3
    c1 = Math.floor(Math.random()*10)-5
    c2 = Math.floor(Math.random()*10)-10
    // find a,b and c for quadratic eq.
    switch(a1*a2){
        case -1:
            a = "-";
            break;
        case 1:
            a = "";
            break;
        case 0:
            a = "!0"
            break;
        case a1*a2:
            a = a1*a2;
            break;
    }
    // switch c
        switch(c1*c2){
        case 0:
            c = ""
            break;
        case c1*c2:
            //console.log((c1*c2).toString().includes("-",0))
            if((c1*c2).toString().includes("-",0)){
                c = c1*c2;
            }
            else{
                c = "+" + c1*c2;
            }
            
            break;
    }
    //switch b
    switch((a1*c2+a2*c1)){
        case 0:
            b = "!0"
            break;
        case -1:
            b = "-"
        case 1:
            b="+";
            break;
        case (a1*c2+a2*c1):
            //console.log("for b " + (a1*c2+a2*c1).toString().includes("-") + " is "+ (a1*c2+a2*c1))
            if((a1*c2+a2*c1).toString().includes("-")){

                b = (a1*c2+a2*c1);
            }
            else{
                b = "+" + (a1*c2+a2*c1);
            }
            
            break;
    }
    

  
    // for generating equation
    let equation = `<li onclick="solveEq()">${a}<em>x</em><sup>2</sup>${b}<em>x</em>${c} = 0</li>`
    let inequalless = `<li onclick="solveEq()">${a}<em>x</em><sup>2</sup>${b}<em>x</em>${c} <b>&lt;</b> 0</li>`
    let inequalnless = `<li onclick="solveEq()">${a}<em>x</em><sup>2</sup>${b}<em>x</em>${c} <b>&gt;</b> 0</li>`
    let inequaleless = `<li onclick="solveEq()">${a}<em>x</em><sup>2</sup>${b}<em>x</em>${c} <b>&le;</b> 0</li>`
    let inequalenless = `<li onclick="solveEq()">${a}<em>x</em><sup>2</sup>${b}<em>x</em>${c} <b>&ge;</b> 0</li>`
    let equations_ = [equation,inequalless,inequalnless,inequaleless,inequalenless];
    let rEquation = equations_[Math.floor(Math.random()*(equations_.length))]
    
   
    if (equation.includes("!0")){
        
    }else{
        board.querySelector("ol").innerHTML += "<br>" + rEquation;
        
    }
    
    }
    
}

function solveEq(){
    let btn = document.getElementById("btn1");
    if(count2==1){
        btn.style.display = "block";
        count2--
    }
    let selected = window.getSelection().focusNode;
    a = "";
    b = "";
    c = "";
    //getting elements in clicked html
    //it is glitchy therefore, if not from parent node it will have length <4
    // to solve this, if length is <4, get parent from parent node.
    if (selected.parentElement.innerText.length<4){
        
        topics.innerHTML = "<h3>Solve for <em>x</em>"
        +" by filling in the blanks below</h3>" 
        + selected.parentElement.parentNode.innerHTML + "<br>";
        
         e1 = selected.parentElement.parentNode.innerHTML;
         console.log(e1)
         
         for(let i=0; i<=5; i++){
            if (e1[i]=="<"){
                if (a==''){
                    a = "1"
                    
                }
                break;
                
                }else{
                a += e1[i]
                if(a=="-" & e1[i+1]=="<"){
                    a = "-1"
                    
                }else{
                    
                }
                }
                
            }

         //about b, getting b from selected equation
         for (let i=23; i<=27; i++){
            if (e1[i]=="<"){
                if(b==""){
                    b=1;
                    
                }
                break;
            }
            if (a.length==1){
                if (e1[i]=="+"){
                    b += "";
                }else{
                    b += e1[i];
                    
                }
            }else{
                if (e1[i]==">" || e1[i]=="+"){
                    
                }else{
                    b += e1[i];
                    
                }
                

            }
            
         }
         //about c, getting c from selected equation
         for (let k = 1; k <= 4; k++){
            for(let i =27; i<=38; i++){
                if(e1[i]=="+" ){
                    if(e1[i+k]==" "){
                        break;
                    }else{
                        if(e1[i+k]=="=" || e1[i+k]=="<" || e1[i+k]=="b"|| e1[i+k]=="u"){
                            break;
                        }

                        c += e1[i+k];
                        
                    }
                        
                    }

            if(e1[i]=="-"){
                if(e1[i+k]==" "){
                    break;
                }else{
                    if(e1[i+k]=="=" || e1[i+k]=="<" || e1[i+k]=="b"|| e1[i+k]=="u"){
                        break;
                    }
                    if(k==1){
                        c += e1[i]+ e1[i+k];
                        
                    }
                    else{
                        c += e1[i+k];
                        
                        
                    }
                }
                    
                }

            }
        }
    }
    
    else{
        topics.innerHTML = "<h3>Solve for <em>x</em>"
        + " by filling in the blanks below</h3>"
         + selected.parentElement.innerHTML + "<br>";

        e1 = selected.parentElement.innerHTML
       
        
        for(let i=0; i<=5; i++){
            if (e1[i]=="<"){
                if (a==''){
                    a = "1"
            
                }
                break;
                }else{
                a += e1[i]
                if(a=="-" & e1[i+1]=="<"){
                    a = "-1"
                
                }else{
                
                }
                
            }

         }
         //about b, getting b from selected equation
         for (let i=23; i<=27; i++){
            if (e1[i]=="<"){
                if(b==""){
                    b=1;
                    
                }
                break;
            }
            if (a.length==1){
                if (e1[i]=="+"){
                    b += "";
                }else{
                    b += e1[i];
                    
                }
                
            }else{
                if (e1[i]==">" || e1[i]=="+"){
                    
                }else{
                    b += e1[i];
                    
                }
                

            }
         }
         //about c, getting c from selected equation
         for (let k = 1; k <= 4; k++){
            for(let i =27; i<=38; i++){
                if(e1[i]=="+"){
                    if(e1[i+k]==" "){
                        break;
                    }else{
                        if(e1[i+k]=="=" || e1[i+k]=="<" || e1[i+k]=="b"|| e1[i+k]=="u"){
                            break;
                        }
                        c += e1[i+k];
                    
                    }
                        
                    }

            if(e1[i]=="-"){
                if(e1[i+k]==" "){
                    break;
                }else{
                    if(e1[i+k]=="=" || e1[i+k]=="<" || e1[i+k]=="b"|| e1[i+k]=="u"){
                        break;
                    }
                    if(k==1){
                        c += e1[i]+ e1[i+k];
                    
                    }
                    else{
                        c += e1[i+k];
                    
                    }
                    
                }
                    
                }

            } 
        
         }
        }

        // show parenthesis for user to fill, 
    {
        let button = `<button type="button" onclick="getUserInput()" id="btn1">check</button>`
        options = "<select id='s1' name='signs'>"
        +"<option>=</option>"
        +"<option>&lt;</option>"
        +"<option>&ge;</option>"
        +"<option>&gt;</option>"
        +"<option>&le;</option></select>"

        //when sign is less than, inequality
        let divEl = document.createElement("div")
        divEl.id = "play";
        if (selected.parentElement.innerText.length>4 & selected.parentElement.innerHTML.includes("&lt;")){
            divEl.innerHTML = `(<input name="answer1" 
         type ="text" placeholder="answer" id="1" >)
         (<input name="answer" type ="text"
          placeholder="answer" id="2">) ${options} 0 <br><br> ${button}`;
        }if (selected.parentElement.innerText.length<4 & selected.parentElement.parentNode.innerHTML.includes("&lt;")){
            divEl.innerHTML = `(<input name="answer1" 
         type ="text" placeholder="answer" id="1">)
         (<input name="answer" type ="text"
          placeholder="answer" id="2">) ${options} 0 <br><br> ${button}`;
        }
        //when sign is greater than.
        
        if (selected.parentElement.innerText.length>4 & selected.parentElement.innerHTML.includes("&gt;")){
            divEl.innerHTML = `(<input name="answer1" 
         type ="text" placeholder="answer" id="1">)
         (<input name="answer" type ="text"
          placeholder="answer" id="2">) ${options} 0 <br><br> ${button}`;
        }if (selected.parentElement.innerText.length<4 & selected.parentElement.parentNode.innerHTML.includes("&gt;")){
            divEl.innerHTML = `(<input name="answer1" 
         type ="text" placeholder="answer" id="1">)
         (<input name="answer" type ="text"
          placeholder="answer" id="2">) ${options} 0 <br><br> ${button}`;
        }
        //when sign is less than or equal
        if (selected.parentElement.innerText.length>4 & selected.parentElement.innerHTML.includes("≤")){
            divEl.innerHTML = `(<input name="answer1" 
         type ="text" placeholder="answer" id="1">)
         (<input name="answer" type ="text"
          placeholder="answer" id="2">) ${options} 0 <br><br> ${button}`;
        }if (selected.parentElement.innerText.length<4 & selected.parentElement.parentNode.innerHTML.includes("≤")){
            divEl.innerHTML = `(<input name="answer1" 
         type ="text" placeholder="answer" id="1">)
         (<input name="answer" type ="text"
          placeholder="answer" id="2">) ${options} 0 <br><br> ${button}`;
        }
        //when sign is greater than or equal
        if (selected.parentElement.innerText.length>4 & selected.parentElement.innerHTML.includes("≥")){
            divEl.innerHTML = `(<input name="answer1" 
         type ="text" placeholder="answer" id="1">)
         (<input name="answer" type ="text"
          placeholder="answer" id="2">) ${options} 0 <br><br> ${button}`;
        }if (selected.parentElement.innerText.length<4 & selected.parentElement.parentNode.innerHTML.includes("≥")){
            divEl.innerHTML = `(<input name="answer1" 
         type ="text" placeholder="answer" id="1">)
         (<input name="answer" type ="text"
          placeholder="answer" id="2">) ${options} 0 <br><br> ${button}`;
        }
        //when sign is equal
        if (selected.parentElement.innerText.length>4 & selected.parentElement.innerHTML.includes("=")){
            divEl.innerHTML = `(<input name="answer1" 
         type ="text" placeholder="answer" id="1">)
         (<input name="answer" type ="text"
          placeholder="answer" id="2">) = 0 <br><br> ${button}`;
        }if (selected.parentElement.innerText.length<4 & selected.parentElement.parentNode.innerHTML.includes("=")){
            divEl.innerHTML = `(<input name="answer1" type ="text" placeholder="answer" id="1">)
         (<input name="answer" type ="text"
          placeholder="answer" id="2">) = 0 <br><br> ${button}`;
        }
        let itbe = solved()
        topics.append(divEl)
    }
        
        

}

function solved(){
    if (c==""){
        c = "0"
    }

    let discreminant = Math.sqrt(b*b-4*a*c)
    let numerator = ((-1*b)+discreminant)
    let numeratorM = ((-1*b)-discreminant)
    let denominator = (2*a)
    root1 = numerator/denominator
    root2 = numeratorM/denominator
    console.log("x = "+ root1 + " or","x = "+root2)
    if(root1.toString().includes(".") & root1.toString().length>5){
        console.log("here is root1 "+ root1, numerator%denominator, root1.toFixed(0))
        let modul = numerator%denominator + "0";
    for (i=1;i<=10;i++){
        let s = modul/i
        let s2 = denominator/i
        //checking if both are divisible by i
        if(!s.toString().includes(".") & !s2.toString().includes("."))
        {
            if(root1>1 || root1<-1){
                let kk1 = Math.floor(root1)
                if(kk1>root1 & root1>0){
                    c1 = (s2*(kk1-1))+(s/10);
                    a1 = s2;
                    console.log("a1= "+a1,c1)
                    if(a1<0){
                        a1 = a1*(-1)
                        c1 = c1*(-1)
                        console.log("a1= "+a1,c1)
                    }
                }
                if(kk1<root1 & root1>0){
                    c1 = (s2*(kk1))+(s/10);
                    a1 = s2;
                    console.log("a1= "+a1,c1)
                    if(a1<0){
                        a1 = a1*(-1)
                        c1 = c1*(-1)
                        console.log("a1= "+a1,c1)
                    }
                }
                
                if(kk1>root1 & root1<0){
                    c1 = (s2*(kk1+1))+(s/10);
                    a1 = s2;
                    console.log("a1= "+a1,"c1= "+ c1)
                    if(a1<0){
                        a1 = a1*(-1)
                        c1 = c1*(-1)
                        console.log("a1= "+a1,"c1=_ "+ c1)
                    }
                }if(kk1<root1 & root1<0){
                    c1 = (s2*(kk1+1))+(s/10);
                    a1 = s2;
                    console.log("a1= "+a1,"c1=_ "+ c1)
                    if(a1<0){
                        a1 = a1*(-1)
                        c1 = c1*(-1)
                        console.log("a1= "+ a1,"c1=_ "+ c1)
                    }
                }
                
            }else{
                c1 = s/10;
                a1 = s2;
                console.log("a1= "+a1,c1)
                if(a1<0){
                    a1 = a1*(-1)
                    c1 = c1*(-1)
                    console.log("a1= "+a1,c1)
                }
            }
            
        }
        
    }   
    }
    if(root2.toString().includes(".") & root2.toString().length>5){
        console.log("here is root2 "+ root2,numeratorM%denominator,Math.floor(root2))
        let modul = numeratorM%denominator + "0";
    for (i=1;i<=10;i++){
        let s = modul/i
        let s2 = denominator/i
        if(!s.toString().includes(".") & !s2.toString().includes("."))
        {
            if(root2>1 || root2<-1){
                let kk2 = Math.floor(root2)
                if(kk2>root2 & root2>0){
                    c2 = (s2*(kk2-1))+(s/10);
                    a2 = s2;
                    console.log("a2=_ "+a2,c2)
                    if(a2<0){
                        a2 = a2*(-1)
                        c2 = c2*(-1)
                        console.log("a2=_ "+a2,c2)
                    }
                }if(kk2<root2 & root2>0){
                    c2 = (s2*(kk2))+(s/10);
                    a2 = s2;
                    console.log("a2=_ "+a2,c2)
                    if(a2<0){
                        a2 = a2*(-1)
                        c2 = c2*(-1)
                        console.log("a2=_ "+a2,c2)
                    }
                }
                if(kk2>root2 & root2<0){
                    c2 = (s2*(kk2+1))+(s/10);
                    a2 = s2;
                    console.log("a2=__ "+a2,c2)
                    if(a2<0){
                        a2 = a2*(-1)
                        c2 = c2*(-1)
                        console.log("a2=__ "+a2,c2)
                    }
                }if(kk2<root2 & root2<0){
                    c2 = (s2*(kk2+1))+(s/10);
                    a2 = s2;
                    console.log("a2=__- "+a2,c2)
                    if(a2<0){
                        a2 = a2*(-1)
                        c2 = c2*(-1)
                        console.log("a2=__- "+a2,c2)
                    }
                }
                
            }else{
                c2 = s/10;
                a2 = s2;
                console.log("a2= "+a2,c2)
                if(a2<0){
                    a2 = a2*(-1)
                    c2 = c2*(-1)
                    console.log("a2= "+a2,c2)
                }
            }
            
        }
    }
        
    }
    if (root1.toString().length<7){

        console.log(root1, "check")
        for(i=1;i<=10;i++){
            let n = numerator/i
            let d = denominator/i
            if (!n.toString().includes(".") & !d.toString().includes(".") & !d.toString().includes("e")){
                a1 = d;
                c1 = n;
                console.log(root1, `${c1}/${a1}`)
                if(a1<0){
                    a1 = a1*(-1)
                    c1 = c1*(-1)
                    console.log(root1, `${c1}/${a1}`)
                }
            }
        }
    }
    
    if (root2.toString().length<7){

        console.log(root2, "check2")
        for(i=1;i<=10;i++){
            let n = numeratorM/i
            let d = denominator/i
            if (!n.toString().includes(".") & !d.toString().includes(".") & !d.toString().includes("e")){
                a2 = d;
                c2 = n;
                console.log(root2, `${c2}/${a2}`)
                if(a2<0){
                    a2 = a2*(-1)
                    c2 = c2*(-1)
                    console.log(root2, `${c2}/${a2}`)
                }
            }
        }
    }
}


function getUserInput(){
    let input1 = document.getElementById("1").value;
    let input2 = document.getElementById("2").value;
    let input3 = document.getElementById("s1");
    let btn = document.getElementById("btn1");
    let play = document.getElementById("play");
    if(a2==""){
        a2=1;
    }
    if(a1==""){
        a1=1;
    }
    if (count2==0){
        btn.style.display = "none";
        count2 = count2+1;
    if((Math.abs(c1)%Math.abs(a1))==0){
        a1 = 1
        c1 = c1/a1
    }if((Math.abs(c2)%Math.abs(a2))==0){
        a2 = 1
        c2 = c2/a2
    }
    if(Math.abs(a1) == Math.abs(c1)){
        c1 = c1/a1
        a1 = 1
    }
    if(Math.abs(a2) == Math.abs(c2)){
        c2 = c2/a2
        a2 = 1
    }
    if(a1==1){
        a1="";
    }
    if(a2==1){
        a2="";
    }
    if(c1>=0 & c2>=0){
        if(e1.includes("=")){
            play.innerHTML += `<br>(${a1}<em>x</em> ${c1*(-1)})(${a2}<em>x</em> ${c2*(-1)}) = 0`
        }else{
            play.innerHTML += `<br>(${a1}<em>x</em> ${c1*(-1)})(${a2}<em>x</em> ${c2*(-1)}) ${options} 0`
        }
        
    }if(c1<=0 & c2<=0){
        if(e1.includes("=")){
            play.innerHTML += `<br>(${a1}<em>x</em> + ${c1*(-1)})(${a2}<em>x</em> + ${c2*(-1)}) = 0`
        }else{
            play.innerHTML += `<br>(${a1}<em>x</em> + ${c1*(-1)})(${a2}<em>x</em> + ${c2*(-1)}) ${options} 0`
        }
        
    }
    if(c1>=0 & c2<=0){
        if(e1.includes("=")){
            play.innerHTML += `<br>(${a1}<em>x</em> ${c1*(-1)})(${a2}<em>x</em> + ${c2*(-1)}) = 0`
        }else{
            play.innerHTML += `<br>(${a1}<em>x</em> ${c1*(-1)})(${a2}<em>x</em> + ${c2*(-1)}) ${options} 0`
        }
        
    }if(c1<=0 & c2>=0){
        if(e1.includes("=")){
            play.innerHTML += `<br>(${a1}<em>x</em> + ${c1*(-1)})(${a2}<em>x</em> ${c2*(-1)}) = 0`
        }else{
            play.innerHTML += `<br>(${a1}<em>x</em> + ${c1*(-1)})(${a2}<em>x</em> ${c2*(-1)}) ${options} 0`
        }
        
    }
    if(c1==0 || c2 ==0){
        if(e1.includes("=")){
            play.innerHTML += `<br>(${a1}<em>x</em> + ${c1*(-1)})(${a2}<em>x</em> ${c2*(-1)}) = 0`
        }else{
            play.innerHTML += `<br>(${a1}<em>x</em> + ${c1*(-1)})(${a2}<em>x</em> ${c2*(-1)}) ${options} 0`
        }
    }
}

    console.log("hi, i'm here", e1)
    console.log("a1 = ", a1, "c1=",c1)
    console.log("a2 = ", a2, "c2=",c2)
}
