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
			children: [
				{
					name: "Martha 'Marti' M. Barton",
					phone: "(630) 226-8411",
					email: "mbarton@bolingbrook.com",
					title: "Village Clerk",
					children: [
						{
							name: "Crystal Tovar",
							phone: "(630) 226-8413",
							email: "Need Email",
							title: "Deputy Village Clerk",
						},
					],
				},
				{
					name: "Ken Teppel",
					phone: "(630) 226-8696",
					email: "kteppel@bolingbrook.com",
					title: "Co-Administrator",
					width: 6,
					children: [
						
						{
							name: "Police Department",
							width: 4,
						},
					],
				},
				{
					name: "Lucas Rickelman",
					phone: "(630) 226-8805",
					email: "lrickelm@bolingbrook.com",
					title: "Co-Administrator",
				},
				{
					name: "Fran Miller",
					phone: "(630) 226-8414",
					email: "foia@bolingbrook.com",
					title: "FOIA Officer",
					children: [
						{
							name: "Art McGuigan",
							phone: "(630) 226-8582",
							email: "Need Email",
							title: "Assistant FOIA Officer",
						},
					],
				},
			],
		},
	],
    Fire: [
		{
            name: "Fire Department",
            children: [
                {
                    name: "Jeff LaJoie",
                    phone: "(630) 226-8696",
                    email: "Need Email",
                    title: "Fire Chief",
                    children: [
                        {
                            name: "Brian Gaston",
                            phone: "(630) 226-8696",
                            email: "Need Email",
                            title: "Fire Marshall",
                        },
                       
                    ],
                },
                {
                    name: "Police Department",
                },
            ],
        },
	],
};
