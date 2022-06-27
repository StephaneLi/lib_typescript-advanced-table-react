import React from 'react'
import ReactDOM from 'react-dom/client'
import TableData from './lib'
import { listLegend, listObject } from './listObjectTest'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <TableData listObjectsData={listObject} listLegend={listLegend}/>
  </React.StrictMode>
)