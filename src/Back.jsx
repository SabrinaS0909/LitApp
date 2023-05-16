import React, { useState } from "react";
import back from './img/backOfBook.png';

function Back() {
    return (
      <div>
        <img src={back} className="backOfBook" alt="The Back of Your Book" width="1334px" height="750px" />
      
          <div className="savedStoriesContainer">
              <div className="savedStories">
  
                </div>
              <button>Post</button>
              <button>Edit</button>
              <button>Delete</button>
              <button> (arrow left) </button>
              <button> (arrow right) </button>
          </div>
          <div className="postedStoriesContainer">
              <div className="postedStories">
          
              </div>
              <button> (arrow left) </button>
              <button> (arrow right) </button>
          </div>
        <button>(goes to inside)</button>
      </div>
    );
  };

export default Back
