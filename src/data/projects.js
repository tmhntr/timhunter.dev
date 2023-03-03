// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

// Create an enum class with the project categories.

export const ProjectCategory = {
	WebDevelopment: 'Web Development',
	DataScience: 'Data Science',
	MachineLearning: 'Machine Learning',
	ResearchPublication: 'Research Publication',
};
const projects = [
	{
		id: 1,
		title: 'George Mecha-Elle',
		category: ProjectCategory.WebDevelopment,
		img: require('@/assets/images/mBot.png.webp'),
		url: 'https://github.com/tmhntr/george-mecha-elle',
		technologies: ['C', 'Arduino', 'Robotics']
	},
	{
		id: 2,
		title: 'Health Records App',
		category: ProjectCategory.WebDevelopment,
		img: 'https://health.timhunter.dev/logo-variant.png',
		url: 'https://health.timhunter.dev',
		technologies: ['Vue', 'PostgreSQL', 'Docker']
	},
	{
		id: 3,
		title: 'Creating Tidy Datasets',
		category: ProjectCategory.DataScience,
		img: require('@/assets/images/ui-project-1.jpg'),
		url: 'https://github.com/tmhntr/getting_and_cleaning_data_assignment',
		technologies: ['Python', 'Pandas', 'Jupyter']
	},
	{
		id: 4,
		title: 'Budget Line Classifier',
		category: ProjectCategory.MachineLearning,
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Colored_neural_network.svg/250px-Colored_neural_network.svg.png',
		url: 'https://github.com/tmhntr/budget-line-classifier',
		technologies: ['Python', 'TensorFlow', 'Keras']
	},
	{
		id: 5,
		title: 'Pong Game',
		category: ProjectCategory.MachineLearning,
		img: require('@/assets/images/mobile-project-1.jpg'),
		url: 'https://github.com/tmhntr/pong-ml',
		technologies: ['Python', 'Pygame', 'Keras']
	},
	{
		id: 8,
		title: 'Capillary module haemodynamics and mechanisms of blood flow regulation in skeletal muscle capillary networks: Experimental and computational analysis',
		category: ProjectCategory.ResearchPublication,
		img: require('@/assets/images/capillary-fascicle.jpg'),
		url: 'https://doi.org/10.1113/JP282342',
		technologies: ['MATLAB', 'Excel']
	},
	{
		id: 9,
		title: 'Atrial Fibrillation and Anterior Cerebral Artery Absence Reduce Cerebral Perfusion: A De Novo Hemodynamic Model',
		category: ProjectCategory.ResearchPublication,
		img: require('@/assets/images/cow-variants.jpg'),
		url: 'https://doi.org/10.3390/app12031750',
		technologies: ['Python', 'C', 'Pandas']
	},
	{
		id: 10,
		title: 'Using a Human Circulation Mathematical Model to Simulate the Effects of Hemodialysis and Therapeutic Hypothermia',
		category: ProjectCategory.ResearchPublication,
		img: require('@/assets/images/timeseries-data.jpg'),
		url: 'https://doi.org/10.3390/app12010307',
		technologies: ['Python', 'C', 'Pandas']
	},
	{
		id: 11,
		title: 'The capillary fascicle in skeletal muscle: Structural and functional physiology of RBC distribution in capillary networks',
		category: ProjectCategory.ResearchPublication,
		img: require('@/assets/images/capillary-fascicle.jpg'),
		url: 'https://doi.org/10.1113/JP281172',
		technologies: ['MATLAB', 'Excel']
	}
];

export default projects;
