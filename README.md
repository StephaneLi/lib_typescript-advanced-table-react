# Advance Table Data
![made-with-node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![made-with-react](https://img.shields.io/badge/-ReactJs-61DAFB?style=for-the-badge&logo=react&logoColor=FFFFFF) ![made-with-sass](	https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white) 
![GitHub repo size](https://img.shields.io/github/repo-size/StephaneLi/lib_typescript-advanced-table-react)
![GitHub jest](https://img.shields.io/badge/coverage-100%25-yellow)  

An advanced table data in typescript.  
From project 14 OpenClassrooms, react app developer  
  
[Projet 14 Openclassroms](https://github.com/StephaneLi/StephaneLieumont_14_03062022)

## Installation
```npm install @stephane1920/ts-advanced-table-react```  
or  
```yarn add @stephane1920/ts-advanced-table-react```

## Usage Advanced TableData
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import TableData from '@stephane1920/ts-advanced-table-react';

const SomeComponent = () => {
  return (
    <div>
      <TableData listObjectsData={listObject} listLegend={listLegend}/>
    </div>
  )
};
```

## Props
|Label|Type|Required|Default|
|:----|:----:|:------:|:----:|
|listObjectsData| Object[] | Yes | N/A |
|listLegend| TableDataLegend[] | Yes | N/A |
|lang| string | No | ```'EN-en'``` |
|color| string | No | ```'grey'``` |
|textColor| string | No | N/A |
|className| string | No | N/A |

## License  
ISC