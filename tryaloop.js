function findLongestWord(str){
    var words = str.trim() .split (" ");

    console.log ("word list", words);

    var longest = {
        word: '',
        length: 0
        }


    for (var i=0; i < words.length; i++) {
       var word = words [i];

        console.log ("inside loop", i, word);

       if (word.length > longest.length){
           longest=word;
       }

   }
    return longest;


}

console.log (findLongestWord("my name is Samantha my dog is named Franklin grandpajoe is the best"))