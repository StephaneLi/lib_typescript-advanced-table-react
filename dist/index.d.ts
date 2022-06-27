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
export declare type TablDataProps = {
    listObjectsData: Object[];
    listLegend: TableDataLegend[];
    lang?: string;
    color?: string;
    textColor?: string;
};
export declare enum TablDataFilterSortType {
    asc = 0,
    desc = 1,
    none = 2
}
declare const TableData: FunctionComponent<TablDataProps>;
export default TableData;
