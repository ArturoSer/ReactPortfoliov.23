import React, { useState } from 'react';

export default function Portfolio() {
    const projects = [
        {
            id: 0,
            name: "Recipe Roulette",
            image: './images/reciperoulette.png',
            description: 'Recipe Roulette is a project me and my 3 fellow coders created to help if you were unable to think of something to eat with your significcant other or with a group of friends and also to help make an alcoholic drink!',
            link: 'https://arturoser.github.io/Recipe-Roulette/'
        },
    ];

    return (
        <div>
            <h1 className='text-center pt-3 pb-3'>Projects</h1>
            <div className='pl-5 pr-5 cards mx-auto'>
                {projects.map(project => (
                    <div className='card m-2 cssCard' key={project.id}>
                        <img src={project.image} className='card-img-top'/>
                        <div className='card-body d-flex flex-column justify-content-center'>
                            <h5 className='card-title text-center'>{project.name}</h5>
                            <p className='card-text text-center'>{project.description}</p>
                            <a href={project.link} target={project.link} classNamebtn btn-primary>CLICK ME</a>
            </div>
        </div>
                ))}
                </div>
                </div>
    );
                };