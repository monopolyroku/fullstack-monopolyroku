
const Header = (text) => {
  return (
    <div>
      <h1>{text.course}</h1>
    </div>
  )
}

const Content = ({
  part1,
  part2,
  part3,
  exercises1,
  exercises2,
  exercises3,
}) => {
  return (
    <div>
      <Part part = {part1} exercises = {exercises1} />
      <Part part = {part2} exercises = {exercises2} />
      <Part part = {part3} exercises = {exercises3} />
    </div>
  )
}

const Total = ({ex1, ex2, ex3}) => {
  return (
    <div>
      <p>No. of exercises: {ex1 + ex2 + ex3}</p>
    </div>
  )
}

const Part = ({part, exercises}) => {
  return (
    <div>
      <p> {part} {exercises} </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  } 
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
     <Header course = {course} />
     <Content 
      part1 = {part1.name} 
      part2 = {part2.name} 
      part3 = {part3.name}
      exercises1 = {part1.exercises}
      exercises2 = {part2.exercises}
      exercises3 = {part3.exercises} 
     />
     <Total 
     ex1 = {part1.exercises} 
     ex2 = {part2.exercises} 
     ex3 = {part3.exercises} 
     />
    </div>
  )
}


export default App;
