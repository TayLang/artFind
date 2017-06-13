WELCOME TO HOUSTON PUBLIC ART

Intro and Inspiration
---------------------

I attended a Sketch City meet-up with some other students from The Iron Yard sometime in March 2017. A special guest at the meet-up was a representative of data.world, a site that hosts a metric ton of datasets that are free to use, and we were encouraged to browse the sets and try and find pain points relating to Civic Engineering that we could use our skills and talents to help solve. While going through them, I discovered a dataset released by the City of Houston that was essentially an Excel catalogue of all the city-commissioned art in Houston(so no private works, like what would be in a gallery). I, coming from a artistic background before moving into coding, was immediately intrigued.

This app is a prototype for the sorts of programs that people can build using that dataset. I converted the Excel sheet into raw JSON, and imported it into an API that I designed and implemented. There is no key necessary for the use of this API right now, and anyone can currently call and post to the API. In the future, if there's interest, I will implement further routes and security measures, but right now, this is simply a proof-of-concept that I can build and deploy an API.

What Does the App Do?
---------------------

On the front end of the app, I have a map that displays the location of every piece of art that was in the dataset using markers, and upon clicking a marker, you can see a little snippet of information and a link to go to a detail page. In that detail page, there's a bit more information, and a Google Street picture of the address provided(since there were no pictures of the pieces in the dataset, I wanted to at least have something up.) The idea behind the map is that one can travel to these locations and explore the city using it! I think Houston's cultural identity is severely underrepresented compared to other metros like Los Angeles, New York, Miami, Seattle, etc. This could be a really amazing resource for the tourism board, Chamber of Commerce, all sorts of civic areas.

There is also a "list" view that displays the pieces in an ordered list, as opposed to a topographical reresentation.

What Technology Was Used to Build This?
---------------------------------------

Besides some HTML and CSS, this was built entirely in Javascript. The front end was built in a Flux React architecture. The map library used was React-Leaflet.js. The M of the MVC used was Backbone.

The back end was built in Node, and deployed in MongoDB. Middleware used includes Express, Underscore, and Mongoose.

The Future of Houston Public Art
--------------------------------

If there's enough interest in the app/I ever get the time, I want to make it mobile responsive, include a search function, and add a photo-upload feature so we can crowd-source pictures of the art pieces. That'd be neat.