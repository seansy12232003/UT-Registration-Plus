import { AggregateDistribution } from 'src/shared/types/Distribution';

export async function queryAggregateDistribution(): Promise<AggregateDistribution> {}

export function fetchDistribution(db: Database, course: Course, semester?: Semester): any {
    let query = `select * from ${semester ? 'grades' : 'agg'}`;
    query += ` where dept like '%${course.department}%'`;

    let profName = course.instructors[0]?.fullName;
    if (profName) {
        query += ` and prof like '%${profName}%'`;
    }

    query += ` and course_nbr like '%${course.number}%'`;

    if (semester) {
        query += ` and sem like '%${semester.season} ${semester.year}%'`;
    }

    query += ' order by a1+a2+a3+b1+b2+b3+c1+c2+c3+d1+d2+d3+f desc';

    const res = db.exec(query);
    console.log('fetchDistribution -> res:', res);
}
