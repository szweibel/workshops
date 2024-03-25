---
title: How to Use DHRIFT
cover title: How to Use DHRIFT
description: "This workshop is designed for those who are interested in learning and teaching with DHRIFT, including those who want to create and customize their own DHRIFT site, those who would like to write their own workshops to publish with the DHRIFT platform, and for workshop facilitators and developers who would like to make use of DHRIFT’s minimal computing environment to create their own DH curricula." 

programming_language: 'python'

learning objectives:
    - Understand the basic features and affordances of the DHRIFT platform to create and manage curricula
    - Learn how to write and publish workshops with the DHRIFT platform
    - Learn how to create and customize a DHRIFT site
    - Learn how to clone and modify an existing DHRIFT instance
    - Learn how to use the wizard to create an institute based on your community’s needs

estimated time:
    - 3 hours

authors:
    - 'Zachary Lloyd'
    - 'Lisa Rhody'
    - 'Stephen Zweibel'
    - 'Leanne Fan'

facilitators:
    - 'Zachary Lloyd'
    - 'Lisa Rhody'
    - 'Stephen Zweibel'
    - 'Leanne Fan'
---

# Introduction

Welcome to DHRIFT!

During this workshop, you will learn about the DHRIFT platform, including its directory of available workshops, interactive features, and pedagogical philosophy. You will learn to build your own DHRIFT website for a mock institute, including modifying and customizing existing DHRIFT content. By creating DHRIFT sites, you will also learn about DHRIFT’s underlying technologies: how workshop markdown files are created, ingested, and displayed, how they are stored and processed through GitHub actions, and how institute leaders can use the platform's wizard to build an institute based on your community’s needs.

__Quick Links:__

This workshop is meant as a starting point for utilizing the DHRIFT platform. We also encourage you to visit and bookmark other resources, such as:

- The extended documentation and reference guides: TODO: link to docs

- The DHRIFT GitHub repository: TODO: link to GitHub 

- The DHRIFT informational website, which provides more information about the DHRIFT project, its team, and news/updates: TODO: link to website

## Workshop Overview

The general overview of the How to Use DHRIFT workshop is as follows:

**1) Introduction to DHRIFT**: We will introduce the DHRIFT platform, its directory of available workshops, interactive features, and pedagogical philosophy.

**2) Creating a DHRIFT Site**: You will learn to build your own DHRIFT website for a mock institute, including modifying and customizing existing DHRIFT content.

**3) Creating New Workshops**: You will learn how to create new workshops to publish with the DHRIFT platform.

**4) Cloning A DHRIFT Instance**: You will learn how to clone an existing DHRIFT instance and modify it to suit your needs.

# Introduction to DHRIFT

Let's begin by exploring what DHRIFT is and how you can use it to learn and teach digital humanities concepts. We'll cover the platform's features, underlying technologies, and how to navigate and interact with DHRIFT workshops.

## What is DHRIFT?

To start, DHRIFT is the platform you are currently using to access this workshop!

To be more specific, DHRIFT (Digital Humanities Resource Infrastructure for Teaching Technology) is an open educational resource (OER) and publication platform for DH workshops. Designed by humanities scholars for humanities scholars, DHRIFT provides a minimal computing, accessibility-aware, and interactive environment for teaching fundamental DH concepts. 

