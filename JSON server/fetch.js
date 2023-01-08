const coursesAPI = "http://localhost:3000/courses";
fetch(coursesAPI)
  .then((res) => res.json())
  .then((course) => {
    console.log(course);
  });
