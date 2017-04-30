invasiveSpecies : [
		/* // TEMPLATE
		{
			"speciesID": null, // used for the database
			"commonName": "",	// laymen term for the pest like Termite, Kudzu, Fire Ants, etc
			"tagsArray": [""],	// nicknames and such
			"type": "",			// animal, plant, insect, fungus, parasite, etc
			"taxArray": [		// array of the taxonomy, starting with the highest level, domain, and ending with the lowest group this pest is part of
								// empty strings would not be displayed, or would indicate the pest is actually a group and not a single species
								// subgroups are named when there are levels between the common ones
					{"domain":""},
					{"kingdom": ""},
					{"subgroup":""},
					{"subgroup":""},
					{"subgroup":""},
					{"order":""},
					{"family":""},
					{"genus":""},
					{"species":""}  // many of our pests are actually a genus and not a single species, leave this empty if so
				],
			"subVarieties": [	// list subvarieties of this pest, if any. likely lists species and supspecies
					"variety1", // use both laymen terms and latin binomials as you see fit
					"variety2"
				],
			"description": ""	// grab the first paragraph from wikipedia :)
		}, */
		{
			"speciesID": null,
			"commonName": "Kudzu",
			"tagsArray": 
				["pest", "japanese arrowroot","kuzu","vine","weed","overgrowth"],
			"type": "plant",
			"taxArray": [
					{"domain":"Eukaryota"},
					{"kingdom": "Plantae"},
					{"subgroup":"Angiosperms"},
					{"subgroup":"Eudicots"},
					{"subgroup":"Rosids"},
					{"order":"Fabales"},
					{"family":"Fabaceae"},
					{"genus":"Pueraria"}
				],
			"subVarieties": [
					"montana",
					"edulis",
					"phaseoloides",
					"tuberosa"
				],
			"description": "Kudzu (kʊdzu, also called Japanese arrowroot) is a group of plants in the genus Pueraria, in the pea family Fabaceae, subfamily Faboideae. They are climbing, coiling, and trailing perennial vines native to much of eastern Asia, Southeast Asia, and some Pacific islands. The name is derived from the Japanese name for the plants, kuzu. Where these plants are naturalized, they can be invasive and are considered noxious weeds. The plant climbs over trees or shrubs and grows so rapidly that it kills them by heavy shading. The plant is edible, but often sprayed with herbicides."
		},
		
		{
			"speciesID": null,
			"commonName": "Python",
			"tagsArray": 
				["pest", "constrictor", "snake", "nonvenomous", "pet"],
			"type": "animal",
			"taxArray": [
					{"domain":"Eukaryota"},
					{"kingdom": "Animalia"},
					{"phylum":"Chordata"},
					{"class":"Reptilia"},
					{"order":"Squamata"},
					{"family":"Pythonidae"},
					{"genus":"Python"}
				],
			"subVarieties": [
					"anchietae",
					"bivittatus",
					"breitensteini",
					"brongersmai",
					"curtus",
					"kyaiktiyo",
					"molurus",
					"regius",
					"reticulatus",
					"sebae natalensis",
					"sebae sebae",
					"timoriensis",
					"europaeus"
				],
			"description": "Pythons are nonvenomous snakes found in Africa and Asia. Until recently, seven extant species were recognised. However, three subspecies have been promoted and a new species recognised. A member of this genus, P. reticulatus, is among the longest snake species and extant reptiles in the world."
		},
		
		{
			"speciesID": null,
			"commonName": "Termite",
			"tagsArray": 
				["pest", "bug", "wood", "colony"],
			"type": "insect",
			"taxArray": [
					{"domain":"Eukaryota"},
					{"kingdom": "Animalia"},
					{"phylum":"Arthropoda"},
					{"class":"Insecta"},
					{"order":"Blattodea"},
					{"infraorder":"Isoptera"},
				],
			"subVarieties": [
					"Cratomastotermitidae",
					"Mastotermitidae",
					"Termopsidae",
					"Archotermopsidae",
					"Hodotermitidae",
					"Stolotermitidae",
					"Kalotermitidae",
					"Archeorhinotermitidae",
					"Stylotermitidae",
					"Rhinotermitidae",
					"Serritermitidae",
					"Termitidae"
				],
			"description": "Termites are eusocial insects. Termites were once classified in a separate order from cockroaches, but recent phylogenetic studies indicate that they evolved from close ancestors of cockroaches during the Jurassic or Triassic. However, the first termites possibly emerged during the Permian or even the Carboniferous. About 3,106 species are currently described, with a few hundred more left to be described. Although these insects are often called \"white ants\", they are not ants."
		},
		
		{
			"speciesID": null,
			"commonName": "Fire Ant",
			"tagsArray": 
				["pest", "bug", "ant", "mounds", "colony", "sting", "ruins picnics"],
			"type": "insect",
			"taxArray": [
					{"domain":"Eukaryota"},
					{"kingdom": "Animalia"},
					{"phylum":"Arthropoda"},
					{"class":"Insecta"},
					{"order":"Hymenoptera"},
					{"family":"Formicidae"},
					{"subfamily": "Myrmicinae"},
					{"tribe": "Solenopsidini"},
					{"genus": "Solenopsis"}
				],
			"subVarieties": [
					"daguerrei",
					"fugax",
					"invicta",
					"molesta",
					"richteri",
					"saevissima",
					"silvestrii",
					"solenopsidis",
					"xyloni"
				],
			"description": "Fire ant is the common name for several species of ants in the genus Solenopsis. They are, however, only a minority in the genus, which includes over 200 species of Solenopsis worldwide. Solenopsis are stinging ants and most of their common names reflect this, for example, ginger ants and tropical fire ants. Many species also are called red ants because of their light brown color, though species of ants in many other genera are similarly named for similar reasons."
		},
		
		{
			"speciesID": null,
			"commonName": "Crab Grass",
			"tagsArray": 
				["pest", "grass", "weed", "finger-grass", "fonio"],
			"type": "plant",
			"taxArray": [
					{"domain":"Eukaryota"},
					{"kingdom": "Plantae"},
					{"subgroup":"Angiosperms"},
					{"subgroup":"Monocots"},
					{"subgroup":"Commelinids"},
					{"order":"Poales"},
					{"family":"Poaceae"},
					{"subfamily":"Panicoideae"},
					{"tribe":"Paniceae"},
					{"genus":"Digitaria"}
				],
			"subVarieties": [
					"californica",
					"ciliaris",
					"ammophila",
					"compacta"
				],
			"description": "Digitaria is a genus of plants in the grass family native to tropical and warm temperate regions. They are slender monocotyledonous annual and perennial lawn, pasture, and forage plants; some are often considered lawn pests. Digitus is the Latin word for \"finger\", and they are distinguished by the long, finger-like inflorescences they produce. Digitaria species occur in tropical, subtropical, and temperate regions of both hemispheres. Though some Digitaria species are weeds, others have uses, especially as food. The seeds, most notably those of fonio, can be toasted and ground into a flour, which can be used to make porridge or fermented to make beer. Fonio has been widely used as a staple crop in parts of Africa. It also has decent nutrient qualities as a forage for cattle."
		},
		
		{
			"speciesID": null,
			"commonName": "Johnson Grass",
			"tagsArray": 
				["pest", "grass", "weed", "sorghum halepense"],
			"type": "plant",
			"taxArray": [
					{"domain":"Eukaryota"},
					{"kingdom": "Plantae"},
					{"subgroup":"Angiosperms"},
					{"subgroup":"Monocots"},
					{"subgroup":"Commelinids"},
					{"order":"Poales"},
					{"family":"Poaceae"},
					{"genus":"Sorghum"},
					{"species":"halepense"}
				],
			"subVarieties": [],
			"description": "Johnson grass or Johnsongrass, Sorghum halepense, is a plant in the grass family, Poaceae, native to the Mediterranean region, but grows throughout Europe and the Middle East. The plant has been introduced to all continents except Antarctica, and most larger islands and archipelagos. It reproduces by rhizomes and seeds."
		},
		
		{
			"speciesID": null,
			"commonName": "Nerd",
			"tagsArray": 
				["pest", "geek", "dork", "engineer", "human"],
			"type": "animal",
			"taxArray": [
					{"domain":"Eukaryota"},
					{"kingdom": "Animalia"},
					{"phylum":"Chordata"},
					{"class":"Mammalia"},
					{"order":"Primates"},
					{"suborder":"Haplorhini"},
					{"family":"Hominidae"},
					{"genus":"Homo"},
					{"species":"sapiens"}
				],
			"subVarieties": [
					"geek",
					"dork",
					"engineer",
					"coder"
				],
			"description": "Nerds are everywhere! Ahhh!!!"
		},
	]