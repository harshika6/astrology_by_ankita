import React from 'react';
import './Services.css';

const Service=[
    {
      title:'Business Analysis',
      img:'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'  
    },
    {
        title:'Relationship Analysis',
        img:'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVsYXRpb25zaGlwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'  
      },
      {
        title:'Health and family',
        img:'https://media.istockphoto.com/photos/happy-family-under-fake-roof-in-living-room-picture-id1279995963?b=1&k=20&m=1279995963&s=170667a&w=0&h=hUOD1Y3EHQV9nD-kGTaD_5fwWJdTLv8veJhoACmrorA='  
      },
      {
        title:'Business Analysis',
        img:'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'  
      },
      {
        title:'Business Analysis',
        img:'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'  
      },
      {
        title:'Business Analysis',
        img:'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'  
      }

];

const Services = () => {
    return (
        <div className="mv4">
            <h2 className="helvetica f2" style={{color:'#1890ff'}}>OUR SERVICES</h2>
            <div className="services-grid">
                {
                    Service.map((item,i)=>{
                        return(
                            <div className="ma2 mv3" key={i}>
                                <a href=""><img  src={item.img} height='90%' width='90%' alt={item.title}/></a>
                                <p className="f4 helvetica pb3">{item.title}</p>
                                </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Services
