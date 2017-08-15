/* GET home page. */
exports.index = function(req, res){
//    res.send('ferozpuri here!'+__dirname);
   
   res.render('index', {'title' : 'Socket Programming with nodejs'});

  //res.render('index', { title: 'Express' });
};
