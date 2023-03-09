/* eslint-disable max-classes-per-file */
import { PointOptionsObject } from 'highcharts';
import { Semester } from './Course';
/**
 * Each of the possible letter grades that can be given in a course
 */
export type LetterGrade = 'A' | 'A+' | 'A-' | 'B' | 'B+' | 'B-' | 'C' | 'C+' | 'C-' | 'D' | 'D+' | 'D-' | 'F';

export class Distribution {
    grades: {
        [key in LetterGrade]: number;
    };
}

export class AggregateDistribution extends Distribution {
    
}

export class SemesterDistribution extends Distribution {
    semester: Semester;
}

