export const villageDirectory = {
	Executive: {
		Mayor: {
			name: "Mary Alexander-Basta",
			phone: "(630) 226-8412",
			email: "mayormary@bolingbrook.com",
			title: "Mayor",
			children: ["CoAdministrator1", "CoaAdministrator2"],
		},
		CoAdministrator1: {
			name: "Ken Teppel",
			phone: "(630) 226-8696",
			email: "kteppel@bolingbrook.com",
			title: "Co-Administrator",
		},
		CoAdministrator2: {
			name: "Lucas Rickelman",
			phone: "(630) 226-8805",
			email: "lrickelm@bolingbrook.com",
			title: "Co-Administrator",
		},
		Clerk: {
			name: "Martha 'Marti' M. Barton",
			phone: "(630) 226-8411",
			email: "mbarton@bolingbrook.com",
			title: "Village Clerk",
		},
		DeputyClerk: {
			name: "Crystal Tovar",
			phone: "(630) 226-8413",
			email: "Need Email",
			title: "Deputy Village Clerk",
		},
		AsstDeputyClerk: {
			name: "Sandy Clark",
			phone: "(630) 226-8423",
			email: "Need Email",
			title: "Assistant Deputy Village Clerk",
		},
		Attorney: {
			name: "(Odelson, Sterk, Murphey, Frazier, McGrath, LTD)",
			phone: "(630) 226-8412",
			title: "Village Attorney",
		},
		Trustees: {
			phone: "(630) 226-8416",
			email: "executive@bolingbrook.com",
			title: "Trustees",
		},
		FOIA: {
			name: "Fran Miller",
			phone: "(630) 226-8414",
			email: "foia@bolingbrook.com",
			title: "FOIA Officer",
		},
	},
};

export const organizationChart = [
	{
		name: "Executive Office",
		id: "ExecutiveOffice",
		level: 1,
		children: [
			{
				name: "Mary Alexander-Basta",
				id: "MaryAlexanderBasta",
				phone: "(630) 226-8412",
				email: "mayormary@bolingbrook.com",
				title: "Mayor",
				level: 1,
				children: [
					{
						name: "Martha 'Marti' M. Barton",
						id: "MartiBarton",
						phone: "(630) 226-8411",
						email: "mbarton@bolingbrook.com",
						title: "Village Clerk",
						level: 2,
						children: [
							{
								name: "Crystal Tovar",
								id: "CrystalTovar",
								phone: "(630) 226-8413",
								email: "Need Email",
								title: "Deputy Village Clerk",
								level: 3,
								children: [
									{
										name: "Sandy Clark",
										id: "SandyClark",
										phone: "(630) 226-8423",
										email: "Need Email",
										title: "Assistant Deputy Village Clerk",
										level: 4,
									},
								],
							},
						],
					},
					{
						name: "Ken Teppel",
						id: "KenTeppel",
						phone: "(630) 226-8696",
						email: "kteppel@bolingbrook.com",
						title: "Co-Administrator(Public Safety)",
						level: 2,
						children: [
							{
								level: 3,
								name: "Police Department",
								id: "PoliceDepartment",
							},
							{
								level: 3,
								name: "Fire Department",
								id: "FireDepartment",
							},
						],
					},
					{
						name: "Lucas Rickelman",
						id: "LucasRickelman",
						phone: "(630) 226-8805",
						email: "lrickelm@bolingbrook.com",
						title: "Co-Administrator",
						level: 2,
					},
					{
						name: "Fran Miller",
						id: "FranMiller",
						phone: "(630) 226-8414",
						email: "foia@bolingbrook.com",
						title: "FOIA Officer",
						level: 2,
						children: [
							{
								name: "Art McGuigan",
								id: "ArtMcGuigan",
								phone: "(630) 226-8582",
								email: "Need Email",
								title: "Assistant FOIA Officer",
								level: 3,
							},
						],
					},
				],
			},
		],
	},
	{
		name: "Fire Department",
		id: "FireDepartmentMain",
		level: 1,
		children: [
			{
				name: "Jeff LaJoie",
				id: "JeffLaJoie",
				phone: "(630) 226-8696",
				email: "Need Email",
				title: "Fire Chief",
				level: 1,
				children: [
					{
						name: "Fire Prevention Bureau",
						id: "FirePreventionBureau",
						level: 2,
						children: [
							{
								name: "Brian Gaston",
								id: "BrianGaston",
								phone: "(630) 226-8696",
								email: "Need Email",
								title: "Fire Marshall",
								level: 3,
								children: [
									{
										name: "Scott Bovyn",
										id: "ScottBovyn",
										phone: "(630) 226-8544",
										email: "Need Email",
										title: "Inspector",
										level: 4,
									},
									{
										name: "Nicole McGowan",
										id: "NicoleMcGowan",
										phone: "(630) 226-8544",
										email: "Need Email",
										title: "Inspector",
										level: 4,
									},
									{
										name: "Frank Ritter",
										id: "FrankRitter",
										phone: "(630) 226-8553",
										email: "Need Email",
										title: "Inspector",
										level: 4,
									},
								],
							},
						],
					},
					{
						name: "EMS",
						id: "EMS",
						level: 2,
						children: [
							{
								name: "Todd Nemeth",
								id: "ToddNemeth",
								phone: "(630) 226-8532",
								email: "Need Email",
								title: "Battalion Chief / EMS Director",
								level: 3,
							},
						],
					},
					{
						name: "Training",
						id: "Training",
						level: 2,
						children: [
							{
								name: "Troy Kirch",
								id: "TroyKirch",
								phone: "(630) 226-8531",
								email: "Need Email",
								title: "Battalion Chief / EMS Director",
								level: 3,
							},
						],
					},
					{
						name: "Battalion Chiefs",
						id: "BattalionChiefs",
						level: 2,
						children: [
							{
								name: "Ron Banda",
								id: "RonBanda",
								phone: "(630) 226-8524",
								email: "Need Email",
								title: "Battalion Chief",
								level: 3,
							},
							{
								name: "Joe Fagan",
								id: "JoeFagan",
								phone: "(630) 226-8523",
								email: "Need Email",
								title: "Battalion Chief",
								level: 3,
							},

							{
								name: "Dan Ross",
								id: "DanRoss",
								phone: "(630) 226-8525",
								email: "Need Email",
								title: "Battalion Chief",
								level: 3,
							},
						],
					},
				],
			},
		],
	},
];
