const output = () => {
    let arr = [1,2,3,4];
    return arr.toString();
};

const outputArray = () => {
   let arr = [1,2,3,3,4,5,5,5,6,7,8];

   let write = 1;

   for(let i=1;i<arr.length;i++) {
       
      if(arr[i] != arr[write-1]) {
          arr[write] = arr[i];
          write++;
      }
   }
   return arr;
}

const isPalindrome = (input) => {
    let table = {};
   for(let i=0;i<input.length;i++){
       if(table.hasOwnProperty(input[i]))
       {
           table[input[i]] += 1;
       }
       else {
           table[input[i]] = 1;
       }
   }

   let flag = false;
   for(let key in table){
      if((table[key]%2)>0) {
          if(flag) return false;
          flag = true;
      }
   }
   return true;
}

console.log(isPalindrome('tacocpat'));