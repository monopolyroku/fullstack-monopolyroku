
const Header = ({course}) => {
  return (
      <h1>{course}</h1>
  )
}

const Content = ({parts}) => {
  return (
    <p>
      {parts.map((part) =>(
        <Part name = {part.name} exercises = {part.exercises} />
      ))}
    </p>
  )
}

const Total = ({parts}) => {
  return (
      <p>No. of exercises: {parts.reduce((total,obj) => total + obj.exercises, 0)} </p>
  )
}

const Part = ({name, exercises}) => {
  return (
      <p> {name} {exercises} </p>
  )
}


const App = () => {
  const course = { 
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    }, 
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}

  return (
    <div>
     <Header course = {course.name} />
     <Content parts = {course.parts} />
     <Total parts = {course.parts} />
    </div>
  )
}


export default App;
