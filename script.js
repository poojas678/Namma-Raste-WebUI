// Translation system with embedded translations to avoid CORS issues
class TranslationSystem {
    constructor() {
        this.translations = {
            en: {
                "nav": {
                    "home": "HOME",
                    "about": "ABOUT",
                    "convening": "CONVENING",
                    "exhibition": "EXHIBITION",
                    "resources": "RESOURCES",
                    "gallery": "GALLERY",
                    "news": "NEWS",
                    "partners": "PARTNERS"
                },
                "topBar": {
                    "nammaRaste": "NAMMA RASTE 2023",
                    "kannada": "Kannada",
                    "english": "English"
                },
                "home": {
                    "scrollText": "SCROLL OF",
                    "glimpseText": "GLIMPSE VIDEO",
                    "plusText": "+ PICTURES"
                },
                "about": {
                    "title": "ABOUT",
                    "whatIsTitle": "What is Namma Raste?",
                    "description1": "Bengaluru is at a crossroads today. While it continues to build on its success as an innovation hub and India's Silicon Valley, it needs to rapidly adapt to evolving mobility patterns, driven by new opportunities in the city. In 2023, the Bruhat Bengaluru Mahanagara Palike (BBMP), in collaboration with WRI India, launched Namma Raste (our streets). The annual exhibition and convening aims to create discourse around the mobility needs of the city bringing together key government stakeholders, communities, partner organisations and academia.",
                    "nammaRaste2023": "Namma Raste 2023",
                    "description2023": "focused on safe and climate resilient streets with a focus on human-centric and holistic street design strategies.",
                    "nammaRaste2025": "Namma Raste 2025",
                    "description2025": "took a holistic, data-driven approach to address urban mobility and invited citizens to contribute to shaping a more efficient and inclusive transport future.",
                    "explorationTitle": "was an exploration that served as:",
                    "campaign": "A CAMPAIGN",
                    "campaignDesc": "exploring Bengaluru's evolving sustainable mobility landscape.",
                    "exhibition": "An EXHIBITION",
                    "exhibitionDesc": "to experience Bengaluru's public transport transformation through data-driven narratives, interactive maps, and visual storytelling on buses, metros, non-motorized transport, and road infrastructure.",
                    "convening": "A CONVENING",
                    "conveningDesc": "of policymakers, urban designers, startups, and civic groups to discuss shaping a more connected and sustainable transport ecosystem.",
                    "platform": "A PLATFORM",
                    "platformDesc": "for mobility experts, civic groups, students etc. to engage in insightful sessions and interactive activities aimed at raising awareness on the city's mobility challenges and solutions.",
                    "imageName": "Graphics Credits: Arathy Aluckal/WRI India",
                    "stats": {
                        "attendees": "attendees",
                        "speakers": "Speakers",
                        "organisations": "Government & Partner Organisations",
                        "schools": "Schools & Colleges"
                    },
                    "accessibility": "Namma Raste 2025 event was made accessible with the support",
                    "apd": "APD",
                    "and": "and",
                    "college": "Ramaiah College of Law"
                },
                "convening": {
                    "title": "CONVENING",
                    "day1": "DAY 1",
                    "day2": "DAY 2",
                    "day3": "DAY 3",
                    "sessions": {
                        "day1": {
                            "session1": {
                                "time": "10:00 am – 12:00 pm",
                                "title": "Launch of Namma Raste 2025 & Kaipidi",
                                "speakers": [
                                    "Shri DK Shivakumar, Deputy Chief Minister of Karnataka",
                                    "Shri Uma Shankar, IAS, Additional Chief Secretary, UDD",
                                    "Shri Tushar Giri Nath, Chief Commissioner, BBMP",
                                    "Dr. Avinash Menon, IAS, Special Commissioner (Projects), BBMP",
                                    "Dr B S Prahallad, PhD, Chairman, SOP Committee",
                                    "SOP Committee Members",
                                    "Madhav Pai, CEO, WRI India"
                                ]
                            },
                            "session2": {
                                "time": "12:00 pm – 12:30 pm",
                                "title": "Sustainable Transport & Livability",
                                "speakers": [
                                    "Prof. Ashish Verma, IISc Sustainable Transportation Lab"
                                ]
                            },
                            "session3": {
                                "time": "02:00 pm – 03:00 pm",
                                "title": "Media and Mobility: Rethinking the Narrative",
                                "speakers": [
                                    "KC Deepika, City Editor, The Hindu",
                                    "Nandini Chandrashekar, Associate Editor, The News Minute",
                                    "Rasheed Kappan, Multimedia Journalist",
                                    "Sathyanarayanan Sankaran, Host, Oogi Labs",
                                    "Harish Upadhya, Assistant Editor, CNN News18",
                                    "Jimmy Xavier, Media Personality",
                                    "Srinivas Alavilli, Fellow, WRI India (moderator)"
                                ]
                            },
                            "session4": {
                                "time": "03:00 pm – 04:00 pm",
                                "title": "How Do We Manage Bengaluru's Traffic?",
                                "speakers": [
                                    "Special Address by MN Anucheth, IPS, Joint Commissioner of Police (Traffic) Bengaluru",
                                    "Followed by a session with the Joint Commissioner of Police & Venkata Subbarao Chunduru, Director, Arcadis IBI Group, moderated by Dhawal Ashar, WRI India."
                                ]
                            },
                            "session5": {
                                "time": "04:00 pm – 05:00 pm",
                                "title": "Bringing Jobs Closer to Mass Transit",
                                "speakers": [
                                    "Dr. B.S. Prahalad, Engineer-in-Chief, BBMP",
                                    "Naresh Narasimhan, Managing Partner and Principal Architect, Venkatraman Associates and Co-founder,MOD Foundation",
                                    "Rachana Singh, Head -Planning and Design, BACL Airport City Ltd",
                                    "Jaya Dhindaw,Executive Director - Sustainable Cities, WRI India (moderator)"
                                ]
                            },
                            "session6": {
                                "time": "05:00 pm – 06:00 pm",
                                "title": "Beyond the Echo Chambers",
                                "speakers": [
                                    "Sapna Bhawnani, VP Communications & CSR, Alstom",
                                    "Deepesh Agarwal, CEO, MoveInSync",
                                    "Manas Das, President, ORRCA",
                                    "Sameer Shisodia, CEO, Rainmatter Foundation",
                                    "Pawan Mulukutla, WRI India (moderator)"
                                ]
                            }
                        },
                        "day2": {
                            "session1": {
                                "time": "10:00 am – 12:00 pm",
                                "title": "Capacity Building for BBMP Engineers",
                                "speakers": [
                                    "Dr Shalini Rajneesh, IAS, Chief Secretary, GoK (Inauguration & Presidential Address)",
                                    "Dr. B.S. Prahallad, Engineer-in-Chief, BBMP (Welcome)",
                                    "Shri Tushar Giri Nath, IAS, Chief Commissioner, BBMP (Keynote Address)",
                                    "Dr. Avinash Menon, IAS, Special Commissioner (Projects), BBMP",
                                    "M Lokesh, Chief Engineer - Project Central, BBMP (Vote of Thanks)",
                                    "Workshop by BBMP, IISc, WRI India & MOD Foundation (with mayaPRAXIS and Sensing Local)"
                                ]
                            },
                            "session2": {
                                "time": "12:00 pm – 12:30 pm",
                                "title": "Creating Better Streets for Bengaluru",
                                "speakers": [
                                    "Naresh Narasimhan, MOD Foundation",
                                    "Vijay Narnapatti, mayaPRAXIS",
                                    "Ratnakara Reddy, Infra Support"
                                ]
                            },
                            "session3": {
                                "time": "12:30 pm – 01:00 pm",
                                "title": "Launch of Safe Access to Schools Program",
                                "speakers": [
                                    "Preeti Gehlot, IAS, Special Commissioner (Education), BBMP",
                                    "M Lokesh, Chief Engineer - Project Central, BBMP",
                                    "Hemalatha, Superintending Engineer - Project Central, BBMP",
                                    "Jaya Dhindaw, WRI India",
                                    "Dhawal Ashar, WRI India"
                                ]
                            },
                            "session4": {
                                "time": "03:00 pm – 04:00 pm",
                                "title": "Public Transport's Tech Evolution",
                                "speakers": [
                                    "Short presentations by:",
                                    "Tummoc, MoveInSync, Voltrix, Namma Yatri, Bengawalk"
                                ]
                            },
                            "session5": {
                                "time": "04:15 pm – 04:45 pm",
                                "title": "How Tech Innovations Are Changing the Way Bengaluru Moves",
                                "speakers": [
                                    "Diwakar Menon, APD",
                                    "Malini Goyal, UnboxingBlr, OneTAC",
                                    "Janet Joseph, MBRDI",
                                    "Rajiv Ravindran, Namma Yatri",
                                    "Hiranmay Mallick, Tummoc",
                                    "Raghu Krishnapuram, IUDX"
                                ]
                            },
                            "session6": {
                                "time": "05:15 pm – 06:00 pm",
                                "title": "Beyond the Echo Chambers",
                                "speakers": [
                                    "Kailash Nadh, CTO Zerodha & Founder, Rainmatter Foundation",
                                    "In conversation with Madhav Pai, CEO, WRI India"
                                ]
                            }
                        },
                        "day3": {
                            "session1": {
                                "time": "10:00 am – 11:30 am",
                                "title": "Gender Responsive Mobility",
                                "speakers": [
                                    "The Dialogue: Gender and Mobility intends to deliberate on how transport policies, infrastructure, and planning can become more inclusive.",
                                    "GT Prabhakar Reddy, Chief Traffic Manager (Operation), BMTC",
                                    "Ann Jacob, Chief Urban Designer - Centre for Urban Design & Senior Urban Planner – DULT"
                                ]
                            },
                            "session2": {
                                "time": "11:30 am – 01:00 pm",
                                "title": "Driving Community Action for Sustainable Mobility",
                                "speakers": [
                                    "10-Minute presentations followed by round table from partners:",
                                    "ITDP, Safety for Women, HSR Citizen Forum & Cyclists Group, Our Mobility Our Voice (Inventure Academy), Save Our Sarjapura Road, B.PAC, Sensing Local Foundation, ARDU, Compartment S4"
                                ]
                            },
                            "session3": {
                                "time": "02:00 pm – 03:00 pm",
                                "title": "Right Antha Heli",
                                "speakers": [
                                    "A quiz for all BMTC fans conducted by Friends of BMTC",
                                    "In collaboration with Nithin Kamath, Writer & Comic"
                                ]
                            },
                            "session4": {
                                "time": "03:00 pm – 04:00 pm",
                                "title": "Walk-a-luru: Where is my Footpath?",
                                "speakers": [
                                    "Arun Pai, Founder, BangaloreWALKS"
                                ]
                            }
                        }
                    },
                    "videoTitles": {
                        "launch": "Launch of Namma Raste 2025 & Kaipidi",
                        "launchDesc": "'Namma Raste Kaipidi', an illustrated guidebook...",
                        "sustainable": "Sustainable Transport & Livability",
                        "sustainableDesc": "Talk by Prof. Ashish Verma",
                        "media": "Media and Mobility: Rethinking the Narrative",
                        "mediaDesc": "Panel with KC Deepika, Nandini Chandrashekar, Rasheed Kappan, and others.",
                        "traffic": "How Do We Manage Bengaluru's Traffic?",
                        "trafficDesc": "Special Address by MN Anucheth, IPS, plus expert discussion.",
                        "jobs": "Bringing Jobs Closer to Mass Transit",
                        "jobsDesc": "Insights from Dr. B.S. Prahalad, Naresh Narasimhan, and others.",
                        "echoChambers": "Beyond the Echo Chambers",
                        "echoChambersDesc": "Panel with Sapna Bhawnani, Deepesh Agarwal, Manas Das, Sameer Shisodia.",
                        "capacity": "Capacity Building for BBMP Engineers",
                        "capacityDesc": "Workshop with BBMP, IISc, WRI India & MOD Foundation.",
                        "streets": "Creating Better Streets for Bengaluru",
                        "streetsDesc": "Fireside chat with Naresh Narasimhan, Vijay Narnapatti & Ratnakara Reddy.",
                        "schools": "Launch of Safe Access to Schools Program",
                        "schoolsDesc": "Program launch with BBMP & WRI India leadership.",
                        "techEvolution": "Public Transport's Tech Evolution",
                        "techEvolutionDesc": "Showcasing innovations from Tummoc, MoveInSync, Voltrix, Namma Yatri, Bengawalk.",
                        "techInnovations": "How Tech Innovations Are Changing the Way Bengaluru Moves",
                        "techInnovationsDesc": "Panel with Diwakar Menon, Malini Goyal, Janet Joseph, Rajiv Ravindran, Hiranmay Mallick & Raghu Krishnapuram.",
                        "echoChambers2": "Beyond the Echo Chambers",
                        "echoChambers2Desc": "Conversation with Kailash Nadh & Madhav Pai on Open Data in Mobility.",
                        "gender": "Gender Responsive Mobility",
                        "genderDesc": "Discussion on gender-inclusive transport planning and infrastructure.",
                        "community": "Driving Community Action for Sustainable Mobility",
                        "communityDesc": "Partner presentations and round table on community-led mobility solutions.",
                        "quiz": "Right Antha Heli",
                        "quizDesc": "BMTC Quiz conducted by Friends of BMTC & Nithin Kamath.",
                        "footpath": "Walk-a-luru: Where is my Footpath?",
                        "footpathDesc": "Talk by Arun Pai, BangaloreWALKS, on pedestrian issues in Bengaluru."
                    }
                },
                "exhibition": {
                    "title": "EXHIBITION",
                    "overview": "Overview",
                    "description": "The Namma Raste 2025 exhibition panels offered a rich, immersive journey into Bengaluru's evolving urban mobility landscape.",
                    "storyboards": "The storyboards, interactive maps and panels",
                    "storyboards2": "data visualizations to illustrate the transformation of public transport in the city, including buses, metro, footpaths, cycling lanes, and non-motorized transport.",
                    "welcome": "Welcome to the Bengaluru Exhibition!",
                    "welcomeDesc": "Explore the vibrant dynamics of Bengaluru, from its urban evolution and mobility solutions to the key governmental initiatives and the contributions of esteemed partner organizations shaping its future. Navigate through the sections above to delve deeper into each fascinating aspect of our city.",
                    "movingBengaluru": "MOVING BENGALURU",
                    "howDoesBengaluruMove": "HOW DOES BENGALURU MOVE?",
                    "panels": {
                        "panel1": "Built footprint evolution across Bengaluru (1985–2019)",
                        "panel2": "Vicious or virtuous?",
                        "panel3": "Expanding tracks, connecting futures",
                        "panel4": "BMTC - Keeps Bengaluru Moving",
                        "panel5": "The rise of shared mobility",
                        "panel6": "Connecting the unconnected",
                        "panel7": "Bridging the Gap",
                        "panel8": "Bringing jobs Closer",
                        "panel9": "State of Road Safety in Bengaluru – 01",
                        "panel10": "State of Road Safety in Bengaluru"
                    },
                    "govtPanels": "GOVERNMENT PANELS",
                    "govtDepartments": "GOVERNMENT DEPARTMENTS",
                    "govtDescriptions": {
                        "bbmp": "BBMP - Bruhat Bengaluru Mahanagara Palike initiatives and urban development projects.",
                        "bmrcl": "BMRCL - Bangalore Metro Rail Corporation Limited metro expansion projects and connectivity.",
                        "btp": "BTP - Bangalore Traffic Police traffic management and road safety initiatives.",
                        "dult": "DULT - Directorate of Urban Land Transport sustainable mobility solutions.",
                        "kridge": "KRIDE - Karnataka Road Infrastructure Development Corporation road development projects."
                    },
                    "govtPanel1": "BBMP",
                    "govtPanel2": "BMRCL",
                    "govtPanel3": "BTP",
                    "govtPanel4": "DULT",
                    "govtPanel5": "KRIDE",
                    "partnersPanels": "PARTNERS PANELS",
                    "partnerOrganizations": "PARTNER ORGANIZATIONS",
                    "partnersPanel1": "Alli Serona",
                    "partnersPanel2": "APD India and HSR Citizen Forum & HSR Cyclists Group",
                    "partnersPanel3": "Bangalore Political Action Committee (B.PAC)",
                    "partnersPanel4": "Bangalore Walks and Ramaiah Institute of Management",
                    "partnersPanel5": "Bangalore Apartment Federation",
                    "partnersPanel6": "Bengawalk",
                    "partnersPanel7": "BMS College of Architecture",
                    "partnersPanel8": "Compartment S4",
                    "partnersPanel9": "CSTEP",
                    "partnersPanel10": "Dayananda Sagar College of Architecture and IISc CiSTUP",
                    "partnersPanel11": "Enable India",
                    "partnersPanel12": "Everyday City Lab",
                    "partnersPanel13": "IISc IST Lab",
                    "partnersPanel14": "India Rising Trust",
                    "partnersPanel15": "Jana Urban Space",
                    "partnersPanel16": "MOD Foundation",
                    "partnersPanel17": "MoveInSync",
                    "partnersPanel18": "Namma Yatri",
                    "partnersPanel19": "RV College of Architecture",
                    "partnersPanel20": "Sensing Local",
                    "partnersPanel21": "Urban Morph",
                    "partnersPanel22": "ITDP",
                    "partnersDes1": "Alli Serona - Collaborative citizen movement for sustainable mobility in Bengaluru.",
                    "partnersDes2": "HSR Citizen Forum & Cyclists Group - Local citizens advocating for safer streets.",
                    "partnersDes3": "B.PAC - Bangalore Political Action Committee initiatives for civic engagement.",
                    "partnersDes4": "Bangalore Walks - Walking tours to rediscover Bengaluru's heritage and public spaces.",
                    "partnersDes5": "Bangalore Apartment Federation - Advocating mobility and civic issues for apartment residents.",
                    "partnersDes6": "Bengawalk - Promoting pedestrian-friendly streets and active mobility.",
                    "partnersDes7": "BMS College, Basavanagudi - Academic contributions on sustainable mobility.",
                    "partnersDes8": "Compartment S4 - Citizen group advocating for better public transport.",
                    "partnersDes9": "CSTEP - Center for Study of Science, Technology and Policy research in urban mobility.",
                    "partnersDes10": "Dayananda Sagar College of Architecture - Student projects on sustainable urban transport.",
                    "partnersDes11": "Enable India - Empowering persons with disability through accessible mobility.",
                    "partnersDes12": "Everyday City Lab - Research and interventions for inclusive urban spaces.",
                    "partnersDes13": "IISc IST Lab - Research on intelligent sustainable transport systems.",
                    "partnersDes14": "India Rising Trust - Community-led initiatives for sustainable urban development.",
                    "partnersDes15": "Jana USP - Urban space projects creating people-friendly streets.",
                    "partnersDes16": "MOD Foundation - Mobility and development foundation promoting equitable access.",
                    "partnersDes17": "MoveInSync - Corporate employee transport solutions.",
                    "partnersDes18": "Namma Yatri - Open mobility platform for auto-rickshaw rides.",
                    "partnersDes19": "RV College - Academic partner in urban mobility studies.",
                    "partnersDes20": "Sensing Local - Non-profit designing sustainable mobility interventions.",
                    "partnersDes21": "Urban Morph - Urban design lab promoting pedestrian and cycling infrastructure.",
                    "partnersDes22": "ITDP - Institute for Transportation and Development Policy mobility solutions."
                },
                "resources": {
                    "title": "RESOURCES",
                    "guidebook": {
                        "title": "Namma Raste Kaipidi (Guidebook): Towards Safe Inclusive, and Resilient Roads in Bengaluru",
                        "description": "‘Namma Raste Kaipidi’ is a guidebook that outlines best practices in design, construction, operation and maintenance of roads. It aims to improve Bengaluru’s 12,000 km road network, ensuring that they are designed for long-term sustainability and resilience.This document was prepared as an outcome of the discussions and recommendations under the SOP Committee formed by BBMP under the chairmanship of Engineer in Chief, BBMP. It has been curated and compiled by the teams of ‘IISc Sustainable Transportation Lab’ and ‘WRI India’ led by Prof. Ashish Verma, IISc and Srinivas Alavilli, WRI India and authored by Dr. Furqan Bhat of IISc Sustainable Transportation Lab and Chetan Sodaye, Krishna Priya Poroori, Arnav Murulidhar of WRI India and supported by Madhav Pai, Pawan Mulukutla, Dhawal Ashar, Gagana, Sudharsan, Priya Narayanan, Arun Manohar, Avtar Bhalla, Aashima Bhandari, Anya George, Anindita Bhattacharjee, Ankita Rajeshwari and Safia Zahid of WRI India.",
                        "link": "Namma Raste Kaipidi Pdf"
                    },
                    "corridors": {
                        "title": "High Density Corridors Bengaluru - Design Manual",
                        "description": "The High Density Corridor (HDC) initiative reimagines Bengaluru’s busiest roads as safer, efficient, and inclusive mobility corridors. This manual, prepared by mayaPRAXIS with BBMP, DULT, and guidance from Transport Planner Rathnakara Reddy, compiles design standards and strategies as a reference for engineers, planners, and communities to create resilient and accessible streets.",
                        "link": "High Density Bengaluru Pdf"
                    },
                    "streets": {
                        "title": "Streets and Intersection - Design Checklist for streets and intersections for infants toddlers and caregivers",
                        "description": "An illustrated design checklist and guideline document for creating streets that are safe, inclusive, and engaging for young children and their caregivers. Intended for government agencies and urban practitioners, it provides practical design elements to plan child- and caregiver-friendly streets in cities and neighbourhoods.",
                        "link": "Streets and Intersection Pdf"
                    },
                    "handbook": {
                        "title": "Namma Raste Kaipidi Illustrated Handbook",
                        "english": "ENGLISH",
                        "kannada": "KANNADA",
                        "englishLink": "Namma Raste Kaipidi English Pdf",
                        "kannadaLink": "Namma Raste Kaipidi Kannada Pdf",
                        "description": "MOD Foundation, in a first-of-its-kind Illustrated Handbook, bridges the gap between policy and practice, ensuring that Bengaluru’s streets are designed to be pedestrian-friendly, utility-smart, and future-ready. The Illustrated Handbook has been adapted from the Namma Raste Kaipidi (Manual), originally prepared as an outcome of the discussions and recommendations under the SOP Committee formed by BBMP office order BBMP/EIC/PR/654/2024-25 dated 19/11/2024."
                    },
                    "documentNote": "*Document to be made available soon.*"
                },
                "gallery": {
                    "title": "GALLERY",
                    "sections": {
                        "exhibition": {
                            "title": "Exhibition",
                            "description": "People experiencing Bengaluru's public transport transformation through data-driven narratives, interactive maps, and visual storytelling on buses, metro, non-motorized transport, and pedestrian infrastructure."
                        },
                        "schoolStudents": {
                            "title": "School Students",
                            "description": "Students engaging in and participating in Namma Raste 2025."
                        },
                        "studentsActivity": {
                            "title": "Students Activity",
                            "description": "Students sharing their ideas for safe and accessible routes to Schools."
                        },
                        "presentations": {
                            "title": "Presentations",
                            "description": "City stakeholders and mobility experts sharing insights on Bengaluru's current and future mobility landscape."
                        },
                        "participation": {
                            "title": "Citizen Participation",
                            "description": "Citizens' participation in Namma Raste 2025 contributing to collective learning, innovation, and collaboration to shape future mobility solutions for the city."
                        }
                    }
                },
                "news": {
                    "title": "NEWS",
                    "articles": {
                        "article1": {
                            "title": "Namma Raste Panel Calls for Gender-Responsive Mobility",
                            "description": "Highlights from Deccan Herald on inclusive mobility in Bengaluru."
                        },
                        "article2": {
                            "title": "Need for Better Footpaths at Namma Raste",
                            "description": "The Hindu coverage on walkability and urban design."
                        },
                        "article3": {
                            "title": "Bengaluru Roads Are Choking",
                            "description": "Top traffic cop emphasizes that road expansion is not the solution."
                        },
                        "article4": {
                            "title": "'Namma Raste' Guidebook",
                            "description": "Guidebook recommends a centralised dashboard for roadwork coordination."
                        },
                        "article5": {
                            "title": "Maintain Uniformity on Roads: DCM",
                            "description": "Prajavani reports on ensuring consistent road standards in Bengaluru."
                        },
                        "article6": {
                            "title": "Road Development Is Everyone's Responsibility",
                            "description": "Chief Secretary Shalini Rajneesh's statement reported in Vijayavani."
                        },
                        "article7": {
                            "title": "BBMP Workshop: Namma Raste 2025",
                            "description": "OneIndia Kannada reports on transport system improvements."
                        }
                    }
                },
                "partners": {
                    "title": "Partners"
                },
                "footer": {
                    "accessibility": "Namma Raste 2025 event was made accessible with the support of",
                    "and": "and",
                    "rightsReserved": "RIGHTS RESERVED © 2025",
                    "knowledgePartner": "Knowledge Partner:"
                }
            },
            kn: {
                "nav": {
                    "home": "ಮುಖಪುಟ",
                    "about": "ನಮ್ಮ ಬಗ್ಗೆ",
                    "convening": "ಆಯೊಜನೆ",
                    "exhibition": "ವಸ್ತುಪ್ರದರ್ಶನ",
                    "resources": "ಸಂಪನ್ಮೂಲಗಳು",
                    "gallery": "ಗ್ಯಾಲರಿ",
                    "news": "ಸುದ್ದಿ",
                    "partners": "ಪಾಲುದಾರರು"
                },
                "topBar": {
                    "nammaRaste": "ನಮ್ಮ ರಸ್ತೆ 2023",
                    "kannada": "ಕನ್ನಡ",
                    "english": "ಇಂಗ್ಲಿಷ್"
                },
                "home": {
                    "scrollText": "ಸ್ಕ್ರೋಲ್ ಆಫ್",
                    "glimpseText": "ಗ್ಲಿಂಪ್ಸ್ ವೀಡಿಯೋ",
                    "plusText": "+ ಚಿತ್ರಗಳು"
                },
                "about": {
                    "title": "ನಮ್ಮ ಬಗ್ಗೆ",
                    "whatIsTitle": "ನಮ್ಮ ರಸ್ತೆ ಎಂದರೇನು?",
                    "description1": "ಬೆಂಗಳೂರು ಇಂದು ಒಂದು ದ್ವಿಮುಖದಲ್ಲಿದೆ. ಇದು ಇನೋವೇಷನ್ ಹಬ್ ಮತ್ತು ಭಾರತದ ಸಿಲಿಕಾನ್ ವ್ಯಾಲಿ ಎಂಬ ಯಶಸ್ಸಿನ ಮೇಲೆ ಕಟ್ಟಡವನ್ನು ಮುಂದುವರಿಸುವಾಗ, ನಗರದಲ್ಲಿನ ಹೊಸ ಅವಕಾಶಗಳಿಂದ ಚಾಲಿತವಾಗಿರುವ ವಿಕಸನೀಯ ಸಂಚಾರ ಮಾದರಿಗಳಿಗೆ ತ್ವರಿತವಾಗಿ ಹೊಂದಿಕೊಳ್ಳುವ ಅವಶ್ಯಕತೆಯಿದೆ. 2023 ರಲ್ಲಿ, ಬೃಹತ್ ಬೆಂಗಳೂರು ಮಹಾನಗರ ಪಾಲಿಕೆ (BBMP), WRI ಇಂಡಿಯಾ ಸಹಯೋಗದೊಂದಿಗೆ, ನಮ್ಮ ರಸ್ತೆ (ನಮ್ಮ ಬೀದಿಗಳು) ಯನ್ನು ಪ್ರಾರಂಭಿಸಿತು. ವಾರ್ಷಿಕ ಪ್ರದರ್ಶನ ಮತ್ತು ಸಮಾವೇಶವು ಮುಖ್ಯ ಸರ್ಕಾರಿ ಮಧ್ಯಸ್ಥಗಾರರು, ಸಮುದಾಯಗಳು, ಪಾಲುದಾರ ಸಂಸ್ಥೆಗಳು ಮತ್ತು ಶಿಕ್ಷಣ ಕ್ಷೇತ್ರವನ್ನು ಒಟ್ಟುಗೂಡಿಸಿ ನಗರದ ಸಂಚಾರ ಅವಶ್ಯಕತೆಗಳ ಕುರಿತು ಚರ್ಚೆಯನ್ನು ಸೃಷ್ಟಿಸುವ ಗುರಿಯನ್ನು ಹೊಂದಿದೆ.",
                    "nammaRaste2023": "ನಮ್ಮ ರಸ್ತೆ 2023",
                    "description2023": "ಸುರಕ್ಷಿತ ಮತ್ತು ವಿವಿಧ ಹವಾಮಾನಗಳನ್ನು ತಡೆದುಕೊಳ್ಳುವ ಸಾಮರ್ಥ್ಯದ ಬೀದಿಗಳ ಕುರಿತು ಗಮನವನ್ನು ಹರಿಸಿತು. ಇದು ಮಾನವ ಕೇಂದ್ರಿತ ಮತ್ತು ಸಮಗ್ರವಾದ ಬೀದಿ ವಿನ್ಯಾಸದ ತಂತ್ರಗಳನ್ನು ಕಾರ್ಯಾಚರಣೆಯ ಕೇಂದ್ರವನ್ನಾಗಿಸಿಕೊಂಡಿತ್ತು.",
                    "nammaRaste2025": "ನಮ್ಮ ರಸ್ತೆ 2023",
                    "description2025": "ನಗರದ ಚಲನಶೀಲತೆಯ ಸಮಸ್ಯೆಗಳನ್ನು ಬಗೆಹರಿಸಲು ಸಮಗ್ರವಾದ, ದತ್ತಾಂಶ ಆಧಾರಿತ ಕಾರ್ಯವಿಧಾನವನ್ನು ಅಳವಡಿಸಿಕೊಂಡಿತು; ಮತ್ತು ಹೆಚ್ಚು ದಕ್ಷವಾದ ಮತ್ತು ಸಮಾವೇಶಿಯಾದ ಸಾರಿಗೆ ಭವಿಷ್ಯವನ್ನು ರೂಪಿಸುವಲ್ಲಿ ತಮ್ಮ ಕೊಡುಗೆಯನ್ನು ನೀಡುವಂತೆ ಸಾರ್ವಜನಿಕರನ್ನು ಆಹ್ವಾನಿಸಿತು.",
                    "explorationTitle": "ಎಂಬುದು ಒಂದು ಅನ್ವೇಷಣೆ; ಅದಾಗಿತ್ತು:",
                    "campaign": "ಪ್ರಚಾರ",
                    "campaignDesc": "ಬೆಂಗಳೂರಿನ ವಿಕಸನಗೊಳ್ಳುತ್ತಿರುವ ಸುಸ್ಥಿರ ಚಲನಶೀಲತೆಯ ಭೂದೃಶ್ಯವನ್ನು ಆನ್ವೇಷಿಸುವ ಒಂದು ಅಭಿಯಾನ.",
                    "exhibition": "ಪ್ರದರ್ಶನ",
                    "exhibitionDesc": "ಬಸ್ಸುಗಳು, ಮೆಟ್ರೋ ರೈಲುಗಳು, ಮೋಟರೀಕೃತವಲ್ಲದ ಸಾರಿಗೆ ಮತ್ತು ರಸ್ತೆ ಮೂಲಸೌಕರ್ಯಗಳ ಕುರಿತು ದತ್ತಾಂಶ ಆಧಾರಿತ ನಿರೂಪಣೆ, ಸಂವಾದಾತ್ಮಕ ನಕ್ಷೆಗಳು ಮತ್ತು ದೃಶ್ಯ-ಸಂಕಥನ ಇವುಗಳ ಮೂಲಕ ಬೆಂಗಳೂರಿನ ಸಾರ್ವಜನಿಕ ಸಾರಿಗೆಯ ರೂಪಾಂತರವನ್ನು ಅನುಭವಿಸಲು ಅನುಕೂಲಿಸುವ ಒಂದು ಪ್ರದರ್ಶನ.",
                    "convening": "ಸಮಾವೇಶ",
                    "conveningDesc": "ಸುಧಾರಿತ ಸಂಪರ್ಕ ಮತ್ತು ಸುಸ್ಥಿರ ಸಾರಿಗೆ ವ್ಯವಸ್ಥೆಯನ್ನು ರೂಪಿಸುವ ಬಗ್ಗೆ ಸಮಾಲೋಚಿಸಲು ನೀತಿನಿರೂಪಕರು, ನಗರ ವಿನ್ಯಾಸಕರು, ನವೋದ್ಯಮಿಗಳು ಮತ್ತು ನಾಗರಿಕ ಗುಂಪುಗಳ ಸಭೆಗೂಡುವಿಕೆ.",
                    "platform": "ವೇದಿಕೆ",
                    "platformDesc": "ನಗರದ ಚಲನಶೀಲತೆಯ ಸವಾಲುಗಳು ಮತ್ತು ಪರಿಹಾರಗಳ ಕುರಿತು ಜಾಗೃತಿ ಮೂಡಿಸಲು ಚಲನಶೀಲತೆ ತಜ್ಞರು, ನಾಗರಿಕ ಗುಂಪುಗಳು, ವಿದ್ಯಾರ್ಥಿಗಳು ಮುಂತಾದವರ ಒಳನೋಟವುಳ್ಳ ಗೋಷ್ಠಿಗಳು ಮತ್ತು ಸಂವಾದಾತ್ಮಕ ಚಟುವಟಿಕೆಗಳಲ್ಲಿ ತೊಡಗಿಸಿಕೊಳ್ಳಲು ಒಂದು ವೇದಿಕೆ.",
                    "imageName": "ಗ್ರಾಫಿಕ್ಸ್ ಕ್ರೆಡಿಟ್ಸ್: ಅರಾಥಿ ಅಲುಕಲ್ / WRI ಭಾರತ",
                    "stats": {
                        "attendees": "ಭಾಗಿಗಳು",
                        "speakers": "ಭಾಷಣಕಾರರು",
                        "organisations": "ಸರ್ಕಾರಿ ಮತ್ತು ಪಾಲುದಾರ ಸಂಸ್ಥೆಗಳು",
                        "schools": "ಶಾಲಾಕಾಲೇಜುಗಳು "
                    },
                    "accessibility": "ನಮ್ಮ ರಸ್ತೆ 2025 ಕಾರ್ಯಕ್ರಮವನ್ನು ಪ್ರವೇಶಿಸಬಹುದಾದಂತೆ ಮಾಡಲಾಗಿದೆನಮ್ಮ ರಸ್ತೆ 2025 ಕಾರ್ಯಕ್ರಮವನ್ನು",
                    "apd": "ಎಪಿಡಿ",
                    "and": "ಮತ್ತು",
                    "college": "ರಾಮಯ್ಯ ಕಾನೂನು ಕಾಲೇಜಿನ ಬೆಂಬಲದೊಂದಿಗೆ ಸಾಧ್ಯಗೊಳಿಸಲಾಯಿತು."
                },
                "convening": {
                    "title": "ಸಮಾವೇಶ",
                    "day1": "ಕಾರ್ಯಕಲಾಪ: ದಿನ 01",
                    "day2": "ಕಾರ್ಯಕಲಾಪ: ದಿನ 02",
                    "day3": "ಕಾರ್ಯಕಲಾಪ: ದಿನ 03",
                    "sessions": {
                        "day1": {
                            "session1": {
                                "time": "ಬೆ. 10:00 - ಮ. 12:00",
                                "title": "ನಮ್ಮ ರಸ್ತೆ 2025ರ ಶುಭಾರಂಭ ಮತ್ತು ನಮ್ಮ ರಸ್ತೆ ಕೈಪಿಡಿಯ ಲೋಕಾರ್ಪಣೆ",
                                "speakers": [
                                    "ಶ್ರೀ ಡಿ.ಕೆ.ಶಿವಕುಮಾರ್, ಉಪಮುಖ್ಯಮಂತ್ರಿಗಳು, ಕರ್ನಾಟಕ",
                                    "ಶ್ರೀ ಉಮಾ ಶಂಕರ್, ಐಎಎಸ್, ಸರಕಾರದ ಹೆಚ್ಚುವರಿ ಮುಖ್ಯ ಕಾರ್ಯದರ್ಶಿಗಳು, ನಗರಾಭಿವೃದ್ಧಿ ಇಲಾಖೆ",
                                    "ಶ್ರೀ ತುಷಾರ್ ಗಿರಿ ನಾಥ್, ಐಎಎಸ್, ಮುಖ್ಯ ಆಯುಕ್ತರು, ಬಿಬಿಎಂಪಿ",
                                    "ಡಾ.ಅವಿನಾಶ್ ಮೆನನ್, ಐಎಎಸ್, ವಿಶೇಷ ಆಯುಕ್ತರು (ಯೋಜನೆಗಳು), ಬಿಬಿಎಂಪಿ",
                                    "ಡಾ.ಬಿ.ಎಸ್. ಪ್ರಹ್ಲಾದ್, ಪಿಎಚ್‌ಡಿ, ಅಧ್ಯಕ್ಷರು, ಎಸ್‌ಒಪಿ ಸಮಿತಿ, ಎಸ್‌ಒಪಿ ಸಮಿತಿ ಸದಸ್ಯರು",
                                    "ಮಾಧವ ಪೈ, ಸಿಇಒ, ಡಬ್ಲ್ಯು ಆರ್‌ಐ ಇಂಡಿಯಾ"
                                ]
                            },
                            "session2": {
                                "time": "ಮ. 12:00 - 12:30",
                                "title": "ಸುಸ್ಥಿರ ಸಾರಿಗೆ ಮತ್ತು ವಾಸಾರ್ಹತೆ",
                                "speakers": [
                                    "ಪ್ರೊ. ಆಶಿಶ್ ವರ್ಮಾ, ಐಐಎಸ್‌ಸಿ, ಸುಸ್ಥಿರ ಸಾರಿಗೆ ಪ್ರಯೋಗಾಲಯ"
                                ]
                            },
                            "session3": {
                                "time": "ಮ. 02:00 - 03:00",
                                "title": "ಮಾಧ್ಯಮ ಮತ್ತು ಸಂಚಾರ: ನಿರೂಪಣೆಯನ್ನು ಮರುಚಿಂತನೆ",
                                "speakers": [
                                    "ಕೆ.ಸಿ. ದೀಪಿಕಾ, ಸಿಟಿ ಎಡಿಟರ್, ದ ಹಿಂದೂ",
                                    "ನಂದಿನಿ ಚಂದ್ರಶೇಖರ್, ಅಸೋಸಿಯೇಟೆಡ್ ಎಡಿಟರ್, ದ ನ್ಯೂಸ್ ಮಿನಿಟ್",
                                    "ರಶೀದ್ ಕಪ್ಪನ್, ಮಲ್ಟಿಮಿಡಿಯಾ ಜರ್ನಲಿಸ್ಟ್ ಮತ್ತು ಪಾಡ್ಕಾಸ್ಟರ್",
                                    "ಸತ್ಯನಾರಾಯಣನ್ ಶಂಕರನ್, ಹೋಸ್ಟ್, ಊರು ಲ್ಯಾಬ್",
                                    "ಹರೀಶ್ ಉಪಾಧ್ಯಾಯ, ಅಸಿಸ್ಟೆಂಟ್ ಎಡಿಟರ್, ಸಿಎನ್ಎನ್-ನ್ಯೂಸ್18",
                                    "ಜಿಮ್ಮಿ ಗ್ರೇವಿಯರ್, ಮಿಡಿಯಾ ಪರ್ಸನಾಲಿಟಿ",
                                    "ಶ್ರೀನಿವಾಸ್ ಅಲವಿಲ್ಲಿ, ಫೆಲೋ, ಡಬ್ಲ್ಯು ಆರ್‌ಐ ಇಂಡಿಯಾ (ಸಂಚಾಲಕರು)"
                                ]
                            },
                            "session4": {
                                "time": "ಮ. 03:00 - 04:00",
                                "title": "ಬೆಂಗಳೂರಿನ ಸಂಚಾರವನ್ನು ನಾವು ಹೇಗೆ ನಿರ್ವಹಿಸುತ್ತೇವೆ?",
                                "speakers": [
                                    "ವಿಶೇಷ ಭಾಷಣ ಎಂ.ಎನ್. ಅನುಚೇತ್, IPS, ಜಂಟಿ ಪೊಲೀಸ್ ಆಯುಕ್ತ (ಟ್ರಾಫಿಕ್)",
                                    "ನಂತರ: ಪೊಲೀಸ್ ಜಂಟಿ ಆಯುಕ್ತರು (ಸಂಚಾರ) ಮತ್ತು ವೆಂಕಟ ಸುಬ್ಬರಾವ್ ಚಂಡೂರು, ನಿರ್ದೇಶಕರು, ಆರ್ಕಾಡಿಸ್ ಐಬಿಐ ಗ್ರೂಪ್-ಇವರೊಂದಿಗೆ ಗೋಷ್ಠಿ- ಸಂಚಾಲಕರು: ಧವಲ್ ಅಶಾರ್, ಡಬ್ಲ್ಯುಆರ್‌ಐ ಇಂಡಿಯಾ."
                                ]
                            },
                            "session5": {
                                "time": "ಮಧ್ಯಾಹ್ನ 04:00 – ಸಂಜೆ 05:00",
                                "title": "ಸಾರಿಗೆ ವ್ಯವಸ್ಥೆಗೆ ಹತ್ತಿರ ಉದ್ಯೋಗಗಳನ್ನು ತರಲು",
                                "speakers": [
                                    "ಡಾ. ಬಿ.ಎಸ್. ಪ್ರಹ್ಲಾದ, ಮುಖ್ಯ ಎಂಜಿನಿಯರ್, ಬಿಬಿಎಂಪಿ",
                                    "ನರೇಶ್ ನರಸಿಂಹನ್, ಮ್ಯಾನೇಜಿಂಗ್ ಪಾರ್ಟ್ನರ್ ಮತ್ತು ಮುಖ್ಯ ಆರ್ಕಿಟೆಕ್ಟ್, ವೆಂಕಟ್ರಮನ್ ಅಸೋಸಿಯೇಟ್ಸ್ ಮತ್ತು ಸಹ-ಸ್ಥಾಪಕ, ಮೋಡ್ ಫೌಂಡೇಶನ್",
                                    "ರಚನಾ ಸಿಂಗ್, ಮುಖ್ಯಸ್ಥೆ - ಯೋಜನೆ ಮತ್ತು ವಿನ್ಯಾಸ, BACL ಏರ್ಪೋರ್ಟ್ ಸಿಟಿ ಲಿಮಿಟೆಡ್",
                                    "ಜಯ ಧಿಂದಾವ್, ಕಾರ್ಯನಿರ್ವಾಹಕ ನಿರ್ದೇಶಕಿ - ಸುಸ್ಥಿರ ನಗರಗಳು, WRI ಇಂಡಿಯಾ (ಸಂವಾದ ನಿರೂಪಕಿ)"
                                ]
                            },

                            "session6": {
                                "time": "ಮ. 05:00 - 06:00",
                                "title": "ಇಕೋ ಚೇಂಬರುಗಳ ಆಚೆ",
                                "speakers": [
                                    "ಸಪ್ನಾ ಭಾಟ್ನಾನಿ, ವೈಸ್ ಪ್ರೆಸಿಡೆಂಟ್ ಕಮ್ಯುನಿಕೇಷನ್ಸ್ ಮತ್ತು ಸಿಎಸ್‌ಆ‌ರ್, ಆಲ್ಬಮ್",
                                    "ದೀಪೇಶ್ ಅಗರ್‌ವಾಲ್, ಸಿಇಒ, ಮೂವ್ಇನ್‌ಸಿಂಕ್",
                                    "ಮಾನಸ್ ದಾಸ್, ಪ್ರೆಸಿಡೆಂಟ್, ಒಆರ್‌ಆರ್‌ಸಿಎ",
                                    "ಸಮೀರ್ ಶಿಸೋಡಿಯಾ, ಸಿಇಒ. ರೇನ್‌ಮ್ಯಾಟರ್ ಫೌಂಡೇಷನ್",
                                    "ಪವನ್ ಮುಲುಕುಟ್ಲ, ಎಕ್ಸಿಕ್ಯುಟಿವ್ ಡೈರೆಕ್ಟರ್-ಇಂಟಿಗ್ರೇಟೆಡ್ ಟ್ರಾನ್ಸ್‌ಪೋರ್ಟ್, ಕ್ಲೀನ್ ಏರ್ ಅಂಡ್ ಹೈಡೋಜನ್, ಡಬ್ಲ್ಯುಆರ್‌ಐ ಇಂಡಿಯಾ (ಸಂಚಾಲಕರು)"
                                ]
                            }
                        },
                        "day2": {
                            "session1": {
                                "time": "ಬೆ. 10:00 - ಮ. 12:00",
                                "title": "ಬಿಬಿಎಂಪಿ ಇಂಜಿನಿಯರುಗಳ ಸಾಮರ್ಥ್ಯವರ್ಧನೆ",
                                "speakers": [
                                    "ಉದ್ಘಾಟನೆ: ಡಾ.ಶಾಲಿನಿ ರಜನೀಶ್, ಐಎಎಸ್, ಮುಖ್ಯ ಕಾರ್ಯದರ್ಶಿಗಳು, ಕರ್ನಾಟಕ ಸರ್ಕಾರ",
                                    "ಸ್ವಾಗತ: ಡಾ.ಬಿ.ಎಸ್.ಪ್ರಹ್ಲಾದ್, ಇಂಜಿನಿಯರ್-ಇನ್-ಚೀಫ್, ಬಿಬಿಎಂಪಿ",
                                    "ಆಶಯ ಭಾಷಣ: ಶ್ರೀ ತುಷಾರ್ ಗಿರಿ ನಾಥ್, ಐಎಎಸ್, ಮುಖ್ಯ ಆಯುಕ್ತರು, ಬಿಬಿಎಂಪಿ",
                                    "ಅಧ್ಯಕ್ಷೀಯ ಭಾಷಣ: ಡಾ.ಶಾಲಿನಿ ರಜನೀಶ್, ಐಎಎಸ್, ಮುಖ್ಯ ಕಾರ್ಯದರ್ಶಿಗಳು, ಕರ್ನಾಟಕ ಸರ್ಕಾರ ",
                                    "ವಂದನಾರ್ಪಣೆ: ಎಂ. ಲೋಕೇಶ್, ಮುಖ್ಯ ಇಂಜಿನಿಯರರು, ಪ್ರಾಜೆಕ್ಟ್ ಸೆಂಟ್ರಲ್, ಬಿಬಿಎಂಪಿ",
                                    "ಕಾರ್ಯಶಿಬಿರ: ಬಿಬಿಎಂಪಿ, ಐಐಎಸ್‌ಸಿ, ಡಬ್ಲ್ಯುಆರ್‌ಐ ಇಂಡಿಯಾ ಮತ್ತು ಎಂಒಡಿ ಫೌಂಡೇಷನ್‌, ಸಹಯೋಗ: ಮಾಯಾಪ್ರಾಕ್ಸಿಸ್ ಮತ್ತು ಸೆನ್ಸಿಂಗ್ ಲೋಕಲ್"
                                ]
                            },
                            "session2": {
                                "time": "ಮ. 12:00 - 12:30",
                                "title": "ಬೆಂಗಳೂರಿಗಾಗಿ ಉತ್ತಮ ರಸ್ತೆಗಳನ್ನು ಸೃಷ್ಟಿಸುವುದು",
                                "speakers": [
                                    "ಆತ್ಮೀಯ ಸಂವಾದ: ನರೇಶ್ ನರಸಿಂಹನ್, ಎಂಒಡಿ ಫೌಂಡೇಷನ್",
                                    "ವಿಜಯ್ ನಾರ್ನಪಟ್ಟಿ, ಮಾಯಾಪ್ರಾಕ್ಸಿಸ್",
                                    "ರತ್ನಾಕರ ರೆಡ್ಡಿ, ಇನ್‌ಫ್ರಾ ಸಪೋರ್ಟ್"
                                ]
                            },
                            "session3": {
                                "time": "ಮ. 12:30 - 01:00",
                                "title": "ಶಾಲೆಗಳಿಗೆ ಸುರಕ್ಷಿತ ಮಾರ್ಗ ಕಾರ್ಯಕ್ರಮದ ಶುಭಾರಂಭ",
                                "speakers": [
                                    "ಪ್ರೀತಿ ಗೆಲ್ಲೋಟ್, ಐಎಎಸ್, ವಿಶೇಷ ಆಯುಕ್ತರು (ಶಿಕ್ಷಣ), ಬಿಬಿಎಂಪಿ",
                                    "ಎಂ.ಲೋಕೇಶ್, ಮುಖ್ಯ ಇಂಜಿನಿಯರು- ಪ್ರಾಜೆಕ್ಟ್ ಸೆಂಟ್ರಲ್, ಬಿಬಿಎಂಪಿ",
                                    "ಹೇಮಲತಾ, ಸೂಪರಿಂಟೆಂಡೆಂಟ್ ಇಂಜಿನಿಯರು- ಪ್ರಾಜೆಕ್ಟ್ ಸೆಂಟ್ರಲ್, ಬಿಬಿಎಂಪಿ",
                                    "ಜಯಾ ದಿಂಡಾವ್, ಮುಖ್ಯಸ್ಥರು, ಸಸ್ಪೇನಬಲ್ ಸಿಟೀಸ್ ಅಂಡ್ ಟ್ರ್ಯಾನ್ಸ್‌ಪೋರ್ಟ್, ಡಬ್ಲ್ಯು ಆರ್‌ಐ ಇಂಡಿಯಾ."
                                ]
                            },
                            "session4": {
                                "time": "ಮ. 03:00 - 04:00",
                                "title": "ಸಾರ್ವಜನಿಕ ಸಾರಿಗೆಯ ತಂತ್ರಜ್ಞಾನ ವಿಕಾಸ",
                                "speakers": [
                                    "ಅನ್ವೇಷಕರು ಮತ್ತು ಸಂಶೋಧಕರಿಂದ ಕಿರು ಮಂಡನೆಗಳು",
                                    "ಟ್ಯೂಮಾಕ್, ಮೂವ್‌ಇನ್‌ಸಿಂಕ್, ವೋಲ್‌ಟ್ರಿಕ್ಸ್, ನಮ್ಮ ಯಾತ್ರಿ , ಬೆಂಗವಾಕ್"
                                ]
                            },
                            "session5": {
                                "time": "ಮ. 04:15 - 04:45",
                                "title": "ತಂತ್ರಜ್ಞಾನ ನಾವೀನ್ಯತೆಗಳು ಬೆಂಗಳೂರು ಹೇಗೆ ಚಲಿಸುತ್ತದೆ ಎನ್ನುವುದನ್ನು ಹೇಗೆ ಬದಲಾಯಿಸುತ್ತಿವೆ",
                                "speakers": [
                                    "ದಿವಾಕರ್ ಮೆನನ್, ಮಂಡಳಿ ಸದಸ್ಯರು, ದ ಅಸೋಸಿಯೇಷನ್ ಫಾರ್ ಫೀಪಲ್ ವಿತ್ ಡಿಸ್‌ಎಬಿಲಿಟಿ",
                                    "ಮಾಲಿನಿ ಗೋಯಲ್, ಸಿಇಒ, ಅನ್‌ಬಾಕ್ಸಿಂಗ್‌ಬಿಎಲ್‌ಆರ್, ಒನ್‌ಟ್ಯಾಕ್",
                                    "ಜೇನೆಟ್ ಜೋಸೆಫ್, ಲೀಡ್-ಕಾರ್ಪೊರೇಟ್ ಸೋಶಿಯಲ್ ರೆಸ್ಪಾನ್ಸಿಬಿಲಿಟಿ, ಎಂಬಿಆರ್‌ಡಿಐ",
                                    "ರವಿಜ್ ರವೀಂದ್ರನ್, ಡೈರೆಕ್ಟರ್, ಸಿಎಕ್ಸ್ ಅಂಡ್ ಗ್ರೂಥ್. ನಮ್ಮ ಯಾತ್ರಿ",
                                    "ಹಿರಣ್ಮಯಿ ಮಲ್ಲಿಕ್, ಸಿಇಒ, ಟ್ಯೂಮಾಕ್",
                                    "ರಘು ಕೃಷ್ಣಪುರಂ, ಸೀನಿಯರ್ ಸೈಂಟಿಸ್ಟ್, ಐಯುಡಿಎಕ್ಸ್"
                                ]
                            },
                            "session6": {
                                "time": "ಮ. 05:15 - 06:00",
                                "title": "ಇಕೋ ಚೇಂಬರುಗಳ ಆಚೆ",
                                "speakers": [
                                    "ಕೈಲಾಶ್ ನಾಥ್, ಚೀಫ್ ಟೆಕ್ನಾಲಜಿ ಆಫೀಸರ್, ಜೆರೋಧಾ, ಮತ್ತು ಪೌಂಡರ್, ರೇನ್ ಮ್ಯಾಟರ್ ಫೌಂಡೇಷನ್ ಅಂಡ್ ಎಫ್‌ಒಎಸ್‌ಎಸ್ ಯುನೈಟೆಡ್",
                                    "ಮಾದವ್ ಪೈ, ಸಿಇಒ, ಡಬ್ಲ್ಯು ಆರ್‌ಐ ಅವರೊಂದಿಗೆ ಸಂವಾದ, 'ಚಲನಶೀಲತೆಯಲ್ಲಿ ಮುಕ್ತ ದತ್ತಾಂಶಗಳು' ಎನ್ನುವ ಕುರಿತು"
                                ]
                            }
                        },
                        "day3": {
                            "session1": {
                                "time": "ಬೆ. 10:00 - 11:30",
                                "title": "ಲಿಂಗ ಸಂವೇದನೆಯ ಚಲನಶೀಲತೆ",
                                "speakers": [
                                    "ಸಂಭಾಷಣೆ: 'ಲಿಂಗ ಮತ್ತು ಚಲನಶೀಲತೆ': ಸಾರಿಗೆ ನೀತಿಗಳು, ಮೌಲಸೌಕರ್ಯ ಮತ್ತು ಯೋಜನೆ ಹೇಗೆ ಹೆಚ್ಚು ಸಮಾವೇಶಿಯಾಗಬಹುದು ಎಂಬುದರ ಕುರಿತು ಚರ್ಚೆ.",
                                    "ಜಿ.ಟಿ.ಪ್ರಭಾಕರ ರೆಡ್ಡಿ, ಚೀಫ್ ಟ್ರಾಫಿಕ್ ಮ್ಯಾನೇಜರ್ (ಆಪರೇಷನ್), ಬಿಎಂಟಿಸಿ, ಆ್ಯನ್ ಜೇಕೊಬ್, ಚೀಫ್ ಅರ್ಬನ್ ಡಿಸೈನರ್-ಸೆಂಟರ್ ಫಾರ್ ಅರ್ಬನ್ ಡಿಸೈನ್ ಅಂಡ್ ಸೀನಿಯರ್ ಅರ್ಬನ್ ಪ್ಲಾನರ್-ಡಿಯುಎಲ್‌ಟಿ"
                                ]
                            },
                            "session2": {
                                "time": "ಬೆ. 11:30 - ಮಧ್ಯಾಹ್ನ 01:00",
                                "title": "ಸುಸ್ಥಿರ ಚಲನಶೀಲತೆಗಾಗಿ ಸಮುದಾಯ ಕ್ರಿಯೆಯನ್ನು ಪ್ರೇರೇಪಿಸುವುದು",
                                "speakers": [
                                    "10 ನಿಮಿಷದ ವಿಷಯ ಮಂಡನೆ ನಂತರ ಪಾಲುದಾರರಿಂದ ದುಂಡು ಮೇಜಿನ ಚರ್ಚೆ",
                                    "ಸೇಫ್ಟಿ ಫಾರ್ ವಿಮೆನ್ , ಎಚ್‌ಎಸ್‌ಆರ್ ಸಿಟಿಜನ್ ಫೋರಮ್ ಅಂಡ್ ಎಚ್‌ಎಸ್‌ಆರ್ ಸೈಕ್ಲಿಸ್ಟ್ ಗ್ರೂಪ್ , ಅವ‌ರ್ ಮೊಬಿಲಿಟಿ, ಅವರ್ ವಾಯ್ಸ್- ಇನ್‌ವೆಂಚರ್ ಅಕಾಡೆಮಿ ವಿದ್ಯಾರ್ಥಿಗಳಿಂದ ,ಸೇವ್ ಅವರ್‌ ಸರ್ಜಾಪುರ ರಸ್ತೆ ,ಬಿ.ಪ್ಯಾಕ್ ,ಸೆನ್ಸಿಂಗ್ ಲೋಕಲ್ ಫೌಂಡೇಷನ್ , ಎಆರ್‌ಡಿಯು, ಕಂಪಾರ್ಟ್‌ಮೆಂಟ್ ಎಸ್4"
                                ]
                            },
                            "session3": {
                                "time": "ಮ. 02:00 - 03:00",
                                "title": "ರೈಟ್ ಅಂತ ಹೇಳಿ",
                                "speakers": [
                                    "ಎಲ್ಲಾ ಬಿಎಂಟಿಸಿ ಅಭಿಮಾನಿಗಳಿಗಾಗಿ ರಸಪ್ರಶ್ನೆ: ಸಂಚಾಲಕರು: ಫ್ರೆಂಡ್ಸ್ ಆಫ್ ಬಿಎಂಟಿಸಿ, ಸಹಯೋಗ: ಕ್ವಿಜ್ ಮಾಸ್ಟರ್ ನಿತಿನ್ ಕಾಮತ್‌, ಲೇಖಕರು, ಹಾಸ್ಯಗಾರರು"
                                ]
                            },
                            "session4": {
                                "time": "ಮ. 03:00 - 04:00",
                                "title": "ವಾಕ್-ಅ-ಳೂರು: ನನ್ನ ಪಾದಚಾರಿ ಮಾರ್ಗ ಎಲ್ಲಿದೆ?",
                                "speakers": [
                                    "ಅರುಣ್ ಪೈ ಫೌಂಡರ್, ಬೆಂಗಳೋರ್‌ವಾಕ್ಸ್"
                                ]
                            }
                        }
                    },
                    "videoTitles": {
                        "launch": "ನಮ್ಮ ರಸ್ತೆ 2025 ಮತ್ತು ಕೈಪಿಡಿ ಪ್ರಾರಂಭ",
                        "launchDesc": "'ನಮ್ಮ ರಸ್ತೆ ಕೈಪಿಡಿ', ಚಿತ್ರಿತ ಮಾರ್ಗದರ್ಶಿ...",
                        "sustainable": "ಸುಸ್ಥಿರ ಸಾರಿಗೆ ಮತ್ತು ವಾಸಯೋಗ್ಯತೆ",
                        "sustainableDesc": "ಪ್ರಾ. ಆಶೀಶ್ ವರ್ಮಾ ಅವರ ಭಾಷಣ",
                        "media": "ಮಾಧ್ಯಮ ಮತ್ತು ಸಂಚಾರ: ನಿರೂಪಣೆಯನ್ನು ಮರುಚಿಂತನೆ",
                        "mediaDesc": "ಕೆ.ಸಿ. ದೀಪಿಕಾ, ನಂದಿನಿ ಚಂದ್ರಶೇಖರ್, ರಶೀದ್ ಕಪ್ಪನ್ ಮತ್ತು ಇತರರೊಂದಿಗೆ ಪ್ಯಾನಲ್.",
                        "traffic": "ಬೆಂಗಳೂರಿನ ಟ್ರಾಫಿಕ್ ಅನ್ನು ನಾವು ಹೇಗೆ ನಿರ್ವಹಿಸುತ್ತೇವೆ?",
                        "trafficDesc": "ಎಂ.ಎನ್. ಅನುಚೇತ್, IPS ಅವರ ವಿಶೇಷ ಭಾಷಣ, ಜೊತೆಗೆ ತಜ್ಞರ ಚರ್ಚೆ.",
                        "jobs": "ಮಾಸ್ ಟ್ರಾನ್ಸಿಟ್‌ಗೆ ಕೆಲಸಗಳನ್ನು ಹತ್ತಿರ ತರುವುದು",
                        "jobsDesc": "ಡಾ. ಬಿ.ಎಸ್. ಪ್ರಹಲ್ಲಾದ್, ನರೇಶ್ ನರಸಿಂಹನ್ ಮತ್ತು ಇತರರ ಒಳನೋಟಗಳು.",
                        "echoChambers": "ಎಕೋ ಚೇಂಬರ್‌ಗಳನ್ನು ಮೀರಿ",
                        "echoChambersDesc": "ಸಪ್ನಾ ಭವನಾನಿ, ದೀಪೇಶ್ ಅಗರ್ವಾಲ್, ಮಾನಸ್ ದಾಸ್, ಸಮೀರ್ ಶಿಸೋದಿಯಾ ಜೊತೆಗೆ ಪ್ಯಾನಲ್.",
                        "capacity": "BBMP ಇಂಜಿನಿಯರ್‌ಗಳಿಗೆ ಸಾಮರ್ಥ್ಯ ನಿರ್ಮಾಣ",
                        "capacityDesc": "BBMP, IISc, WRI ಇಂಡಿಯಾ ಮತ್ತು MOD ಫೌಂಡೇಷನ್ ಕಾರ್ಯಾಗಾರ.",
                        "streets": "ಬೆಂಗಳೂರಿಗೆ ಉತ್ತಮ ಬೀದಿಗಳನ್ನು ಸೃಷ್ಟಿಸುವುದು",
                        "streetsDesc": "ನರೇಶ್ ನರಸಿಂಹನ್, ವಿಜಯ್ ನರ್ಣಪಟ್ಟಿ ಮತ್ತು ರತ್ನಾಕರ ರೆಡ್ಡಿ ಜೊತೆಗೆ ಫೈರ್‌ಸೈಡ್ ಚಾಟ್.",
                        "schools": "ಶಾಲೆಗಳಿಗೆ ಸುರಕ್ಷಿತ ಪ್ರವೇಶ ಕಾರ್ಯಕ್ರಮ ಪ್ರಾರಂಭ",
                        "schoolsDesc": "BBMP ಮತ್ತು WRI ಇಂಡಿಯಾ ನಾಯಕತ್ವದೊಂದಿಗೆ ಕಾರ್ಯಕ್ರಮ ಪ್ರಾರಂಭ.",
                        "techEvolution": "ಸಾರ್ವಜನಿಕ ಸಾರಿಗೆಯ ತಂತ್ರಜ್ಞಾನ ವಿಕಾಸ",
                        "techEvolutionDesc": "Tummoc, MoveInSync, Voltrix, Namma Yatri, Bengawalk ನ ನಾವೀನ್ಯತೆಗಳನ್ನು ಪ್ರದರ್ಶಿಸುವುದು.",
                        "techInnovations": "ತಂತ್ರಜ್ಞಾನ ನಾವೀನ್ಯತೆಗಳು ಬೆಂಗಳೂರಿನ ಸಂಚಾರ ವಿಧಾನವನ್ನು ಹೇಗೆ ಬದಲಾಯಿಸುತ್ತಿವೆ",
                        "techInnovationsDesc": "ದಿವಾಕರ್ ಮೆನನ್, ಮಾಲಿನಿ ಗೋಯಲ್, ಜಾನೆಟ್ ಜೋಸೆಫ್, ರಾಜೀವ್ ರವೀಂದ್ರನ್, ಹಿರಣ್ಮಯ್ ಮಲ್ಲಿಕ್ ಮತ್ತು ರಾಘು ಕೃಷ್ಣಪುರಂ ಜೊತೆಗೆ ಪ್ಯಾನಲ್.",
                        "echoChambers2": "ಎಕೋ ಚೇಂಬರ್‌ಗಳನ್ನು ಮೀರಿ",
                        "echoChambers2Desc": "ಸಂಚಾರದಲ್ಲಿ ತೆರೆದ ಡೇಟಾದ ಕುರಿತು ಕೈಲಾಶ್ ನಾಧ್ ಮತ್ತು ಮಾಧವ್ ಪೈ ಅವರೊಂದಿಗೆ ಸಂಭಾಷಣೆ.",
                        "gender": "ಲಿಂಗ ಪ್ರತಿಕ್ರಿಯಾಶೀಲ ಸಂಚಾರ",
                        "genderDesc": "ಲಿಂಗ-ಸಮಾವೇಶಕ ಸಾರಿಗೆ ಯೋಜನೆ ಮತ್ತು ಮೂಲಸೌಕರ್ಯದ ಕುರಿತು ಚರ್ಚೆ.",
                        "community": "ಸುಸ್ಥಿರ ಸಂಚಾರಕ್ಕಾಗಿ ಸಮುದಾಯ ಕ್ರಿಯೆಯನ್ನು ಚಾಲನೆ ಮಾಡುವುದು",
                        "communityDesc": "ಸಮುದಾಯ-ನೇತೃತ್ವದ ಸಂಚಾರ ಪರಿಹಾರಗಳ ಕುರಿತು ಪಾಲುದಾರರ ಪ್ರಸ್ತುತಿಗಳು ಮತ್ತು ಸುತ್ತಿನ ಮೇಜು.",
                        "quiz": "ರೈಟ್ ಅಂತ ಹೇಳಿ",
                        "quizDesc": "Friends of BMTC ಮತ್ತು ನಿತಿನ್ ಕಾಮತ್ ನಡೆಸಿದ BMTC ಪ್ರಶ್ನೋತ್ತರ.",
                        "footpath": "Walk-a-luru: ನನ್ನ ಪಾದಚಾರಿ ಮಾರ್ಗ ಎಲ್ಲಿದೆ?",
                        "footpathDesc": "ಬೆಂಗಳೂರಿನಲ್ಲಿನ ಪಾದಚಾರಿ ಸಮಸ್ಯೆಗಳ ಕುರಿತು ಅರುಣ್ ಪೈ, BangaloreWALKS ಅವರ ಭಾಷಣ."
                    }
                },
                "exhibition": {
                    "title": "ವಸ್ತು ಪ್ರದರ್ಶನ",
                    "overview": "ಅವಲೋಕನ",
                    "description": "ನಮ್ಮ ರಸ್ತೆ 2025 ವಸ್ತುಪ್ರದರ್ಶನ ಪ್ಯಾನಲುಗಳು ಬೆಂಗಳೂರಿನ ವಿಕಾಸಹೊಂದುತ್ತಿರುವ ನಗರ ಚಲನಶೀಲತೆಯ ಭೂದೃಶ್ಯದ ಶ್ರೀಮಂತ, ಮನಸೆಳೆಯುವ ಪಯಣವನ್ನು ತೆರೆದಿಟ್ಟವು.",
                    "storyboards": "ಕಥಾಫಲಕಗಳು, ಸಂಕಥನ ನಕಾಶೆಗಳು ಮತ್ತು ಪ್ಯಾನಲುಗಳು",
                    "storyboards2": "ದತ್ತಾಂಶಗಳನ್ನು ದೃಶೀಕರಿಸುವ ತಂತ್ರವನ್ನು ಬಳಸಿ ಬಸ್ಸುಗಳು, ಮೋಟಾರೀಕೃತವಲ್ಲದ ಸಾರಿಗೆ, ಮತ್ತು ಪಾದಚಾರಿಗಳ ಸೌಕರ್ಯಗಳೂ ಒಳಗೊಂಡಹಾಗೆ ನಗರದಲ್ಲಿನ ಸಾರ್ವಜನಿಕ ಸಾರಿಗೆಯ ಪರಿವರ್ತನೆಯನ್ನು ಚಿತ್ರಿಸಿದವು.",
                    "welcome": "ಬೆಂಗಳೂರು ಪ್ರದರ್ಶನಕ್ಕೆ ಸ್ವಾಗತ!",
                    "welcomeDesc": "ಬೆಂಗಳೂರಿನ ನಗರ ವಿಕಾಸ ಮತ್ತು ಸಂಚಾರ ಪರಿಹಾರಗಳಿಂದ ಹಿಡಿದು ಪ್ರಮುಖ ಸರ್ಕಾರಿ ಉಪಕ್ರಮಗಳು ಮತ್ತು ಅದರ ಭವಿಷ್ಯವನ್ನು ರೂಪಿಸುವ ಗೌರವಾನ್ವಿತ ಪಾಲುದಾರ ಸಂಸ್ಥೆಗಳ ಕೊಡುಗೆಗಳವರೆಗೆ ಬೆಂಗಳೂರಿನ ರೋಮಾಂಚಕ ಡೈನಾಮಿಕ್ಸ್ ಅನ್ನು ಅನ್ವೇಷಿಸಿ. ನಮ್ಮ ನಗರದ ಪ್ರತಿ ಆಕರ್ಷಕ ಅಂಶವನ್ನು ಆಳವಾಗಿ ಪರಿಶೀಲಿಸಲು ಮೇಲಿನ ವಿಭಾಗಗಳ ಮೂಲಕ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ.",
                    "movingBengaluru": "ಚಲಿಸುವ ಬೆಂಗಳೂರು",
                    "howDoesBengaluruMove": "ಬೆಂಗಳೂರು ಹೇಗೆ ಚಲಿಸುತ್ತದೆ?",
                    "panels": {
                        "panel1": "ವಿಕಸನ, ವಿಸ್ತರಣೆ, ಉತ್ಕೃಷ್ಟತೆ",
                        "panel2": "ದುಷ್ಟವೋ, ಸದ್ಗುಣಿಯೋ?",
                        "panel3": "ವಿಸ್ತರಿಸುತ್ತಿರುವ ಹಾದಿಗಳು, ಭವಿಷ್ಯದೊಂದಿಗೆ ಸಂಪರ್ಕ",
                        "panel4": "ಬಿಎಂಟಿಸಿ-ಬೆಂಗಳೂರನ್ನು ಚಲನೆಯಲ್ಲಿ ಇಡುತ್ತದೆ",
                        "panel5": "ಹಂಚಿಕೊಂಡ ಚಲನಶೀಲತೆ (ಐಪಿಟಿ) ಉದಯ",
                        "panel6": "ಅಸಂಪರ್ಕಿತರನ್ನು ಸಂಪರ್ಕಿಸುವುದು",
                        "panel7": "ಅಂತರವನ್ನು ಕಡಿಮೆ ಮಾಡುವುದು",
                        "panel8": "ಉದ್ಯೋಗಗಳನ್ನು ಹತ್ತಿರಕ್ಕೆ ತರುವುದು",
                        "panel9": "ಬೆಂಗಳೂರಿನಲ್ಲಿ ರಸ್ತೆ ಸುರಕ್ಷತೆಯ ಸ್ಥಿತಿ – 0೧",
                        "panel10": "ಬೆಂಗಳೂರಿನಲ್ಲಿ ರಸ್ತೆ ಸುರಕ್ಷತೆಯ ಸ್ಥಿತಿ"

                    },
                    "govtPanels": "ಸರ್ಕಾರದ ಸಂಸ್ಥೆಗಳು",
                    "govtDepartments": "ಸರ್ಕಾರಿ ವಿಭಾಗಗಳು",
                    "govtDescriptions": {
                        "bbmp": "ಬಿಬಿಎಂಪಿ - ಬೃಹತ್ ಬೆಂಗಳೂರು ಮಹಾನಗರ ಪಾಲಿಕೆ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ನಗರಾಭಿವೃದ್ಧಿ ಯೋಜನೆಗಳು.",
                        "bmrcl": "ಬಿಎಮ್‌ಆರ್‌ಸಿಎಲ್ - ಬೆಂಗಳೂರು ಮೆಟ್ರೋ ರೈಲು ನಿಗಮ ಲಿಮಿಟೆಡ್ ಮೆಟ್ರೋ ವಿಸ್ತರಣೆ ಯೋಜನೆಗಳು ಮತ್ತು ಸಂಪರ್ಕತೆ.",
                        "btp": "ಬಿಟಿಪಿ - ಬೆಂಗಳೂರು ಟ್ರಾಫಿಕ್ ಪೊಲೀಸ್ ಸಂಚಾರ ನಿರ್ವಹಣೆ ಮತ್ತು ರಸ್ತೆ ಸುರಕ್ಷತಾ ಕಾರ್ಯಕ್ರಮಗಳು.",
                        "dult": "ಡುಲ್ಟ್ - ನಗರ ಭೂ ಸಾರಿಗೆ ನಿರ್ದೇಶನಾಲಯದ ಸ್ಥಿರ ಸಂಚಾರ ಪರಿಹಾರಗಳು.",
                        "kridge": "ಕ್ರೈಡ್ - ಕರ್ನಾಟಕ ರಸ್ತೆ ಮೂಲಸೌಕರ್ಯ ಅಭಿವೃದ್ಧಿ ನಿಗಮದ ರಸ್ತೆ ಅಭಿವೃದ್ಧಿ ಯೋಜನೆಗಳು."
                    },
                    "govtPanel1": "ಬಿಬಿಎಂಟಿ",
                    "govtPanel2": "ಬಿಎಂಆರ್​ಸಿಎಲ್",
                    "govtPanel3": "ಬಿಟಿಪಿ",
                    "govtPanel4": "ಡಿಯುಎಲ್‌ಟಿ",
                    "govtPanel5": "ಕೆಆರ್‌ಐಡಿಇ",
                    "partnersPanels": "ಪಾಲುದಾರ ಸಂಸ್ಥೆಗಳು",
                    "partnerOrganizations": "ಪಾಲುದಾರ ಸಂಸ್ಥೆಗಳು",
                    "partnersPanel1": "ಅಲ್ಲಿ ಸೇರೋಣ",
                    "partnersPanel2": "ಎಪಿಡಿ ಇಂಡಿಯಾ ಮತ್ತು ಎಚ್‌ಎಸ್‌ಆರ್ ಸಿಟಿಜನ್ ಫೋರಂ ಮತ್ತು ಎಚ್‌ಎಸ್‌ಆರ್ ಸೈಕ್ಲಿಸ್ಟ್‌ಸ್ ಗುಂಪು",
                    "partnersPanel3": "ಬೆಂಗಳೂರು ರಾಜಕೀಯ ಕ್ರಿಯಾ ಸಮಿತಿ (ಬಿ.ಪ್ಯಾಕ್)",
                    "partnersPanel4": "ಬೆಂಗಳೂರು ನಡಿಗೆಗಳು ಮತ್ತು ರಾಮಯ್ಯ ನಿರ್ವಹಣಾ ಸಂಸ್ಥೆ",
                    "partnersPanel5": "ಬೆಂಗಳೂರು ಅಪಾರ್ಟ್‌ಮೆಂಟ್ ಫೆಡರೇಶನ್",
                    "partnersPanel6": "ಬೆಂಗಾವಾಕ್",
                    "partnersPanel7": "ಬಿ.ಎಂ.ಎಸ್ ಆರ್ಕಿಟೆಕ್ಚರ್ ಕಾಲೇಜು",
                    "partnersPanel8": "ಕಾಂಪಾರ್ಟ್‌ಮೆಂಟ್ S4",
                    "partnersPanel9": "ಸಿಸ್ಟೆಪ್",
                    "partnersPanel10": "ದಯಾನಂದ ಸಾಗರ್ ಆರ್ಕಿಟೆಕ್ಚರ್ ಕಾಲೇಜು ಮತ್ತು ಐಐಎಸ್‌ಸಿ ಸಿಸ್ಟಪ್",
                    "partnersPanel11": "ಎನೇಬಲ್ ಇಂಡಿಯಾ",
                    "partnersPanel12": "ಎವ್ರಿಡೇ ಸಿಟಿ ಲ್ಯಾಬ್",
                    "partnersPanel13": "ಐಐಎಸ್‌ಸಿ ಐಎಸ್‌ಟಿ ಲ್ಯಾಬ್",
                    "partnersPanel14": "ಇಂಡಿಯಾ ರೈಜಿಂಗ್ ಟ್ರಸ್ಟ್",
                    "partnersPanel15": "ಜನ ಅರ್ಭನ್ ಸ್ಪೇಸ್",
                    "partnersPanel16": "ಎಂ.ಓ.ಡಿ ಫೌಂಡೇಶನ್",
                    "partnersPanel17": "ಮೂವ್‌ಇನ್‌ಸಿಂಕ್",
                    "partnersPanel18": "ನಮ್ಮ ಯಾತ್ರಿ",
                    "partnersPanel19": "ಆರ್‌ವಿ ಆರ್ಕಿಟೆಕ್ಚರ್ ಕಾಲೇಜು",
                    "partnersPanel20": "ಸೆನ್ಸಿಂಗ್ ಲೋಕಲ್",
                    "partnersPanel21": "ಅರ್ಭನ್ ಮಾರ್ಫ್",
                    "partnersPanel22": "ಐಟಿಡಿಪಿ",
                    "partnersDes1": "ಅಲ್ಲಿ ಸೇರೋಣ – ಬೆಂಗಳೂರುದಲ್ಲಿ ಶಾಶ್ವತ ಸಂಚಾರಕ್ಕಾಗಿ ಸಹಕಾರಾತ್ಮಕ ನಾಗರಿಕ ಚಳವಳಿ.",
                    "partnersDes2": "ಎಚ್‌ಎಸ್‌ಆರ್ ಸಿಟಿಜನ್ ಫೋರಂ ಮತ್ತು ಸೈಕ್ಲಿಸ್ಟ್‌ಸ್ ಗುಂಪು – ಸುರಕ್ಷಿತ ರಸ್ತೆಗಳಿಗಾಗಿ ಹೋರಾಡುತ್ತಿರುವ ಸ್ಥಳೀಯ ನಾಗರಿಕರು.",
                    "partnersDes3": "ಬಿ.ಪ್ಯಾಕ್ – ನಾಗರಿಕರ ತೊಡಗಿಸಿಕೊಂಡಿಕೆಗೆ ಬೆಂಗಳೂರಿನ ರಾಜಕೀಯ ಕ್ರಿಯಾ ಸಮಿತಿಯ ಮುಂದಾಳುತ್ವಗಳು.",
                    "partnersDes4": "ಬೆಂಗಳೂರು‌ನ ಪಾರಂಪರಿಕತೆ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಸ್ಥಳಗಳನ್ನು ಮರುಅನುಭವಿಸಲು ನಡೆಯುವ ಪ್ರವಾಸಗಳು.",
                    "partnersDes5": "ಬೆಂಗಳೂರು ಅಪಾರ್ಟ್‌ಮೆಂಟ್ ಫೆಡರೇಶನ್ - ಅಪಾರ್ಟ್‌ಮೆಂಟ್ ನಿವಾಸಿಗಳಿಗಾಗಿ ಚಾಲನೆ ಮತ್ತು ನಾಗರಿಕ ಸಮಸ್ಯೆಗಳನ್ನು ಸಮರ್ಥಿಸುವ ಸಂಸ್ಥೆ.",
                    "partnersDes6": "ಪಾದಚಾರಿಗಳ ಸ್ನೇಹಿ ರಸ್ತೆಗಳು ಮತ್ತು ಸಕ್ರಿಯ ಸಂಚಾರವನ್ನು ಉತ್ತೇಜಿಸುವುದು.",
                    "partnersDes7": "ಕಾಲೇಜು, ಬಸವನಗುಡಿ - ಸ್ಥಿರ ಸಂಚಾರದ ಬಗ್ಗೆ ಶೈಕ್ಷಣಿಕ ಕೊಡುಗೆಗಳು.",
                    "partnersDes8": "ಕಂಪಾರ್ಟ್‌ಮೆಂಟ್ S4 - ಉತ್ತಮ ಸಾರ್ವಜನಿಕ ಸಾರಿಗೆಗಾಗಿ ಹಕ್ಕುಗಳಿಗಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುವ ನಾಗರಿಕ ಗುಂಪು.",
                    "partnersDes9": "ನಗರ ಸಂಚಾರಿ ವ್ಯವಸ್ಥೆಯಲ್ಲಿ ವಿಜ್ಞಾನ, ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ನೀತಿ ಅಧ್ಯಯನ ಕೇಂದ್ರ.",
                    "partnersDes10": "ದಯಾನಂದ ಸಾಗರ್ ಆರ್ಕಿಟೆಕ್ಟ್ ಕಾಲೇಜು - ಸ್ಥಿರ ನಗರ ಸಾರಿಗೆ ಕುರಿತು ವಿದ್ಯಾರ್ಥಿ ಪ್ರಾಜೆಕ್ಟ್ಗಳು.",
                    "partnersDes11": "ಎನೇಬಲ್ ಇಂಡಿಯಾ - ಸುಲಭ ಸಂಚಾರದ ಮೂಲಕ ಅಂಗವಿಕಲ ವ್ಯಕ್ತಿಗಳನ್ನು ಶಕ್ತಿ ನೀಡುವುದು.",
                    "partnersDes12": "ಎವ್ರಿಡೇ ಸಿಟಿ ಲ್ಯಾಬ್ - ಸಮಾವೇಶಿ ನಗರ ಸ್ಥಳಗಳಿಗಾಗಿ ಸಂಶೋಧನೆ ಮತ್ತು ಹಸ್ತಕ್ಷೇಪಗಳು.",
                    "partnersDes13": "ಐಐಎಸ್‌ಸಿ ಐಎಸ್‌ಟಿ ಲ್ಯಾಬ್ - ಬುದ್ಧಿವಂತ, ಸ್ಥಿರ ಸಾರಿಗೆ ವ್ಯವಸ್ಥೆಗಳ ಕುರಿತು ಸಂಶೋಧನೆ.",
                    "partnersDes14": "ಇಂಡಿಯಾ ರೈಸಿಂಗ್ ಟ್ರಸ್ಟ್ - ಸ್ಥಿರ ನಗರಾಭಿವೃದ್ಧಿಗೆ ಸಮುದಾಯ ನೇತೃತ್ವದ ಉಪಕ್ರಮಗಳು.",
                    "partnersDes15": "ಜನ USP - ಜನರಿಗೆ ಸ್ನೇಹಿ ರಸ್ತೆಗಳ ನಿರ್ಮಾಣ ಮಾಡುವ ನಗರ ಸ್ಥಳ ಪ್ರಾಜೆಕ್ಟ್‌ಗಳು.",
                    "partnersDes16": "ಎಂ.ಓ.ಡಿ ಫೌಂಡೇಶನ್ - ಸಮಾನ ಪ್ರವೇಶವನ್ನು ಉತ್ತೇಜಿಸುವ ಚಾಲನೆ ಮತ್ತು ಅಭಿವೃದ್ಧಿ ಫೌಂಡೇಶನ್.",
                    "partnersDes17": "ಮೂವ್‌ಇನ್‌ಸಿಂಕ್ - ಕಂಪನಿಯ ಉದ್ಯೋಗಿಗಳ ಸಾರಿಗೆ ಪರಿಹಾರಗಳು.",
                    "partnersDes18": "ನಮ್ಮ ಯಾತ್ರಿ - ಆಟೋ ರಿಕ್ಷಾ ಸವಾರಿಗಳಿಗಾಗಿ ತೆರೆಯಲಾಗಿರುವ ಸಂಚಾರ ವೇದಿಕೆ.",
                    "partnersDes19": "ಆರ್.ವಿ. ಕಾಲೇಜು - ನಗರ ಸಂಚಾರಿ ಅಧ್ಯಯನಗಳಲ್ಲಿ ಶೈಕ್ಷಣಿಕ ಭಾಗೀಧಾರಕ.",
                    "partnersDes20": "ಸೆನ್ಸಿಂಗ್ ಲೋಕಲ್ - ಸ್ಥಿರ ಸಂಚಾರ ಹಸ್ತಕ್ಷೇಪಗಳನ್ನು ವಿನ್ಯಾಸಗೊಳಿಸುವ ಲಾಭರಹಿತ ಸಂಸ್ಥೆ.",
                    "partnersDes21": "ಅರ್ಭನ್ ಮಾರ್ಫ್ - ಪಾದಚಾರಿ ಮತ್ತು ಸೈಕ್ಲಿಂಗ್ ಮೂಲಸೌಕರ್ಯವನ್ನು ಉತ್ತೇಜಿಸುವ ನಗರ ವಿನ್ಯಾಸ ಲ್ಯಾಬ್.",
                    "partnersDes22": "ಐಟಿಡಿಪಿ - ಸಾರಿಗೆ ಮತ್ತು ಅಭಿವೃದ್ಧಿ ನೀತಿ ಸಂಸ್ಥೆ (Institute for Transportation and Development Policy) ಸಂಚಾರ ಪರಿಹಾರಗಳು."
                },
                "resources": {
                    "title": "ಸಂಪನ್ಮೂಲಗಳು",
                    "guidebook": {
                        "title": "ನಮ್ಮ ರಸ್ತೆ ಕೈಪಿಡಿ (ಮಾರ್ಗದರ್ಶಿ ಹೊತ್ತಿಗೆ); ಬೆಂಗಳೂರಿನಲ್ಲಿ ಸುರಕ್ಷಿತ ಸಮಾವೇಶಿ, ಮತ್ತು ಚೇತರಿಕೆಶೀಲ ರಸ್ತೆಗಳತ್ತ",
                        "description": "'ನಮ್ಮ ಬೆಂಗಳೂರು ಕೈಪಿಡಿ' ಸಚಿತ್ರ ಮಾರ್ಗದರ್ಶಿ ಮಾರ್ಗದರ್ಶಿ, ಇದು ರಸ್ತೆಗಳ ವಿನ್ಯಾಸ, ನಿರ್ಮಾಣ, ಕಾರ್ಯಾಚರಣೆ ಮತ್ತು ನಿರ್ವಹಣೆಯ ಅತ್ಯುತ್ತಮ ಪದ್ಧತಿಗಳನ್ನು ನಿರೂಪಿಸುತ್ತದೆ.  ಅದರ ಗುರಿ, ಬೆಂಗಳೂರಿನ 12,000 ಕಿ.ಮೀ. ಉದ್ದದ ರಸ್ತೆಜಾಲವನ್ನು ಸುಧಾರಿಸುವುದು ಮತ್ತು ಅವುಗಳನ್ನು ಸುದೀರ್ಘ ಕಾಲದ ಸುಸ್ಥಿರತೆ ಮತ್ತು ಚೇತರಿಕೆಶೀಲತೆಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ ಎಂಬುದನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳುವುದಾಗಿದೆ.",
                        "link": "ನಮ್ಮ ರಸ್ತೆ ಕೈಪಿಡಿ ಪಿಡಿಎಫ್"
                    },
                    "corridors": {
                        "title": "ಬೆಂಗಳೂರಿನ ಅಧಿಕ ದಟ್ಟಣೆಯ ವಲಯಗಳು ವಿನ್ಯಾಸ ಪ್ರಮಾಣಿತ ಕೈಪಿಡಿ",
                        "description": "ಅಧಿಕ ದಟ್ಟಣೆಯ ವಲಯ ಉಪಕ್ರಮವು ಬೆಂಗಳೂರಿನ ಅತ್ಯಧಿಕ ದಟ್ಟಣೆಯ ರಸ್ತೆಗಳನ್ನು ಹೆಚ್ಚು ಸುರಕ್ಷಿತ, ದಕ್ಷ ಮತ್ತು ಸಮಾವೇಶಿ ಚಲನಶೀಲ ವಲಯಗಳನ್ನಾಗಿ ಮರುಕಲ್ಪಿಸಿಕೊಳ್ಳುತ್ತದೆ. ಬಿಬಿಎಂಪಿ, ಡಿಯುಎಲ್‌ಟಿ ಸಹಯೋಗದೊಂದಿಗೆ ಮತ್ತು ಸಾರಿಗೆ ಯೋಜಕರಾದ ರತ್ನಾಕರ ರೆಡ್ಡಿಯವರ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ಮಾಯಾಪ್ರಾಕ್ಸಿಸ್ ರಚಿಸಿದ ಈ ಕೈಪಿಡಿಯು, ಇಂಜಿನಿಯರುಗಳು ಮತ್ತು ಸಮುದಾಯಗಳಿಗೆ ಚೇತರಿಕೆಶೀಲ ಮತ್ತು ಪ್ರಯೋಜನಕಾರಿ ಬೀದಿಗಳನ್ನು ಸೃಷ್ಟಿಸುವಲ್ಲಿ ಮಾದರಿಯಾದ ವಿನ್ಯಾಸದ ಪ್ರಮಾಣಕಗಳು ಮತ್ತು ಕಾರ್ಯತಂತ್ರಗಳ ಸಂಗ್ರಹವನ್ನು ನೀಡುತ್ತದೆ. ಈ ದಾಖಲೆಯನ್ನು ಬಹಳ ಬೇಗ ಲಭ್ಯಗೊಳಿಸಲಾಗುವುದು.",
                        "link": "ಹೈ ಡೆನ್ಸಿಟಿ ಬೆಂಗಳೂರು ಪಿಡಿಎಫ್"
                    },
                    "streets": {
                        "title": "ಬೀದಿಗಳು ಮತ್ತು ಛೇದಕಗಳು- ಶಿಶುಗಳು ಪುಟ್ಟ ಮಕ್ಕಳು ಮತ್ತು ಆರೈಕೆದಾತರಿಗಾಗಿ ಬೀದಿಗಳು ಮತ್ತು ಛೇದಕಗಳಿಗಾಗಿ ವಿನ್ಯಾಸ ತಾಳೆಪಟ್ಟಿ",
                        "description": "ಎಳೆಯ ಮಕ್ಕಳು ಅವರನ್ನು ನೋಡಿಕೊಳ್ಳುತ್ತಿರುವವರಿಗಾಗಿ ಸುರಕ್ಷಿತ ಮತ್ತು ಸಮಾವೇಶಿಯಾದಂಥ ಬೀದಿಗಳನ್ನು ಸೃಷ್ಟಿಸುವುದಕ್ಕಾಗಿ ಸಚಿತ್ರವಾದ ವಿನ್ಯಾಸ ತಾಳೆಪಟ್ಟಿ ಮತ್ತು ಮಾರ್ಗದರ್ಶಿ ದಾಖಲೆ. ಸರ್ಕಾರಿ ಏಜೆನ್ಸಿಗಳು ಮತ್ತು ನಗರ ವೃತ್ತಿಪರರನ್ನು ದೃಷ್ಟಿಯಲ್ಲಿಟ್ಟುಕೊಂಡು ರಚಿಸಲಾದ ಈ ಕೈಪಿಡಿಯು, ನಗರಗಳು ಮತ್ತು ನೆರೆಹೊರೆಗಳಲ್ಲಿ, ಮಕ್ಕಳು ಮತ್ತು ಅವರನ್ನು ನೋಡಿಕೊಳ್ಳುವರಿಗೆ ಸ್ನೇಹಿಯಾದಂಥ ಬೀದಿಗಳನ್ನು ಯೋಜಿಸುವಲ್ಲಿ ಕಾರ್ಯಾತ್ಮಕವಾದ ವಿನ್ಯಾಸ ಮಾದರಿಗಳನ್ನು ನೀಡುತ್ತದೆ.",
                        "link": "ಬೀದಿಗಳು ಮತ್ತು ಛೇದನ ಪಿಡಿಎಫ್"
                    },
                    "handbook": {
                        "title": "ನಮ್ಮ ರಸ್ತೆ ಕೈಪಿಡಿ - ಸಚಿತ್ರ ಕೈಹೊತ್ತಿಗೆ",
                        "english": "ಇಂಗ್ಲಿಷ್",
                        "kannada": "ಕನ್ನಡ",
                        "englishLink": "ನಮ್ಮ ರಸ್ತೆ ಕೈಪಿಡಿ ಇಂಗ್ಲಿಷ್ ಪಿಡಿಎಫ್",
                        "kannadaLink": "ನಮ್ಮ ರಸ್ತೆ ಕೈಪಿಡಿ ಕನ್ನಡ ಪಿಡಿಎಫ್",
                        "description": "ಎಂಒಡಿ ಫೌಂಡೇಷನ್, ತನ್ನ ಪ್ರಪ್ರಥಮ ಎನ್ನಬಹುದಾದ ಕೈಹೊತ್ತಿಗೆಯಲ್ಲಿ, ಕಾರ್ಯನೀತಿ ಮತ್ತು ಅನುಷ್ಠಾನ ಇವುಗಳ ನಡುವಿನ ಅಂತರವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ, ಬೆಂಗಳೂರಿನ ಬೀದಿಗಳನ್ನು ಪಾದಚಾರಿ-ಸ್ನೇಹಿ, ಸದುಪಯೋಗಿ ಮತ್ತು ಭವಿಷ್ಯಕ್ಕಾಗಿ ಸಜ್ಜಾಗಿರುವ ಹಾಗೆ ವಿನ್ಯಾಸಗೊಂಡಿರುವುದನ್ನು ಖಚಿತಡಿಸಿಕೊಳ್ಳುತ್ತದೆ. ಈ ಸಚಿತ್ರ ಪುಸ್ತಕವನ್ನು, ಬಿಬಿಎಂಪಿ/ಇಐಸಿ/ಪಿಆರ್/654/2024-25 dated 19/11/2024 ರ ಆದೇಶದಂತೆ ರಚಿಸಲಾದ ಎಸ್‌ಒಪಿ ಸಮಿತಿ ಅಡಿಯಲ್ಲಿ ನಡೆದ ಸರಣಿ ಚರ್ಚೆಗಳು ಮತ್ತು ಶಿಫಾರಸ್ಸುಗಳ ಮೇರೆಗೆ ತಯಾರಿಸಲಾದ 'ನಮ್ಮ ರಸ್ತೆ ಕೈಪಿಡಿ'ಯಿಂದ ಅಳವಡಿಸಿಕೊಳ್ಳಲಾಗಿದೆ."
                    },
                    "documentNote": "*ದಾಖಲೆಯನ್ನು ಶೀಘ್ರದಲ್ಲಿಯೇ ಲಭ್ಯಗೊಳಿಸಲಾಗುವುದು.*"
                },
                "gallery": {
                    "title": "ಗ್ಯಾಲರಿ",
                    "sections": {
                        "exhibition": {
                            "title": "ಪ್ರದರ್ಶನ",
                            "description": "ಬಸ್ಸುಗಳು, ಮೆಟ್ರೋ ಟ್ರೇನುಗಳು, ಮೋಟರೀಕೃತವಲ್ಲದ ಸಾರಿಗೆ ಮತ್ತು ಪಾದಚಾರಿ ಸೌಕರ್ಯಗಳಲ್ಲಿ ಸಾರ್ವಜನಿಕರು ದತ್ತಾಂಶ ಆಧಾರಿತ ನಿರೂಪಣೆಗಳು, ಅಂತರಕ್ರಿಯೆಯ ನಕ್ಷೆಗಳು, ಮತ್ತು ಸಚಿತ್ರ ಕಥಾನಿರೂಪಣೆಗಳ ಮೂಲಕ ಬೆಂಗಳೂರಿನ ಸಾರ್ವಜನಿಕ ಸಾರಿಗೆಯ ಪರಿವರ್ತನೆಯನ್ನು ಅನುಭವಿಸುತ್ತಿರುವುದು."
                        },
                        "schoolStudents": {
                            "title": "ಶಾಲಾ ವಿದ್ಯಾರ್ಥಿಗಳು",
                            "description": "ವಿದ್ಯಾರ್ಥಿಗಳು ನಮ್ಮ ರಸ್ತೆ 2025ರಲ್ಲಿ ತೊಡಗಿಕೊಂಡು ಭಾಗವಹಿಸುತ್ತಿರುವುದು."
                        },
                        "studentsActivity": {
                            "title": "ವಿದ್ಯಾರ್ಥಿಗಳ ಚಟುವಟಿಕೆ",
                            "description": "ವಿದ್ಯಾರ್ಥಿಗಳು, ಶಾಲೆಗಳಿಗೆ ಸುರಕ್ಷಿತ ಮತ್ತು ಸದುಪಯೋಗಿ ಮಾರ್ಗಗಳ ಕುರಿತು ತಮ್ಮ ವಿಚಾರಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳುತ್ತಿರುವುದು."
                        },
                        "presentations": {
                            "title": "ಪ್ರಸ್ತುತಿಗಳು",
                            "description": "ನಗರ ಪಾಲುದಾರರು ಮತ್ತು ಚಲನಶೀಲತೆ ಪರಿಣತರು ಬೆಂಗಳೂರಿನ ಪ್ರಸ್ತುತ ಮತ್ತು ಭವಿಷ್ಯದ ಚಲನಶೀಲತೆಯ ಪರಿದೃಶ್ಯದ ಕುರಿತು ಒಳನೋಟಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳುತ್ತಿರುವುದು."
                        },
                        "participation": {
                            "title": "ನಾಗರಿಕರ ಭಾಗವಹಿಸುವಿಕೆ",
                            "description": "ನಮ್ಮ ರಸ್ತೆ 2025ರಲ್ಲಿ ನಾಗರಿಕರ ಭಾಗವಹಿಸುವಿಕೆ, ನಗರಕ್ಕಾಗಿ ಭವಿಷ್ಯದ ಚಲನಶೀಲತೆಯ ಪರಿಹಾರವನ್ನು ರೂಪಿಸುವಲ್ಲಿ ಸಾಮೂಹಿಕ ಕಲಿಕೆ, ಅನ್ವೇಷಣೆ, ಮತ್ತು ಸಹಯೋಗಕ್ಕೆ ಕೊಡುಗೆಯನ್ನು ನೀಡುತ್ತಿರುವುದು."
                        }
                    }
                },
                "news": {
                    "title": "ಸುದ್ದಿ",
                    "articles": {
                        "article1": {
                            "title": "ನಮ್ಮ ರಸ್ತೆ ಪ್ಯಾನೆಲ್ ಲಿಂಗ-ಪ್ರತಿಕ್ರಿಯಾಶೀಲ ಸಂಚಾರಕ್ಕೆ ಕರೆ",
                            "description": "ಬೆಂಗಳೂರಿನಲ್ಲಿ ಸಮಾವೇಶಕ ಸಂಚಾರದ ಕುರಿತು ಡೆಕ್ಕನ್ ಹೆರಾಲ್ಡ್‌ನಿಂದ ಮುಖ್ಯಾಂಶಗಳು."
                        },
                        "article2": {
                            "title": "ನಮ್ಮ ರಸ್ತೆಯಲ್ಲಿ ಉತ್ತಮ ಪಾದಚಾರಿ ಮಾರ್ಗಗಳ ಅವಶ್ಯಕತೆ",
                            "description": "ನಡಿಗೆ ಯೋಗ್ಯತೆ ಮತ್ತು ನಗರ ವಿನ್ಯಾಸದ ಕುರಿತು ದಿ ಹಿಂದೂ ಕವರೇಜ್."
                        },
                        "article3": {
                            "title": "ಬೆಂಗಳೂರು ರಸ್ತೆಗಳು ಉಸಿರುಗಟ್ಟುತ್ತಿವೆ",
                            "description": "ರಸ್ತೆ ವಿಸ್ತರಣೆಯು ಪರಿಹಾರವಲ್ಲ ಎಂದು ಉನ್ನತ ಟ್ರಾಫಿಕ್ ಪೊಲೀಸ್ ಒತ್ತಿಹೇಳುತ್ತಾರೆ."
                        },
                        "article4": {
                            "title": "'ನಮ್ಮ ರಸ್ತೆ' ಮಾರ್ಗದರ್ಶಿ ಪುಸ್ತಕ",
                            "description": "ರಸ್ತೆ ಕೆಲಸಗಳ ಸಮನ್ವಯಕ್ಕಾಗಿ ಕೇಂದ್ರೀಕೃತ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಅನ್ನು ಮಾರ್ಗದರ್ಶಿ ಪುಸ್ತಕ ಶಿಫಾರಸು ಮಾಡುತ್ತದೆ."
                        },
                        "article5": {
                            "title": "ರಸ್ತೆಗಳಲ್ಲಿ ಏಕರೂಪತೆ ಕಾಯ್ದುಕೊಳ್ಳಿ: DCM",
                            "description": "ಬೆಂಗಳೂರಿನಲ್ಲಿ ಸ್ಥಿರ ರಸ್ತೆ ಮಾನದಂಡಗಳನ್ನು ಖಾತ್ರಿಪಡಿಸುವ ಕುರಿತು ಪ್ರಜಾವಾಣಿ ವರದಿಗಳು."
                        },
                        "article6": {
                            "title": "ರಸ್ತೆ ಅಭಿವೃದ್ಧಿ ಎಲ್ಲರ ಜವಾಬ್ದಾರಿ",
                            "description": "ವಿಜಯವಾಣಿಯಲ್ಲಿ ವರದಿಯಾದ ಮುಖ್ಯ ಕಾರ್ಯದರ್ಶಿ ಶಾಲಿನಿ ರಜನೀಶ್ ಅವರ ಹೇಳಿಕೆ."
                        },
                        "article7": {
                            "title": "BBMP ಕಾರ್ಯಾಗಾರ: ನಮ್ಮ ರಸ್ತೆ 2025",
                            "description": "ಸಾರಿಗೆ ವ್ಯವಸ್ಥೆಯ ಸುಧಾರಣೆಗಳ ಕುರಿತು OneIndia ಕನ್ನಡ ವರದಿಗಳು."
                        }
                    }
                },
                "partners": {
                    "title": "ಪಾಲುದಾರರು"
                },
                "footer": {
                    "accessibility": "ನಮ್ಮ ರಸ್ತೆ 2025 ಕಾರ್ಯಕ್ರಮವನ್ನು ಪ್ರವೇಶಿಸಬಹುದಾದಂತೆ ಮಾಡಲಾಗಿದೆ",
                    "and": "ಮತ್ತು",
                    "rightsReserved": "ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ © 2025",
                    "knowledgePartner": "ಜ್ಞಾನ ಭಾಗಿಧಾರ:"
                }
            }
        };
        this.currentLang = localStorage.getItem('selectedLanguage') || 'en';
        this.init();
    }

