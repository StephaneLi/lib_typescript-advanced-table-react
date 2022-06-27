import React from 'react'
import ReactDOM from 'react-dom/client'
import TableData from './lib'
import { listLegend, listObject } from './listObjectTest'
import './style.css'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <div className='demo'>
      <TableData listObjectsData={listObject} listLegend={listLegend}/>
    </div>
  </React.StrictMode>
)