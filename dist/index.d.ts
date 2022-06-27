import { FunctionComponent } from 'react';
import './style.scss';
export declare type TableDataLegend = {
    label: string;
    entry: string;
};
export declare type TableDataFilterSort = {
    index: number;
    filter: TablDataFilterSortType;
};
export declare type TableDataProps = {
    listObjectsData: Object[];
    listLegend: TableDataLegend[];
    lang?: string;
    color?: string;
    textColor?: string;
    className?: string;
};
export declare enum TablDataFilterSortType {
    asc = 0,
    desc = 1,
    none = 2
}
declare const TableData: FunctionComponent<TableDataProps>;
export default TableData;