    async init() {
        this.setLanguage(this.currentLang);
        this.setupLanguageSelector();
        this.initializeWebsite();
    }

    setupLanguageSelector() {
        // Handle both desktop and mobile language selectors
        const langLinks = document.querySelectorAll('.lang-link');
        langLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const selectedLang = link.getAttribute('data-lang');
                this.setLanguage(selectedLang);
            });
        });
    }

    setLanguage(lang) {
        document.body.classList.add('lang-switching');

        this.currentLang = lang;
        localStorage.setItem('selectedLanguage', lang);

        // Update active language selector for both desktop and mobile
        document.querySelectorAll('.lang-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-lang') === lang) {
                link.classList.add('active');
            }
        });

        // Update document language attribute
        document.documentElement.lang = lang === 'kn' ? 'kn' : 'en';

        setTimeout(() => {
            this.translatePage();
            document.body.classList.remove('lang-switching');
        }, 100);
    }

    translatePage() {
        const translations = this.translations[this.currentLang] || this.translations['en'];

        // Handle normal text
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.getTranslation(translations, key);
            if (translation) {
                element.textContent = translation;
            }
        });

        // Handle keys like data-translate-key
        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.getAttribute('data-translate-key');
            const translation = this.getTranslation(translations, key);
            if (translation) {
                element.textContent = translation;
            }
        });

        // Handle arrays like data-translate-array (for speakers list)
        document.querySelectorAll('[data-translate-array]').forEach(element => {
            const key = element.getAttribute('data-translate-array');
            const translationArray = this.getTranslation(translations, key);
            if (translationArray && Array.isArray(translationArray)) {
                element.innerHTML = translationArray.map(text => `<p>${text}</p>`).join('');
            }
        });
    }

    getTranslation(translations, key) {
        return key.split('.').reduce((obj, k) => obj && obj[k], translations);
    }
}

