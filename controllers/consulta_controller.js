var models=require('../models/models.js')

//Autoload :consID
exports.load=function(req,res,next, consId) {
	models.Isodata.find(consId).then(
		function(consulta) {
			if (consulta) {
				req.consulta=consulta;
				next();
			} else {next(new Error('No existe ubicación ' + consId)); }
		}
		).catch(function(error) {next(error);});
};

//GET /consulta

exports.index=function (req,res) {
	models.Isodata.findAll().then(
		function(consulta){
		res.render('consulta/index',{consulta: consulta});
	}
	).catch(function(error) {next(error);})
 
};

//GET /consulta/new

exports.new=function (req,res) {
	var consulta=models.Isodata.build(//crea objeto consulta
			{param:"Ubicación", reparam:"tiene de todo"});
	res.render('consulta/new',{consulta:consulta});
};

//GET /consulta/create

exports.create=function (req,res) {
	var consulta=models.Isodata.build(req.body.consulta);
	consulta.save({fields:["param", "reparam"]}).then (function(){
		res.redirect('/consulta');
	});
};

//GET /consulta/:id

exports.show=function (req,res) {
			res.render('consulta/show',{consulta: req.consulta});
	};
 


//GET /consulta/:id/lista

exports.lista=function (req,res) {
 var resultado ='No hay nada en tal ubicación';
 if (req.query.param===req.consulta.param)
 	{ resultado= 'En '+req.consulta.param+' hay un motor y un bambalinón';}
	
 res.render('consulta/lista',{param: req.query.param, dim: req.query.dim, reparam:resultado });
};

//GET /author

exports.autor=function (req,res) {
 res.render('autor',{title: 'Autoría'});
};