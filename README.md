```markdown
# Ananya Shah's Personal Webpage

This is a personal webpage for Ananya Shah, showcasing her experiences, skills, projects, and more. The webpage is built using React and includes a collapsible timeline for her resume, searchable experiences, and links to her social media and GitHub projects.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm start
```

The webpage will be available at `http://localhost:3000`.

## Usage

### Search Functionality

- The resume section includes a search bar that allows you to filter experiences based on the search term entered.

### Collapsible Timeline

- Each experience in the resume is collapsible. Click on a timeline node to expand or collapse the details.

## Components

### `src/App.js`

This is the main component that includes the layout of the webpage. It imports and uses the following components:

- `Header`
- `About`
- `Resume`
- `Skills`
- `Projects`
- `Education`
- `Contact`
- `Footer`

### `src/components/Header.js`

This component contains the header of the webpage, including the navigation links.

### `src/components/About.js`

This component contains the "About Me" section.

### `src/components/Resume.js`

This component contains the resume section with a collapsible timeline and search functionality.

### `src/components/Skills.js`

This component lists the skills.

### `src/components/Projects.js`

This component showcases the projects.

### `src/components/Education.js`

This component details the education history.

### `src/components/Contact.js`

This component contains the contact information and links to social media.

### `src/components/Footer.js`

This component contains the footer of the webpage.

## Styling

The styling is done using CSS files located in the `src/components` directory. Each component has its own CSS file.

### `src/components/Resume.css`

Contains the styles for the resume section, including the search bar, timeline, and collapsible details.

### Example CSS for `Resume.css`

```css
.search-bar {
    width: 100%;
    padding: 10px;
    margin: 20px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

.timeline {
    position: relative;
    padding: 20px 0;
    margin: 20px 0;
    list-style: none;
}

.timeline::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #50b3a2;
    left: 20px;
    margin-left: -1.5px;
}

.timeline-node {
    margin-bottom: 20px;
    position: relative;
    cursor: pointer;
}

.timeline-node .timeline-content {
    padding: 10px 20px;
    background: #e2e2e2;
    border-radius: 5px;
    position: relative;
    left: 40px;
    width: calc(100% - 60px);
}

.timeline-node .timeline-content h3 {
    margin: 0 0 10px;
}

.timeline-node .timeline-content p {
    margin: 0;
}

.timeline-node .timeline-details {
    padding: 10px 20px;
    background: #f4f4f4;
    border-left: 2px solid #50b3a2;
    position: relative;
    left: 40px;
    width: calc(100% - 60px);
}

.timeline-node .timeline-details ul {
    margin: 10px 0 0 0;
    padding: 0 0 0 20px;
    list-style: disc;
}

.timeline-node .timeline-details ul li {
    margin-bottom: 5px;
}

.timeline-node::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #50b3a2;
    top: 20px;
    left: 16px;
}
```

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any changes you would like to make.

1. Fork the repository.
2. Create your feature branch: `git checkout -b my-new-feature`.
3. Commit your changes: `git commit -am 'Add some feature'`.
4. Push to the branch: `git push origin my-new-feature`.
5. Submit a pull request.