// ScrollSpy Navigation System - Enhanced for better section detection
class ScrollSpyNavigation {
    constructor() {
        this.sections = [];
        this.navLinks = [];
        this.currentSection = 'home';
        this.currentSubSection = null;
        this.isScrolling = false;
        this.headerContainer = document.getElementById('header-container');
        this.init();
    }

    init() {
        this.setupSections();
        this.setupNavLinks();
        this.setupScrollSpy();
        this.setupSmoothScrolling();
        this.setupMobileMenu();
        this.setupStickyNavigation();
        this.initializeWebsite();
        this.setupPDFViewer();
        this.setupAnimations();
    }

    setupSections() {
        this.sections = [
            { id: 'home', element: document.getElementById('home') },
            { id: 'about', element: document.getElementById('about') },
            { id: 'convening', element: document.getElementById('convening') },
            { id: 'exhibition', element: document.getElementById('exhibition') },
            { id: 'resources', element: document.getElementById('resources') },
            { id: 'gallery', element: document.getElementById('gallery') },
            { id: 'news', element: document.getElementById('news') },
            { id: 'partners', element: document.getElementById('partners') }
        ].filter(section => section.element);
    }

    // Add sticky navigation functionality
    setupStickyNavigation() {
        const mainContent = document.querySelector('.main-content');
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollTop = mainContent.scrollTop;

                    // When user scrolls past the header (approx 200px), make navigation sticky
                    if (scrollTop > 100) {
                        this.headerContainer.classList.add('sticky');
                    } else {
                        this.headerContainer.classList.remove('sticky');
                    }

                    ticking = false;
                });
                ticking = true;
            }
        };

        if (mainContent) {
            mainContent.addEventListener('scroll', handleScroll, { passive: true });
        }
    }

    setupNavLinks() {
        this.navLinks = document.querySelectorAll('.nav-link');

        this.navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const sectionId = href.substring(1);
                    this.scrollToSection(sectionId);
                    this.closeMobileMenu();

                    // Special handling for exhibition section
                    if (sectionId === 'exhibition') {
                        setTimeout(() => {
                            this.activateExhibition('overview');
                        }, 500);
                    }
                });
            }
        });

        // Enhanced dropdown items handling
        document.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const section = item.getAttribute('data-section');
                const subsection = item.getAttribute('data-day') || item.getAttribute('data-exhibition');

                if (section && subsection) {
                    this.scrollToSectionWithSubsection(section, subsection);
                } else {
                    const href = item.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        this.scrollToSection(href.substring(1));
                    }
                }
                this.closeMobileMenu();
            });
        });
    }

    scrollToSectionWithSubsection(sectionId, subsectionId) {
        // First scroll to the main section
        this.scrollToSection(sectionId);

        // Then activate the subsection after a brief delay
        setTimeout(() => {
            if (sectionId === 'convening') {
                this.activateConveningDay(subsectionId);
            } else if (sectionId === 'exhibition') {
                this.activateExhibition(subsectionId);
            }
        }, 500);
    }

    activateConveningDay(dayId) {
        // Update day buttons
        document.querySelectorAll('.day-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-day') === dayId) {
                btn.classList.add('active');
            }
        });

        // Show target day content
        document.querySelectorAll('.day-content').forEach(content => {
            content.classList.remove('active');
        });
        const targetContent = document.getElementById(`convening-${dayId}`);
        if (targetContent) {
            targetContent.classList.add('active');
            this.initializeConveningDay(dayId);
        }

        // Update dropdown active state
        document.querySelectorAll('.dropdown-item').forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-day') === dayId) {
                item.classList.add('active');
            }
        });
    }

    activateExhibition(exhibitionId) {
        // Update exhibition buttons
        document.querySelectorAll('.exhibition-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-exhibition') === exhibitionId) {
                btn.classList.add('active');
            }
        });

        // Show target exhibition content
        document.querySelectorAll('.exhibition-content').forEach(content => {
            content.classList.remove('active');
        });
        const targetContent = document.getElementById(`exhibition-${exhibitionId}`);
        if (targetContent) {
            targetContent.classList.add('active');
            if (exhibitionId !== 'overview') {
                setTimeout(() => this.initializeExhibitionPanels(exhibitionId), 100);
            }
        }

        // Update dropdown active state
        document.querySelectorAll('.dropdown-item').forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-exhibition') === exhibitionId) {
                item.classList.add('active');
            }
        });
    }

    setupAnimations() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe animated elements
        const animatedElements = document.querySelectorAll('.stat-item, .about-content, .exhibition-subpage-content, .resource-item, .partner-logo-item');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

        // Logo click effects
        const logoItems = document.querySelectorAll('.logo-item');
        logoItems.forEach(item => {
            item.addEventListener('click', () => {
                item.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    item.style.transform = 'scale(1)';
                }, 150);
            });
        });
    }

    // Enhanced scroll spy with better section detection
    setupScrollSpy() {
        const options = {
            root: null,
            rootMargin: '0px 0px -30% 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            let mostVisibleEntry = null;
            let maxIntersectionRatio = 0;

            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
                    maxIntersectionRatio = entry.intersectionRatio;
                    mostVisibleEntry = entry;
                }
            });

            if (mostVisibleEntry) {
                this.updateActiveNavigation(mostVisibleEntry.target.id);
            }
        }, options);

        this.sections.forEach(section => {
            if (section.element) {
                observer.observe(section.element);
            }
        });

        // Enhanced scroll-to-bottom handling for Partners section
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.addEventListener('scroll', () => {
                const scrollTop = mainContent.scrollTop;
                const scrollHeight = mainContent.scrollHeight;
                const clientHeight = mainContent.clientHeight;

                // Check if we're near the bottom (within 50px)
                if (scrollTop + clientHeight >= scrollHeight - 50) {
                    this.updateActiveNavigation('partners');
                }
            });
        }
    }

    setupSmoothScrolling() {
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.section) {
                this.scrollToSection(e.state.section, false);
            }
        });

        const initialSection = window.location.hash ? window.location.hash.substring(1) : 'home';
        history.replaceState({ section: initialSection }, '', `#${initialSection}`);
    }

    scrollToSection(sectionId, updateHistory = true) {
        const section = this.sections.find(s => s.id === sectionId);
        if (!section || !section.element) return;

        this.isScrolling = true;

        section.element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        if (updateHistory) {
            history.pushState({ section: sectionId }, '', `#${sectionId}`);
        }

        this.updateActiveNavigation(sectionId);
        this.isScrolling = false;
    }

    updateActiveNavigation(sectionId) {
        if (this.currentSection === sectionId) return;

        this.currentSection = sectionId;

        // Update nav links
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    }

    setupMobileMenu() {
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const navigation = document.getElementById('navigation');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
        const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

        if (mobileMenuToggle) {
            mobileMenuToggle.addEventListener('click', () => {
                navigation.classList.toggle('active');
                mobileMenuOverlay.classList.toggle('active');
                document.body.classList.toggle('mobile-menu-open');
            });
        }

        if (mobileMenuOverlay) {
            mobileMenuOverlay.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        }

        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    const dropdown = toggle.closest('.dropdown');
                    dropdown.classList.toggle('active');
                }
            });
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                this.closeMobileMenu();
                document.querySelectorAll('.dropdown').forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });
    }

    closeMobileMenu() {
        const navigation = document.getElementById('navigation');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

        navigation.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.classList.remove('mobile-menu-open');
    }

    initializeWebsite() {
        this.setupCarousel();
        this.setupConveningFunctionality();
        this.setupExhibitionFunctionality();
        this.setupModals();
        this.setupGallery();
        this.setupPanelZoom();

        const initialSection = window.location.hash ? window.location.hash.substring(1) : 'home';
        setTimeout(() => {
            this.updateActiveNavigation(initialSection);
        }, 100);
    }

    // Enhanced carousel with improved video handling
   setupCarousel() {
    const carouselTrack = document.getElementById('carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const indicatorsContainer = document.querySelector('.carousel-indicators');

    if (!carouselTrack || !slides.length) return;

    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoSlideInterval;
    let videoTimer;

    // Build indicators dynamically
    indicatorsContainer.innerHTML = "";
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("span");
        dot.classList.add("indicator");
        dot.dataset.slide = i;
        if (i === 0) dot.classList.add("active");
        indicatorsContainer.appendChild(dot);

        dot.addEventListener("click", () => {
            currentSlide = i;
            updateCarousel();
            resetAutoSlide();
        });
    }

    const updateCarousel = () => {
        const translateX = -currentSlide * 100;
        carouselTrack.style.transform = `translateX(${translateX}%)`;

        document.querySelectorAll(".indicator").forEach((ind, idx) => {
            ind.classList.toggle("active", idx === currentSlide);
        });
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
        resetAutoSlide();
    };

    const video = document.getElementById("local-video");

    const resetAutoSlide = () => {
        clearInterval(autoSlideInterval);
        clearTimeout(videoTimer);

        const currentSlideElement = slides[currentSlide];
        const isVideo = currentSlideElement.getAttribute("data-slide-type") === "video";

        if (isVideo) {
            video.currentTime = 0;
            video.play();

            videoTimer = setTimeout(() => {
                currentSlide = 0;         // Jump to first slide after video ends
                updateCarousel();
                resetAutoSlide();
            }, (video.duration * 1000) || 30000);

        } else {
            autoSlideInterval = setInterval(nextSlide, 4000);
        }
    };

    updateCarousel();
    resetAutoSlide();




        // Reset video when returning to first slide
        const observer = new MutationObserver(() => {
            if (currentSlide === 0) {
                const videoPlaceholder = document.getElementById('video-placeholder');
                const iframe = document.getElementById('youtube-video');

                // Reset to placeholder view when returning to video slide
                if (videoPlaceholder && iframe) {
                    videoPlaceholder.style.display = 'block';
                    iframe.style.display = 'none';
                    iframe.src = '';
                }
            }
        });
        observer.observe(carouselTrack, { attributes: true, attributeFilter: ['style'] });
    }

    setupConveningFunctionality() {
        // Day navigation buttons
        document.querySelectorAll('.day-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const targetDay = btn.getAttribute('data-day');
                this.activateConveningDay(targetDay);
            });
        });

        // Initialize default day
        this.initializeConveningDay('day1');

        // Agenda item functionality
        document.querySelectorAll(".agenda-item").forEach(item => {
            item.addEventListener("click", () => {
                const parentDayContent = item.closest('.day-content');
                if (!parentDayContent) return;

                const dayAgendaItems = parentDayContent.querySelectorAll('.agenda-item');
                const dayVideoCards = parentDayContent.querySelectorAll('.video-card');

                dayAgendaItems.forEach(i => i.classList.remove("active"));
                dayVideoCards.forEach(v => v.classList.remove("active"));

                item.classList.add("active");
                const target = item.getAttribute("data-video");
                const targetElement = parentDayContent.querySelector(`#${target}`);
                if (targetElement) {
                    targetElement.classList.add("active");
                }
            });
        });

        // Video thumbnail functionality with improved loading
        document.querySelectorAll(".thumbnail").forEach(thumbnail => {
            thumbnail.addEventListener("click", function () {
                const youtubeURL = this.getAttribute("data-youtube");
                if (youtubeURL) {
                    // Create iframe with better error handling
                    const iframe = document.createElement('iframe');
                    iframe.className = 'agenda-video';
                    iframe.src = youtubeURL + (youtubeURL.includes('?') ? '&autoplay=1&rel=0' : '?autoplay=1&rel=0');
                    iframe.frameBorder = '0';
                    iframe.allow = 'autoplay; encrypted-media';
                    iframe.allowFullscreen = true;
                    iframe.style.cssText = 'width:100%; height:200px; border-radius:10px;';

                    // Add loading fallback
                    iframe.onerror = () => {
                        console.log('Video failed to load, showing fallback');
                        iframe.style.display = 'none';
                        const fallback = document.createElement('div');
                        fallback.innerHTML = `
                            <div style="width:100%; height:200px; background:#f0f0f0; display:flex; align-items:center; justify-content:center; border-radius:10px;">
                                <p>Video temporarily unavailable. <a href="${youtubeURL}" target="_blank">Watch on YouTube</a></p>
                            </div>
                        `;
                        this.parentNode.replaceChild(fallback, this);
                    };

                    this.outerHTML = iframe.outerHTML;
                }
            });
        });
    }

    initializeConveningDay(dayId) {
        const dayContent = document.getElementById(`convening-${dayId}`);
        if (!dayContent) return;

        const agendaItems = dayContent.querySelectorAll('.agenda-item');
        const videoCards = dayContent.querySelectorAll('.video-card');

        agendaItems.forEach(item => item.classList.remove('active'));
        videoCards.forEach(card => card.classList.remove('active'));

        if (agendaItems.length > 0 && videoCards.length > 0) {
            agendaItems[0].classList.add('active');
            videoCards[0].classList.add('active');
        }
    }

    setupExhibitionFunctionality() {
        // Exhibition navigation buttons
        document.querySelectorAll('.exhibition-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const targetExhibition = btn.getAttribute('data-exhibition');
                this.activateExhibition(targetExhibition);
            });
        });

        // Exhibition slideshow
        this.setupExhibitionSlideshow();

        // Panel functionality
        document.querySelectorAll('.exhibition-list a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                link.closest('.exhibition-list').querySelectorAll('a').forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                const panelContainer = link.closest('.standard-exhibition-container').querySelector('.standard-panel-preview-area');
                if (!panelContainer) return;

                panelContainer.querySelectorAll('.panel-item').forEach(p => {
                    p.style.display = 'none';
                });

                const panelId = link.getAttribute('data-panel-id');
                const panel = document.getElementById(panelId + '-content');
                if (panel) {
                    panel.style.display = 'flex';
                }
            });
        });
    }

    initializeExhibitionPanels(exhibitionType) {
        const content = document.getElementById(`exhibition-${exhibitionType}`);
        if (!content) return;

        const firstLink = content.querySelector('.exhibition-list a');
        if (firstLink) {
            firstLink.click();
        }
    }

    setupExhibitionSlideshow() {
        const track = document.getElementById("exhibition-track");
        const slides = document.querySelectorAll(".exhibition-slide");
        const indicatorsContainer = document.querySelector(".exhibition-indicators");

        if (!track || !slides.length) return;

        let currentIndex = 0;
        const totalSlides = slides.length;

        // Create indicators
        indicatorsContainer.innerHTML = "";
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement("span");
            indicator.classList.add("indicator");
            if (i === 0) indicator.classList.add("active");
            indicatorsContainer.appendChild(indicator);

            indicator.addEventListener("click", () => {
                currentIndex = i;
                updateSlide();
            });
        }

        const updateSlide = () => {
            const translateX = -currentIndex * 100;
            track.style.transform = `translateX(${translateX}%)`;

            document.querySelectorAll(".exhibition-indicators .indicator").forEach((ind, idx) => {
                ind.classList.toggle("active", idx === currentIndex);
            });
        };

        // Auto slide
        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlide();
        }, 4000);
    }

    setupPanelZoom() {
        this.zoomLevel = 1;
        this.isDragging = false;
        this.startX = 0;
        this.startY = 0;
        this.translateX = 0;
        this.translateY = 0;

        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('zoomable-panel')) {
                this.openZoomModal(e.target);
            }
        });

        const modal = document.getElementById('image-modal');
        const modalImg = document.getElementById('modal-image');
        const closeBtn = document.querySelector('.close-panel-modal');
        const zoomInBtn = document.getElementById('zoom-in');
        const zoomOutBtn = document.getElementById('zoom-out');
        const resetBtn = document.getElementById('reset-zoom');

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.closeZoomModal();
            });
        }

        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeZoomModal();
                }
            });
        }

        if (zoomInBtn) {
            zoomInBtn.addEventListener('click', () => {
                this.zoomLevel *= 1.2;
                this.updateZoom();
            });
        }

        if (zoomOutBtn) {
            zoomOutBtn.addEventListener('click', () => {
                this.zoomLevel /= 1.2;
                if (this.zoomLevel < 1) this.zoomLevel = 1;
                this.updateZoom();
            });
        }

        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                this.resetZoom();
            });
        }

        if (modalImg) {
            modalImg.addEventListener('wheel', (e) => {
                e.preventDefault();
                if (e.deltaY < 0) {
                    this.zoomLevel *= 1.1;
                } else {
                    this.zoomLevel /= 1.1;
                    if (this.zoomLevel < 1) this.zoomLevel = 1;
                }
                this.updateZoom();
            });

            modalImg.addEventListener('mousedown', (e) => {
                this.isDragging = true;
                this.startX = e.clientX - this.translateX;
                this.startY = e.clientY - this.translateY;
                modalImg.style.cursor = 'grabbing';
            });

            document.addEventListener('mousemove', (e) => {
                if (!this.isDragging) return;
                e.preventDefault();
                this.translateX = e.clientX - this.startX;
                this.translateY = e.clientY - this.startY;
                this.updateZoom();
            });

            document.addEventListener('mouseup', () => {
                this.isDragging = false;
                if (modalImg) {
                    modalImg.style.cursor = 'grab';
                }
            });
        }
    }

    openZoomModal(img) {
        const modal = document.getElementById('image-modal');
        const modalImg = document.getElementById('modal-image');

        if (modal && modalImg) {
            const fullSrc = img.getAttribute('data-full-src') || img.src;
            modalImg.src = fullSrc;
            modal.style.display = 'flex';
            this.resetZoom();
            document.body.style.overflow = 'hidden';
        }
    }

    closeZoomModal() {
        const modal = document.getElementById('image-modal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            this.resetZoom();
        }
    }

    updateZoom() {
        const modalImg = document.getElementById('modal-image');
        if (modalImg) {
            modalImg.style.transform = `scale(${this.zoomLevel}) translate(${this.translateX / this.zoomLevel}px, ${this.translateY / this.zoomLevel}px)`;
        }
    }

    resetZoom() {
        this.zoomLevel = 1;
        this.translateX = 0;
        this.translateY = 0;
        this.updateZoom();
    }

    setupModals() {
        // Additional modal functionality if needed
    }

    setupGallery() {
        const popup = document.getElementById("image-popup");
        const popupImage = document.getElementById("popup-image");
        const closePopup = document.querySelector(".close-popup");
        const triggers = document.querySelectorAll(".popup-trigger");

        triggers.forEach(img => {
            img.addEventListener("click", () => {
                popup.style.display = "flex";
                popupImage.src = img.src;
                document.body.style.overflow = 'hidden';
            });
        });

        if (closePopup) {
            closePopup.addEventListener("click", () => {
                popup.style.display = "none";
                document.body.style.overflow = '';
            });
        }

        if (popup) {
            popup.addEventListener("click", (e) => {
                if (e.target === popup) {
                    popup.style.display = "none";
                    document.body.style.overflow = '';
                }
            });
        }
    }

    // Enhanced PDF Viewer with better mobile support
    setupPDFViewer() {
        // PDF Viewer functionality
        window.openPDFViewer = (pdfUrl) => {
            const modal = document.getElementById('pdf-viewer-modal');
            const iframe = document.getElementById('pdf-iframe');
            const title = document.getElementById('pdf-title');

            if (modal && iframe) {
                // For mobile devices, try to open PDF in a new tab/window first
                if (window.innerWidth <= 768) {
                    try {
                        // Try to open PDF in new window for better mobile experience
                        const newWindow = window.open(pdfUrl, '_blank');
                        if (newWindow) {
                            return; // If successful, don't show modal
                        }
                    } catch (e) {
                        console.log('Failed to open in new window, using modal');
                    }
                }

                iframe.src = pdfUrl;
                if (title) {
                    const filename = pdfUrl.split('/').pop();
                    title.textContent = filename;
                }
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        };

        window.closePDFViewer = () => {
            const modal = document.getElementById('pdf-viewer-modal');
            const iframe = document.getElementById('pdf-iframe');

            if (iframe) iframe.src = '';
            if (modal) modal.style.display = 'none';
            document.body.style.overflow = '';
        };

        // Close PDF viewer when clicking outside
        const pdfModal = document.getElementById('pdf-viewer-modal');
        if (pdfModal) {
            pdfModal.addEventListener('click', (e) => {
                if (e.target === pdfModal) {
                    window.closePDFViewer();
                }
            });
        }
    }
}

