import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableData from '.';
import { listObject, listLegend } from '../listObjectTest'


describe('Component: Advance Table Data', () => {
  test('it should be render', () => {
    render(
      <TableData 
        listObjectsData={listObject} 
        listLegend={listLegend}
      />)
    
    const component = screen.getByTestId('table-data')
  
    expect(component).toBeInTheDocument()
  })

  test('it should be render empty data if no data found', () => {
    render(
      <TableData 
        listObjectsData={[]} 
        listLegend={listLegend}
      />)
    
    const emptyTable = screen.getByText('Database is empty')
  
    expect(emptyTable).toBeInTheDocument()
  })

  test('it can translate on french', () => {
    render(
      <TableData 
        listObjectsData={listObject} 
        listLegend={listLegend}
        lang={'FR-fr'}
      />)
    
    const emptyTable = screen.getByText('Recherche')
  
    expect(emptyTable).toBeInTheDocument()
  })

  test('it can translate on french with empty values', () => {
    render(
      <TableData 
        listObjectsData={[]} 
        listLegend={listLegend}
        lang={'FR-fr'}
      />)
    
    const emptyTable = screen.getByText('La base de données est vide')
  
    expect(emptyTable).toBeInTheDocument()
  })

  test('it can sort table ASC and DESC', () => {
    render(
      <TableData 
        listObjectsData={listObject} 
        listLegend={listLegend}
    />)

    const handleSortAsc = jest.fn()
    const handleSortDesc = jest.fn()
    
    const sortControllerAsc = screen.getAllByTestId('asc-controller')[0]
    const sortControllerDesc = screen.getAllByTestId('desc-controller')[0]
    const filterDate = screen.getByText('Start Date')
    const dataItem = screen.getAllByTestId('data-0-line')[0]  

    sortControllerAsc.addEventListener('click', handleSortAsc)
    sortControllerDesc.addEventListener('click', handleSortDesc)
    filterDate.addEventListener('click', handleSortAsc)

    expect(dataItem.innerHTML).toBe('Billy')

    fireEvent.click(sortControllerAsc)
    expect(dataItem.innerHTML).toBe('Anita')

    fireEvent.click(sortControllerDesc)
    expect(dataItem.innerHTML).toBe('Warren')

    fireEvent.click(filterDate)
    fireEvent.click(filterDate)

    expect(handleSortAsc).toHaveBeenCalledTimes(3)
    expect(handleSortDesc).toHaveBeenCalled()  
  })

  test('it can select number of entries', () => {
    render(
      <TableData 
        listObjectsData={listObject} 
        listLegend={listLegend}
    />)

    const handleSelect = jest.fn()

    const selectController = screen.getByTestId('select-entries')    
    selectController.addEventListener('change', handleSelect)
    
    fireEvent.click(screen.getByTestId('select-option'))   
    fireEvent.change(selectController) 

    expect(handleSelect).toHaveBeenCalled()
  })

  test('it can search Result', () => {
    render(
      <TableData 
        listObjectsData={listObject} 
        listLegend={listLegend}
    />)

    const handleSearch = jest.fn()

    const searchController = screen.getByTestId('search')    
    searchController.addEventListener('change', handleSearch)
    
    fireEvent.change(searchController, {target: {value: 'billy'}})

    const result = screen.getAllByTestId('data-0-line')

    expect(handleSearch).toHaveBeenCalledTimes(1)
    expect(result.length).toBe(1)

    fireEvent.change(searchController, {target: {value: ''}})
    expect(handleSearch).toHaveBeenCalledTimes(2)
  })

  test('it can display no result', () => {
    render(
      <TableData 
        listObjectsData={listObject} 
        listLegend={listLegend}
    />)

    const handleSearch = jest.fn()

    const searchController = screen.getByTestId('search')    
    searchController.addEventListener('change', handleSearch)
    
    fireEvent.change(searchController, {target: {value: 'fgdsdgsfdgdfgf'}})

    const noresult = screen.getByText('No matching records found')

    expect(handleSearch).toHaveBeenCalled()
    expect(noresult).toBeInTheDocument()
  })

  test('it can select page', () => {
    render(
      <TableData 
        listObjectsData={listObject} 
        listLegend={listLegend}
    />)

    const handlePrevious = jest.fn()
    const handleNext = jest.fn()
    const handleSelectPage = jest.fn()

    const nextPage = screen.getByTestId('next')
    const previousPage = screen.getByTestId('previous')    
    const selectPage = screen.getAllByTestId('select-page')    

    nextPage.addEventListener('click', handleNext)
    previousPage.addEventListener('click', handlePrevious)
    selectPage[2].addEventListener('click', handleSelectPage)

    fireEvent.click(nextPage)
    fireEvent.click(previousPage)
    fireEvent.click(selectPage[2])

    for (let index = 0; index < selectPage.length; index++) {
      fireEvent.click(nextPage)      
    }

    for (let index = 0; index < selectPage.length; index++) {
      fireEvent.click(previousPage)      
    }

    expect(handlePrevious).toHaveBeenCalled()
    expect(handleNext).toHaveBeenCalled()
    expect(handleSelectPage).toHaveBeenCalled()
  })
})