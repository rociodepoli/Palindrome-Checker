const checkButton= document.getElementById('check-btn');
const textInput=document.getElementById('text-input');
const result=document.getElementById('result')

const cleanInputString=(str)=>{
const regex = /[_\\\/:\-!"$%&=¿¡+()<*>.,?! \s]+/g;
  return str.replace(regex, '').toLowerCase()
}

const isPalindrome=(str)=>{
const arr=str.split('')
for(let i=0;i<arr.length;i++){
  let end=arr[arr.length-1]
  console.log(end, arr[i])
  if(arr[i]===end){ 
    arr.pop()
    
  } else {
  return false;}
}
return true
}


const checkPalindrome= (e)=>{
e.preventDefault();
const value= textInput.value
  if(!value){
   alert("Please input a value")
  } else{
    const cleanInput=cleanInputString(value)
result.innerHTML=`
<p><strong>${value}</strong>${isPalindrome(cleanInput)? " is a palindrome":" is not a palindrome"}</p>`
  }
}

checkButton.addEventListener('click', checkPalindrome)