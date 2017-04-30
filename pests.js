invasiveSpecies : [
		/* // TEMPLATE
		{
			"commonName": "",	// laymen term for the pest like Termite, Kudzu, Fire Ants, etc
			"otherNames": [""],	// nicknames and such
			"type": "",			// animal, plant, insect, fungus, parasite, etc
			"taxArray": [		// array of the taxonomy, starting with the highest level, domain, and ending with the lowest group this pest is part of
								// empty strings would not be displayed, or would indicate the pest is actually a group and not a single species
					{"domain":""},
					{"kingdom": ""},
					{"subgroup":""},
					{"subgroup":""},
					{"subgroup":""},
					{"order":""},
					{"family":""},
					{"genus":""},
					{"species":""}
				],
			"subVarieties": [	// list subvarieties of this pest, if any
					"variety1",
					"variety2"
				],
			"description": ""	// grab the first paragraph from wikipedia
		}, */
		{
			"commonName": "Kudzu",
			"otherNames": 
				["japanese arrowroot","kuzu"],
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
			"description": "Kudzu (kʊdzu, also called Japanese arrowroot) is a group of plants in the genus Pueraria, in the pea family Fabaceae, subfamily Faboideae. They are climbing, coiling, and trailing perennial vines native to much of eastern Asia, Southeast Asia, and some Pacific islands.[2] The name is derived from the Japanese name for the plants, kuzu, which was written \"kudzu\" in historical romanizations. Where these plants are naturalized, they can be invasive and are considered noxious weeds. The plant climbs over trees or shrubs and grows so rapidly that it kills them by heavy shading. The plant is edible, but often sprayed with herbicides."
		},
	]