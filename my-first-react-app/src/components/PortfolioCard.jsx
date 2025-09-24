

const PortfolioCard = ({name, age, isStudent, hobbies}) => {
    //props are the values that we pass as parameters

  

  return (
    <div>
        <h1>Hello, my name is {name}</h1>
        <h2>I'm {age} years old</h2>
        {isStudent ? <h3>I'm a student</h3> : <h3>I'm not a student</h3>}

        <h3>Hobbies</h3>
        <ul>
            {hobbies.map((hobby, idx) => (
              <div key={idx}> 
                <li >{hobby}</li>
              </div>
            ))}
        </ul>
    </div>
  )
}

export default PortfolioCard

