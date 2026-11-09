const multiplyValue = (value: number, multiplier?: number): number => {
    if (multiplier === undefined) {
        const multipliedValue: number = value * 2;
        return multipliedValue;
    }

    return value * multiplier;
};

const processInput = (input: string | number | boolean): string | number => {
    if (typeof input === "string") {
        return input.trim().toLowerCase();
    } else if (typeof input === "number") {
        return input * 10;
    }

    return input ? "Active" : "Inactive";
};

const formatCoordinate = (
    [latitude, longitude, locationName]: readonly [number, number, string]
): string => {
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.reduce((acc, curr) => [...acc, ...curr], []);
};

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    const result: Course[] = [];

    for (const course of courses) {
        if (course.students >= minStudents && course.isPublished) {
            result.push(course);
        }
    }

    return result;
};

const pluckValues = <T, K extends keyof T>(array: T[], key: K): T[K][] => {
    return array.map(item => item[key]);
};

class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

const validateAgeAsync = async (age: number): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
            return;
        }

        setTimeout(() => {
            resolve("Access Granted");
        }, 1000);
    });
};

