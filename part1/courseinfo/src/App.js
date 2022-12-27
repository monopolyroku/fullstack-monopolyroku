
const Header = (text) => {
  return (
    <div>
      <h1>{text.course}</h1>
    </div>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part =>(
        <Part name = {part.name} exercises = {part.exercises} />
      ))}
    </div>
  )
}

const Total = ({parts}) => {
  const exercises = parts.map(part => part.exercises);
  const totalExercises = exercises.reduce((total, ex) => total + ex, 0)
  return (
    <div>
      <p>No. of exercises: {totalExercises} </p>
    </div>
  )
}

const Part = ({name, exercises}) => {
  return (
    <div>
      <p> {name} {exercises} </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
     <Header course = {course} />
     <Content parts = {parts} />
     <Total parts = {parts} />
    </div>
  )
}


export default App;
