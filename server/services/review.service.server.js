module.exports=function(app){

	reviews = [
		{_id:"1",rate:5,text:"Very nice appartment",property:"12",customer:"345"},
		{_id:"2",rate:4,text:"Very good service",property:"12",customer:"456"},
		{_id:"3",rate:2,text:"Needs more work",property:"23",customer:"456"}
	]

	api = {
    'createReview': createReview,
    'findAllReviews' : findAllReviews,
    'findAllReviewsForProperty': findAllReviewsForProperty,
    'findReviewById': findReviewById,
    'updateReview': updateReview,
    'deleteReview': deleteReview
  };

  app.post('/api/review',api.createReview);
  app.get('/api/review/property/:propertyId',api.findAllReviewsForProperty);
  app.get('/api/review',api.findAllReviews);
  app.get('/api/review/:reviewId',api.findReviewById);
  app.put('/api/review/:reviewId',api.updateReview);
  app.delete('/api/review/:reviewId',api.deleteReview);

  function createReview(req,res){
  	var review = req.body.review;
		if(review!=undefined){
			review._id = Math.floor(Math.random()*900) + 100;
      		review._id = ""+review._id;
			reviews.push(review);
			res.send(review);
		}else{
      res.status(500).send("Couldn't create review");
    }
  }

  function findAllReviews(req,res){
    res.send(reviews);
  }

  function findAllReviewsForProperty(req,res){
  	var propertyId = req.params.propertyId;
  	var resultReviews = [];
    for (var x = 0; x < reviews.length; x++) {
      if (reviews[x].property === propertyId) {
        resultReviews.push(reviews[x]);
      }
    }
    res.send(resultReviews);
  }

  function findReviewById(req,res){
  	var reviewId = req.params.reviewId;
    var found = false;
  	for(var x = 0; x < reviews.length; x++){
  		if(reviews[x]._id === reviewId){
  			res.send(reviews[x]);
        found = true;
  		}
  	}
    if(!found)
      res.status(404).send('Not found');
  }

  function updateReview(req,res){
  	var reviewId = req.params.reviewId;
  	var review = req.body.review;
    var edited = false;
  	for (var x = 0; x < reviews.length; x++) {
      if (reviews[x]._id === reviewId) {
        reviews[x] = review;
        edited = true;
        res.send({updated:true});
      }
    }
    if(!edited)
      res.status(404).send("couldn't find review for reviewId");
  }

  function deleteReview(req,res){
  	var reviewId = req.params.reviewId;
    var deleted = false;
  	for (var x = 0; x < reviews.length; x++) {
      if (reviews[x]._id === reviewId) {
        var index = reviews.indexOf(reviews[x], 0);
        if (index > -1) {
           reviews.splice(index, 1);
           deleted = true;
           res.send({deleted:true});
        }
      }
    }
    if(!deleted)
      res.status(404).send("couldn't find review for reviewId");
  }


}