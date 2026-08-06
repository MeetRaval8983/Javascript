const course = {
    coursename: "JavaScript",
    price: 1000,
    duration: "3 months",
    instructor: "Hitesh Choudhary",
};

// course.instructor;

const {instructor} = course
console.log(instructor);

const {instructor: teacher} = course
console.log(teacher);

const navbar = ({company}) => {
    console.log(company);
}

navbar({company: "Google"})