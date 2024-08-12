import React from 'react'
import './App.css'
import Accordion from './components/accordion'


export default function App(){
  const accordionData = [
    {
      title: "Section 1",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel dignissimos nobis tempora voluptate. Provident temporibus optio maxime, enim id eveniet doloremque quasi officiis minima at delectus! Voluptates laborum in deleniti ipsam nobis laboriosam minus aut soluta ut nam. Illum quisquam placeat recusandae tenetur tempore pariatur sint ut, optio molestias est?"
    },
    {
      title: "Section 2",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel dignissimos nobis tempora voluptate. Provident temporibus optio maxime, enim id eveniet doloremque quasi officiis minima at delectus! Voluptates laborum in deleniti ipsam nobis laboriosam minus aut soluta ut nam. Illum quisquam placeat recusandae tenetur tempore pariatur sint ut, optio molestias est?"
    },
    {
      title: "Section 3",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel dignissimos nobis tempora voluptate. Provident temporibus optio maxime, enim id eveniet doloremque quasi officiis minima at delectus! Voluptates laborum in deleniti ipsam nobis laboriosam minus aut soluta ut nam. Illum quisquam placeat recusandae tenetur tempore pariatur sint ut, optio molestias est?"
    },
  ]
  return(
    <div>
      <Accordion sections={accordionData}/>
    </div>
  )
}