// Navigation function for exhibition panels
function navigatePanels(direction, sectionType) {
    let panels = [];
    let activeIndex = -1;
    let listLinks = [];

    if (sectionType === 'moving-bengaluru') {
        panels = Array.from(document.querySelectorAll('#exhibition-moving .panel-item'));
        listLinks = Array.from(document.querySelectorAll('#exhibition-moving .exhibition-list a'));
    } else if (sectionType === 'govt-panel') {
        panels = Array.from(document.querySelectorAll('#exhibition-govt .panel-item'));
        listLinks = Array.from(document.querySelectorAll('#exhibition-govt .exhibition-list a'));
    } else if (sectionType === 'partners-panel') {
        panels = Array.from(document.querySelectorAll('#exhibition-partners .panel-item'));
        listLinks = Array.from(document.querySelectorAll('#exhibition-partners .exhibition-list a'));
    }

    if (panels.length === 0) return;

    activeIndex = panels.findIndex(panel => panel.style.display === 'flex' || panel.style.display === 'block');
    if (activeIndex === -1) activeIndex = 0;

    if (panels[activeIndex]) {
        panels[activeIndex].style.display = 'none';
    }
    if (listLinks[activeIndex]) {
        listLinks[activeIndex].classList.remove('active');
    }

    const newIndex = (activeIndex + direction + panels.length) % panels.length;

    if (panels[newIndex]) {
        panels[newIndex].style.display = 'flex';
    }
    if (listLinks[newIndex]) {
        listLinks[newIndex].classList.add('active');
        listLinks[newIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Translation System first
    const translationSystem = new TranslationSystem();

    // Initialize ScrollSpy Navigation System
    const scrollSpyNavigation = new ScrollSpyNavigation();

    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => {
            if (modal.style.display === 'flex' || modal.style.display === 'block') {
                modal.style.display = 'none';
            }
        });

        const imagePopup = document.getElementById('image-popup');
        if (imagePopup && imagePopup.style.display === 'flex') {
            imagePopup.style.display = 'none';
        }

        document.body.style.overflow = '';
    }
});

function openFlipBook(pdfPath) {
    document.getElementById("pdfViewer").src = pdfPath;
    document.getElementById("pdfModal").style.display = "block";
}

function closePdfModal() {
    document.getElementById("pdfModal").style.display = "none";
    document.getElementById("pdfViewer").src = "";
}

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

window.addEventListener('resize', debounce(() => {
    // Handle responsive adjustments
}, 250));