function reverse(str){
    const lowerCase = str.toLowerCase();
   const reverse = lowerCase.split("").reverse().join("");
    return reverse;
}

console.log(reverse("Vivek"));

module.exports = reverse;