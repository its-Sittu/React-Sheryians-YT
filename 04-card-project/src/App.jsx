import React from 'react'
import Card from './components/Card.jsx'

const App = () => {
  const jobs = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    company: "Google",
   
    post: "Frontend Developer",
    tag1: "Full-Time",
    tag2: "Junior",
    pay: "$40/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full-Time",
    tag2: "Senior",
    pay: "$60/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    company: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Part-Time",
    tag2: "Junior",
    pay: "$35/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    company: "Apple",
    datePosted: "10 days ago",
    post: "iOS Developer",
    tag1: "Full-Time",
    tag2: "Senior",
    pay: "$70/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    company: "Netflix",
    datePosted: "3 days ago",
    post: "UI Engineer",
    tag1: "Full-Time",
    tag2: "Mid-Level",
    pay: "$55/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    datePosted: "4 days ago",
    post: "Software Engineer",
    tag1: "Full-Time",
    tag2: "Junior",
    pay: "$50/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    company: "Adobe",
    datePosted: "1 month ago",
    post: "Frontend Engineer",
    tag1: "Part-Time",
    tag2: "Senior",
    pay: "$45/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    company: "Uber",
    datePosted: "2 days ago",
    post: "Full Stack Developer",
    tag1: "Full-Time",
    tag2: "Mid-Level",
    pay: "$65/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    company: "Airbnb",
    datePosted: "6 days ago",
    post: "React Native Dev",
    tag1: "Part-Time",
    tag2: "Junior",
    pay: "$42/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    company: "Tesla",
    datePosted: "3 weeks ago",
    post: "Software Developer",
    tag1: "Full-Time",
    tag2: "Senior",
    pay: "$75/hr",
    location: "Bangalore, India"
  }
];
  return (
    <div className='parent'>

     {jobs.map(function(elem , index){
       return <div key={index}> 
             <Card company ={elem.company} post ={elem.post} datePosted ={elem.datePosted} tag1 ={elem.tag1} tag2 ={elem.tag2} pay ={elem.pay} location ={elem.location} brandLogo ={elem.brandLogo} />;
       </div>
     })}

    </div>
  )
}

export default App