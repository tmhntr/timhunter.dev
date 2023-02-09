// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'George Mecha-Elle',
		category: 'Embedded System',
		img: require('@/assets/images/mBot.png.webp'),
		url: 'https://github.com/tmhntr/george-mecha-elle'
	},
	{
		id: 2,
		title: 'Health Records App',
		category: 'Web Application',
		img: require('@/assets/images/mobile-project-2.jpg'),
		url: 'https://github.com/tmhntr/health-records-app'
	},
	{
		id: 3,
		title: 'Creating Tidy Datasets',
		category: 'Data Science',
		img: require('@/assets/images/ui-project-1.jpg'),
		url: 'https://github.com/tmhntr/getting_and_cleaning_data_assignment'
	},
	{
		id: 4,
		title: 'Budget Line Classifier',
		category: 'Machine Learning',
		img: require('@/assets/images/ui-project-2.jpg'),
		url: 'https://github.com/tmhntr/budget-line-classifier'
	},
	{
		id: 5,
		title: 'Pong Game',
		category: 'Machine Learning',
		img: require('@/assets/images/mobile-project-1.jpg'),
		url: 'https://github.com/tmhntr/pong-ml'
	},
	{
		id: 6,
		title: 'NetworkX Clone',
		category: 'Software Development',
		img: require('@/assets/images/web-project-1.jpg'),
		url: 'https://github.com/tmhntr/networkx-clone'
	},
	{
		id: 7,
		title: 'Cerebral Hemodynamics Model',
		category: 'Computational Medicine',
		img: require('@/assets/images/cow-variants.jpg'),
		url: 'https://github.com/tmhntr/cerebral-0D-model'
	},
	{
		id: 8,
		title: 'Capillary module haemodynamics and mechanisms of blood flow regulation in skeletal muscle capillary networks: Experimental and computational analysis',
		category: 'Computational Medicine',
		img: require('@/assets/images/capillary-fascicle.jpg'),
		url: 'https://doi.org/10.1113/JP282342'
	},
	{
		id: 9,
		title: 'Atrial Fibrillation and Anterior Cerebral Artery Absence Reduce Cerebral Perfusion: A De Novo Hemodynamic Model',
		category: 'Computational Medicine',
		img: require('@/assets/images/cow-variants.jpg'),
		url: 'https://doi.org/10.3390/app12031750'
	},
	{
		id: 10,
		title: 'Using a Human Circulation Mathematical Model to Simulate the Effects of Hemodialysis and Therapeutic Hypothermia',
		category: 'Computational Medicine',
		img: require('@/assets/images/timeseries-data.jpg'),
		url: 'https://doi.org/10.3390/app12010307'
	},
	{
		id: 11,
		title: 'The capillary fascicle in skeletal muscle: Structural and functional physiology of RBC distribution in capillary networks',
		category: 'Computational Medicine',
		img: require('@/assets/images/capillary-fascicle.jpg'),
		url: 'https://doi.org/10.1113/JP281172'
	}
];

export default projects;
