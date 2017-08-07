function HomeService() {

    var homes = [{
        description: 'awesome',
        price: 2000,
        sqft: 1500,
        img: '//placehold.it/200x200'
    }, {
        description: 'super awesome',
        price: 2000,
        sqft: 1500,
        img: '//placehold.it/300x250'
    }, {
        description: 'maximum awesome',
        price: 2000,
        sqft: 1500,
        img: '//placehold.it/200x201'
    }];


    this.getHomes = function(cb) {
    cb(JSON.parse(JSON.stringify(homes)))   ///loses reference to object above by turning in into a string and then back into an object
}   
}