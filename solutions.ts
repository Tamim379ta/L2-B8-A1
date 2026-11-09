// problem 01 

const multiplyValue = (value: number, multiplier?: number): number => {
    if (multiplier === 0) {
        return value * multiplier;
    }
    return value * (multiplier || 2);
}

const result = multiplyValue(5, 5);
// console.log(result);





// problem 02 

const processInput = (input: any): any => {
    if (typeof input === "string") {
        return input.trim().toLowerCase();
    } else if (typeof input === "number") {
        return input * 10;
    } else {
        if (input === true) {
            return "Active";
        }
        return "Inactive";
    }
}

const result2 = processInput("dsighos idjfis ifi   ");

// console.log(result2);

// problem 03 

const formatCoordinate = ([latitude, longitude, locationName]: readonly [number, number, string]): string => {

    return `Location: ${locationName} (${latitude}, ${longitude})`
}

const result3 = formatCoordinate([23.81, 90.41, "Dhaka"]);

// console.log(result3);


// problem 04 

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);

}

const result4 = concatenateArrays(["a", "b"], ["c", "d"]);
// console.log(result4);

// problem 05 

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number) => {
    const popularCourses = courses.filter(course => course.students > minStudents && course.isPublished);
    return popularCourses;

}

const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];

const result5 = getPopularCourses(courses, 40);

// console.log(result5);


// problem 06 

const pluckValues = <T, k extends keyof T>(objectArray: T[], key: k): T[k][] => {
    return objectArray.map(obj => obj[key]);
}
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];

const result6 = pluckValues(users, "role");
// console.log(result6);


// problem 07 

class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }

}
const manager = new Manager("Alice", 50000, "Engineering");


// console.log(manager.getDetails()); 
// console.log(manager.getRoleInfo());


// problem 08 

const validateAgeAsync = (age: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
        } else {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
    });

}

// const result8 = await validateAgeAsync(10);
// console.log(result8);