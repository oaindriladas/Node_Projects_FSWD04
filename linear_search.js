var arr=[90, 8, 23, 45, 76, 80, 10, 21];
let search_term=239; //linear: O(n)
//let search_term=prompt("Enter the search term");
function linear_search()
{
    for(let i=0; i< arr.length; i++)//90 
{
    if(search_term == arr[i])
        return i;
}
return null;
}
console.log("Element found at: "+linear_search());



    