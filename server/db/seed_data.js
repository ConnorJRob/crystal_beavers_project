use project;
db.dropDatabase();

db.placeholdername.insertOne(
    {
        "lesson_title": "Earth",

        "background_image": "https://www.gannett-cdn.com/presto/2018/08/06/USAT/d7e9198a-b2fa-4ca6-b947-31c3751cc248-GettyImages-898660948.jpg?crop=5369,3020,x0,y0&width=3200&height=1680&fit=bounds",

        "lesson": {
                    "title": "Earth",
                    "section_1": {
                                    "contents": {
                                                "title": "Overview",
                                                "text": "Earth is the third planet from the sun and is to our knowledge the only planet with life. The majority of the Earth's surface - around 70% - is covered in water. The other 30% is made up of large continental land masses and islands. Both of these environments support a vast array of both organic and plant lifeforms. Most of the earths Northern and Southern polar regions are covered in ice caps which support unique species."
                                                }
                                },

                                    "question_one": {
                                                    "question_text": "What percentage of the Earth's surface does water make up?",

                                                    "answers": {
                                                                "one": {
                                                                        "text": "55%",
                                                                        "value": 0
                                                                        },
                                                                "two": {
                                                                        "text": "70%",
                                                                        "value": 1
                                                                        },
                                                                "three": {
                                                                        "text": "95%",
                                                                        "value": 0
                                                                        },
                                                                "four": {
                                                                        "text": "17%",
                                                                        "value": 0
                                                                        }
                                                                }

                                                    }
                                },
                   "section_2": {
                                "contents": {
                                                "title": "Atmosphere And Mineral Composition",
                                                "image": "an image url",
                                                "text": "The atmosphere of the Earth consists of mostly Nitrogen and Oxygen, with trace amounts of other gases such as Argon, Carbon Dioxide and Water Vapour. The presence of plants has influenced the composition of the atmosphere due to photosynthesis - a process by which plants absorb Carbon Dioxide and release Oxygen. The upper layer of atmosphere is known as the Ozone Layer which blocks the harmful Ultraviolet radiation from the sun and permits life to flourish. Due to pollution, both naturally occuring and man made, the Ozone Layer is deteriorating. Our atmosphere facilitates a 'Greenhouse Effect'. It traps thermal energy radiated from the surface of the Earth preventing it from escaping to Space and allows our planet to maintain liveable temperatures. Without this effect the Earth would be too cold to support life",
                                                "atmosphere" : {
                                                                "oxygen": 21,
                                                                "other": 1,
                                                                "nitrogen": 78
                                                                },
                                                "minerals" : {
                                                                "silica": 60,
                                                                "alumina": 16,
                                                                "lime": 6,
                                                                "iron_oxide": 6,
                                                                "magnesia": 5
                                                            },
                                            },
                                "question_one": {
                                                "question_text": "string",

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
                "section_3": {
                    "contents": {
                                "title": "some details",
                                "text": "some other text"
                                },
                    "question_one": {
                                    "question_text": "string",

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
