import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactCard from "./ContactCard";

function App() {
  return (
      <div className="contacts">
        <ContactCard 
          contact = {{
            name: "▍Mr. Whiskerson",
            imgUrl: "http://placekitten.com/300/200",
            phone: "(212) 555-1234",
            email: 'mr.whiskaz@catnap.meow',
            vk: 'vk.com/Whiskerson'
          }}
        />
        <ContactCard
          contact = {{
            name: '▍Fluffykins',
            imgUrl: 'http://placekitten.com/400/200',
            phone: '(212) 555-2345',
            email: 'fluff@me.com',
            vk: 'vk.com/fluff'
          }}
        />
        <ContactCard 
          contact = {{
            name: '▍Felix',
            imgUrl: 'http://placekitten.com/300/200',
            phone: '(212) 555-4567',
            email: 'thecat@hotmail.com',
            vk: 'vk.com/thecat'           
          }}
        />
        <ContactCard 
          contact = {{
            name: '▍Destroyer',
            imgUrl: 'http://placekitten.com/400/300',
            phone: '(212) 555-3456',
            email: 'ofworlds@yahoo.com',
            vk: 'vk.com/ofworlds'
          }}
        />          
      </div>
  )
}

export default App