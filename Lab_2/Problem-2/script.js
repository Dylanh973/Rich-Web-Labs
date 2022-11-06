fetch('https://jsonplaceholder.typicode.com/posts')
  .then(result => result.json())
  .then(data => {data.filter((posts) => { return posts.title.split(" ").length > 6}).map((posts) => {
  console.log(posts.title)});
  
var wordMap = data.map((posts) => {return posts.body;}).join(" ").split(" ").reduce((wordMap, words) => {
	if (wordMap[words]) {
		wordMap[words] = wordMap[words] + 1;
	} else {
		wordMap[words] = 1;
	}
	return wordMap;}, {});
console.log(wordMap)});

