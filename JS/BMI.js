const height = document.querySelector(".form__input--1");
const weight = document.querySelector(".form__input--2");
const calcbtn= document.querySelector(".form__input--btn");
const mreault = document.querySelector(".main__reasult");

const bmireasult =  document.querySelector(".reasult");
const bmiRC = document.querySelector(".reasult__close");

const h1 = document.querySelector(".reasult__h1");
const Rp = document.querySelector(".reasult__p");

const mainp = document.querySelector(".main__panel");

var reasult = 0;

function ShowBMI(){
    bmireasult.style.display = 'flex';
    h1.textContent = `Your BMI is ${reasult}`;
      
    if(reasult < 16){
    Rp.textContent = ` A BMI value of less than 18.5 kg / m2 & indicates that your body weight is too low for your height. This may be due to the chronic consumption of too few kilocalories per day in relation to the total caloric needs of the body. Underweight may also accompany the course of some diseases as a symptom of them.
    Low body weight is related to, among others with lowering the body's immunity, increases the risk of fertility disorders, may cause sleep problems and cause chronic fatigue. Therefore, it is worth taking a look at your diet and consult it with a dietitian, and your health condition with a doctor.`;
    bmireasult.style.border = `4px solid red`;
  }else if (reasult >= 18.50 && reasult < 25){
     Rp.textContent =`CONGRATULATIONS! Your BMI is between 18.5-24.99 kg / m2. This means that your body weight is in line with your height.
     A correct BMI value is associated with a lower risk of developing civilization diseases, such as type 2 diabetes, diseases of the cardiovascular and skeletal systems.
     To maintain your current body weight, be sure to eat a balanced and varied diet. The menu should include at least 400 g of vegetables and fruit during the day, choose whole grain cereal products, pod seeds, natural dairy products, nuts, fish and lean meats. Regular physical activity also has a beneficial effect on maintaining health and maintaining body weight.`
     bmireasult.style.border = `4px solid green`;
    }else if(reasult >= 25 && reasult < 30){
      Rp.textContent = `BMI value in the range of 25-29.99 kg / m2 means overweight. Take a look at what's landing on your plate and make changes that are beneficial to your health. Instead of refined grains, choose whole grains, natural dairy products over sweetened, lean types of meat over fatty ones, eat fish 1-2 times a week, and eat vegetables and fruits over sweet snacks. The main source of fluids during the day should be water. Remember to eat smaller portions but more often. Turn on additional physical activity, which will greatly facilitate the loss of unnecessary kilograms. Remember that excess body weight increases your risk of developing diet-related diseases such as type 2 diabetes, high blood pressure, and heart disease.`
      bmireasult.style.border = `4px solid yellow`;
    }else if(reasult >= 30 && reasult < 35){
     Rp.textContent = `The BMI value in the range of 30-34.99 kg / m2 indicates obesity of the 1st degree. Excessive adipose tissue burden the body, increasing the risk of developing cardiovascular diseases, such as ischemic heart disease, arterial hypertension, as well as diet-related diseases, including type 2 diabetes. It also puts a greater burden on the skeletal system, increasing the risk of developing degenerative diseases. Obesity is the result of chronic diet, the calorific value of which is much higher than the body's daily caloric requirement. Since a high level of body fat is a threat to health and life, it is worth taking measures aimed at reducing the current body weight. For this purpose, we suggest visiting a specialist doctor who will suggest appropriate treatment procedures, as well as a dietitian who will help adjust the diet to individual needs. We advise against fasting diets, the use of which is not safe for the body. In addition, they are associated with a high risk of the yo-yo effect.`
     bmireasult.style.border = `4px solid orange`;
    }else if(reasult >= 35 && reasult < 40){
    Rp.textContent = `The value of BMI in the range of 35-39.99 kg / m2 indicates obesity of the 2nd degree and is associated with a high level of adipose tissue. This places a heavy burden on the body. Obesity increases the risk of developing many diseases, such as type 2 diabetes, coronary artery disease, hypertension, fertility problems and degenerative diseases. That is why it is worth taking actions aimed at reducing the current body weight - changing the current diet and taking up additional physical activity. We also suggest consulting a doctor specializing in obesity treatment, who will propose appropriate treatment.`;
    bmireasult.style.border = `4px solid red`;
  }else if (reasult >= 40){
    Rp.textContent = `The BMI value is greater than 40 kg / m2 and indicates 3rd degree obesity, i.e. morbid obesity. This condition proves a very high content of adipose tissue in the body, which is a significant burden for many systems, including blood, digestive, respiratory as well as osteoarticular. Since it is a very dangerous condition for health and life, we recommend that you contact a doctor who specializes in treating people with morbid obesity, who will help you adjust the appropriate treatment procedure.`;
    bmireasult.style.border = `4px solid red`;
  }


};

function Calculate(){
    let heightv = height.value;
    let weightv = weight.value;
    reasult =(weightv / (heightv * heightv) * 10000).toFixed(2);
    if(isNaN(reasult)){
      alert('Complete the data correctly');
    }else if (reasult === 'Infinity'){
      alert('Complete the data correctly');
    }else if(reasult === '0.00'){
      alert('Complete the data correctly');
    }else{
    ShowBMI();
    }
}

function ConClose(){
  bmireasult.style.display = 'none';
};

calcbtn.addEventListener('click',Calculate);
bmiRC.addEventListener('click', ConClose);

window.addEventListener('click',e => e.target === mainp ? ConClose() :false);