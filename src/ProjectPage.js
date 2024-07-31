import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import todo from '../src/images/todo-list.jpg';
import book from '../src/images/bookhub.jpg';
import bike from '../src/images/bike-race.jpg';
import student from '../src/images/stu2.jpg';

const ProjectPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: '10px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const projects = [
    {
      title: 'To Do list',
      description: 'Developed a user-friendly To-Do List application using React. This application allows users to efficiently manage their daily tasks with ease. Key features include such as add and remove tasks, task completion and search tasks.',
      imageUrl: todo, // Adjust with the correct path
      projectUrl: 'https://salma-jiffry.github.io/Todo-list/',
    },
    {
      title: 'Book Management',
      description: 'Developed a Book Management website using HTML, CSS, and JavaScript. This platform allows users to manage their book collection efficiently. Features include such as add and display books also delete books.',
      imageUrl: book, // Adjust with the correct path
      projectUrl: 'https://salma-jiffry.github.io/book-hub/',
    },
    {
      title: 'Bike Race Event',
      description: 'Developed a Bike Race Event application using Java, integrating data structures and algorithms to effectively manage and simulate a bike race. Users can add up to 6 bikes, search for specific bikes, delete bikes, and insert details for each race round. The application also determines the race winner based on the round performance.',
      imageUrl: bike, // Adjust with the correct path
      projectUrl: 'https://github.com/Salma-Jiffry/bike_race.git',
    },
    {
      title: 'Student Registration',
      description: 'Developed a Student Registration Form application using C# and Windows Forms. The application consists of two forms: a login form and a registration form. The login form ensures secure access, while the registration form allows users to input various student details through multiple fields.',
      imageUrl: student, // Adjust with the correct path
      projectUrl: 'https://github.com/Salma-Jiffry/Student_registration.git',
    },
  ];

  return (
    <div className="projectpage" id="5">
      <h1 className="pro-heading">My Projects</h1>
      <div className="slider-container">
      <Slider {...settings}>
  {projects.map((project, index) => (
    <div key={index} className="project-slide">
      <div className="image-container">
        <img src={project.imageUrl} alt={project.title} className="project-image" />
        <div className="image-overlay">
          <h3 className="project-title">{project.title}</h3>
        </div>
      </div>
      <p>{project.description}</p>
      <div className="view-project-button-container">
        <button
          onClick={() => (window.location.href = project.projectUrl)}
          className="view-project-button"
        >
          Check it Out
        </button>
      </div>
    </div>
  ))}
</Slider>
      </div>
    </div>
  );
}

export default ProjectPage;