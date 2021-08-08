use project;
db.dropDatabase();

db.placeholdername.insertOne(
    {
        "lesson-title": "Earth",

        "background-image": "https://www.gannett-cdn.com/presto/2018/08/06/USAT/d7e9198a-b2fa-4ca6-b947-31c3751cc248-GettyImages-898660948.jpg?crop=5369,3020,x0,y0&width=3200&height=1680&fit=bounds",

        "lesson": {
                    "section-1": {
                                    "contents": {
                                                "title": "Earth",
                                                "text": "that is a sweet earth"
                                                }
                                }
                   }
            
    }
);
