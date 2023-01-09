let arr =[90, 8, 23, 45, 76, 80, 10, 21], arr_odd=[], arr_even=[];
//print the sum of the array
//print the even & odd numbers in the array
let sum =0,i;
for (i=0; i< arr.length; i++)
{
sum+=arr[i];
}
console.log("sum is:" +sum)
//odd even logic
for(i=0; i<arr.length;i++)
{
    if(arr[i]%2==0) //even
    arr_even.push(arr[i])
    else
    arr_odd.push(arr[i])
}
console.log("odd numbers "+arr_odd);
console.log("even numbers "+arr_even);
