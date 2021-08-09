use project;
db.dropDatabase();

db.placeholdername.insertOne(

    {
        "lesson_title": "Earth",

        "background_image": "https://www.gannett-cdn.com/presto/2018/08/06/USAT/d7e9198a-b2fa-4ca6-b947-31c3751cc248-GettyImages-898660948.jpg?crop=5369,3020,x0,y0&width=3200&height=1680&fit=bounds",

        "lesson": {
                    "section_1": {
                                    "contents": {
                                                "title": "Overview",
                                                "text": "Earth is the third planet from the sun and is to our knowledge the only planet with life. The majority of the Earth's surface - around 70% - is covered in water. The other 30% is made up of large continental land masses and islands. Both of these environments support a vast array of both organic and plant lifeforms. Most of the earths Northern and Southern polar regions are covered in ice caps which support unique species."
                                                },
                                

                                    "questions": [
                                                    { 
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

                                                        },

                                                    {
                                                        "question_text": "What species can be found at the Earth's Polar region?",
                                                        
                                                        "answers": {
                                                                    "one": {
                                                                            "text": "Golden Eagle",
                                                                            "value": 0
                                                                    },
                                                                    "two": {
                                                                            "text": "Polar Bear",
                                                                            "value": 1
                                                                    },
                                                                    "three": {
                                                                            "text": "Zebra",
                                                                            "value": 0
                                                                    }
                                                                }         
                                                    }
                                                ]
                                },
                                
                   "section_2": {
                                "contents": {
                                                "title": "Atmosphere And Mineral Composition",

                                                "image": "an image url",

                                                "text": "The atmosphere of the Earth consists of mostly Nitrogen and Oxygen, with trace amounts of other gases such as Argon, Carbon Dioxide and Water Vapour. The presence of plants has influenced the composition of the atmosphere due to photosynthesis - a process by which plants absorb Carbon Dioxide and release Oxygen. The upper layer of atmosphere is known as the Ozone Layer which blocks the harmful Ultraviolet radiation from the sun and permits life to flourish. Due to pollution, both naturally occuring and man made, the Ozone Layer is deteriorating. Our atmosphere facilitates a 'Greenhouse Effect'. It traps thermal energy radiated from the surface of the Earth preventing it from escaping to Space and allows our planet to maintain liveable temperatures. Without this effect the Earth would be too cold to support life. The pollution caused by humanity has had a large impact on the state of the Atmosphere and has caused an increase in the strength of the greenhouse effect and thus an increase in global temperature. This has had profound effects - disrupting the Earth's weather patterns, as well as accelerating the melting of Polar ice leading to rising sea levels.",

                                                "atmosphere" : {
                                                        "oxygen": 21,
                                                        "other": 1,
                                                        "nitrogen": 78
                                                        },
                                                                },

                                                "minerals" : {
                                                                "silica": 60,
                                                                "alumina": 16,
                                                                "lime": 6,
                                                                "iron_oxide": 6,
                                                                "magnesia": 5
                                                            },
                                            
                                "questions": [
                                                {
                                                    "question_text": "What is the Oxygen content of the Earth's atmosphere?",

                                                    "answers": {
                                                                "one": {
                                                                        "text": "45%",
                                                                        "value": 0
                                                                        },
                                                                "two": {
                                                                        "text": "16%",
                                                                        "value": 0
                                                                        },
                                                                "three": {
                                                                        "text": "37%",
                                                                        "value": 0
                                                                        },
                                                                "four": {
                                                                        "text": "21%",
                                                                        "value": 1
                                                                        }
                                                                }

                                                }
                                            ]
                                        },
                    "section_3": {
                                    "contents": {
                                                    "title": "Solar System",
                                                    "text": "Earth's Neighbours"
                                                    },
                                    "questions": [
                                                    {
                                                    "question_text": "Name planets in earth solar system! Try as many as you remember! Which is the 6th planet from the sun?",

                                                    "answers": {
                                                                    "one": {
                                                                            "text": "Earth",
                                                                            "value": 0
                                                                            },
                                                                    "two": {
                                                                            "text": "Neptune",
                                                                            "value": 0
                                                                            },
                                                                    "three": {
                                                                            "text": "Pluto",
                                                                            "value": 0
                                                                            },
                                                                    "four": {
                                                                            "text": "Saturn",
                                                                            "value": 1
                                                                            },
                                                                    "five": {
                                                                            "text": "Mars",
                                                                            "value": 0
                                                                            },
                                                                    "six": {
                                                                            "text": "Mercury",
                                                                            "value": 0
                                                                            },
                                                                    "seven": {
                                                                            "text": "Jupiter",
                                                                            "value": 0
                                                                            },
                                                                    "eight": {
                                                                            "text": "Venus",
                                                                            "value": 0
                                                                            },
                                                                    }
                                                                        
                                                    },
                                                    {

                                                    "question_text": "What about the tiny planet closest to the Sun!",

                                                    "answers": {
                                                                    "one": {
                                                                            "text": "Mars",
                                                                            "value": 1
                                                                            },

                                                                    "two": {
                                                                            "text": "Earth",
                                                                            "value": 0
                                                                            },

                                                                    "three": {
                                                                            "text": "Venus",
                                                                            "value": 0
                                                                            },

                                                                    "four": {
                                                                            "text": "Mercury",
                                                                            "value": 0
                                                                            },

                                                                    "five": {
                                                                            "text": "Jupiter",
                                                                            "value": 0
                                                                            },

                                                                    "six": {
                                                                            "text": "Saturn",
                                                                            "value": 0
                                                                            },

                                                                    "seven": {
                                                                            "text": "Neptune",
                                                                            "value": 0
                                                                            },

                                                                    "eight": {
                                                                            "text": "Uranus",
                                                                            "value": 0
                                                                            }
                                                                    }
                                                    },
                                                    {
                                                "question_text": "And what about the one furthest from the sun!",
                                                
                                                "answers": {
                                                                "one": {
                                                                        "text": "Mercury",
                                                                        "value": 0
                                                                        },
                                                                "two": {
                                                                        "text": "Uranus",
                                                                        "value": 0
                                                                        },
                                                                "three": {
                                                                        "text": "Venus",
                                                                        "value": 0
                                                                        },
                                                                "four": {
                                                                        "text": "Mars",
                                                                        "value": 0
                                                                        },
                                                                "five": {
                                                                        "text": "Neptune",
                                                                        "value": 1
                                                                        },
                                                                "six": {
                                                                        "text": "Saturn",
                                                                        "value": 0
                                                                        },
                                                                "seven": {
                                                                        "text": "Jupiter",
                                                                        "value": 0
                                                                        },
                                                                "eight": {
                                                                        "text": "Earth",
                                                                        "value": 0
                                                                        }
                                                            }

                                }
                            ]   
                            }
                }
        }
);
