import React, { useEffect } from 'react'
import Table from './componets/Table'
import { getTable } from './redux/actions'
import {connect} from 'react-redux'
import Loader from './componets/Loader'

const App = ({getTable, loading, tableData}) => {
  useEffect(() => {
    getTable()
  }, [])

  return (
    <div className="App">
      {loading ? <Loader/> : <Table id='table' data={
        {
          name: 'Таблица учеников',
          description: 'Ученики проходящие обучение в 2022 году',
          structure: [
            {
              id: 'name',
              title: 'Имя'
            },
            {
              id: 'age',
              title: 'Возраст'
            },
            {
              id: 'gender',
              title: 'Пол'
            },
            {
              id: 'grade',
              title: 'Оценка'
            },
            {
              id: 'profession',
              title: 'Проффесия'
            },
          ],
          dataTable: tableData
        }
      } />}
    </div>
  );
}

const mapDispatchToProps = ({
  getTable: getTable
})

const mapStateToProps = state => ({
  loading: state.loading,
  tableData: state.data
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
