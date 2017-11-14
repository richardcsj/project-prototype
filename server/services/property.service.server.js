module.exports=function(app){

properties = [
    {_id:"12",type:"appartment",description:"Apartment For Rent Unfurnished Rental Studio, 1 bath",size:950,latitude:40.702029,longitude:-73.989844,
    available:true,price:2500,valid:true,owner:{_id:"234"},customer:{_id:""},validatedBy:"123"},
    {_id:"23",type:"garage",description:"Garage for rent in San Francisco",size:500,latitude:37.734204,longitude:-122.437434,
    available:true,price:1100,valid:false,owner:{_id:"234"},customer:{_id:""},validatedBy:""},
    {_id:"34",type:"house",description:"House For Rent in San Francisco",size:1500,latitude: 37.736003,longitude:-122.434795,
    available:false,price:5000,valid:true,owner:{_id:"234"},customer:{_id:"456"},validatedBy:"123"},
    {_id:"45",type:"appartment",description:"Apartment For Rent in Washington",size:1000,latitude:47.407644,longitude:-118.864689,
    available:true,price:3000,valid:false,owner:{_id:"234"},customer:{_id:""},validatedBy:"123"},
    {_id:"56",type:"offices",description:"Offices for rent in Washington",size:1200,latitude:47.415544,longitude:-119.169559,
    available:true,price:4000,valid:true,owner:{_id:"234"},customer:{_id:""},validatedBy:"123"}
  ]

  api = {
    'createProperty': createProperty,
    'findAllProperties' : findAllProperties,
    'findAllPropertiesForOwner': findAllPropertiesForOwner,
    'findPropertyById': findPropertyById,
    'updateProperty': updateProperty,
    'deleteProperty': deleteProperty
  };

  app.post('/api/property/owner/:ownerId',api.createProperty);
  app.get('/api/property/owner/:ownerId',api.findAllPropertiesForOwner);
  app.get('/api/property',api.findAllProperties);
  app.get('/api/property/:propertyId',api.findPropertyById);
  app.put('/api/property/:propertyId',api.updateProperty);
  app.delete('/api/property/:propertyId',api.deleteProperty);

  function createProperty(req,res){
  	var property = req.body.property;
  	var ownerId = req.params.ownerId;
		if(property!=undefined){
			property._id = Math.floor(Math.random()*900) + 100;
      property._id = ""+property._id;
			property.owner = {_id:ownerId};
			properties.push(property);
			res.send(property);
		}else{
      res.status(500).send("Couldn't create property");
    }
  }

  function findAllProperties(req,res){
    res.send(properties);
  }

  function findAllPropertiesForOwner(req,res){
  	var ownerId = req.params.ownerId;
  	var resultProperties = [];
    for (var x = 0; x < properties.length; x++) {
      if (properties[x].owner === ownerId) {
        resultProperties.push(properties[x]);
      }
    }
    res.send(resultProperties);
  }

  function findPropertyById(req,res){
  	var propertyId = req.params.propertyId;
    var found = false;
  	for(var x = 0; x < properties.length; x++){
  		if(properties[x]._id === propertyId){
  			res.send(properties[x]);
        found = true;
  		}
  	}
    if(!found)
      res.status(404).send('Not found');
  }

  function updateProperty(req,res){
  	var propertyId = req.params.propertyId;
  	var property = req.body.property;
    var edited = false;
  	for (var x = 0; x < properties.length; x++) {
      if (properties[x]._id === propertyId) {
        properties[x] = property;
        edited = true;
        res.send({updated:true});
      }
    }
    if(!edited)
      res.status(404).send("couldn't find property for propertyId");
  }

  function deleteProperty(req,res){
  	var propertyId = req.params.propertyId;
    var deleted = false;
  	for (var x = 0; x < properties.length; x++) {
      if (properties[x]._id === propertyId) {
        var index = properties.indexOf(properties[x], 0);
        if (index > -1) {
           properties.splice(index, 1);
           deleted = true;
           res.send({deleted:true});
        }
      }
    }
    if(!deleted)
      res.status(404).send("couldn't find property for propertyId");
  }

	
}