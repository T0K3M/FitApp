const step_form1 = document.querySelector(".step__form-1"); 
const step_form2 = document.querySelector(".step__form-2");
const step_form3 = document.querySelector(".step__form-3");
const mainhome = document.querySelector(".main");
const step_final = document.querySelector(".step__final");
const p1 =  document.querySelector(".p1");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");


{
const woman = document.querySelector('#span1');
const man = document.querySelector('#span2'); 
const btn1 = document.querySelector(".btn1");
var input1 = document.querySelector(".input1");
var input2 = document.querySelector(".input2");
var input3 = document.querySelector(".input3");

var weightClc;
var heightClc;
var ageClc;


var count = 0;
var WorM;

function walidateP1(event){
    weightClc = input1.value;
    heightClc = input2.value;
    ageClc = input3.value;
    count = 0;
    event.preventDefault();
    if(woman.classList.contains("cc_radio--active") || man.classList.contains("cc_radio--active")){
        
        }else{
            count++;
        woman.style.borderBottom = '2px solid red';
        man.style.borderBottom = '2px solid red';
    }
    if(woman.classList.contains("cc_radio--active")){
        WorM = 'woman';
    }else if (man.classList.contains("cc_radio--active")){
        WorM = 'man';
    }

    if(input1.value > 0){
        input1.style.borderBottom = '2px solid lightgreen';
    }else{
        input1.style.borderBottom = '2px solid red';
        count++;
    }

    if(input2.value > 0){
        input2.style.borderBottom = '2px solid lightgreen';
    }else{
        input2.style.borderBottom = '2px solid red';
        count++;
    }

    if(input3.value > 0){
        input3.style.borderBottom = '2px solid lightgreen';
    }else{
        input3.style.borderBottom = '2px solid red';
        count++;
    }

   displayFORM();
};

function displayFORM(){
    if(count == 0){
        step_form1.style.display = 'none';
        step_form2.style.display = 'flex';
        mainhome.style.height = '90vh';
        mainhome.style.top = '2%';
        }
};


btn1.addEventListener('click',walidateP1);

woman.addEventListener('click',()=>{
    woman.style.borderBottom = '2px solid lightgreen';
    man.style.borderBottom = '2px solid white';
})
man.addEventListener('click',()=>{
    woman.style.borderBottom = '2px solid white';
    man.style.borderBottom = '2px solid lightgreen';
})


woman.addEventListener('click',()=>{
 woman.classList.replace("cc_radio","cc_radio--active");
 man.classList.replace("cc_radio--active","cc_radio");
})

man.addEventListener('click',()=>{
    man.classList.replace("cc_radio","cc_radio--active");
    woman.classList.replace("cc_radio--active","cc_radio");
   })
}

//page2
{
const solid_check = document.querySelectorAll(".fa-check");
const form_span = document.querySelectorAll(".form__span");
const btn2 = document.querySelector(".btn2");

var count = 0;
var select;

function selectspan(){
 const child = this.children;
 if(child[0].style.backgroundColor == 'black'){
    count--;
    child[0].attributeStyleMap.clear()
 }else if (child[0].style.backgroundColor = 'white'){
    solid_check.forEach(el => {
        count = 0;
        el.attributeStyleMap.clear()
    });
    child[0].style.backgroundColor = 'black';
    child[0].style.color = 'white';
    select = child[0].id;
    count++;
 }

 console.log(select);
}

function changepage2(event){
    event.preventDefault();
    if(count == 1){
    step_form2.style.display = 'none';
    step_form3.style.display = 'flex';
    }else{
        alert("Select one option!");
    }
};

form_span.forEach(el => {
    el.addEventListener('click',selectspan);
});
btn2.addEventListener('click',changepage2);
}

