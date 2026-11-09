
const multiplyValue = (value: number, multiplier?: number): number => {
    if (multiplier === 0) {
        return value * multiplier;
    }
    return value * (multiplier || 2);
}



const processInput = (input: string | number | boolean): string | number => {
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


const formatCoordinate = ([latitude, longitude, locationName]: readonly [number, number, string]): string => {

    return `Location: ${locationName} (${latitude}, ${longitude})`
}



const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);

}


interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number) : Course[] => {
    const popularCourses = courses.filter(course => course.students >= minStudents && course.isPublished);
    return popularCourses;

}



const pluckValues = <T, k extends keyof T>(objectArray: T[], key: k): T[k][] => {
    return objectArray.map(obj => obj[key]);
}



class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails() : string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo() :string{
        return `Manager of ${this.department}: ${this.name}`;
    }

}



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
