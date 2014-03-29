
/*
 * GET home page.
 */

var posts = [
{
	id: 0,
	title: "첫번째 타이틀",
	content: "내용"
},
{
	id: 1,
	title: "두번째 타이틀",
	content: "내용"
}
];

exports.index = function(req, res){

	


  //res.render('index', { title: 'Express' });
  res.json({ title: 'Express' });

};