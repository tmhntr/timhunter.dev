// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

// Create an enum class with the project categories.

export const categories = [
	{
		id: 1,
		value: 'web',
		name: 'Web Application',
	},
	{
		id: 2,
		value: 'data-analysis',
		name: 'Data Analysis',
	},
	{
		id: 3,
		value: 'ml',
		name: 'Machine Learning',
	},
	{
		id: 4,
		value: 'comp-med',
		name: 'Computational Medicine',
	},
	{
		id: 5,
		value: 'game-dev',
		name: 'Game Development',
	}
];

export const ProjectCategory = {
	WebDevelopment: 'Web Development',
	DataScience: 'Data Science',
	MachineLearning: 'Machine Learning',
	ResearchPublication: 'Research Publication',
};
const projects = [
	{
		id: 1,
		rank: 2,
		title: 'George Mecha-Elle',
		category: ProjectCategory.WebDevelopment,
		img: require('@/assets/images/mBot.png.webp'),
		url: 'https://github.com/tmhntr/george-mecha-elle',
		technologies: ['C', 'Arduino', 'Robotics'],
		description: 'A collection of arduino sketches for a robot I built.'
	},
	{
		id: 2,
		rank: 1,
		title: 'Health Records App',
		category: ProjectCategory.WebDevelopment,
		img: 'https://health.timhunter.dev/logo-variant.png',
		url: 'https://health.timhunter.dev',
		technologies: ['Vue', 'PostgreSQL', 'Docker'],
		description: 'A web app for managing health records.'
	},
	{
		id: 3,
		rank: 2,
		title: 'Creating Tidy Datasets',
		category: ProjectCategory.DataScience,
		img: require('@/assets/images/ui-project-1.jpg'),
		url: 'https://github.com/tmhntr/getting_and_cleaning_data_assignment',
		technologies: ['Python', 'Pandas', 'Jupyter'],
		description: 'An exercise in creating tidy datasets. This project uses the UCI HAR Dataset, which is a collection of data from the accelerometers from the Samsung Galaxy S smartphone.'
	},
	{
		id: 4,
		rank: 3,
		title: 'Budget Line Classifier',
		category: ProjectCategory.MachineLearning,
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Colored_neural_network.svg/250px-Colored_neural_network.svg.png',
		url: 'https://github.com/tmhntr/budget-line-classifier',
		technologies: ['Python', 'TensorFlow', 'Keras'],
		description: 'A neural network that classifies budget line items based on the description into a number of categories.'
	},
	{
		id: 5,
		title: 'Pong Game',
		rank: 2,
		category: ProjectCategory.MachineLearning,
		img: require('@/assets/images/mobile-project-1.jpg'),
		url: 'https://github.com/tmhntr/pong-ml',
		technologies: ['Python', 'Pygame', 'Keras'],
		description: 'A pong game that uses a neural network as the opponent.'
	},
	{
		id: 8,
		rank: 3,
		title: 'Capillary module haemodynamics and mechanisms of blood flow regulation in skeletal muscle capillary networks: Experimental and computational analysis',
		category: ProjectCategory.ResearchPublication,
		img: require('@/assets/images/capillary-fascicle.jpg'),
		url: 'https://doi.org/10.1113/JP282342',
		technologies: ['MATLAB', 'Excel'],
		description: 'An investigation into the capillary fascicle in skeletal muscle. This project was done in collaboration with Dr. Asher Mendelsson and Dr. Dan Goldman at the University of Western Ontario.'
	},
	{
		id: 9,
		rank: 1,
		title: 'Atrial Fibrillation and Anterior Cerebral Artery Absence Reduce Cerebral Perfusion: A De Novo Hemodynamic Model',
		category: ProjectCategory.ResearchPublication,
		img: require('@/assets/images/cow-variants.jpg'),
		url: 'https://doi.org/10.3390/app12031750',
		technologies: ['Python', 'C', 'Pandas'],
		description: 'A study into the effects of atrial fibrillation and anterior cerebral artery absence on cerebral perfusion. This project was done in collaboration with Dr. Sanjay Kharche and Dr. Dan Goldman as a part of the PM3 Lab at the University of Western Ontario.'
	},
	{
		id: 10,
		rank: 2,
		title: 'Using a Human Circulation Mathematical Model to Simulate the Effects of Hemodialysis and Therapeutic Hypothermia',
		category: ProjectCategory.ResearchPublication,
		img: require('@/assets/images/timeseries-data.jpg'),
		url: 'https://doi.org/10.3390/app12010307',
		technologies: ['Python', 'C', 'Pandas'],
		description: 'A study into the effects of hemodialysis and therapeutic hypothermia on the human circulation. This project was done in collaboration with Dr. Sanjay Kharche and Mr. Jermiah Joseph as a part of the PM3 Lab at the University of Western Ontario.'
	},
	{
		id: 11,
		rank: 3,
		title: 'The capillary fascicle in skeletal muscle: Structural and functional physiology of RBC distribution in capillary networks',
		category: ProjectCategory.ResearchPublication,
		img: require('@/assets/images/capillary-fascicle.jpg'),
		url: 'https://doi.org/10.1113/JP281172',
		technologies: ['MATLAB', 'Excel'],
		description: 'An investigation into the capillary fascicle in skeletal muscle. This project was done in collaboration with Dr. Asher Mendelsson and Dr. Dan Goldman at the University of Western Ontario.'
	},
	{
		id: 12,
		rank: 1,
		title: "Kaggle Spaceship Competition",
		category: ProjectCategory.MachineLearning,
		img: require('@/assets/images/spaceship.jpg'),
		url: 'https://github.com/tmhntr/kaggle-spaceship',
		technologies: ['Python', 'Pandas', 'Sci-kit Learn'],
		description: 'My first kaggle competition. This project uses a dataset of passenger data and attempts to predict whether or not a passenger was safely teleported out of a damaged spaceship.'
	}
];

projects.sort((a, b) => a.rank - b.rank);

export default projects;
