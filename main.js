
function convert(arr){

    var ans = []; //this is the answer that will be returned later
    var wordform; //the word that has been translated to from the number in the list

    for (var i = 0; i < arr.length; i++) {
        var n = arr[i];
        wordform = '';
        if (n==0){
            wordform = change(n);
        }

        while (n!=0) {
            var val = n % 10;
            n = (n- (n%10)) / 10;
            //console.log(n);
            wordform = change(val) + wordform;
        }

        ans.push(wordform);
    }

    return ans
}

function change(num){
    var numbers = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
    return numbers[num];
}


var userinput = process.argv.slice(2);
var answer = convert(userinput);
console.log(answer.join());
