use project;
db.dropDatabase();

db.placeholdername.insertOne(
    {
        "lesson-title": "Earth",

        "background-image": "https://www.gannett-cdn.com/presto/2018/08/06/USAT/d7e9198a-b2fa-4ca6-b947-31c3751cc248-GettyImages-898660948.jpg?crop=5369,3020,x0,y0&width=3200&height=1680&fit=bounds",

        "lesson": {
                    "title": "Earth",
                    "section-1": {
                                    "contents": {
                                                "title": "Overview",
                                                "text": "that is a sweet earth"
                                                },
                                    "question-one": {
                                                    "question-text": "string",

                                                    "answers": {
                                                                "one": {
                                                                        "text": "text",
                                                                        "value": 0
                                                                        },
                                                                "two": {
                                                                        "text": "text",
                                                                        "value": 1
                                                                        },
                                                                "three": {
                                                                        "text": "text",
                                                                        "value": 0
                                                                        },
                                                                "four": {
                                                                        "text": "text",
                                                                        "value": 0
                                                                        }
                                                                }

                                                    }
                                },
                   "section-2": {
                                "contents": {
                                                "title": "Atmosphere And Mineral Composition",
                                                "image": "an image url",
                                                "text": "text information",
                                                "atmosphere" : {
                                                                "oxygen": 21,
                                                                "other": 1,
                                                                "nitrogen": 78
                                                                },
                                                "minerals" : {
                                                                "silica": 60,
                                                                "alumina": 16,
                                                                "lime": 6,
                                                                "iron-oxide": 6,
                                                                "magnesia": 5
                                                            },
                                            },
                                "question-one": {
                                                "question-text": "string",

                                                "answers": {
                                                            "one": {
                                                                    "text": "text",
                                                                    "value": 0
                                                                    },
                                                            "two": {
                                                                    "text": "text",
                                                                    "value": 1
                                                                    },
                                                            "three": {
                                                                    "text": "text",
                                                                    "value": 0
                                                                    },
                                                            "four": {
                                                                    "text": "text",
                                                                    "value": 0
                                                                    }
                                                            }

                                    }
                                
                                }
                }
            
    }
);