The platform includes a core set of more than 10 reviewed and tested workshops that have been developed and tested during two NEH-funded, week-long institutes, called the Digital Humanities Research Institutes (DHRI). Workshop topics range from learning the basics of Python, JavaScript, and R to conducting research through text analysis, data wrangling, and mapping. You can see the full list of workshops on the workshops page, accessible from the header menu or [by clicking here](https://app.dhrift.org/workshops/?instUser=dhri-curriculum&instRepo=dhrift-site-template&user=dhri-curriculum&repo=workshops). 

DHRIFT’s core workshops are accessible from and usable on our website; however, its flexible framework also allows users to build their own customized, static DHRIFT sites and tailor them for a variety of situations, such as teaching an undergraduate or graduate class, hosting a week-long skills institute, or organizing a series of professional development workshops. DHRIFT facilitates an instructor or organizations’ ability to reproduce, adapt, and publish DH workshops with interactive, learner-focused features.

## Underlying Technologies

DHRIFT is built on a few key technologies that make it easy to create, manage, and publish DH workshops. These technologies include:

- **GitHub**: DHRIFT uses GitHub to store and manage workshop content. Each workshop is stored in a GitHub repository, which contains the workshop’s markdown files, images, and other assets. GitHub also provides version control, so you can track changes to your workshop content over time. 

- **Markdown**: DHRIFT uses Markdown to write workshop content. Markdown is a lightweight markup language that is easy to read and write. It allows you to format text, add images, and create links without having to write HTML.

- **YAML**: DHRIFT uses YAML to configure workshop metadata. YAML is a human-readable data serialization format that is easy to read and write. It allows you to specify metadata such as the workshop title, author, and description.

- **React**: DHRIFT’s frontend is built with React, a JavaScript library for building user interfaces. React allows us to create interactive, responsive, and accessible interfaces for our workshops.

- **WebAssembly**: DHRIFT uses WebAssembly to run code snippets in the browser. WebAssembly is a low-level programming language that is designed to run fast and efficiently in web browsers. It allows us to incorporate code editors in a secure and sandboxed environment so that learners can immediately see the results of their code.

- **GitHub Actions**: DHRIFT uses GitHub Actions to automate the process of building and deploying workshop content. When you make changes to your workshop content, GitHub Actions will automatically build and deploy the changes to your DHRIFT site.

We'll be exploring these technologies in more detail throughout the workshop, so don't worry if you're not familiar with them yet!

## Using the DHRIFT Platform

If you have made it this far, you have already become familiarized with the standard DHRIFT workshop format. 

Each workshop has a front page that provides the workshop’s description, learning objectives, estimated time, authors, workshop facilitators, ethical considerations, and more. To begin a workshop, simply click the Start Workshop button under the main description or below the workshop's additional details.

TODO: image of workshop front page

Each individual workshop is divided into sections and subsections. You can navigate between sections by using the back and forward buttons in the navigation bar below each section. You can also access the table of contents for each workshop by clicking on the Workshop Overview button in the top-right corner of the screen.

TODO: image of workshop navigation bar

Workshop content can take many forms: text, images, code snippets, interactive exercises and quizzes, and more. Let's explore some of these features.

## Glossary

Often, DHRIFT workshops will use specific terms or concepts that may be unfamiliar. In this case, we provide a Key Terms section that defines and explains these terms, like so:

<Keywords>
- DHRIFT
DHRIFT (Digital Humanities Resource Infrastructure for Teaching Technology) is an open educational resource (OER) and publication platform for DH workshops. Designed by humanities scholars for humanities scholars, DHRIFT provides a minimal computing, accessibility-aware, and interactive environment for teaching fundamental DH concepts.

- Markdown
Each workshop is created using Markdown, a lightweight markup language that is easy to read and write. Markdown allows you to format text, add images, and create links without having to write HTML.
</Keywords>

 To access the full glossary of key terms for DHRIFT workshops, you can click on the Glossary button in the header section of the site.

 TODO: image of glossary

## Quizzes

DHRIFT workshops may also include quizzes to test your knowledge and understanding of the material. Quizzes can take many forms, including multiple-choice, true/false, and short answer questions.

A common quiz type you'll encounter is the multiple-choice question, which looks like this:

### Evaluation

What front-end technology does DHRIFT use to build its user interfaces?

<Quiz>
- React*
- Angular
- Vue
- Ember
</Quiz>

To answer a multiple-choice question, simply click on the answer you think is correct and hit the Check My Answer button. If you choose the correct answer, you will be congratulated by a Correct! message. If you choose the incorrect answer, you will prompted to try again.

## Challenges

DHRIFT workshops may also include challenges to test your skills and understanding of the material. Like quizzes, challenges can take many forms, including coding exercises, short answer questions, and more.

While we will always provide a solution to the challenge, we always encourage folks to try the challenge on their own first before looking at the solution. Therefore, we initially hide a solution and provide a button to reveal it, like so:

### Challenge

Where are DHRIFT workshops stored?

### Solution

<Secret>
In a GitHub repository.
</Secret>

To reveal the solution to the challenge, simply click on the Reveal button.

## Interactive Code Editors

DHRIFT workshops may also include interactive code editors that allow you to write and run code directly in your browser. These code editors are powered by WebAssembly, which allows you to run code snippets in a secure and sandboxed environment.

For demonstration purposes, this workshop includes a simple code editor that allows you to write and run Python code. To use the code editor, simply click the Open Code Editor button near the top-right corner of the screen. This will open the code editor in a slide-out panel on the right-hand side of the page.

Let's try running a simple Python code snippet. Click the Open Code Editor button to open the code editor, then type the following code into the editor window:

```python
print("Hello, world!")
```

When finished, click the Run button to execute the code. The output of the code will then be displayed in the shell.

You can also resize the width of the code editor by dragging the left-hand side frame of the editor window. This allows you to see more or less of the code editor, depending on your needs.

To close the code editor, simply click the Close Code Editor button at the top of the code editor panel.

## Additional Code Editors

DHRIFT workshops may also include code editors for other programming languages, such as JavaScript, R, and more. These code editors work in a similar way to the Python code editor, allowing you to write and run code directly in your browser. Currently, there is support for the following:

__Python and Jupyter Notebooks__

You have already seen the Python code editor in action. DHRIFT also supports Jupyter Notebooks, which allow you to write and run Python code in a notebook-style format. Jupyter Notebooks are commonly used for data analysis, visualization, and machine learning.

TODO: image of Jupyter Notebook editor

In addition, DHRIFT also provides a dedicated REPL (Read-Eval-Print Loop) for Python, which allows you to write and run simple Python commands.

TODO: image of Python REPL

__JavaScript__

DHRIFT supports JavaScript code editors, which allow you to write and run JavaScript code directly in your browser. JavaScript is a popular programming language for building interactive web applications and games.

TODO: image of JavaScript editor

__R__

DHRIFT supports R code editors, which allow you to write and run R code directly in your browser. R is a popular programming language for statistical computing and data analysis.

TODO: image of R editor

__Command Line__

DHRIFT supports command line code editors, which allow you to run shell commands directly in your browser. This is useful for working with files, directories, and other system-related tasks.

TODO: image of command line editor

__HTML and CSS__

DHRIFT supports HTML and CSS code editors, which allow you to write and style web pages directly in your browser. HTML is a markup language for creating web pages, while CSS is a stylesheet language for styling web pages.

TODO: image of HTML and CSS editor

## Downloading Workshop Materials

DHRIFT workshops may also include downloadable materials, such as PDFs, slides, datasets, and more. These materials are typically provided to help you follow along with the workshop content, complete exercises, and refer back to the material later.

TODO: image of downloadable materials

## Workshop Completion

Each workshop typically ends with a Theory to Practice section, which provides an opportunity to apply what you have learned in the workshop to a real-world scenario. This section may include case studies, projects, or reflection exercises.

TODO: image of Theory to Practice section

## Pedagogical Philosophy

### Overview

DHRIFT is designed with a learner-focused pedagogical philosophy that emphasizes accessibility, interactivity, and engagement. The platform is built to be inclusive and welcoming to learners of all backgrounds and skill levels, from beginners to experts. 

DHRIFT has been developed in conversation with an extensive community of DH graduate students, faculty, administrators, librarians, curators, and independent scholars, and our advisory board is drawn from a cross section of DH practitioners at institutional types such as community colleges, liberal arts colleges, regional colleges, and Historically Black Colleges and Universities (HBCUs).

### Workshops

Our curricula reflect the pedagogical values of humanities instruction, drawing from years of feedback and iteration. Both textual and visual in design, workshops accommodate different learning styles and are written with remote, in-person, and self-instruction modalities in mind. By embedding a technical interface in the curricula, DHRIFT streamlines the learning environment for both instructors and learners and reduces confusion caused by context switching. DHRIFT workshops emphasize practical coding through a humanities lens, providing learners tools to extend their skills into new domains relevant to their research.

DHRIFT workshops are also designed to be accessible to learners with disabilities. The platform is built with accessibility in mind, following best practices for web accessibility and usability. DHRIFT workshops are designed to be screen reader-friendly, keyboard navigable, and color contrast compliant.









