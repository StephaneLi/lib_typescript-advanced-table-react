import { TableDataLegend } from "./lib"
import mockData from './mock.data.json'

export const listLegend: TableDataLegend[] = [
  {label: 'First Name', entry: 'firstname'},
  {label: 'Last Name', entry: 'lastname'},
  {label: 'Start Date', entry: 'start'},
  {label: 'Department', entry: 'department'},
  {label: 'Date of Birth', entry: 'dateOfBirth'},
  {label: 'Street', entry: 'street'},
  {label: 'City', entry: 'city'},
  {label: 'State', entry: 'state'},
  {label: 'Zip Code', entry: 'zipcode'},
]

export const listObject = mockData.map((employee) => {
  return {
    ...employee,
    start: new Date(employee.start!),
    dateOfBirth: new Date(employee.dateOfBirth!) 
  }
})
