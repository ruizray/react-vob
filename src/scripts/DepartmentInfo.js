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

export const organizationChart = {
	Executive: [
		{
			name: "Mary Alexander-Basta",
			phone: "(630) 226-8412",
			email: "mayormary@bolingbrook.com",
			title: "Mayor",
			level: 1,
			children: [
				{
					name: "Martha 'Marti' M. Barton",
					phone: "(630) 226-8411",
					email: "mbarton@bolingbrook.com",
					title: "Village Clerk",
					level: 2,
					children: [
						{
							name: "Crystal Tovar",
							phone: "(630) 226-8413",
							email: "Need Email",
							title: "Deputy Village Clerk",
							level: 3,
							children: [
								{
									name: "Sandy Clark",
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
					phone: "(630) 226-8696",
					email: "kteppel@bolingbrook.com",
					title: "Co-Administrator(Public Safety)",
					level: 2,
					children: [
						{
							level: 3,
							name: "Police Department",
						},
						{
							level: 3,
							name: "Fire Department",
						},
					],
				},
				{
					name: "Lucas Rickelman",
					phone: "(630) 226-8805",
					email: "lrickelm@bolingbrook.com",
					title: "Co-Administrator",
					level: 2,
				},
				{
					name: "Fran Miller",
					phone: "(630) 226-8414",
					email: "foia@bolingbrook.com",
					title: "FOIA Officer",
					level: 2,
					children: [
						{
							name: "Art McGuigan",
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
	Fire: [
		{
			name: "Fire Department",
			level: 1,
			children: [
				{
					name: "Jeff LaJoie",
					phone: "(630) 226-8696",
					email: "Need Email",
					title: "Fire Chief",
					level: 2,
					children: [
						{
							name: "Fire Prevention Bureau",
							level: 3,
							children: [
								{
									name: "Brian Gaston",
									phone: "(630) 226-8696",
									email: "Need Email",
									title: "Fire Marshall",
									level: 4,
									children: [
										{
											name: "Scott Bovyn",
											phone: "(630) 226-8544",
											email: "Need Email",
											title: "Inspector",
											level: 5,
										},
										{
											name: "Nicole McGowan",
											phone: "(630) 226-8544",
											email: "Need Email",
											title: "Inspector",
											level: 5,
										},
										{
											name: "Frank Ritter",
											phone: "(630) 226-8553",
											email: "Need Email",
											title: "Inspector",
											level: 5,
										},
									],
								},
							],
						},
						{
							name: "EMS",
							level: 3,
							children: [
								{
									name: "Todd Nemeth",
									phone: "(630) 226-8532",
									email: "Need Email",
									title: "Battalion Chief / EMS Director",
									level: 4,
								},
							],
						},
						{
							name: "Training",
							level: 3,
							children: [
								{
									name: "Troy Kirch",
									phone: "(630) 226-8531",
									email: "Need Email",
									title: "Battalion Chief / EMS Director",
									level: 4,
								},
							],
						},
						{
							name: "Battalion Chiefs",
							level: 3,
							children: [
								{
									name: "Ron Banda",
									phone: "(630) 226-8524",
									email: "Need Email",
									title: "Battalion Chief",
									level: 4,
								},
								{
									name: "Joe Fagan",
									phone: "(630) 226-8523",
									email: "Need Email",
									title: "Battalion Chief",
									level: 4,
								},

								{
									name: "Dan Ross",
									phone: "(630) 226-8525",
									email: "Need Email",
									title: "Battalion Chief",
									level: 4,
								},
							],
						},
					],
				},
			],
		},
	],
};
