 function evenify_all(nums) {
     for (let i = 0; i < nums.length; i++) {
         const num = nums[i];
         if (num % 2 == 0) {
             console.log(num, ': is even number');
         } else {
             console.log(num * 2, ': is odd number');
         }

     }
 }

 nums = [5, 12, 89, 45, 18, 8];

 // for (let i = 0; i < nums.length; i++) {
 //     const num = nums[i];
 //     // console.log(num * 2);
 //     // if (num % 2 == 0) {
 //     //     console.log(num, ': is even number');
 //     // } else {
 //     //     console.log(num * 2, ': is odd number');
 //     // }

 //     evenify(num);

 // }

 evenify_all(nums);


 friends_age = [13, 17, 19, 20, 18];
 // for (let i = 0; i < friends_age.length; i++) {
 //     const age = friends_age[i];
 //     evenify(age);

 // }

 evenify_all(friends_age);