const courseAPI = "http://localhost:3000/courses";

function start() {
  getCourses(renderCourses);
  handleCreateForm();
}
start();

//todo: Functions

function getCourses(callback) {
  fetch(courseAPI)
    .then(function (res) {
      return res.json();
    })
    .then(callback)
    .catch((error) => {
      console.error("Error: ", error);
    });
}
function createCourses(data, callback) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  };
  fetch(courseAPI, options)
    .then(function (res) {
      res.json();
    })
    .then(callback)
    .catch((error) => {
      console.error("Error: ", error);
    });
}
function handleUpdateCourse(id) {
  const options = {
    method: "UPDATE",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  fetch(courseAPI + "/" + id, options)
    .then(function (res) {
      res.json();
    })
    .then(function () {
      const courseItem = document.querySelector(".course-item-" + id);
      if (courseItem) {
        courseItem.remove();
      }
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}
function handleDeleteCourse(id) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  fetch(courseAPI + "/" + id, options)
    .then(function (res) {
      res.json();
    })
    .then(function () {
      const courseItem = document.querySelector(".course-item-" + id);
      if (courseItem) {
        courseItem.remove();
      }
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}
function renderCourses(courses) {
  const listCourse = document.getElementById("list-courses");
  const htmls = courses.map(function (course) {
    return `
        <li class="course-item-${course.id}">
            <h3>${course.name}</h3>
            <p>${course.description}</p>
            <button class="btn-delete" onclick="handleDeleteCourse(${course.id})">Delete this course</button>
            <button class="update-delete" onclick="handleUpdateCourse(${course.id})">Update this course</button>
        </li>
    `;
  });
  listCourse.innerHTML = htmls.join("");
}
function handleCreateForm() {
  const createBtn = document.getElementById("add-course-btn");
  createBtn.onclick = function () {
    const name = document.querySelector('input[name="name"]').value;
    const description = document.querySelector('input[name="description"]').value;
    const formData = {
      name: name,
      description: description,
    };
    createCourses(formData, function () {
      getCourses(renderCourses);
    });
  };
}
