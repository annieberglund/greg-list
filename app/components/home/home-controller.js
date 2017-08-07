function HomeController() {
  var homeService = new HomeService()

function drawHomes(homes) {
    var template = '';
    homes.forEach((home) => {
        template += `
        <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="card">
                <img class="card-img listing-image" src="${home.img}" alt="placeholder image">
                    <div class="card-block">
                        <h4> ${home.description}</h4>
                        <h5> ${home.sqft}</h5>
                        <h6>$${home.price}</h6>
                    </div>
            </div>
        </div>
        
        `
    })
    document.getElementById('results').innerHTML = template;

}
    
homeService.getHomes(drawHomes);



 
}