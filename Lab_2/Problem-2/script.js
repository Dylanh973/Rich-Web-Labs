fetch('https://jsonplaceholder.typicode.com/posts')
  .then(result => result.json())
	//filters so only posts, returns all posts by title, adds them to a list and counts to make sure there is a length of 6 then maps it to posts
  .then(json => {json.filter((posts) => { return posts.title.split(" ").length > 6}).map((posts) => {
	//log it
  console.log(posts.title)});
  
	//Joins all words together, then splits into a list so we cna count it, reduce returns a single value from all results
var wordMap = json.map((posts) => {return posts.body;}).join(" ").split(" ").reduce((wordMap, words) => {
	if (wordMap[words]) {
		//incremenet through each word
		wordMap[words] = wordMap[words] + 1;
	} else {
		//if only 1 word exsists set it to 1
		wordMap[words] = 1;
	}
	//return everyhting after loops complete
	return wordMap;}, {});
	//log it
console.log(wordMap)});

