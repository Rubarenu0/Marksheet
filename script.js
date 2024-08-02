var theory1=document.getElementById("t1");
var practical1=document.getElementById("p1");
var tot1=document.getElementById("total1");
var theory2 =document.getElementById("t2");
var practical2 =document.getElementById("p2");
var tot2=document.getElementById("total2");
var theory3=document.getElementById("t3");
var practical3=document.getElementById("p3");
var tot3=document.getElementById("total3");
var theory4=document.getElementById("t4");
var practical4=document.getElementById("p4");
var tot4=document.getElementById("total4");
var theory5=document.getElementById("t5");
var practical5=document.getElementById("p5");
var tot5=document.getElementById("total5");
var grandtotal=document.getElementById("gt");
var gt=0
var result=document.getElementById("result");
var percentage=document.getElementById("percentage");
var grade=document.getElementById("grade");
var words1=document.getElementById("words1");

function total1(){
    var num1=parseFloat(theory1.value);
    var num2=parseFloat(practical1.value);
    var s1=num1+num2;
    tot1.textContent=s1;
    gt=parseFloat(s1);
    grandtotal.textContent=gt;
}         
function total2(){
    var num1=parseFloat(theory2.value);
    var num2=parseFloat(practical2.value);
    var s2=num1+num2;
    tot2.textContent=s2;
    gt=parseFloat(gt+s2);
    grandtotal.textContent=gt;
}         
function total3(){
    var num1=parseFloat(theory3.value);
    var num2=parseFloat(practical3.value);
    var s3=num1+num2;
    tot3.textContent=s3;
    gt=parseFloat(gt+s3);
    grandtotal.textContent=gt;
}         
function total4(){
    var num1=parseFloat(theory4.value);
    var num2=parseFloat(practical4.value);
    var s4=num1+num2;
    tot4.textContent=s4;
    gt=parseFloat(gt+s4);
    grandtotal.textContent=gt;
}         
function total5(){
    var num1=parseFloat(theory5.value);
    var num2=parseFloat(practical5.value);
    var s5=num1+num2;
    tot5.textContent=s5;
    gt=parseFloat(gt+s5);
    grandtotal.textContent=gt;
    if(gt<250){
        result.textContent="FAIL";
    }
    else{
        result.textContent="PASS";
    }
    var per=gt/5;
    percentage.textContent=per+" %";
    if(per==100){
        grade.textContent="O";
    }
    else if(per>=90){
        grade.textContent="A+"
    }
    else if(per>=75){
        grade.textContent="A"
    }
    else if(per>=60){
        grade.textContent="B"
    }
    else{
        grade.textContent="C" 
    }
}  


function numberToWords(num) {
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
    if (num < 10) return ones[num];
  
    if (num < 20) return teens[num - 10];
  
    if (num < 100) {
      var tensDigit = Math.floor(num / 10);
      var onesDigit = num % 10;
      return tens[tensDigit] + (onesDigit ? '-' + ones[onesDigit] : '');
    }
  
    if (num < 1000) {
      var hundredsDigit = Math.floor(num / 100);
      var remainder = num % 100;
      return ones[hundredsDigit] + ' hundred' + (remainder ? ' ' + numberToWords(remainder) : '');
    }
  
    return 'Number out of range';
  }
  
