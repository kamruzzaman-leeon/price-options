import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';

const LineChart = () => {

    const studentMarks = [
        {
            id: 1,
            student: "Student 1",
            math_marks: 85,
            science_marks: 78,
            history_marks: 92
        },
        {
            id: 2,
            student: "Student 2",
            math_marks: 90,
            science_marks: 88,
            history_marks: 85
        },
        {
            id: 3,
            student: "Student 3",
            math_marks: 78,
            science_marks: 75,
            history_marks: 80
        },
        {
            id: 4,
            student: "Student 4",
            math_marks: 92,
            science_marks: 95,
            history_marks: 88
        },
        {
            id: 5,
            student: "Student 5",
            math_marks: 88,
            science_marks: 82,
            history_marks: 90
        },
        {
            id: 6,
            student: "Student 6",
            math_marks: 95,
            science_marks: 91,
            history_marks: 94
        },
        {
            id: 7,
            student: "Student 7",
            math_marks: 70,
            science_marks: 68,
            history_marks: 72
        },
        {
            id: 8,
            student: "Student 8",
            math_marks: 89,
            science_marks: 85,
            history_marks: 90
        },
        {
            id: 9,
            student: "Student 9",
            math_marks: 79,
            science_marks: 72,
            history_marks: 76
        },
        {
            id: 10,
            student: "Student 10",
            math_marks: 93,
            science_marks: 87,
            history_marks: 91
        }
    ];
    

    return (
        <div>
            <LChart width={800} height={400} data={studentMarks }>
                <XAxis dataKey="name"></XAxis>
                <YAxis ></YAxis>
            <Line dataKey="math_marks" stroke='red'></Line>
            <Line dataKey = "science_marks" stroke='green'></Line>
            <Line dataKey = "history_marks" stroke='blue'></Line>
            </LChart>
           
        </div>
    );
};

export default LineChart;