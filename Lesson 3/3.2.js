studentData = () => {
    data = {
      name: "Antoino",
      grade: "20",
      age: 20
    };
  
    setTimeout(() => {
      console.log(`Name: ${data.name}`);
      console.log(`Grade: ${data.grade}`);
      console.log(`Age: ${data.age}`);
    }, 5000);
  };
  
  studentData();
  