//page3
{
    var form_select = document.querySelector(".form__select");
    var f_select;
    function getselect(){
    f_select = form_select.options[form_select.selectedIndex].value;
    }
  function swappage(){
    if(f_select === '1opt' || f_select === '2opt' || f_select === '3opt'){
    step_form3.style.display = 'none';
   step_final.style.display = 'flex';
   p1.style.display = 'none';
  }else{
    alert("Select one option!");
  }}
  form_select.addEventListener('change',getselect);
 btn3.addEventListener('click',swappage);
  
}
//calc
{
    const reasult_1 = document.querySelector(".form__reasult-1");
    const reasult_2 = document.querySelector(".form__reasult-2");
    const basiccalories_1 = document.querySelector(".form__basic-1");
    const basiccalories_2= document.querySelector(".form__basic-2");

 var PPM;
 var CPM;
 var active;
 var doing;
    

function CalcCalories(){
   
    if(WorM =='woman'){
        switch(select){
            case'Sec1':
            active = 1.2;
            break;
            case'Sec2':
            active = 1.3;
            break;
            case'Sec3':
            active = 1.5;
            break;
            case'Sec4':
            active = 1.6;
            break;
            case'Sec5':
            active = 1.9;
            break;
            case'Sec6':
            active = 2.2;
            break;
         }
        PPM = 665.1 + (9.567 * weightClc) + (1.85*heightClc) - (4.68*ageClc);
        CPM = (PPM * active).toFixed();
        console.log(CPM);
        console.log(f_select);
       switch(f_select){
        case'1opt':
        if(CPM >= 2400){
            CPM -= 800;
        }else if(CPM <= 2399 && CPM > 2300){
            CPM -=700;
        }else if(CPM <= 2299 && CPM >= 2100){
            CPM -= 600;
        }
        else if(CPM <= 2099 && CPM >= 2000){
            CPM -= 500;
        }
        else if(CPM <= 1999 && CPM >= 1899){
            CPM -= 400;
        }else if(CPM <= 1898 && CPM >= 1799){
            CPM -= 300;
        }else if(CPM <= 1798 && CPM >= 1699){
            CPM -= 300;
        }
        else if(CPM <= 1698 && CPM >= 1599){
            CPM -= 250;
        }else if(CPM < 1598){
            CPM -= 200;
        }
        break;
        case'2opt':
        CPM = CPM;
        break;
        case'3opt':
        if(CPM >= 3000){
            CPM = CPM -+- 600;
        }else if(CPM < 3000){
          CPM =  CPM -+- 350;
        }
        break;
       }
       console.log(CPM);
    }
    if(WorM =='man'){
        switch(select){
            case'Sec1':
            active = 1.2;
            break;
            case'Sec2':
            active = 1.3;
            break;
            case'Sec3':
            active = 1.6;
            break;
            case'Sec4':
            active = 1.7;
            break;
            case'Sec5':
            active = 2.1;
            break;
            case'Sec6':
            active = 2.4;
            break;
         }
        PPM = 66.47 + (13.7 * weightClc) + (5*heightClc) - (6.76*ageClc);
        CPM = (PPM * active).toFixed();
        console.log(CPM);
        console.log(f_select);
       switch(f_select){
        case'1opt':
        if(CPM >= 2600){
            CPM -= 900;
        }else if(CPM <= 2599 && CPM > 2500){
            CPM -=800;
        }else if(CPM <= 2399 && CPM > 2300){
            CPM -=700;
        }else if(CPM <= 2299 && CPM >= 2100){
            CPM -= 600;
        }
        else if(CPM <= 2099 && CPM >= 2000){
            CPM -= 500;
        }
        else if(CPM <= 1999 && CPM >= 1899){
            CPM -= 400;
        }else if(CPM <= 1898 && CPM >= 1799){
            CPM -= 300;
        }else if(CPM <= 1798 && CPM >= 1699){
            CPM -= 300;
        }
        else if(CPM <= 1698 && CPM >= 1599){
            CPM -= 250;
        }else if(CPM < 1598){
            CPM -= 200;
        }
        break;
        case'2opt':
        CPM = CPM;
        break;
        case'3opt':
        if(CPM >= 3000){
            CPM = CPM -+- 600;
        }else if(CPM < 3000){
          CPM =  CPM -+- 350;
        }
        break;
       }
       console.log(CPM);
    }
    var textdo;

    if(f_select == '1opt'){
     textdo = 'If you want to lose weight consume around:';
    }else if (f_select == '2opt'){
        textdo = 'If you want to maintain your weight consume about:';
    }else if(f_select == '3opt'){
        textdo = 'If you want to increase your body weight consume about:';
    }
  reasult_1.textContent =`${textdo}`;
  reasult_2.textContent =`${CPM} kcal.`;
  basiccalories_1.textContent = 'Your basic metabolism is:';
  basiccalories_2.textContent = `${PPM.toFixed()} kcal.`;
}
btn3.addEventListener('click',CalcCalories);
}







    
     

