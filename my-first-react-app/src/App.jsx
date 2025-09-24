import PortfolioCard from "./components/PortfolioCard"

function App() {
  //Where you write your JS
  //syntax for ternary operator
  // condition ? true return : false return

  // hello
  const users = [
    {name:"Dylan",
      age: 99,
      isStudent: false,
      hobbies: ['reading', 'coding', 'eating', 'sleeeping', 'repeating']
    },
    {name: "Robert",
      age: 43,
      isStudent: true,
      hobbies: ["coding", "gaming", "reading"]},
    {name: "Joey", age: 420, isStudent: false, hobbies: ['coding', 'partying']},
     {name:"Seberton",
      age: 300,
      isStudent: true,
      hobbies: ['none']},
      {name: 'Thu',
      age: 222,
      isStudent: true,
      hobbies: ['napping', 'eating', 'working out', 'volleyball']
    },
    {name: "Hemet",
    age: 101,
    isStudent:true,
    hobbies: ["soccer", "reading", "gaming", "cooking", "biking"]
     },
     { name: "Shannon",
   age: 99,
   isStudent: true,
   hobbies: ['reading', 'hiking', 'finding new music']}


  ]

  //passing properties into the component so those values can be used in that component
  return (
    <> 
      {
        users.map((user, idx) => (
          <PortfolioCard
            key={idx}
            name={user.name}
            age={user.age}
            isStudent={user.isStudent}
            hobbies={user.hobbies}
          />
        ))
      }
      
    </>

    
  )
}

export default App
